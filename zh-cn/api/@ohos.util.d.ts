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
 * @file 工具函数
 * @kit ArkTS
 */

/*** if arkts dynamic */
import collections from '@arkts.collections';
/*** endif */

/**
 * 该模块主要提供常用的工具函数，实现字符串编解码（[TextEncoder]{@link util.TextEncoder}，[TextDecoder]{@link util.TextDecoder}）、
 * 有理数运算（[RationalNumber<sup>8+</sup>]{@link util.RationalNumber}）、缓冲区管理（[LRUCache<sup>9+</sup>]{@link util.LRUCache}）、
 * 范围判断（[ScopeHelper<sup>9+</sup>]{@link util.ScopeHelper}）、
 * Base64编解码（[Base64Helper<sup>9+</sup>]{@link util.Base64Helper}）、
 * 内置对象类型检查（[types<sup>8+</sup>]{@link util.types}）、对方法进行插桩和替换（[Aspect<sup>11+</sup>]{@link util.Aspect}）、
 * 虚拟机维测能力（[ArkTSVM<sup>23+</sup>]{@link util.ArkTSVM}）、二进制流解码（[StringDecoder<sup>12+</sup>]{@link util.StringDecoder}）、
 * 堆内存阈值配置（[HeapMemoryThreshold<sup>24+</sup>]{@link util.HeapMemoryThreshold}）等功能。
 * 此外还提供获取对象Hash值（[util.getHash<sup>12+</sup>]{@link util.getHash}）、
 * 获取主线程栈追踪信息（[util.getMainThreadStackTrace<sup>20+</sup>]{@link util.getMainThreadStackTrace}）等工具函数。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare namespace util {
  /**
   * 通过式样化字符串对输入的内容按特定格式输出。
   *
   * @param { string } format - 式样化字符串。
   * @param { Object[] } args - 替换式样化字符串通配符的数据，此参数缺失时，默认返回第一个参数。
   * @returns { string } 按特定格式式样化后的字符串，包含根据格式说明符处理后的参数值。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead util.format
   */
  function printf(format: string, ...args: Object[]): string;

  /**
   * 使用样式化字符串将输入内容按特定格式输出，适用于日志输出、用户界面文本格式化等场景。
   *
   * | 格式说明符 | 说明 |
   * | --- | --- |
   * | %s | 将除Object、BigInt和-0之外的值转换为字符串。 |
   * | %d | 将除Symbol和BigInt之外的值作为十进制整数格式化输出。 |
   * | %i | 将字符串转换为十进制整数，不适用于BigInt和Symbol。 |
   * | %f | 将字符串转换为浮点数，不适用于BigInt和Symbol。 |
   * | %j | 将JavaScript对象序列化为JSON字符串。 |
   * | %o | 将JavaScript对象转换为字符串，不包含原型链信息。 |
   * | %O | 将JavaScript对象转换为字符串。 |
   * | %c | CSS样式占位符，仅在浏览器中有效，其他环境忽略。 |
   * | %% | 转义百分号。 |
   *
   * @param { string } format - 格式化字符串，可以包含零个或多个占位符，用于指定要插入的参数的位置和格式。
   * @param { Object[] } args - 替换format参数中占位符的数据，此参数缺失时，直接返回格式化字符串本身。
   * @returns { string } 格式化后的字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function format(format: string, ...args: Object[]): string;

  /**
   * 获取系统错误码的详细信息。
   *
   * @param { number } errno - 生成的错误码。
   * @returns { string } 错误码的详细信息。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead util.errnoToString
   */
  function getErrorString(errno: number): string;

  /**
   * 获取系统错误码对应的详细信息。适用于系统调用出错时将数字错误码转换为可读的描述信息，便于开发者快速定位和排查系统级错误，常用于错误日志记录和错误提示显示。
   *
   * | 错误码 | 信息 |
   * | --- | --- |
   * | -1 | operation not permitted |
   * | -2 | no such file or directory |
   * | -3 | no such process |
   * | -4 | interrupted system call |
   * | -5 | i/o error |
   * | -11 | resource temporarily unavailable |
   * | -12 | not enough memory |
   * | -13 | permission denied |
   * | -100 | network is down |
   *
   * @param { number } errno - 系统发生错误产生的错误码。
   * @returns { string } 错误码对应的详细信息，包含可读的错误描述文本，便于开发者定位问题。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function errnoToString(errno: number): string;

  /**
   * 对异步函数进行回调化处理，回调中第一个参数是拒绝原因（如果Promise已解决，则为null），第二个参数是已解决的值。
   *
   * > **说明：**
   * >
   * > 该接口要求参数original必须是异步函数类型。如果传入的参数不是异步函数，不会进行拦截，但是会输出错误信息：
   * > "callbackWrapper: The type of Parameter must be AsyncFunction"。
   * >
   * > 该接口用于将返回Promise的async函数转换为错误优先回调风格的函数，调用此接口返回的函数接收一个回调函数作为第二个入参，调用此方法时会先执行original函数。
   * > 当original的Promise返回resolve时，入参的回调函数的第一个参数为null，第二个参数为resolve的值。
   * > 当original的Promise返回reject时，入参的回调函数的第一个参数为错误对象，第二个参数为null。
   * >
   * > 由于此方法返回类型的声明为`(err: Object, value: Object) => void`，TypeScript编译器会按照该声明进行参数数量校验，
   * > 因此当original为无入参的函数时，此接口返回的函数第一个入参需传入一个无效的占位参数。
   * > 当original为多个入参的函数时，此接口返回的函数当前仅支持传入一个参数，可使用array等容器进行多个入参的传入调用（参照下方示例代码）。
   *
   * @param { Function } original - 异步函数，要求函数返回Promise对象。该异步函数的resolve值会作为回调的第二个参数传入，reject原因会作为回调的第一个参数传入。
   * @returns { function } 返回一个回调函数，该函数第一个参数 **err** 是拒绝原因（如果Promise已解决，则为null），第二个参数 **value** 是已解决的值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function callbackWrapper(original: Function): (err: Object, value: Object) => void;

  /**
   * 接收一个采用"错误优先"回调模式的函数，即以`(err, value) => callback`作为最后一个参数，并返回其Promise函数。
   * 适用于将旧版回调式异步API转换为Promise风格，以便使用async/await语法进行调用，从而简化异步代码编写。
   *
   * @param { function } original - 回调函数中第一个参数 **err** 是拒绝原因（如果Promise已解决，则为null），第二个参数 **value** 是已解决的值。
   * @returns { Function } 返回一个Promise函数，该Promise在原始回调函数成功执行时resolve为回调的value值，在原始回调函数执行出错时reject为错误对象。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function promisify(original: (err: Object, value: Object) => void): Function;

  /**
   * 接收一个使用错误优先回调模式的函数（即最后一个参数为 `(err, value) => callback`），并通过 promise 返回结果。
   *
   * @param { function } original - 采用错误优先回调模式的函数，第一个参数err是拒绝原因，第二个参数value是已解决的值。
   * @returns { Object } 错误优先风格（即最后一个参数为 (err, value) => ... ）的 promise。
   * @syscap SystemCapability.Utils.Lang
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead util.promisify
   */
  function promiseWrapper(original: (err: Object, value: Object) => void): Object;

  /**
   * 使用加密安全随机数生成器生成随机的RFC 4122版本4的string类型UUID。为了提升性能，此接口会默认使用缓存，即入参为true，
   * 最多可缓存128个随机的UUID。当缓存中128个UUID用尽后，会重新生成，以保证UUID的随机性。如需禁用缓存，请将入参设置为false。
   *
   * @param { boolean } [entropyCache] - 是否使用已缓存的UUID，true表示使用缓存的UUID以提升性能（最多缓存128个UUID，缓存用尽后会重新生成以保证随机性），
   *     false表示不使用缓存的UUID，默认true。
   * @returns { string } 表示此UUID的字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function generateRandomUUID(entropyCache?: boolean): string;

  /**
   * 使用加密安全随机数生成器生成随机的RFC 4122版本4的Uint8Array类型UUID。为了提升性能，此接口会默认使用缓存，即入参为true，
   * 最多可缓存128个随机的UUID。当缓存中128个UUID用尽后，会重新生成，以保证UUID的随机性。如需禁用缓存，请将入参设置为false。
   *
   * @param { boolean } [entropyCache] - 是否使用已缓存的UUID，true表示使用缓存的UUID以提升性能（最多缓存128个UUID，缓存用尽后会重新生成以保证随机性），
   * false表示不使用缓存的UUID，默认true。
   * @returns { Uint8Array } 表示此UUID的Uint8Array值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function generateRandomBinaryUUID(entropyCache?: boolean): Uint8Array;

  /**
   * 将generateRandomUUID生成的string类型UUID转换为[generateRandomBinaryUUID]{@link util.generateRandomBinaryUUID}生成的UUID，
   * 符合RFC 4122版本规范。
   *
   * @param { string } uuid - UUID字符串，必须符合RFC 4122版本规范。
   * @returns { Uint8Array } 返回表示此UUID的Uint8Array，如果解析失败，则抛出异常，错误码为10200002。
   * @throws { BusinessError } 10200002 - Invalid uuid string.
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  function parseUUID(uuid: string): Uint8Array;

  /**
   * 获取对象的哈希值。
   * 如果尚未获取过哈希值，则生成一个随机哈希值，保存到对象的 **hash** 字段中并返回。如果已经获取过哈希值，则返回保存在
   * **hash** 字段中的哈希值（同一对象返回相同的值）。
   *
   * @param { object } object - 要获取哈希值的对象。
   * @returns { number } 哈希值。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  function getHash(object: object): number;

  /**
   * 描述解码相关的选项，包含 **fatal** 和 **ignoreBOM**。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  interface TextDecoderOptions {
    /**
     * 是否显示致命错误。值为 **true** 表示显示致命错误，值为 **false** 表示相反的情况。默认值为 **false**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    fatal?: boolean;
    /**
     * 是否忽略 BOM。值为 **true** 表示忽略 BOM，值为 **false** 表示相反的情况。默认值为 **false**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    ignoreBOM?: boolean;
  }

  /**
   * 定义解码是否跟随数据块。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   */
  interface DecodeWithStreamOptions {
    /**
     * 是否允许后续的 **decodeWithStream()** 处理数据块。如果按块处理数据，请将此参数设置为 **true**。如果这是要处理的最后
     * 一个数据块或数据未分块，请将此参数设置为 **false**。默认值为 **false**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    stream?: boolean;
  }

  /**
   * 描述 **decodeToString** 方法在解码字节流时的行为参数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  interface DecodeToStringOptions {
    /**
     * 输入末尾出现的不完整字节序列是否需要追加在下次调用 **decodeToString** 的参数中处理。值为 **true** 表示不完整的字节
     * 序列会存储在内部缓存区直到下次调用该函数。如果值为 false，则会在当前调用该函数时直接解码该字节序列。默认值为
     * **false**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    stream?: boolean;
  }

  /**
   * 提供将字节数组解码为字符串的 API。支持多种格式，包括 UTF-8、UTF-16LE、UTF-16BE、ISO-8859 和 Windows-1251。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  class TextDecoder {
    /**
     * TextDecoder的构造函数，创建一个默认编码格式为'utf-8'的TextDecoder实例，fatal默认为false，ignoreBOM默认为false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    constructor();

    /**
     * 编码格式。<br/>-&nbsp;支持格式：utf-8、ibm866、iso-8859-2、iso-8859-3、iso-8859-4、iso-8859-5、iso-8859-6、iso-8859-7、iso-8859-8、
     * iso-8859-8-i、iso-8859-10、iso-8859-13、iso-8859-14、iso-8859-15、koi8-r、koi8-u、macintosh、windows-874、windows-1250、
     * windows-1251、windows-1252、windows-1253、windows-1254、windows-1255、windows-1256、windows-1257、windows-1258、
     * x-mac-cyrillic、gbk、gb18030、big5、euc-jp、iso-2022-jp、shift_jis、euc-kr、utf-16be、utf-16le、gb2312、iso-8859-1。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    readonly encoding: string;

    /**
     * 是否显示致命错误，true表示显示，false表示不显示。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    readonly fatal: boolean;

    /**
     * 是否忽略BOM（byte order marker）标记，true表示忽略BOM标记，false表示解码结果包含BOM标记，默认值为false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    readonly ignoreBOM = false;

    /**
     * TextDecoder的构造函数。
     *
     * @param { string } encoding - 编码格式，默认值是'utf-8'。
     * @param { object } options - 解码相关选项参数，存在两个属性fatal和ignoreBOM。此参数不填时，对应各属性取其默认值false。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead util.TextDecoder.create
     */
    constructor(encoding?: string, options?: { fatal?: boolean; ignoreBOM?: boolean });

    /**
     * 替代有参构造函数的功能。
     *
     * @param { string } encoding - 编码格式。默认格式为 **'utf-8'**。[since 9 - 10]
     * @param { object } options - 解码相关的选项，包含 **fatal** 和 **ignoreBOM**。[since 9 - 10]
     * @param { string } [encoding] - 编码格式。默认格式为 **'utf-8'**。[since 11]
     * @param { TextDecoderOptions } [options] - 解码相关的选项，包含 **fatal** 和 **ignoreBOM**。[since 11]
     * @returns { TextDecoder } 返回一个用于将字节数组按指定编码格式解码为字符串的TextDecoder对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    static create(encoding?: string, options?: TextDecoderOptions): TextDecoder;

    /**
     * 通过输入参数解码后输出对应文本。
     *
     * @param { Uint8Array } input - 符合格式需要解码的数组。
     * @param { object } options - 解码相关选项参数。不传此参数时，stream默认为false，即不跟随附加数据块。
     * @returns { string } 解码后的数据。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead util.TextDecoder.decodeToString
     */
    decode(input: Uint8Array, options?: { stream?: false }): string;

    /**
     * 将输入参数解码后输出对应文本。当input是一个空数组时，返回undefined。
     *
     * @param { Uint8Array } input - 符合格式需要解码的数组。
     * @param { object } options - 解码相关的选项。[since 9 - 10]
     * @param { DecodeWithStreamOptions } [options] - 解码相关的选项。[since 11]
     * @returns { string } 解码后的数据。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead util.TextDecoder.decodeToString
     */
    decodeWithStream(input: Uint8Array, options?: DecodeWithStreamOptions): string;
    /**
     * 将输入参数解码后输出对应文本。
     *
     * > **说明：**
     * >
     * > 该接口会正常解析值为\0的字节，将其转换为Unicode字符\u0000（空字符），不会导致解码中断或错误。
     *
     * @param { Uint8Array } input - 需要解码的数组。
     * @param { DecodeToStringOptions } [options] - 解码相关选项参数，用于控制解码行为。当需要以流式方式分块处理数据
     *     且保留不完整字节序列时传入此参数并设置stream为true；不传入时默认为undefined，即不保留不完整字节序列，
     *     直接在当前调用中解码。
     * @returns { string } 解码后的数据。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    decodeToString(input: Uint8Array, options?: DecodeToStringOptions): string;
  }

  /**
   * 编码信息，包含已读取的字符数和已写入的字节数。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  interface EncodeIntoUint8ArrayInfo {
    /**
     * 已读取的字符数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    read: number;
    /**
     * 已写入的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     */
    written: number;
  }

  /**
   * 提供将字符串编码为字节数组的 API。支持多种编码格式。
   * 使用 **TextEncoder** 进行编码时，每个字符所占用的字节数因编码格式而异。必须显式指定编码格式以获取所需的编码结果。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  class TextEncoder {
    /**
     * 编码格式。<br/>-&nbsp;支持格式：utf-8、gb2312、gb18030、ibm866、iso-8859-1、iso-8859-2、iso-8859-3、iso-8859-4、iso-8859-5、
     * iso-8859-6、iso-8859-7、iso-8859-8、iso-8859-8-i、iso-8859-10、iso-8859-13、iso-8859-14、iso-8859-15、koi8-r、koi8-u、
     * macintosh、windows-874、windows-1250、windows-1251、windows-1252、windows-1253、windows-1254、windows-1255、windows-1256、
     * windows-1257、windows-1258、gbk、big5、euc-jp、iso-2022-jp、shift_jis、euc-kr、x-mac-cyrillic、utf-16be、utf-16le。
     * <br/>-&nbsp; 默认值是：'utf-8'。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    readonly encoding = 'utf-8';

    /**
     * TextEncoder的构造函数，创建一个默认编码格式为'utf-8'的TextEncoder实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    constructor();

    /**
     * TextEncoder的构造函数。
     *
     * @param { string } [encoding] - 编码格式，支持格式参见encoding属性，默认值为'utf-8'。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    constructor(encoding?: string);

    /**
     * 创建TextEncoder对象的方法。
     *
     * @param { string } [encoding] - 编码格式，默认值为'utf-8'。
     * @returns { TextEncoder } 返回一个用于将字符串按指定编码格式编码为字节数组的TextEncoder对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    static create(encoding?: string): TextEncoder;

    /**
     * 将输入字符串编码后输出对应的Uint8Array字节数组。
     *
     * @param { string } [input] - 需要编码的字符串，默认值是空字符串。
     * @returns { Uint8Array } 返回编码后的文本。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.encodeInto
     */
    encode(input?: string): Uint8Array;

    /**
     * 将输入参数编码后输出Uint8Array对象。
     *
     * @param { string } [input] - 需要编码的字符串，默认值是空字符串。当入参是空字符串时，返回undefined。
     * @returns { Uint8Array } 返回编码后的Uint8Array对象。当入参为空字符串时，返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encodeInto(input?: string): Uint8Array;

    /**
     * 将生成的utf-8编码文本写入dest数组。
     *
     * @param { string } input - 需要编码的字符串。
     * @param { Uint8Array } dest - Uint8Array对象实例，用于将生成的utf-8编码文本放入其中。
     * @returns { object } 返回一个对象，read表示已编码的字符数，written表示编码字符所占用的字节数。
     * @syscap SystemCapability.Utils.Lang
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead util.TextEncoder.encodeIntoUint8Array
     */
    encodeInto(input: string, dest: Uint8Array): { read: number; written: number };

    /**
     * 对字符串进行编码，将结果存储到dest数组。
     *
     * @param { string } input - 需要编码的字符串。
     * @param { Uint8Array } dest - Uint8Array对象实例，用于将生成的utf-8编码文本放入其中。
     * @returns { object } 返回该对象，其中 read 表示已编码的字符数，written 表示已编码字符所占用的字节数。[since 9 - 10]
     * @returns { EncodeIntoUint8ArrayInfo } 获取到的对象。**read** 表示已编码的字符数，**written** 表示已编码字符所占用的
     *     字节数。[since 11]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encodeIntoUint8Array(input: string, dest: Uint8Array): EncodeIntoUint8ArrayInfo;
  }

  /**
   * 提供比较有理数、获取分子和分母的 API。创建有理数时会自动约分。例如，可以使用 **toString()** API 将有理数转换为字符串。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  class RationalNumber {
    /**
     * RationalNumber的构造函数。
     *
     * @param { number } numerator - 分子，整数类型。取值范围：-Number.MAX_VALUE <= numerator <= Number.MAX_VALUE。
     * @param { number } denominator - 分母，整数类型。取值范围：-Number.MAX_VALUE <= denominator <= Number.MAX_VALUE。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.RationalNumber.parseRationalNumber
     */
    constructor(numerator: number, denominator: number);

    /**
     * RationalNumber的构造函数，创建一个默认分子为0、分母为1的RationalNumber实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    constructor();

    /**
     * 创建具有给定分子和分母的RationalNumber实例。
     *
     * > **说明：**
     * >
     * > 该接口要求参数numerator和denominator必须是整数类型。如果传入的参数是小数类型，不会进行拦截，但是会输出错误信息
     * > "parseRationalNumber: The type of Parameter must be integer"。
     *
     * @param { number } numerator - 分子，整数类型。取值范围：-Number.MAX_VALUE <= numerator <= Number.MAX_VALUE。
     * @param { number } denominator - 分母，整数类型。取值范围：-Number.MAX_VALUE <= denominator <= Number.MAX_VALUE。
     * @returns { RationalNumber } 具有给定分子和分母的RationalNumber有理数对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    static parseRationalNumber(numerator: number, denominator: number): RationalNumber;

    /**
     * 使用给定的字符串创建RationalNumber对象。
     *
     * > **说明：**
     * >
     * > 该接口要求参数rationalString是字符串格式。如果传入的参数是小数类型字符串格式，不会进行拦截，但是会输出错误信息
     * > "createRationalFromString: The type of Parameter must be integer string"。
     *
     * @param { string } rationalString - 有理数字符串格式，如"3/4"。若传入小数类型字符串格式，不会拦截但会输出错误信息。
     * @returns { RationalNumber } 由给定字符串创建的RationalNumber有理数对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    static createRationalFromString(rationalString: string): RationalNumber;

    /**
     * 比较当前的RationalNumber对象与给定的对象。
     *
     * @param { RationalNumber } another - 其他的有理数对象。
     * @returns { number } 如果两个对象相等，则返回0；如果给定对象小于当前对象，则返回1；如果给定对象大于当前对象，
     *     则返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.compare
     */
    compareTo(another: RationalNumber): number;

    /**
     * 将当前RationalNumber对象与目标RationalNumber对象进行比较，并返回比较结果。
     *
     * @param { RationalNumber } another - 其他的有理数对象。
     * @returns { number } 两个对象相等时返回0；给定对象小于当前对象时返回1；给定对象大于当前对象时返回-1。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    compare(another: RationalNumber): number;

    /**
     * 比较当前的RationalNumber对象与给定对象是否相等。
     *
     * @param { Object } obj - 用于与当前RationalNumber对象比较的对象，传入非RationalNumber类型时返回false。
     * @returns { boolean } 如果给定对象与当前对象相同，则返回true；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    equals(obj: Object): boolean;

    /**
     * 获取当前RationalNumber对象的整数或浮点数值。
     *
     * @returns { number } 返回整数或者浮点数的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    valueOf(): number;

    /**
     * 获取两个指定整数的最大公约数。
     *
     * @param { number } number1 - 整数类型。-Number.MAX_VALUE <= number1 <= Number.MAX_VALUE。
     * @param { number } number2 - 整数类型。-Number.MAX_VALUE <= number2 <= Number.MAX_VALUE。
     * @returns { number } 返回两个给定数字的最大公约数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.RationalNumber.getCommonFactor
     */
    static getCommonDivisor(number1: number, number2: number): number;

    /**
     * 获取两个整数的最大公约数。
     *
     * > **说明：**
     * >
     * > 该接口要求参数number1和number2必须是整数类型。如果传入的参数是小数类型，不会进行拦截，但是会输出错误信息
     * > "getCommonFactor: The type of Parameter must be integer"。
     *
     * @param { number } number1 - 整数类型。-Number.MAX_VALUE <= number1 <= Number.MAX_VALUE。
     * @param { number } number2 - 整数类型。-Number.MAX_VALUE <= number2 <= Number.MAX_VALUE。
     * @returns { number } 返回两个给定数字的最大公约数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    static getCommonFactor(number1: number, number2: number): number;

    /**
     * 获取当前RationalNumber对象的分母。
     *
     * @returns { number } 返回RationalNumber对象的分母。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    getDenominator(): number;

    /**
     * 获取当前RationalNumber对象的分子。
     *
     * @returns { number } 返回RationalNumber对象的分子。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    getNumerator(): number;

    /**
     * 检查RationalNumber对象是否表示一个有限值。
     *
     * @returns { boolean } 如果分母不为0，则返回true；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isFinite(): boolean;

    /**
     * 检查当前RationalNumber对象是否表示非数字(NaN)值。
     *
     * @returns { boolean } 如果分母和分子都为0，则返回true；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isNaN(): boolean;

    /**
     * 检查当前RationalNumber对象是否为0。
     *
     * @returns { boolean } 如果当前对象的值为0，则返回true；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isZero(): boolean;

    /**
     * 获取RationalNumber对象的字符串表示形式。
     *
     * @returns { string } 返回Numerator/Denominator格式的字符串，例如3/5，如果分子为0，则返回0/1。如果分母为0，
     *     则返回Infinity。如果分子和分母都为0，则返回NaN。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    toString(): string;
  }

  /**
   * LruBuffer 算法在缓存空间不足时使用新数据替换最不常使用的数据。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead util.LRUCache
   */
  class LruBuffer<K, V> {
    /**
     * 构造函数用于创建一个新的LruBuffer实例，默认容量为64。
     *
     * @param { number } [capacity] - 指示要为缓冲区自定义的容量，取值范围为[0, 2147483647]，默认值为64。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.constructor
     */
    constructor(capacity?: number);

    /**
     * 将缓冲区容量更新为指定容量，如果newCapacity小于或等于0，则抛出异常。
     *
     * @param { number } newCapacity - 指示要为缓冲区自定义的容量，取值范围为[0, 2147483647]。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.updateCapacity
     */
    updateCapacity(newCapacity: number): void;

    /**
     * 返回对象的字符串表示形式。
     *
     * @returns { string } 返回对象的字符串表示形式。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.toString
     */
    toString(): string;

    /**
     * 当前缓冲区中值的总数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.length
     */
    length: number;

    /**
     * 获取当前缓冲区的容量。
     *
     * @returns { number } 返回当前缓冲区的容量。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getCapacity
     */
    getCapacity(): number;

    /**
     * 清除当前缓冲区中的键值对，后续调用[afterRemoval]{@link util.LruBuffer.afterRemoval}方法执行操作。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.clear
     */
    clear(): void;

    /**
     * 获取createDefault()返回值的次数。
     *
     * @returns { number } 返回createDefault()返回值的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getCreateCount
     */
    getCreateCount(): number;

    /**
     * 获取查询值不匹配的次数。
     *
     * @returns { number } 返回查询值不匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getMissCount
     */
    getMissCount(): number;

    /**
     * 获取从缓冲区中逐出值的次数。
     *
     * @returns { number } 返回从缓冲区中驱逐的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getRemovalCount
     */
    getRemovalCount(): number;

    /**
     * 获取查询值匹配成功的次数。
     *
     * @returns { number } 返回查询值匹配成功的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getMatchCount
     */
    getMatchCount(): number;

    /**
     * 获取将值添加到缓冲区的次数。
     *
     * @returns { number } 返回将值添加到缓冲区的次数。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.getPutCount
     */
    getPutCount(): number;

    /**
     * 检查当前缓冲区是否为空。
     *
     * @returns { boolean } 如果当前缓冲区不包含任何值，则返回true；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.isEmpty
     */
    isEmpty(): boolean;

    /**
     * 返回键对应的值。当键不在缓冲区中时，返回undefined。
     *
     * @param { K } key - 要查询的键。
     * @returns { V | undefined } 如果指定的键存在于缓冲区中，则返回与键关联的值；否则返回undefined。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.get
     */
    get(key: K): V | undefined;

    /**
     * 将键值对添加到缓冲区。
     *
     * @param { K } key - 要添加的键。
     * @param { V } value - 指示与要添加的键关联的值。
     * @returns { V } 返回与添加的键关联的值；如果要添加的键已经存在，则返回原始值，如果键或值为空，则抛出此异常。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.put
     */
    put(key: K, value: V): V;

    /**
     * 获取当前缓冲区中所有值从最近访问到最近最少访问的顺序列表。
     *
     * @returns { V[] } 按从最近访问到最近最少访问的顺序返回当前缓冲区中所有值的列表。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.values
     */
    values(): V[];

    /**
     * 获取当前缓冲区中所有键从最近访问到最近最少访问的升序列表。
     *
     * @returns { K[] } 按升序返回当前缓冲区中所有键的列表，从最近访问到最近最少访问。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.keys
     */
    keys(): K[];

    /**
     * 删除当前缓冲区中指定的键及其关联的值。
     *
     * @param { K } key - 要删除的键。
     * @returns { V | undefined } 返回一个包含已删除键值对的Optional对象；如果key不存在，则返回一个空的Optional对象，如果key为null，则抛出异常。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.remove
     */
    remove(key: K): V | undefined;

    /**
     * 删除值后执行后续操作。
     *
     * @param { boolean } isEvict - 因容量不足而调用该方法时，参数值为true，其他情况为false。
     * @param { K } key - 表示删除的键。
     * @param { V } value - 表示删除的值。
     * @param { V } newValue - 如果已调用put方法并且要添加的键已经存在，则参数值是关联的新值。其他情况下参数值为空。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.afterRemoval
     */
    afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;

    /**
     * 检查当前缓冲区是否包含指定的键。
     *
     * @param { K } key - 表示要检查的键。
     * @returns { boolean } 如果缓冲区包含指定的键，则返回true；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.contains
     */
    contains(key: K): boolean;

    /**
     * 当缓冲区中未匹配到指定键时，执行后续处理逻辑，参数表示未匹配到的键，返回与该键关联的值，默认返回undefined。
     *
     * @param { K } key - 表示丢失的键。
     * @returns { V } 返回与键关联的值。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.createDefault
     */
    createDefault(key: K): V;

    /**
     * 允许迭代包含在这个对象中的所有键值对。
     *
     * @returns { IterableIterator<[K, V]> } 返回一个可迭代数组。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.LRUCache.entries
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * 返回一个键值对形式的二维数组。
     *
     * @returns { IterableIterator<[K, V]> } 返回一个键值对形式的二维数组。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.LRUCache.[Symbol.iterator]
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
  }

  /**
   * 提供在缓存已满时丢弃最近最少使用的数据以腾出空间给新元素的 API。此类使用最近最少使用（LRU）算法，该算法认为最近
   * 使用的数据可能在不久的将来再次被访问，而最少访问的数据是最不具价值的数据，应从缓存中移除。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  class LRUCache<K, V> {
    /**
     * 默认构造函数用于创建一个新的LRUCache实例，默认容量为64。
     *
     * @param { number } [capacity] - 要创建的缓存的容量。默认值为 **64**，最大值为 **2147483647**。[since 12]
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    constructor(capacity?: number);

    /**
     * 更新缓存容量为指定值，如果newCapacity小于或等于0，则抛出异常。当缓存中值的总数大于指定容量时，会执行删除操作。
     *
     * @param { number } newCapacity - 指示要为缓冲区自定义的容量，取值范围为[0, 2147483647]。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    updateCapacity(newCapacity: number): void;

    /**
     * 返回对象的字符串表示，格式为LRUCache[ maxSize = 缓存区最大值, hits = 查询匹配成功次数, misses = 查询匹配失败次数,
     * hitRate = 查询匹配率 ]。
     *
     * @returns { string } 返回对象的字符串表示形式。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    toString(): string;

    /**
     * 当前缓存中值的总数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    length: number;

    /**
     * 获取当前缓存的容量。
     *
     * @returns { number } 返回当前缓冲区的容量。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getCapacity(): number;

    /**
     * 清除当前缓冲区中的键值对，并触发afterRemoval回调方法执行后续操作。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    clear(): void;

    /**
     * 获取对象创建的次数。
     *
     * @returns { number } 返回创建对象的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getCreateCount(): number;

    /**
     * 获取查询值不匹配的次数。
     *
     * @returns { number } 返回查询值不匹配的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getMissCount(): number;

    /**
     * 获取缓存键值对的回收次数。
     *
     * @returns { number } 返回缓冲区键值对回收的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getRemovalCount(): number;

    /**
     * 获取查询值匹配成功的次数。
     *
     * @returns { number } 返回查询值匹配成功的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getMatchCount(): number;

    /**
     * 获取将值添加到缓存的次数。
     *
     * @returns { number } 返回将值添加到缓冲区的次数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getPutCount(): number;

    /**
     * 检查缓存是否为空。
     *
     * @returns { boolean } 如果缓存不包含任何值，则返回true；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    isEmpty(): boolean;

    /**
     * 返回键对应的值。当键不在缓存中时，通过[createDefault<sup>9+</sup>]{@link util.LRUCache.createDefault}接口创建，
     * 若createDefault创建的值不为undefined时，此时会调用[afterRemoval<sup>9+</sup>]{@link util.LRUCache.afterRemoval}
     * 接口，返回createDefault创建的值。
     *
     * @param { K } key - 要查询的键。
     * @returns { V | undefined } 如果指定的键存在于缓冲区中，则返回与键关联的值；否则返回createDefault创建的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    get(key: K): V | undefined;

    /**
     * 将键值对添加到缓存，返回与添加的键关联的值。当缓存中值的总数超过容量时，执行删除操作。
     *
     * @param { K } key - 要添加的键。
     * @param { V } value - 指示与要添加的键关联的值。
     * @returns { V } 返回与添加的键关联的值。如果键或值为空，则抛出此异常。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    put(key: K, value: V): V;

    /**
     * 获取当前缓存中所有值，从最近最少访问到最近访问的顺序列表。
     *
     * @returns { V[] } 返回当前缓冲区中所有值的列表，顺序为从最近最少访问（Least Recent）到最近访问（Most Recent）。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    values(): V[];

    /**
     * 获取当前缓存中所有键，从最近最少访问到最近访问的顺序列表。
     *
     * @returns { K[] } 返回当前缓冲区中所有键的列表，顺序为从最近最少访问（Least Recent）到最近访问（Most Recent）。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    keys(): K[];

    /**
     * 从当前缓存中删除指定的键及其关联的值，并返回键关联的值。如果指定的键不存在，则返回undefined。
     *
     * @param { K } key - 要删除的键。
     * @returns { V | undefined } 返回与已删除键关联的值；如果key不存在，则返回undefined，如果key为null，则抛出异常。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    remove(key: K): V | undefined;

    /**
     * 删除值后执行后续操作，这些操作由开发者自行实现。本接口会在删除操作时被调用，如
     * [get<sup>9+</sup>]{@link util.LRUCache.get}、[put<sup>9+</sup>]{@link util.LRUCache.put}、
     * [remove<sup>9+</sup>]{@link util.LRUCache.remove}、[clear<sup>9+</sup>]{@link util.LRUCache.clear}、
     * [updateCapacity<sup>9+</sup>]{@link util.LRUCache.updateCapacity}接口。
     *
     * > **说明：**
     * >
     * > 若此回调方法在[clear<sup>9+</sup>]{@link util.LRUCache.clear}、
     * > [updateCapacity<sup>9+</sup>]{@link util.LRUCache.updateCapacity}接口调用之后触发执行，传入的key和value参数
     * > 类型为MapIterator，可参照示例二进行后续操作。
     *
     * @param { boolean } isEvict - 当因容量不足而调用该方法时，参数值设置为true，其他情况设置为false。
     * @param { K } key - 表示删除的键。
     * @param { V } value - 表示删除的值。
     * @param { V } newValue - 如果已调用put方法并且要添加的键已经存在，则参数值是关联的新值。其他情况下参数值为空。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    afterRemoval(isEvict: boolean, key: K, value: V, newValue: V): void;

    /**
     * 检查当前缓存是否包含指定的键。
     *
     * @param { K } key - 要检查的键。
     * @returns { boolean } 如果缓存包含指定的键，则返回true；否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    contains(key: K): boolean;

    /**
     * 如果在缓存中未匹配到键，则执行后续操作，参数表示未匹配的键，返回与键关联的值，默认返回undefined。
     *
     * @param { K } key - 表示未匹配的键。
     * @returns { V } 返回与键关联的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    createDefault(key: K): V;

    /**
     * 返回一个迭代器对象，用于按插入顺序遍历当前对象中的所有键值对（[key, value]）。
     *
     * @returns { IterableIterator<[K, V]> } 返回一个迭代器对象，用于按插入顺序遍历当前缓冲区中的所有键值对
     *     [key, value]。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * 返回键值对形式的二维数组。
     *
     * @returns { IterableIterator<[K, V]> } 返回一个键值对形式的二维数组。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
  }

  /**
   * **ScopeComparable** 类型的值用于实现 **compareTo** 方法。因此，请确保输入参数是可比较的。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  interface ScopeComparable {
    /**
     * 比较两个值的大小，返回一个布尔值。
     *
     * @param { ScopeComparable } other - 表示要比较的值。
     * @returns { boolean } 调用compareTo的值大于等于传入的值返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    compareTo(other: ScopeComparable): boolean;
  }

  /**
   * 定义 **Scope** 对象中的值类型。
   *
   * @unionmember { ScopeComparable } 值类型为 ScopeComparable。
   * @unionmember { number } 值类型为 number。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  type ScopeType = ScopeComparable | number;

  /**
   * Scope 接口用于描述字段的有效范围。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead util.ScopeHelper
   */
  class Scope {
    /**
     * 创建指定下限和上限的作用域实例，并返回一个Scope对象。
     *
     * @param { ScopeType } lowerObj - 指定作用域实例的下限。
     * @param { ScopeType } upperObj - 指定作用域实例的上限。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.constructor
     */
    constructor(lowerObj: ScopeType, upperObj: ScopeType);

    /**
     * 该字符串化方法返回一个包含当前范围的字符串表示形式。
     *
     * @returns { string } 返回包含当前范围对象的字符串表示形式。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.toString
     */
    toString(): string;

    /**
     * 获取给定范围和当前范围的交集。
     *
     * @param { Scope } range - 传入一个给定范围。
     * @returns { Scope } 返回给定范围和当前范围的交集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.intersect
     */
    intersect(range: Scope): Scope;

    /**
     * 获取当前范围与给定下限和上限范围的交集。
     *
     * @param { ScopeType } lowerObj - 给定范围的下限。
     * @param { ScopeType } upperObj - 给定范围的上限。
     * @returns { Scope } 返回当前范围与给定下限和上限范围的交集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.intersect
     */
    intersect(lowerObj: ScopeType, upperObj: ScopeType): Scope;

    /**
     * 获取当前范围的上限。
     *
     * @returns { ScopeType } 返回当前范围的上限值。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.ScopeHelper.getUpper
     */
    getUpper(): ScopeType;

    /**
     * 获取当前范围的下限。
     *
     * @returns { ScopeType } 返回当前范围的下限值。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.ScopeHelper.getLower
     */
    getLower(): ScopeType;

    /**
     * 创建并返回包括当前范围和给定下限和上限的并集。
     *
     * @param { ScopeType } lowerObj - 给定范围的下限。
     * @param { ScopeType } upperObj - 给定范围的上限。
     * @returns { Scope } 返回当前范围和给定下限和上限的并集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(lowerObj: ScopeType, upperObj: ScopeType): Scope;

    /**
     * 创建并返回包括当前范围和给定范围的并集。
     *
     * @param { Scope } range - 传入一个给定范围。
     * @returns { Scope } 返回包括当前范围和给定范围的并集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(range: Scope): Scope;

    /**
     * 创建并返回包括当前范围和给定值的并集。
     *
     * @param { ScopeType } value - 传入一个给定值。
     * @returns { Scope } 返回包括当前范围和给定值的并集。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.expand
     */
    expand(value: ScopeType): Scope;

    /**
     * 检查给定value是否包含在当前范围内。
     *
     * @param { ScopeType } value - 传入一个给定值。
     * @returns { boolean } 如果给定值包含在当前范围内返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.contains
     */
    contains(value: ScopeType): boolean;

    /**
     * 检查给定range是否在当前范围内。
     *
     * @param { Scope } range - 传入一个给定范围。
     * @returns { boolean } 如果给定范围包含在当前范围内返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.util.ScopeHelper.contains
     */
    contains(range: Scope): boolean;

    /**
     * 将给定值限定到当前范围内。
     *
     * @param { ScopeType } value - 传入的给定值。
     * @returns { ScopeType } 如果传入的value小于下限，则返回lowerObj；如果大于上限值则返回upperObj；如果在当前范围内，则返回value。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.ScopeHelper.clamp
     */
    clamp(value: ScopeType): ScopeType;
  }

  /**
   * 提供定义字段有效范围的 API。此类的构造函数创建具有上下限的可比较对象。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   */
  class ScopeHelper {
    /**
     * 创建指定下限和上限的作用域实例，返回一个ScopeHelper对象。
     *
     * @param { ScopeType } lowerObj - 指定作用域实例的下限，需具有可比性。
     * @param { ScopeType } upperObj - 指定作用域实例的上限，需具有可比性。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    constructor(lowerObj: ScopeType, upperObj: ScopeType);

    /**
     * 该字符串化方法返回当前范围的字符串表示形式。
     *
     * @returns { string } 返回当前范围的字符串表示形式。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    toString(): string;

    /**
     * 获取给定范围和当前范围的交集。当交集为空集时，抛出异常。
     *
     * @param { ScopeHelper } range - 传入给定范围。
     * @returns { ScopeHelper } 返回给定范围和当前范围的交集。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    intersect(range: ScopeHelper): ScopeHelper;

    /**
     * 获取当前范围与指定下限和上限范围的交集。当交集为空集时，抛出异常。
     *
     * @param { ScopeType } lowerObj - 给定范围的下限。
     * @param { ScopeType } upperObj - 给定范围的上限。
     * @returns { ScopeHelper } 返回当前范围与给定下限和上限范围的交集。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    intersect(lowerObj: ScopeType, upperObj: ScopeType): ScopeHelper;

    /**
     * 获取当前范围的上限。
     *
     * @returns { ScopeType } 返回当前范围的上限值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getUpper(): ScopeType;

    /**
     * 获取当前范围的下限。
     *
     * @returns { ScopeType } 返回当前范围的下限值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    getLower(): ScopeType;

    /**
     * 创建并返回当前范围与给定下限和上限的并集。
     *
     * @param { ScopeType } lowerObj - 给定范围的下限。
     * @param { ScopeType } upperObj - 给定范围的上限。
     * @returns { ScopeHelper } 返回当前范围和给定下限和上限的并集。
     * @syscap SystemCapability.Utils.Lang
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    expand(lowerObj: ScopeType, upperObj: ScopeType): ScopeHelper;

    /**
     * 创建并返回当前范围和给定范围的并集。
     *
     * @param { ScopeHelper } range - 传入一个给定范围。
     * @returns { ScopeHelper } 返回包括当前范围和给定范围的并集。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    expand(range: ScopeHelper): ScopeHelper;

    /**
     * 创建并返回当前范围和给定值的并集。
     *
     * @param { ScopeType } value - 要检查是否在当前范围内的值。
     * @returns { ScopeHelper } 返回包括当前范围和给定值的并集。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    expand(value: ScopeType): ScopeHelper;

    /**
     * 检查给定value是否在当前范围内。
     *
     * @param { ScopeType } value - 传入一个给定值。
     * @returns { boolean } 如果给定值包含在当前范围内返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    contains(value: ScopeType): boolean;

    /**
     * 检查给定range是否在当前范围内。
     *
     * @param { ScopeHelper } range - 传入一个给定范围。
     * @returns { boolean } 如果给定范围在当前范围内则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    contains(range: ScopeHelper): boolean;

    /**
     * 将值限定到当前范围内。
     *
     * @param { ScopeType } value - 传入的给定值。
     * @returns { ScopeType } 如果传入的value小于下限，返回lowerObj；如果大于上限值，返回upperObj；如果在当前范围内，返回value。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    clamp(value: ScopeType): ScopeType;
  }

  /**
   * 将包含 Base64 数据的字符串或 Uint8Array 解码为重新分配的 Uint8Array。
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead util.Base64Helper
   */
  class Base64 {
    /**
     * Base64的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.constructor
     */
    constructor();

    /**
     * 将输入的Uint8Array字节数组进行Base64编码，返回编码后的Uint8Array数组。
     *
     * @param { Uint8Array } src - 编码输入Uint8数组。
     * @returns { Uint8Array } 返回编码后新分配的Uint8数组。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.encodeSync
     */
    encodeSync(src: Uint8Array): Uint8Array;

    /**
     * 将输入的Uint8Array字节数组进行Base64编码，返回编码后的字符串结果。
     *
     * @param { Uint8Array } src - 编码输入Uint8数组。
     * @returns { string } 返回编码后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.encodeToStringSync
     */
    encodeToStringSync(src: Uint8Array): string;

    /**
     * 通过输入参数解码后输出对应文本。
     *
     * @param { Uint8Array | string } src - 解码输入Uint8数组或者字符串。
     * @returns { Uint8Array } 返回解码后新分配的Uint8数组。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.decodeSync
     */
    decodeSync(src: Uint8Array | string): Uint8Array;

    /**
     * 通过输入参数异步编码后输出对应文本。
     *
     * @param { Uint8Array } src - 异步编码输入Uint8数组。
     * @returns { Promise<Uint8Array> } 返回异步编码后新分配的Uint8数组。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.encode
     */
    encode(src: Uint8Array): Promise<Uint8Array>;

    /**
     * 通过输入参数异步编码后输出对应文本。
     *
     * @param { Uint8Array } src - 异步编码输入Uint8数组。
     * @returns { Promise<string> } 返回异步编码后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.encodeToString
     */
    encodeToString(src: Uint8Array): Promise<string>;

    /**
     * 将输入参数异步解码后输出对应文本。
     *
     * @param { Uint8Array | string } src - 异步解码输入Uint8数组或者字符串。
     * @returns { Promise<Uint8Array> } 返回异步解码后新分配的Uint8数组。
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead util.Base64Helper.decode
     */
    decode(src: Uint8Array | string): Promise<Uint8Array>;
  }

  /**
   * Base64 编码格式枚举。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  enum Type {
    /**
     * 基本格式。
     * 从 API version 11 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    BASIC = 0,
    /**
     * MIME 格式。
     * 从 API version 11 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    MIME = 1,
    /**
     * BASIC_URL_SAFE 格式。
     *
     * 该值从 API version 12 开始支持。
     * 从 API version 12 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    BASIC_URL_SAFE = 2,
    /**
     * MIME_URL_SAFE 格式。
     *
     * 该值从 API version 12 开始支持。
     * 从 API version 12 开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    MIME_URL_SAFE = 3
  }

  /**
   * 提供 Base64 和 Base64URL 的编解码。Base64 编码表包含 64 个字符，分别为大写字母（A-Z）、小写字母（a-z）、数字（0-9）
   * 以及特殊字符加号（+）和斜杠（/）。编码时，原始数据按三个字节一组进行划分，每组转换为多个 6 位数字。然后使用 Base64
   * 编码表中对应的字符来表示这些数字。如果最后一组只包含一个或两个字节，则使用等号（=）进行填充。Base64URL 编码表包含
   * 64 个字符，分别为大写字母（A-Z）、小写字母（a-z）、数字（0-9）以及特殊字符连字符（-）和下划线（_）。Base64URL 编码结果
   * 不包含等号（=）。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  class Base64Helper {
    /**
     * Base64Helper的构造函数，创建一个用于Base64编解码的Base64Helper实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    constructor();

    /**
     * 通过输入参数编码后输出Uint8Array对象。
     *
     * @param { Uint8Array } src - 待编码的Uint8Array对象。
     * @param { Type } [options] - 从API version 12开始支持该参数，表示对应的编码格式。<br>此参数可选，可选值为：util.Type.BASIC和util.Type.BASIC_URL_SAFE，默认值为：util.Type.BASIC。<br>util.Type.BASIC表示Base64编码。<br>util.Type.BASIC_URL_SAFE表示Base64URL编码。[since 12]
     * @returns { Uint8Array } 返回编码后的Uint8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encodeSync(src: Uint8Array, options?: Type): Uint8Array;

    /**
     * 将输入的Uint8Array字节数组进行Base64编码，返回一个字符串结果。该方法支持多种编码格式，包括标准Base64编码、MIME格式的Base64编码（带有换行符）、URL安全格式的Base64编码等。
     *
     * @param { Uint8Array } src - 待编码的Uint8Array对象。[since 9 - 26.0.1]
     * @param { Uint8Array | collections.Uint8Array } src - 待编码的Uint8Array对象。<br>**说明**：从API version 26.1.0开始，支持传入collections.Uint8Array（Sendable字节数组），可直接编码跨并发实例（TaskPool/Worker）传递的字节数据，无需先拷贝为普通Uint8Array。[since 26.1.0]
     * @param { Type } [options] - 从API version 10开始支持该参数，表示对应的编码格式。<br>此参数可选，可选值为：util.Type.BASIC，util.Type.MIME，util.Type.BASIC_URL_SAFE 和util.Type.MIME_URL_SAFE，默认值为：util.Type.BASIC。<br>- 当参数取值为util.Type.BASIC，表示Base64编码，返回值没有回车符、换行符。<br>- 当参数取值为util.Type.MIME，表示使用Base64编码。如果返回值超过76个字符，则会在每76个字符处进行换行，并以'\r\n'结束每行。如果返回值少于76个字符，则会抛出异常。<br>- 当参数取值为util.Type.BASIC_URL_SAFE，表示Base64URL编码，返回值没有回车符、换行符。<br>- 当参数取值为util.Type.MIME_URL_SAFE，表示Base64URL编码，返回值每一行不超过76个字符，而且每行以'\r\n'符结束。[since 10 - 11]
     * @param { Type } [options] - 从API version 10开始支持该参数，表示对应的编码格式。<br>此参数可选，可选值为：util.Type.BASIC，util.Type.MIME，util.Type.BASIC_URL_SAFE 和util.Type.MIME_URL_SAFE，默认值为：util.Type.BASIC。<br>- 当参数取值为util.Type.BASIC，表示Base64编码，返回值没有回车符、换行符。<br>- 当参数取值为util.Type.MIME，表示使用Base64编码。如果返回值超过76个字符，则会在每76个字符处进行换行，并以'\r\n'结束每行。如果返回值少于76个字符，则会抛出异常。<br>- 当参数取值为util.Type.BASIC_URL_SAFE，表示Base64URL编码，返回值没有回车符、换行符。<br>- 当参数取值为util.Type.MIME_URL_SAFE，表示Base64URL编码，返回值每一行不超过76个字符，而且每行以'\r\n'符结束。[since 12]
     * @returns { string } 返回编码后的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encodeToStringSync(src: Uint8Array | collections.Uint8Array, options?: Type): string;

    /**
     * 将输入参数解码后输出对应Uint8Array对象。
     *
     * @param { Uint8Array | string } src - 待解码的Uint8Array对象或者字符串。
     * @param { Type } [options] - 从API version 10开始支持该参数，表示对应的解码格式。<br>此参数可选，可选值为：util.Type.BASIC，util.Type.MIME，util.Type.BASIC_URL_SAFE和util.Type.MIME_URL_SAFE，默认值为：util.Type.BASIC。<br>- 当参数取值为util.Type.BASIC，表示Base64解码。<br>- 当参数取值为util.Type.MIME，表示Base64解码，src入参包含回车符、换行符。<br>- 当参数取值为util.Type.BASIC_URL_SAFE，表示Base64URL解码。<br>- 当参数取值为util.Type.MIME_URL_SAFE，表示Base64URL解码，src入参包含回车符、换行符。[since 10]
     * @returns { Uint8Array } 返回解码后新分配的Uint8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    decodeSync(src: Uint8Array | string, options?: Type): Uint8Array;

    /**
     * 将输入参数异步编码后输出对应Uint8Array对象。使用Promise异步回调。
     *
     * @param { Uint8Array } src - 待编码Uint8Array对象。
     * @param { Type } [options] - 从API version 12开始支持该参数，表示对应的编码格式。<br>此参数可选，可选值为：util.Type.BASIC和util.Type.BASIC_URL_SAFE，默认值为：util.Type.BASIC。<br>util.Type.BASIC表示Base64编码。<br>util.Type.BASIC_URL_SAFE表示Base64URL编码。[since 12]
     * @returns { Promise<Uint8Array> } Promise对象。编码成功时resolve为新分配的Uint8Array对象，编码失败时reject为错误对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    encode(src: Uint8Array, options?: Type): Promise<Uint8Array>;

    /**
     * 将输入参数异步编码后输出对应文本。使用Promise异步回调。
     *
     * @param { Uint8Array } src - 异步编码输入的Uint8Array对象。[since 9 - 26.0.1]
     * @param { Uint8Array | collections.Uint8Array } src - 异步编码输入的Uint8Array对象。<br>**说明**：从API version 26.1.0开始，支持传入collections.Uint8Array（Sendable字节数组），可直接编码跨并发实例（TaskPool/Worker）传递的字节数据，无需先拷贝为普通Uint8Array。[since 26.1.0]
     * @param { Type } [options] - 从API version 10开始支持该参数，表示对应的编码格式。<br>此参数可选，可选值为：util.Type.BASIC，util.Type.MIME，util.Type.BASIC_URL_SAFE和util.Type.MIME_URL_SAFE，默认值为：util.Type.BASIC。<br>- 当参数取值为util.Type.BASIC，表示Base64编码，返回值没有回车符、换行符。<br>- 当参数取值为util.Type.MIME，表示Base64编码，返回值每一行不超过76个字符，而且每行以'\r\n'符结束。<br>- 当参数取值为util.Type.BASIC_URL_SAFE，表示Base64URL编码，返回值没有回车符、换行符。<br>- 当参数取值为util.Type.MIME_URL_SAFE，表示Base64URL编码，返回值每一行不超过76个字符，而且每行以'\r\n'符结束。[since 10]
     * @returns { Promise<string> } Promise对象。编码成功时resolve为Base64编码后的字符串，编码失败时reject为错误对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    encodeToString(src: Uint8Array | collections.Uint8Array, options?: Type): Promise<string>;

    /**
     * 将输入参数异步解码后输出对应Uint8Array对象。使用Promise异步回调。
     *
     * @param { Uint8Array | string } src - 异步解码输入Uint8Array对象或者字符串。
     * @param { Type } [options] - 从API version 10开始支持该参数，表示对应的解码格式。<br>此参数可选，可选值为：util.Type.BASIC，util.Type.MIME，util.Type.BASIC_URL_SAFE和util.Type.MIME_URL_SAFE，默认值为：util.Type.BASIC。<br>- 当参数取值为util.Type.BASIC时，表示Base64解码。<br>- 当参数取值为util.Type.MIME时，表示Base64解码，src入参包含回车符、换行符。<br>- 当参数取值为util.Type.BASIC_URL_SAFE，表示Base64URL解码。<br>- 当参数取值为util.Type.MIME_URL_SAFE，表示Base64URL解码，src入参包含回车符、换行符。[since 10]
     * @returns { Promise<Uint8Array> } 返回异步解码后新分配的Uint8Array对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    decode(src: Uint8Array | string, options?: Type): Promise<Uint8Array>;
  }

  /**
   * 提供检查不同内置对象类型的 API，例如 ArrayBuffer、Map 和 Set，以避免类型错误导致的异常。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 8 dynamic
   */
  class types {
    /**
     * Types的构造函数，创建一个用于内置对象类型检查的types实例。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    constructor();
    /**
     * 检查value是否为ArrayBuffer或SharedArrayBuffer类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是ArrayBuffer或SharedArrayBuffer类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isAnyArrayBuffer(value: Object): boolean;
    /**
     * 检查value是否为ArrayBufferView类型。
     *
     * ArrayBufferView类型包括：Int8Array、Int16Array、Int32Array、Uint8Array、Uint8ClampedArray、Uint32Array、Float32Array、Float64Array、DataView。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是ArrayBufferView类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isArrayBufferView(value: Object): boolean;
    /**
     * 检查value是否为arguments对象。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是arguments对象则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isArgumentsObject(value: Object): boolean;
    /**
     * 检查value是否为ArrayBuffer类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是ArrayBuffer类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isArrayBuffer(value: Object): boolean;
    /**
     * 判断入参是否为异步函数。
     *
     * > **说明：**
     * >
     * > 该接口无法对AsyncGenerator Function进行有效判断，建议通过获取函数的constructor.name属性与'AsyncGeneratorFunction'做判等的方式替代。
     * >
     * > 该接口无法对Sendable class中的async成员函数进行有效判断，无替代方案。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为异步函数，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isAsyncFunction(value: Object): boolean;
    /**
     * 检查value是否为BigInt64Array类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是BigInt64Array类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isBigInt64Array(value: Object): boolean;
    /**
     * 检查value是否为BigUint64Array类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是BigUint64Array类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isBigUint64Array(value: Object): boolean;
    /**
     * 判断入参是否为 Boolean 类型。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Boolean 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isBooleanObject(value: Object): boolean;
    /**
     * 判断入参是否为 Boolean、Number、String 或 Symbol 类型。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Boolean、Number、String 或 Symbol 类型，则返回 **true**；否则返回
     *     **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isBoxedPrimitive(value: Object): boolean;
    /**
     * 检查value是否为DataView类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是DataView类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isDataView(value: Object): boolean;
    /**
     * 检查value是否为Date类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Date类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isDate(value: Object): boolean;
    /**
     * 检查value是否为native External类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是native External类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isExternal(value: Object): boolean;
    /**
     * 检查value是否为Float32Array数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Float32Array数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isFloat32Array(value: Object): boolean;
    /**
     * 检查value是否为Float64Array数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Float64Array数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isFloat64Array(value: Object): boolean;
    /**
     * 判断入参是否为 generator 函数。
     *
     * > **说明：**
     * >
     * > 该接口无法对AsyncGenerator Function进行有效判断，建议通过获取函数的constructor.name属性与'AsyncGeneratorFunction'做判等的方式替代。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 generator 函数，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isGeneratorFunction(value: Object): boolean;
    /**
     * 检查value是否为generator对象类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是generator对象则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isGeneratorObject(value: Object): boolean;
    /**
     * 检查value是否为Int8Array数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Int8Array数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isInt8Array(value: Object): boolean;
    /**
     * 检查value是否为Int16Array数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Int16Array数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isInt16Array(value: Object): boolean;
    /**
     * 检查value是否为Int32Array数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Int32Array数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isInt32Array(value: Object): boolean;
    /**
     * 检查value是否为Map类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Map类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isMap(value: Object): boolean;
    /**
     * 检查value是否为Map的Iterator类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Map的Iterator类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isMapIterator(value: Object): boolean;
    /**
     * 检查value是否为Module Namespace Object类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Module Namespace Object类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isModuleNamespaceObject(value: Object): boolean;
    /**
     * 检查value是否为Error类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Error类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isNativeError(value: Object): boolean;
    /**
     * 判断入参是否为 Number 类型。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 Number 类型，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isNumberObject(value: Object): boolean;
    /**
     * 检查value是否为Promise类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Promise类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isPromise(value: Object): boolean;
    /**
     * 检查value是否为Proxy类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Proxy类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isProxy(value: Object): boolean;
    /**
     * 检查value是否为RegExp类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是RegExp类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isRegExp(value: Object): boolean;
    /**
     * 检查value是否为Set类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Set类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isSet(value: Object): boolean;
    /**
     * 检查value是否为Set的Iterator类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Set的Iterator类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isSetIterator(value: Object): boolean;
    /**
     * 检查value是否为SharedArrayBuffer类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是SharedArrayBuffer类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     */
    isSharedArrayBuffer(value: Object): boolean;
    /**
     * 判断入参是否为字符串对象。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为字符串对象，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isStringObject(value: Object): boolean;
    /**
     * 判断入参是否为 symbol 对象。
     *
     * > **NOTE**
     * >
     * > 本接口从 API version 8 起支持，从 API version 14 起废弃。无替代接口。
     *
     * @param { Object } value - 要检查的对象。
     * @returns { boolean } 检查结果。如果入参为 symbol 对象，则返回 **true**；否则返回 **false**。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamiconly
     * @deprecated since 14
     */
    isSymbolObject(value: Object): boolean;
    /**
     * 检查value是否为TypedArray类型。
     *
     * TypedArray类型，包括Int8Array、Int16Array、Int32Array、Uint8Array、Uint8ClampedArray、Uint16Array、Uint32Array、Float32Array、Float64Array、BigInt64Array、BigUint64Array。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是TypedArray包含的类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isTypedArray(value: Object): boolean;
    /**
     * 检查value是否为Uint8Array数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Uint8Array数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isUint8Array(value: Object): boolean;
    /**
     * 检查value是否为Uint8ClampedArray数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Uint8ClampedArray数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isUint8ClampedArray(value: Object): boolean;
    /**
     * 检查value是否为Uint16Array数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Uint16Array数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isUint16Array(value: Object): boolean;
    /**
     * 检查value是否为Uint32Array数组类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是Uint32Array数组类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isUint32Array(value: Object): boolean;
    /**
     * 检查value是否为WeakMap类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是WeakMap类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isWeakMap(value: Object): boolean;
    /**
     * 检查value是否为WeakSet类型。
     *
     * @param { Object } value - 待检测对象。
     * @returns { boolean } 如果是WeakSet类型则返回true，否则返回false。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 8 dynamic
     */
    isWeakSet(value: Object): boolean;
  }
  /**
   * 提供支持面向切面编程（AOP）的 API。这些 API 可用于对类方法进行插桩或替换。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamiconly
   */
  class Aspect {
    /**
     * 在指定的类对象的原方法执行前插入一个函数，适用于日志记录、性能监控、权限校验等需要在方法执行前进行拦截处理的场景。
     * 执行addBefore接口后，先运行插入的函数逻辑，再执行指定类对象的原方法。
     *
     * @param { Object } targetClass - 指定的类对象。
     * @param { string } methodName - 指定的原方法名，不支持read-only方法。
     * @param { boolean } isStatic - 指定的原方法是否为静态方法。true表示静态方法，false表示实例方法。
     * @param { Function } before - 要插入的函数对象。函数有参数，则第一个参数是this对象（若isStatic为true，则为类对象
     *     即targetClass；若isStatic为false，则为调用方法的实例对象），其余参数是原方法的参数。函数也可以无参数，
     *     无参时不做处理。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     */
    static addBefore(targetClass: Object, methodName: string, isStatic: boolean, before: Function): void;
    /**
     * 在指定的类方法执行后插入一段逻辑。最终返回插入函数执行后的返回值。
     *
     * @param { Object } targetClass - 指定的类对象。
     * @param { string } methodName - 指定的原方法名，不支持read-only方法。
     * @param { boolean } isStatic - 指定的原方法是否为静态方法。true表示静态方法，false表示实例方法。
     * @param { Function } after - 要插入的函数。函数有参数时，则第一个参数是this对象（若isStatic为true，则为类对象
     *     即targetClass；若isStatic为false，则为调用方法的实例对象），第二个参数是原方法的返回值（如果原方法没有返回值，
     *     则为undefined），其余参数是原方法的参数。函数也可以无参，无参时不做处理。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     */
    static addAfter(targetClass: Object, methodName: string, isStatic: boolean, after: Function): void;
    /**
     * 将指定类的原方法替换为另一个函数，适用于行为替换、兼容性适配、条件执行等需要完全改变方法实现逻辑的场景。
     * replace接口执行完成后，调用指定的类方法时，仅执行替换后的逻辑。最终返回替换函数执行完毕的返回值。
     *
     * @param { Object } targetClass - 指定的类对象。
     * @param { string } methodName - 指定的原方法名，不支持read-only方法。
     * @param { boolean } isStatic - 指定的原方法是否为静态方法。true表示静态方法，false表示实例方法。
     * @param { Function } instead - 要用来替换原方法的函数。函数有参数时，则第一个参数是this对象（若isStatic为true，
     *     则为类对象即targetClass；若isStatic为false，则为调用方法的实例对象），其余参数是原方法的参数。
     *     函数也可以无参，无参时不做处理。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice [since 12]
     * @since 11 dynamiconly
     */
    static replace(targetClass: Object, methodName: string, isStatic: boolean, instead: Function) : void;
  }
  /**
   * 提供将二进制流解码为字符串的能力。支持以下编码类型：utf-8、iso-8859-2、koi8-r、macintosh、windows-1250、
   * windows-1251、gbk、gb18030、big5、utf-16be 和 UTF-16le。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  class StringDecoder {
    /**
     * StringDecoder的构造函数，创建一个默认编码为'utf-8'的StringDecoder实例。
     *
     * @param { string } [encoding] - 输入数据的编码类型。默认值：'utf-8'。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    constructor(encoding?: string);
    /**
     * 返回一个解码后的字符串，确保Uint8Array末尾的任何不完整的多字节字符从返回的字符串中被过滤，并保存在一个内部的buffer中用于下次调用。
     *
     * @param { string | Uint8Array } chunk - 需要解码的字符串。会根据输入的编码类型进行解码，参数为Uint8Array时正常解码，参数为string时会将参数直接返回。
     * @returns { string } 返回解码后的字符串，不完整的多字节字符已从返回值中过滤，并保存在内部缓冲区中供下次调用处理。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    write(chunk: string | Uint8Array): string;
    /**
     * 结束解码过程，以字符串形式返回存储在内部缓冲区中的所有剩余输入。
     *
     * @param { string | Uint8Array } [chunk] - 需要解码的最后一部分数据，默认为undefined。当还有剩余数据需要在结束解码时一并处理时传入此参数；不传入时默认为undefined，即仅返回内部缓冲区中存储的不完整字节序列的解码结果，不再处理新数据。
     * @returns { string } 返回存储在内部缓冲区中的所有剩余解码内容组成的字符串。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    end(chunk?: string | Uint8Array): string;
  }
  /**
   * 获取主线程的栈追踪信息，最多返回 64 层调用帧。
   * 该接口可能对主线程性能产生影响，建议仅在必要时使用，如日志记录、错误分析或调试场景。
   *
   * @returns { string } 主线程的栈追踪信息。若主线程未处于执行 JavaScript 代码状态，则返回空字符串。
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  function getMainThreadStackTrace(): string;
  /**
   * 提供一个可通过开发者自定义回调释放由开发者管理的资源的接口。
   *
   * > **说明：**
   * >
   * > AutoFinalizer<T>需要和AutoFinalizerCleaner<T>一起使用，只实现该接口类没有任何功能。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 22 dynamiconly
   */
  interface AutoFinalizer<T> {
    /**
     * 开发者需要实现该接口，定义对象被回收时自动触发的资源清理回调。
     *
     * @param { T } heldValue - 当监听的对象被回收时，该值会被传递给`onFinalization`回调方法。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 22 dynamiconly
     */
    onFinalization(heldValue: T): void;
  }
  /**
   * 用于通过开发者自定义回调释放由开发者管理的资源的 cleaner。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 22 dynamiconly
   */
  class AutoFinalizerCleaner<T> {
    /**
     * 注册释放由开发者管理的资源的对象；当obj被回收时自动触发其onFinalization并传入heldValue。
     *
     * @param { AutoFinalizer<T> } obj - 注册到 cleaner 的对象。
     * @param { T } heldValue - 传递给 finalizer 的值。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 22 dynamiconly
     */
    static register<T>(obj: AutoFinalizer<T>, heldValue: T): void;
  }

  /**
   * 多线程安全检测功能参数配置。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @since 26.0.0 dynamiconly
   */
  interface MultithreadingDetectionOptions {
    /**
     * 若 abort 为 **true**，应用将崩溃；若 abort 为 **false**，应用将不崩溃。默认值为 **true**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamiconly
     */
    abort?: boolean;
    /**
     * 多线程安全检测的采样频率。
     * 该值表示两次检测之间的函数调用次数，数值越大表示采样频率越低；数值越小检测越及时但性能开销越大，数值越大则可能漏检。该值必须为整数，最小为 **100**，最大为 **2147483647**（默认 **100**）。
     * 该值应为整数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamiconly
     */
    frequency?: number;

    /**
     * 多线程安全检测的时间间隔（分钟）。该配置仅在abort为 **false** 时生效；建议不要设置为低于5分钟的值，否则可能产生严重性能影响。
     * 只有距离上次检测的时间超过此间隔时才会再次上报错误。
     * 该值必须为 [0,1440] 范围内的整数（默认 5min）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamiconly
     */
    interval?: number;
  }

  /**
   * 枚举，提示触发GC的紧急程度。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @since 26.1.0 dynamiconly
   */
  enum UrgencyLevel {
    /**
     * 紧急程度低，GC触发阈值较高但仍低于正常的GC触发阈值。
     * 适用于开发者期望主动触发GC去回收已死亡的对象但是应用的ArkTS内存压力仍然可控的场景。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 dynamiconly
     */
    LOW = 0,
    /**
     * 紧急程度中等，GC触发阈值介于LOW和HIGH之间。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 dynamiconly
     */
    MEDIUM = 1,
    /**
     * 紧急程度高，GC触发阈值低。
     * 适用于应用的ArkTS内存压力已经非常高，开发者期望系统尽可能快地触发GC去回收内存的场景
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 dynamiconly
     */
    HIGH = 2,
  }

  /**
   * 为开发者提供虚拟机维测能力的类。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @crossplatform
   * @since 23 dynamiconly
   */
  class ArkTSVM {
    /**
     * 若enabled为true则开启，为false则关闭。开启多线程安全检测，多线程问题的C/C++崩溃转储文件（cppcrash文件）里会包含
     * 多线程信息（如线程ID、锁状态等）。关闭多线程安全检测，则C/C++崩溃转储文件（cppcrash文件）里不会包含多线程信息。
     *
     * options是用于配置多线程安全检测的行为参数。
     *
     * @param { boolean } enabled - 控制多线程安全检测开关的开启或关闭。true表示开启，false表示关闭。
     * @param { MultithreadingDetectionOptions } [options] - 多线程安全检测的参数配置，此参数不填时，
     * 对应各属性取MultithreadingDetectionOptions的默认值。[since 26.0.0]
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamiconly
     */
    static setMultithreadingDetectionEnabled(enabled: boolean, options?: MultithreadingDetectionOptions):void;

    /**
     * 注册一个回调函数，在虚拟机主线程完成垃圾回收后，如果堆内存超过预警阈值则触发回调执行，适用于主动内存管理
     * （在内存压力较大时触发资源清理）、OOM预防等场景。
     *
     * 虚拟机是通过统计存活对象大小来判断是否达到内存预警阈值，由于虚拟机堆存在一定内存碎片以及浮动垃圾，无法保证在OOM前肯定会触发到回调。
     *
     * @param { Callback<string> } callback - 垃圾回收后内存达到预警阈值时触发的回调函数，字符串参数表示内存压力事件的类型。
     *     目前事件的类型有三种取值，"LocalHeapMemPressure"，"SharedHeapMemPressure"，"ProcessHeapMemPressure"。
     * @param { HeapMemoryThreshold } heapMemoryThreshold - 堆内存预警阈值配置，以百分比设置，取值范围为[70, 95]。超出范围时自动限制到有效区间。
     * @returns { boolean } 注册成功返回true，当不在主线程调用或回调已注册时返回false。
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    static onVMHeapMemoryPressure(callback: Callback<string>, heapMemoryThreshold: HeapMemoryThreshold): boolean;

    /**
     * 取消已注册的内存预警回调函数。此接口需要在主线程调用。
     *
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    static offVMHeapMemoryPressure(): void;

    /**
     * 获取所有VM线程的堆内存信息，包括线程ID、线程名称、堆类型和堆对象大小，适用于内存泄漏排查、内存使用分析等场景。
     * 使用Promise异步回调。
     *
     * 接口获取到的堆包含两种类型：local堆，即应用进程中每个ArkTS线程独有的虚拟机堆；shared堆，即应用进程中所有ArkTS线程共享的虚拟机堆。
     *
     * > **说明：**
     * >
     * > 此接口在执行时会暂停所有VM线程运行以获取内存信息。由于需要等待所有VM线程暂停，高负载场景下调用此接口的耗时可能较高。
     *
     * @returns { Promise<HeapMemoryInfo[]> } Promise对象，解析为HeapMemoryInfo对象数组，每个对象包含线程ID、线程名称、
     *     堆类型和堆对象大小。此方法可以获取local堆和shared堆的内存信息。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    static getAllVMHeapMemoryInfo(): Promise<HeapMemoryInfo[]>;

    /**
     * EventHandler和libuv的异步事件循环机制在执行异步任务时，任务将不在当前handle scope的管理范围内执行，创建的
     * napi_value不会被自动回收。若开发者在任务回调中未添加scope，将导致内存泄漏。调用该接口后，可确保这两个机制的任务
     * 在scope范围内执行，从而避免内存泄漏。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 24 dynamiconly
     */
    static enableLocalHandleDetection(): void;

    /**
     * 开启或关闭napi_ref与全局对象之间的关联追踪。开启后，堆快照中全局对象节点将包含napi_ref的地址信息；关闭后
     * （enable为false），将停止追踪，堆快照中不再显示napi_ref与全局对象之间的关联关系。
     *
     * 开启追踪后，虚拟机会额外记录napi_ref与全局对象的关联关系，可能带来一定的内存和性能开销。在不需要调试时，
     * 建议调用`util.ArkTSVM.setTrackGlobalRef(false)`关闭追踪。
     *
     * 该接口的开关为进程级别，进程内的所有线程共享同一开关状态。在任意线程调用本接口设置开关后，将对该进程内所有线程生效。
     *
     * 关于napi_ref的详细说明，请参考napi_ref使用指导。
     *
     * @param { boolean } enable - 是否开启追踪。true表示开启追踪（可能带来一定的内存和性能开销），false表示关闭追踪。
     *     建议在不需要调试时设置为false以避免性能开销。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamiconly
     */
    static setTrackGlobalRef(enable: boolean): void;

    /**
     * 获取当前调用线程所属虚拟机中正在使用的全局句柄（global handle）数量，适用于内存观测等场景。
     *
     * > **说明：**
     * >
     * > 在worker线程中调用本接口时，返回的是该worker线程所属虚拟机的计数，而非主线程虚拟机的计数。
     * >
     * > 该接口仅统计强引用（global handle）的数量，不包含弱引用（WeakRef）和Sendable引用（SendableRef）的数量。
     * > 弱引用存储在独立的弱引用链表中，Sendable引用存储在独立的Sendable全局存储中，均不在本接口的遍历范围内。
     * > 返回值受强引用创建/删除操作的影响，例如napi_create_strong_reference、napi_delete_strong_reference等接口
     * > 会相应增减计数，napi_create_strong_sendable_reference、napi_delete_strong_sendable_reference等接口
     * > 不会影响计数结果。
     *
     * @returns { number } 当前调用线程所属虚拟机中正在使用的全局句柄数量。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 dynamiconly
     */
    static getGlobalHandleCount(): number;

    /**
     * 提示当前ArkTS虚拟机主动触发GC的接口。
     * 虚拟机根据当前内存状态和紧急程度决定是否触发GC。
     * 默认参数值是Urgency.LOW。
     * 不推荐高频调用，因为GC可能带来较高的性能开销
     *
     * @param { UrgencyLevel } [level] - 紧急程度.<br>可选的参数值如下:
     *     <br>- **Urgency.LOW** (默认值): 紧急程度低, GC触发阈值相对较高,
     *     适用于开发者期望主动触发GC去回收已死亡的对象但是应用的ArkTS内存压力仍然可控的场景。
     *     <br>- **Urgency.MEDIUM**: 紧急程度中等, GC触发阈值介于LOW和HIGH之间。
     *     <br>- **Urgency.HIGH**: 紧急程度高, GC触发阈值低,
     *     适用于应用的ArkTS内存压力已经非常高，开发者期望系统尽可能快地触发GC去回收内存的场景
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @crossplatform
     * @since 26.1.0 dynamiconly
     */
    static hintGC(level?: UrgencyLevel): void;
  }

  /**
   * 描述 ArkTS-VM 的堆内存信息，或当前进程的共享堆内存信息。
   *
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  interface HeapMemoryInfo {
    /**
     * 如果此内存信息描述的是 ArkTS-VM 的 local 堆，该值为表示运行线程 ID 的整数；
     * 如果此内存信息描述的是 shared 堆，则该值为 undefined。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    threadId?: number;

    /**
     * 如果此内存信息描述的是 ArkTS-VM 的 local 堆，该值为表示运行线程名称的字符串；
     * 如果此内存信息描述的是 shared 堆，则该值为 undefined。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    threadName?: string;

    /**
     * 该值为字符串，表示此内存信息是来自 ArkTS-VM 的 local 堆还是 shared 堆。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    heapType: string;

    /**
     * 该值为整数，表示来自 ArkTS-VM 的 local 堆或 shared 堆的所有堆对象的总大小（KB）。
     *
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    heapObjectSize: number;
  }

  /**
   * 描述 GC 后触发已注册回调的堆内存预警阈值。
   *
   * @interface HeapMemoryThreshold
   * @syscap SystemCapability.Utils.Lang
   * @stagemodelonly
   * @since 24 dynamiconly
   */
  interface HeapMemoryThreshold {
    /**
     * 该值为 70 到 95 之间的整数，表示 GC 后触发回调的 local 堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。
     * 若未设置，则不会因 local 堆内存压力而触发回调。
     *
     * @type { ?number }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    localHeapThreshold?: number;

    /**
     * 该值为 70 到 95 之间的整数，表示 GC 后触发回调的 shared 堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。
     * 若未设置，则不会因 shared 堆内存压力而触发回调。
     *
     * @type { ?number }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    sharedHeapThreshold?: number;

    /**
     * 该值为 70 到 95 之间的整数，表示 GC 后触发回调的进程总堆内存百分比阈值。超出此范围的值会被自动限制到有效范围内。
     * 若未设置，则不会因进程堆内存压力而触发回调。
     *
     * @type { ?number }
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    processHeapThreshold?: number;
  }
}

import type { Callback } from './@ohos.base';

export default util;
