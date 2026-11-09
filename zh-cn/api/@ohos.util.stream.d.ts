/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * @file 流
 * @kit ArkTS
 */

/*** if arkts dynamic */
import { Callback } from './@ohos.base';
import emitter from './@ohos.events.emitter';
/*** endif */

/*** if arkts static */
import buffer from '@ohos.buffer';
/*** endif */

/**
 * 本模块提供基本流类型的处理能力，支持数据分块读取或写入，避免一次性加载整个数据到内存。
 * 包括可写流（[Writable]{@link stream.Writable}）、可读流（[Readable]{@link stream.Readable}）、双工流（[Duplex]{@link stream.Duplex}）和转换流（[Transform]{@link stream.Transform}）。
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace stream {
  /**
   * 描述**Readable**构造函数中使用的选项。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface ReadableOptions {
    /**
     * 编码格式。如果输入无效字符串，会在**Readable**构造函数中抛出异常。
     *
     * 支持以下格式：utf-8、UTF-8、GBK、GB2312、gb2312、GB18030、gb18030、ibm866、iso-8859-2、iso-8859-3、iso-8859-4、iso-8859-5、iso-8859-6、iso-8859-7、iso-8859-8、iso-8859-8-i、iso-8859-10、iso-8859-13、iso-8859-14、iso-8859-15、koi8-r、koi8-u、macintosh、windows-874、windows-1250、windows-1251、windows-1252、windows-1253、windows-1254、windows-1255、windows-1256、windows-1257、windows-1258、gbk、big5、euc-jp、iso-2022-jp、shift_jis、euc-kr、x-mac-cyrillic、utf-16be和utf-16le。
     *
     * 默认值为**'utf-8'**。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    encoding?: string;
  }

  /**
   * 可写入数据的流。可写流允许将数据写入到目标中，这个目标可以是文件、HTTP响应、标准输出、另一个流等。可写流采用缓冲区机制：数据通过write()写入缓冲区，缓冲区数据通过doWrite()自动写出到目标，开发者需实现doWrite以定义数据写出的具体行为。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Writable {
    /**
     * Writable的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 将数据写入流的缓冲区中。数据写入缓冲区后，当缓冲区数据被消耗时，会自动调用[doWrite()]{@link stream.Writable.doWrite}将数据写出。使用callback异步回调。
     *
     * @param { string | Uint8Array } [chunk] - 需要写入的数据。默认值为undefined。当前版本不支持传入null、undefined和空字符串，会抛出异常。
     * @param { string } [encoding] - 字符编码类型。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @param { Function } [callback] - 回调函数，用于在数据写入完成后执行特定逻辑。传入callback时，数据写入缓冲区后会调用该回调函数；不传入时，不调用回调函数。
     * @returns { boolean } 可写流的缓冲区中是否还有空间。true表示缓冲区还有空间，false表示流的内部缓冲区数据量已达到设定水位线，不建议继续写入以避免内存溢出。
     * @throws { BusinessError } 10200035 - The doWrite method has not been implemented.
     * @throws { BusinessError } 10200036 - The stream has been ended.
     * @throws { BusinessError } 10200037 - The callback is invoked multiple times consecutively.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    write(chunk?: string | Uint8Array, encoding?: string, callback?: Function): boolean;

    /**
     * 结束可写流的写入操作。如果属性writableCorked的值大于0，会将该属性的值置0，并输出缓冲区剩余数据。如果传入chunk参数且不为空值时，则根据实际运行情况，通过write或者doWrite将其作为最后一块数据写入。其中通过doWrite写入时，encoding参数的合法性检查依赖doWrite。end单独使用（不使用write）并传入chunk参数的情况下，必然通过doWrite写入。使用callback异步回调。
     *
     * @param { string | Uint8Array } [chunk] - 需要写入的数据。默认值为undefined。
     * @param { string } [encoding] - 字符编码类型。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @param { Function } [callback] - 回调函数。传入时异步调用，不传入时，不调用回调函数。
     * @returns { Writable } 返回当前可写流对象。
     * @throws { BusinessError } 10200035 - The doWrite method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    end(chunk?: string | Uint8Array, encoding?: string, callback?: Function): Writable;

    /**
     * 设置可写流的默认字符编码类型。
     *
     * @param { string } [encoding] - 设置默认字符编码类型。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @returns { boolean } 返回是否设置成功。true表示成功，false表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultEncoding(encoding?: string): boolean;

    /**
     * 使后续写入的数据强制写入缓冲区，优化连续写入操作的性能。使用后属性writableCorked的值会加一。建议和[uncork()]{@link stream.Writable.uncork}成对使用。
     *
     * @returns { boolean } 返回设置cork状态是否成功。true表示成功，false表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cork(): boolean;

    /**
     * 解除cork状态，解除后刷新缓冲区数据并写入目标位置。使用后属性writableCorked的值会减一，如果该值降为0，则解除cork状态，否则流依然处于cork状态。建议和[cork()]{@link stream.Writable.cork}成对使用。
     *
     * @returns { boolean } 返回解除cork状态是否成功。true表示成功，false表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncork(): boolean;

    /**
     * 注册事件处理函数来监听可写流上的不同事件。
     *
     * @param { string } event - 事件回调类型，支持的事件包括：`'close'` | `'drain'` | `'error'` | `'finish'` 。
     *     - `'close'`：完成[end()]{@link stream.Writable.end}调用，结束写入操作，触发该事件。
     *     - `'drain'`：在可写流缓冲区中数据清空时触发该事件。
     *     - `'error'`：在可写流发生异常时触发该事件。
     *     - `'finish'`：在数据缓冲区全部写入到目标后触发该事件。
     * @param { Callback<emitter.EventData> } callback - 回调函数，返回事件传输的数据。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(event: string, callback: Callback<emitter.EventData>): void;

    /**
     * 注册事件消息。
     *
     * @param { string } event - 注册的事件。
     * @param { Function } callback - 事件回调。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    on(event: string, callback: Function): void;

    /**
     * 移除通过[on]{@link stream.Writable#on(event: string, callback: Callback<emitter.EventData>)}注册的事件处理函数。
     *
     * @param { string } event - 事件回调类型，支持的事件包括：`'close'` | `'drain'` | `'error'` | `'finish'` 。
     *     - `'close'`：完成[end()]{@link stream.Writable.end}调用，结束写入操作，触发该事件。
     *     - `'drain'`：在可写流缓冲区中数据清空时触发该事件。
     *     - `'error'`：在可写流发生异常时触发该事件。
     *     - `'finish'`：在数据缓冲区全部写入到目标后触发该事件。
     * @param { Callback<emitter.EventData> } [callback] - 指定事件的要注销的回调函数。不传入时注销指定事件的所有回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(event: string, callback?: Callback<emitter.EventData>): void;

    /**
     * 取消事件消息。
     *
     * @param { string } event - 注册的事件。
     * @param { Function } [callback] - 事件回调。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    off(event: string, callback?: Function): void;

    /**
     * 开发者实现这个函数。该函数在可写流初始化阶段被调用，无需手动触发。使用callback异步回调。
     *
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doInitialize(callback: Function): void;

    /**
     * 提供一个数据写出接口供开发者实现，该接口函数会在数据被成功写出时自动调用，无需手动触发。使用callback异步回调。
     *
     * @param { string | Uint8Array } chunk - 要写出的数据。
     * @param { string } encoding - 字符编码类型。当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void;

    /**
     * 提供一个数据批量写出接口供开发者实现，该接口函数会在数据被成功写出时自动调用，无需开发者手动触发。使用callback异步回调。
     *
     * @param { string[] | Uint8Array[] } chunks - 待批量写出的数据块数组。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWritev(chunks: string[] | Uint8Array[], callback: Function): void;

    /**
     * 表示可写流是否以对象模式工作。true表示流被配置为对象模式，false表示流处于非对象模式。当前版本只支持原始数据（字符串和Uint8Array），返回值为false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableObjectMode(): boolean;

    /**
     * 定义可写流缓冲区数据量的水位线大小，单位：字节。当前版本不支持开发者自定义修改水位线大小。调用write()写入数据后，若缓冲区数据量达到该值，write()会返回false。默认值为16 * 1024字节。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableHighWatermark(): int;

    /**
     * 表示可写流是否处于可写状态。true表示流当前是可写的，false表示流当前不再接受写入操作。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writable(): boolean;

    /**
     * 表示可写流缓冲区中待写入的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableLength(): int;

    /**
     * 表示可写流cork状态计数。值大于0时，可写流处于强制写入缓冲区状态；值为0时，该状态解除。使用cork()方法时计数加一，使用uncork()方法时计数减一，使用end()方法时计数清零。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableCorked(): int;

    /**
     * 表示当前可写流的end()是否被调用，该状态不代表数据已经全部写入。true表示end()已被调用，false表示end()未被调用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableEnded(): boolean;

    /**
     * 表示当前可写流是否处于写入完成状态。true表示当前流已处于写入完成状态，false表示当前流的写入操作可能还在进行中。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableFinished(): boolean;
  }

  /**
   * 可从中读取数据的流。可读流用于从源（如文件或网络套接字）读取数据。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Readable {
    /**
     * Readable的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * Readable的构造函数。
     *
     * @param { ReadableOptions } options - Readable构造函数的选项信息。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(options: ReadableOptions);

    /**
     * 从可读流缓冲区读取数据，并返回读取到的数据，如果未读取到数据，则返回null。
     *
     * @param { number } size - 读取数据的字节数。默认为undefined。
     * @returns { string | null } 从可读流缓冲区读取出的数据。如果未读取到数据，则返回null。
     * @throws { BusinessError } 10200038 - The doRead method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    read(size?: number): string | null;

    /**
     * 从缓冲区中读取指定大小的数据。如果可用缓冲区足够，则返回指定大小的结果；否则，如果Readable已结束，则返回所有剩余的缓冲区。
     *
     * @param { int } [size] - 待读取数据的期望长度。
     *     该值为整数。
     * @returns { buffer.Buffer | string | null } 如果没有可读取的数据，则返回null。
     * @throws { BusinessError } 10200038 - The doRead method has not been implemented.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    read(size?: int): buffer.Buffer | string | null;

    /**
     * 将流的读取模式从暂停切换到流动模式，可用接口isPaused判断是否已切换。
     *
     * @returns { Readable } 当前可读流本身。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    resume(): Readable;

    /**
     * 将流的读取模式从流动切换到暂停模式，可用接口isPaused判断是否已切换。
     *
     * @returns { Readable } 当前可读流本身。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pause(): Readable;

    /**
     * 设置可读流的字符编码类型。
     * 当缓冲区有数据时，不允许设置字符编码类型，返回值为false。
     *
     * @param { string } [encoding] - 需要设置的字符编码类型。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @returns { boolean } 返回是否设置成功。true表示设置成功，false表示设置失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setEncoding(encoding?: string): boolean;

    /**
     * 检查流是否处于暂停模式，调用[pause()]{@link stream.Readable.pause}后，返回值为true；调用[resume()]{@link stream.Readable.resume}后，返回值为false。
     *
     * @returns { boolean } 返回流是否处于暂停模式。true表示流处于暂停模式，false表示流未处于暂停模式。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isPaused(): boolean;

    /**
     * 将一个可读流与一个可写流连接起来，实现数据的自动传输。
     *
     * @param { Writable } destination - 接收数据的可写流。
     * @param { Object } [options] - 预留字段，暂不支持使用。
     * @returns { Writable } 返回当前可写流对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    pipe(destination: Writable, options?: Object): Writable;

    /**
     * 从可写流中移除所有或指定的已连接的可读流。
     *
     * @param { Writable } [destination] - 从当前可写流中移除指定的这个可读流。默认为undefined。
     * @returns { Readable } 返回当前可读流对象。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    unpipe(destination?: Writable): Readable;

    /**
     * 注册事件处理函数来监听可读流上的不同事件。
     *
     * @param { string } event - 事件回调类型，支持的事件包括：`'close'` | `'data'` | `'end'` | `'error'` | `'readable'` | `'pause'` | `'resume'` 。
     *     - `'close'`：可读流关闭，发生error事件或end事件后触发该事件。
     *     - `'data'`：当流传递给消费者一个数据块时触发该事件。
     *     - `'end'`：完成[push()]{@link stream.Readable.push}调用，传入null值，触发该事件。
     *     - `'error'`：流发生异常时触发。
     *     - `'readable'`：当有可从流中读取的数据时触发该事件。
     *     - `'pause'`：完成[pause()]{@link stream.Readable.pause}调用，触发该事件。
     *     - `'resume'`：完成[resume()]{@link stream.Readable.resume}调用，触发该事件。
     * @param { Callback<emitter.EventData> } callback - 回调函数，返回事件数据。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    on(event: string, callback: Callback<emitter.EventData>): void;

    /**
     * 注册事件消息。
     *
     * @param { string } event - 注册的事件。
     * @param { Function } callback - 事件回调。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    on(event: string, callback: Function): void;

    /**
     * 移除通过[on]{@link stream.Readable#on(event: string, callback: Callback<emitter.EventData>)}注册的事件处理函数。
     *
     * @param { string } event - 事件回调类型，支持的事件包括：`'close'` | `'data'` | `'end'` | `'error'` | `'readable'` | `'pause'` | `'resume'` 。
     *     - `'close'`：可读流关闭，发生error事件或end事件后触发该事件。
     *     - `'data'`：当流传递给消费者一个数据块时触发该事件。
     *     - `'end'`：完成[push()]{@link stream.Readable.push}调用，传入null值，触发该事件。
     *     - `'error'`：流发生异常时触发。
     *     - `'readable'`：当有可从流中读取的数据时触发该事件。
     *     - `'pause'`：完成[pause()]{@link stream.Readable.pause}调用，触发该事件。
     *     - `'resume'`：完成[resume()]{@link stream.Readable.resume}调用，触发该事件。
     * @param { Callback<emitter.EventData> } [callback] - 指定事件的要注销的回调函数。不传入时注销指定事件的所有回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    off(event: string, callback?: Callback<emitter.EventData>): void;

    /**
     * 取消事件消息。
     *
     * @param { string } event - 注册的事件。
     * @param { Function } [callback] - 事件回调。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 23 static
     */
    off(event: string, callback?: Function): void;

    /**
     * 开发者实现这个函数，这个函数在可读流第一次使用[on]{@link stream.Readable#on(event: string, callback: Callback<emitter.EventData>)}监听时被调用。使用callback异步回调。
     *
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doInitialize(callback: Function): void;

    /**
     * 数据读取接口，需要在子类中被实现。
     *
     * @param { int } size - 读取数据的字节数。 取值范围：0 <= size <= Number.MAX_VALUE。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doRead(size: int): void;

    /**
     * 将数据推送到可读流缓冲区中。
     *
     * @param {  Uint8Array | string | null } chunk - 读取的数据。 <br> API version22开始发生兼容性变更，在API version21及之前的版本其类型为：
     * `Uint8Array | string | null`。 [since 12 - 22]
     * @param {  Uint8Array | string | undefined | null } chunk - 读取的数据。 <br> API version22开始发生兼容性变更，在API
     * version21及之前的版本其类型为：`Uint8Array | string | null`。 [since 23]
     * @param { string } [encoding] - 数据的字符编码类型。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @returns { boolean } 可读流的缓冲区中是否还有空间。true表示缓冲区还有空间，false表示流的内部缓冲区已满。输入null时，固定返回false表示推送结束，没有数据块可推送。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    push(chunk: Uint8Array | string | undefined | null, encoding?: string): boolean;

    /**
     * 用于指定可读流是否以对象模式工作。true表示流被配置为对象模式，false表示流处于非对象模式。当前版本只支持原始数据（字符串和Uint8Array），返回值为false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableObjectMode(): boolean;

    /**
     * 表示可读流是否处于可读状态。true表示流处于可读状态，false表示流中没有更多数据可供读取。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readable(): boolean;

    /**
     * 定义缓冲区的最大数据量，单位：字节。默认值为16 * 1024字节。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableHighWatermark(): int;

    /**
     * 表示当前可读流的状态。true表示流处于流动模式，false表示流处于非流动模式。默认值是true。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableFlowing(): boolean | null;

    /**
     * 表示缓冲区的当前字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableLength(): int;

    /**
     * 被解码成字符串时所使用的字符编码。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableEncoding(): string | null;

    /**
     * 表示当前可读流是否已经结束。true表示流已经没有更多数据可读且已结束，false表示流尚未结束，仍有数据可读或等待读取。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get readableEnded(): boolean;
  }

  /**
   * 既可读又可写的流。双工流允许数据双向传输，即可读可写。
   * **Duplex**类继承自[Readable]{@link stream.Readable}，支持**Readable**中的所有API。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Duplex extends Readable {
    /**
     * Duplex的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 将数据写入流的缓冲区中。使用callback异步回调。
     *
     * @param { string | Uint8Array } [chunk] - 需要写入的数据。默认值为undefined。当前版本不支持传入null、undefined和空字符串，会抛出异常。
     * @param { string } [encoding] - 字符编码类型。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @param { Function } [callback] - 回调函数，用于在数据写入完成后执行特定逻辑。传入callback时，数据写入缓冲区后会调用该回调函数；不传入时，不调用回调函数。
     * @returns { boolean } 可写流的缓冲区中是否还有空间。true表示缓冲区还有空间，false表示流的内部缓冲区数据量已达到设定水位线，不建议继续写入，如果连续调用写入函数，数据仍会被添加到缓冲区中，
     * 直到内存溢出为止。
     * @throws { BusinessError } 10200036 - The stream has been ended.
     * @throws { BusinessError } 10200037 - The callback is invoked multiple times consecutively.
     * @throws { BusinessError } 10200039 - The doTransform method has not been implemented for a class that inherits
     *     from Transform.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    write(chunk?: string | Uint8Array, encoding?: string, callback?: Function): boolean;

    /**
     * 结束双工流的写入操作。如果属性writableCorked的值大于0，会将该属性的值置0，并输出缓冲区剩余数据。如果传入chunk参数，则根据实际运行情况，通过write或者doWrite将其作为最后一块数据写入。其中通过doWrite写入时，encoding参数的合法性检查依赖doWrite。end单独使用（不使用write）并传入chunk参数的情况下，必然通过doWrite写入。使用callback异步回调。
     *
     * @param { string | Uint8Array } [chunk] - 需要写入的数据。默认值为undefined。
     * @param { string } [encoding] - 字符编码类型。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @param { Function } [callback] - 回调函数。传入时异步调用，不传入时，不调用回调函数。
     * @returns { Writable } 返回可写流对象。
     * @throws { BusinessError } 10200039 - The doTransform method has not been implemented for a class that inherits
     *     from Transform.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    end(chunk?: string | Uint8Array, encoding?: string, callback?: Function): Writable;

    /**
     * 设置双工流的默认字符编码类型，确保在读取数据时正确解析字符。
     *
     * @param { string } [encoding] - 需要设置的默认字符编码类型。默认值是'utf8'，当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @returns { boolean } 返回是否设置成功。true表示设置成功，false表示设置失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultEncoding(encoding?: string): boolean;

    /**
     * 将写入的数据强制写入缓冲区暂存，用来优化连续写入操作的性能。使用后属性writableCorked的值会加一。建议和[uncork()]{@link stream.Writable.uncork}成对使用。
     *
     * @returns { boolean } 返回设置cork状态是否成功。true表示设置成功，false表示设置失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    cork(): boolean;

    /**
     * 解除cork状态，解除后将缓冲区中的数据全部刷新，并将其写入目标位置。使用后属性writableCorked的值会减一，如果该值降为0，则解除cork状态，否则流依然处于cork状态。建议和[cork()]{@link stream.Writable.cork}成对使用。
     *
     * @returns { boolean } 返回解除cork状态是否成功。true表示成功，false表示失败。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    uncork(): boolean;

    /**
     * 数据写出接口是一个由开发者实现的函数，在数据被写出时自动调用，而不需要开发者手动调用。使用callback异步回调。
     *
     * @param { string | Uint8Array } chunk - 要写出的数据。
     * @param { string } encoding - 字符编码类型。当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void;

    /**
     * 数据分批写出接口是一个由开发者实现的函数，在数据被写出时自动调用，而不需要开发者手动调用。使用callback异步回调。
     *
     * @param { string[] | Uint8Array[] } chunks - 待批量写出的数据块数组。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doWritev(chunks: string[] | Uint8Array[], callback: Function): void;

    /**
     * 用于指定双工流的写模式是否以对象模式工作。true表示流的写模式被配置为对象模式，false表示流的写模式处于非对象模式。当前版本只支持原始数据（字符串和Uint8Array），返回值为false。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableObjectMode(): boolean;

    /**
     * 定义双工流的写模式下缓冲区数据量的水位线大小。当前版本不支持开发者自定义修改设置水位线大小。调用write()写入后，若缓冲区数据量达到该值，write()会返回false。默认值为16 * 1024字节。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableHighWatermark(): int;

    /**
     * 表示双工流是否处于可写状态。true表示当前流是可写的，false表示流当前不再接受写入操作。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writable(): boolean;

    /**
     * 表示双工流缓冲区中待写入的字节数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableLength(): int;

    /**
     * 表示双工流cork状态计数。值大于0时，双工流处于强制写入缓冲区状态，值为0时，该状态解除。使用cork()方法时计数加一，使用uncork()方法时计数减一，使用end()方法时计数清零。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableCorked(): int;

    /**
     * 表示当前双工流的end()是否被调用，该状态不代表数据已经全部写入。true表示end()已被调用，false表示end()未被调用。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableEnded(): boolean;

    /**
     * 表示当前双工流是否处于写入完成状态。true表示当前流已处于写入完成状态，false表示当前流的写入操作可能还在进行中。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    get writableFinished(): boolean;
  }

  /**
   * 一种特殊的双工流，支持数据转换和结果输出。**Transform**类继承自[Duplex]{@link stream.Duplex}，支持**Duplex**中的所有API。
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  class Transform extends Duplex {
    /**
     * Transform的构造函数。
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 对输入的数据块进行转换或处理，并通过回调函数通知操作完成。
     *
     * @param { string } chunk - 需要写入的数据。
     * @param { string } encoding - 字符编码类型。当前版本支持'utf8'、'gb18030'、'gbk'以及'gb2312'。
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doTransform(chunk: string, encoding: string, callback: Function): void;

    /**
     * 该函数会在流结束时被调用，用于处理剩余的数据。使用callback异步回调。
     *
     * @param { Function } callback - 回调函数。
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    doFlush(callback: Function): void;
  }
}

export default stream;
