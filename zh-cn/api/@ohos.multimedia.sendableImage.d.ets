/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @kit ImageKit
 */

import { AsyncCallback } from './@ohos.base';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import type image from './@ohos.multimedia.image';
import type resourceManager from './@ohos.resourceManager';
import type rpc from './@ohos.rpc';
import lang from '../arkts/@arkts.lang';
import collections from '../arkts/@arkts.collections';
/**
 * 本模块基于[Sendable](docroot://arkts-utils/arkts-sendable.md)对象，提供图片处理效果，包括通过属性创建PixelMap、读取图像像素数据、读取区域内的图片数据等。
 *
 * @syscap SystemCapability.Multimedia.Image.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendableImage {

  /**
   * 表示图片尺寸。
   * 
   * 继承自[lang.ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Size extends lang.ISendable {
    /**
     * 输出图片的高，单位：像素。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    height: number;

    /**
     * 输出图片的宽，单位：像素。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    width: number;
  }

  /**
   * 表示区域信息。
   * 
   * 继承自[lang.ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Region extends lang.ISendable {
    /**
     * 区域大小。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    size: Size;

    /**
     * 区域横坐标。单位：像素。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    x: number;

    /**
     * 区域纵坐标。单位：像素。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    y: number;
  }

  /**
   * 通过传入的uri创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完
   * 成，且后续不再使用该实例。
   *
   * 从API version 10开始支持SVG标签，使用版本为(SVG) 1.1, SVG标签需设置width和height。SVG文件可添加XML声明，应以**<?xml**开头，当前支持的标签列表有：
   * 
   * - a
   * - circle
   * - clipPath
   * - defs
   * - ellipse
   * - feBlend
   * - feColorMatrix
   * - feComposite
   * - feDiffuseLighting
   * - feDisplacementMap
   * - feDistantLight
   * - feFlood
   * - feGaussianBlur
   * - feImage
   * - feMorphology
   * - feOffset
   * - fePointLight
   * - feSpecularLighting
   * - feSpotLight
   * - feTurbulence
   * - filter
   * - g
   * - image
   * - line
   * - linearGradient
   * - mask
   * - path
   * - pattern
   * - polygon
   * - polyline
   * - radialGradient
   * - rect
   * - stop
   * - svg
   * - text
   * - textPath
   * - tspan
   * - use
   *
   * @param { string } uri - 图片路径，当前仅支持应用沙箱路径。</br>当前支持格式有：.jpg .png .gif .bmp .webp .dng
   *     .SVG .ico。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(uri: string): ImageSource;

  /**
   * 通过传入文件描述符来创建ImageSource实例。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完
   * 成，且后续不再使用该实例。
   *
   * @param { number } fd - 文件描述符fd。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(fd: number): ImageSource;

  /**
   * 通过缓冲区创建ImageSource实例。buf数据是未解码的数据，不可以传入类似于RBGA，YUV的像素buffer数据，如果想通过像素buffer数据创建pixelMap，可以调用
   * [sendableImage.createPixelMap]{@link sendableImage.createPixelMap}这一类方法。
   * 
   * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完
   * 成，且后续不再使用该实例。
   *
   * @param { ArrayBuffer } buf - 图像缓冲区数组。
   * @returns { ImageSource } 返回ImageSource类实例，失败时返回undefined。
   * @syscap SystemCapability.Multimedia.Image.ImageSource
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamiconly
   */
  function createImageSource(buf: ArrayBuffer): ImageSource;

  /**
   * 通过图片大小、图片格式、容量创建ImageReceiver实例。
   * 
   * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行
   * 完成，且后续不再使用该实例。
   *
   * @param { Size } size - 图像的默认大小。
   * @param { ImageFormat } format - 图像格式，取值为image.ImageFormat常量，目前仅支持 ImageFormat:JPEG。
   * @param { number } capacity - 同时访问的最大图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
   * @returns { ImageReceiver } 如果操作成功，则返回ImageReceiver实例。
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 12 dynamiconly
   */
  function createImageReceiver(size: image.Size, format: image.ImageFormat, capacity: number): ImageReceiver;

  /**
   * ISendable是所有Sendable类型（除null和undefined）的父类型。自身没有任何必须的方法和属性。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  type ISendable = lang.ISendable;

  /**
   * 通过像素数据和图像属性创建PixelMap。传入的像素数据会进行拷贝并转换为[InitializationOptions]{@link image.InitializationOptions}.pixelFormat
   * 指定的像素格式，用于初始化PixelMap的像素。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 此接口不支持创建以下像素格式的PixelMap：RGBA_1010102、YCBCR_P010、YCRCB_P010和ASTC_4x4。
   * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。
   * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @param { ArrayBuffer } colors - 图像像素数据的缓冲区，用于初始化PixelMap的像素。缓冲区内的像素数据必须紧密排列，不可以包含
   *     内存对齐填充字节。<br>缓冲区的像素格式需要由[InitializationOptions]{@link image.InitializationOptions}.srcPixelFormat指定，
   *     否则默认缓冲区的像素格式为BGRA_8888。<br>**说明：** 缓冲区长度为：图像宽度 * 图像高度 * 每像素字节数。
   * @param { InitializationOptions } options - 创建图像的初始化属性，包括尺寸、像素格式、透明度类型、缩放模式和是否可编辑。
   *     <br>**说明：** 如果像素格式被指定为ASTC_4x4，则会使用默认的RGBA_8888格式。
   * @returns { Promise<PixelMap> } Promise对象，返回创建的PixelMap。<br>当创建的PixelMap大小超过源像素数据所能表示的图像大小时，
   *     返回按源像素数据所能表示的图像大小创建的PixelMap。
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  function createPixelMap(colors: ArrayBuffer, options: image.InitializationOptions): Promise<PixelMap>;

  /**
   * 通过像素数据和图像属性创建PixelMap。传入的像素数据会进行拷贝并转换为[InitializationOptions]{@link image.InitializationOptions}.pixelFormat
   * 指定的像素格式，用于初始化PixelMap的像素。同步返回结果。
   *
   * > **说明：**
   * >
   * > - 此接口不支持创建以下像素格式的PixelMap：RGBA_1010102、YCBCR_P010、YCRCB_P010和ASTC_4x4。
   * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。
   * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @param { ArrayBuffer } colors - 图像像素数据的缓冲区，用于初始化PixelMap的像素。缓冲区内的像素数据必须紧密排列，不可以包含
   *     内存对齐填充字节。<br>缓冲区的像素格式需要由[InitializationOptions]{@link image.InitializationOptions}.srcPixelFormat指定，
   *     否则默认缓冲区的像素格式为BGRA_8888。<br>**说明：** 缓冲区长度为：图像宽度 * 图像高度 * 每像素字节数。
   * @param { InitializationOptions } options - 创建图像的初始化属性，包括尺寸、像素格式、透明度类型、缩放模式和是否可编辑。
   *     <br>**说明：** 如果像素格式被指定为ASTC_4x4，则会使用默认的RGBA_8888格式。
   * @returns { PixelMap } 返回创建的PixelMap对象，接口调用失败时会抛出异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @since 12 dynamiconly
   */
  function createPixelMapSync(colors: ArrayBuffer, options: image.InitializationOptions): PixelMap;

  /**
   * 从MessageSequence中反序列化并获取PixelMap。
   *
   * > **说明：**
   * >
   * > 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。
   * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @param { rpc.MessageSequence } sequence - 保存了PixelMap序列化数据的MessageSequence。
   * @returns { PixelMap } 返回创建的PixelMap对象，接口调用失败时会抛出异常。
   * @throws { BusinessError } 62980096 - Operation failed.
   * @throws { BusinessError } 62980097 - IPC error.
   * @throws { BusinessError } 62980115 - Invalid input parameter.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980177 - Abnormal API environment.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @throws { BusinessError } 62980179 - Abnormal buffer size.
   * @throws { BusinessError } 62980180 - FD mapping failed.
   * @throws { BusinessError } 62980246 - Failed to read the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  function createPixelMapFromParcel(sequence: rpc.MessageSequence): PixelMap;

  /**
   * 根据Surface ID和区域信息创建一个PixelMap对象。该区域的大小由[Region]{@link image.Region}.size指定。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 当设备为折叠屏，切换折叠状态时，可能因Surface自带旋转角度导致接口创建失败。需根据Surface的旋转角度相应调整传入的宽高值，如旋转90°或270°时互换宽与高。
   * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。
   * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @param { string } surfaceId - 对应Surface的ID，可通过预览组件获取，如
   *     [XComponent](../apis-arkui/arkui-ts/ts-basic-components-xcomponent.md)组件。
   * @param { Region } region - 截取的画面区域。仅支持从画面左上角开始截取部分或整个画面，即Region中的x和y必须为0，
   *     Region.size中width和height的取值范围分别为[1, 预览流宽度]和[1, 预览流高度]。
   *     如需截取任意区域，可先获取整个画面，再使用[crop]{@link sendableImage.PixelMap.crop}截取所需区域。
   * @returns { Promise<PixelMap> } Promise对象，返回创建的PixelMap对象，接口调用失败时会抛出异常。
   * @throws { BusinessError } 62980115 - If the image parameter invalid.
   * @throws { BusinessError } 62980105 - Failed to get the data.
   * @throws { BusinessError } 62980178 - Failed to create the PixelMap.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  function createPixelMapFromSurface(surfaceId: string, region: image.Region): Promise<PixelMap>;

  /**
   * 通过image下的PixelMap创建出一个sendableImage下的PixelMap，同步返回PixelMap结果。原PixelMap的方法均不可再调用。
   *
   * > **说明：**
   * >
   * > 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。
   * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @param { image.PixelMap } pixelmap - image下的非Sendable的PixelMap。
   * @returns { PixelMap } 成功同步返回Sendable的PixelMap对象，失败抛出异常。
   * @throws { BusinessError } 401 - If the image parameter invalid. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  function convertFromPixelMap(pixelmap: image.PixelMap): PixelMap;

  /**
   * 通过sendableImage下的PixelMap创建出一个image下的PixelMap，同步返回PixelMap结果。原PixelMap的方法均不可再调用。
   *
   * > **说明：**
   * >
   * > 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link image.PixelMap.release}方法及时释放内存。
   * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @param { PixelMap } pixelmap - sendableImage下的PixelMap。
   * @returns { image.PixelMap } 成功同步返回image下的非Sendable的PixelMap对象，失败抛出异常。
   * @throws { BusinessError } 401 - If the image parameter invalid. Possible causes:
   *     1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  function convertToPixelMap(pixelmap: PixelMap): image.PixelMap;

  /**
   * 图像像素类，用于读取或写入图像数据以及获取图像信息，同时支持图像变换（缩放、平移、旋转、翻转、裁剪）、设置不透明度、提取Alpha通道、
   * 色彩空间设置等操作，适用于图像处理、图像编辑、图像显示等需要进行像素级数据操作的场景。在调用PixelMap的方法前，需要先通过
   * [sendableImage.createPixelMap]{@link sendableImage.createPixelMap}传入像素数据创建一个PixelMap对象。目前PixelMap序列化大小最大为128MiB，
   * 超过会渲染失败。PixelMap大小的计算方式为：宽 \* 高 \* 每像素占用字节数（详情请参考[PixelMapFormat]{@link image.PixelMapFormat}）。
   *
   * sendableImage下的PixelMap支持Sendable属性，支持Worker线程共享。sendableImage下的PixelMap可以利用
   * [sendableImage.convertToPixelMap]{@link sendableImage.convertToPixelMap}方法与image下的PixelMap进行互相转换。转换后，原对象的方法均不允许再调用，
   * 否则将报错501无法调用接口。跨线程处理PixelMap时，需要考虑多线程竞争问题。
   *
   * 图像占用的内存往往较大，当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。
   * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
   *
   * @typedef PixelMap
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface PixelMap extends ISendable {
    /**
     * 图像像素是否可被编辑。true表示可被编辑，false表示不可被编辑。为false时，图像的渲染和传输性能更好。
     *
     * @type { boolean }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly isEditable: boolean;

    /**
     * 读取整个PixelMap的像素数据，并按照PixelMap的像素格式存入缓冲区。使用Promise异步回调。
     *
     * @param { ArrayBuffer } dst - 目标缓冲区，获取的像素数据会被拷贝至该缓冲区。缓冲区内像素的格式与PixelMap相同，不包含内存对齐填充
     *     字节。缓冲区的大小由[getPixelBytesNumber]{@link sendableImage.PixelMap.getPixelBytesNumber}接口获取。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readPixelsToBuffer(dst: ArrayBuffer): Promise<void>;

    /**
     * 读取整个PixelMap的像素数据，并按照PixelMap的像素格式存入缓冲区。同步返回结果。
     *
     * @param { ArrayBuffer } dst - 目标缓冲区，获取的像素数据会被拷贝至该缓冲区。缓冲区内像素的格式与PixelMap相同，不包含内存对齐填充
     *     字节。缓冲区的大小由[getPixelBytesNumber]{@link sendableImage.PixelMap.getPixelBytesNumber}接口获取。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readPixelsToBufferSync(dst: ArrayBuffer): void;

    /**
     * 读取PixelMap指定区域内的像素数据并存入缓冲区。如果PixelMap的像素格式为YUV类型，则按照PixelMap的像素格式存入缓冲区，
     * 否则按照BGRA_8888格式存入缓冲区。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 可使用公式计算PositionArea需要申请的缓冲区大小。
     * >
     * > - RGBA的区域计算公式：读取区域像素数量（Region.size {width * height}）* 4（1倍R分量 + 1倍G分量 + 1倍B分量 + 1倍A分量）
     * > - YUV的区域计算公式：读取区域像素数量（Region.size {width * height}）* 1.5（1倍Y分量 + 0.25倍U分量 + 0.25倍V分量）
     *
     * @param { image.PositionArea } area - 读取的区域数据。<br>该区域由[PositionArea]{@link image.PositionArea}.region指定，
     *     获取的像素数据会被拷贝至[PositionArea]{@link image.PositionArea}.pixels缓冲区。如果PixelMap的像素格式为YUV类型，
     *     则获取的像素数据格式与PixelMap相同，否则会被转换为BGRA_8888格式。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readPixels(area: image.PositionArea): Promise<void>;

    /**
     * 读取PixelMap指定区域内的像素数据并存入缓冲区。如果PixelMap的像素格式为YUV类型，则按照PixelMap的像素格式存入缓冲区，
     * 否则按照BGRA_8888格式存入缓冲区。同步返回结果。
     *
     * > **说明：**
     * >
     * > 可使用公式计算PositionArea需要申请的缓冲区大小。
     * >
     * > - RGBA的区域计算公式：读取区域像素数量（Region.size {width * height}）* 4（1倍R分量 + 1倍G分量 + 1倍B分量 + 1倍A分量）
     * > - YUV的区域计算公式：读取区域像素数量（Region.size {width * height}）* 1.5（1倍Y分量 + 0.25倍U分量 + 0.25倍V分量）
     *
     * @param { image.PositionArea } area - 读取的区域数据。<br>该区域由[PositionArea]{@link image.PositionArea}.region指定，
     *     获取的像素数据会被拷贝至[PositionArea]{@link image.PositionArea}.pixels缓冲区。如果PixelMap的像素格式为YUV类型，
     *     则获取的像素数据格式与PixelMap相同，否则会被转换为BGRA_8888格式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    readPixelsSync(area: image.PositionArea): void;

    /**
     * 将缓冲区内的像素数据写入PixelMap的指定区域。如果PixelMap的像素格式为YUV类型，则缓冲区内的数据会按照PixelMap的像素格式解析，
     * 否则按照BGRA_8888格式解析。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 可使用公式计算PositionArea需要申请的缓冲区大小。
     * >
     * > - RGBA的区域计算公式：写入区域像素数量（Region.size {width * height}）* 4（1倍R分量 + 1倍G分量 + 1倍B分量 + 1倍A分量）
     * > - YUV的区域计算公式：写入区域像素数量（Region.size {width * height}）* 1.5（1倍Y分量 + 0.25倍U分量 + 0.25倍V分量）
     *
     * @param { image.PositionArea } area - 写入的区域数据。<br>该区域由[PositionArea]{@link image.PositionArea}.region指定，
     *     [PositionArea]{@link image.PositionArea}.pixels缓冲区内的像素数据会被写入PixelMap的该区域。
     *     如果PixelMap的像素格式为YUV类型，则缓冲区内的像素数据格式需与PixelMap相同，否则需要为BGRA_8888格式。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    writePixels(area: image.PositionArea): Promise<void>;

    /**
     * 将缓冲区内的像素数据写入PixelMap的指定区域。如果PixelMap的像素格式为YUV类型，则缓冲区内的数据会按照PixelMap的像素格式解析，
     * 否则按照BGRA_8888格式解析。同步返回结果。
     *
     * > **说明：**
     * >
     * > 可使用公式计算PositionArea需要申请的缓冲区大小。
     * >
     * > - RGBA的区域计算公式：写入区域像素数量（Region.size {width * height}）* 4（1倍R分量 + 1倍G分量 + 1倍B分量 + 1倍A分量）
     * > - YUV的区域计算公式：写入区域像素数量（Region.size {width * height}）* 1.5（1倍Y分量 + 0.25倍U分量 + 0.25倍V分量）
     *
     * @param { image.PositionArea } area - 写入的区域数据。<br>该区域由[PositionArea]{@link image.PositionArea}.region指定，
     *     [PositionArea]{@link image.PositionArea}.pixels缓冲区内的像素数据会被写入PixelMap的该区域。
     *     如果PixelMap的像素格式为YUV类型，则缓冲区内的像素数据格式需与PixelMap相同，否则需要为BGRA_8888格式。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    writePixelsSync(area: image.PositionArea): void;

    /**
     * 将缓冲区内的像素数据写入整个PixelMap。使用Promise异步回调。
     *
     * @param { ArrayBuffer } src - 源数据缓冲区，该缓冲区内的图像像素数据会被写入PixelMap。缓冲区内的像素数据必须是整个
     *     PixelMap的像素数据，且像素格式需与PixelMap相同，不包含内存对齐填充字节。缓冲区的大小可通过
     *     [getPixelBytesNumber]{@link sendableImage.PixelMap.getPixelBytesNumber}接口获取。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    writeBufferToPixels(src: ArrayBuffer): Promise<void>;

    /**
     * 将缓冲区内的像素数据写入整个PixelMap。同步返回结果。
     *
     * @param { ArrayBuffer } src - 源数据缓冲区，该缓冲区内的图像像素数据会被写入PixelMap。缓冲区内的像素数据必须是整个
     *     PixelMap的像素数据，且像素格式需与PixelMap相同，不包含内存对齐填充字节。缓冲区的大小可通过
     *     [getPixelBytesNumber]{@link sendableImage.PixelMap.getPixelBytesNumber}接口获取。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    writeBufferToPixelsSync(src: ArrayBuffer): void;

    /**
     * 获取图像像素信息。使用Promise异步回调。
     *
     * @returns { Promise<image.ImageInfo> } Promise对象，返回图像像素信息。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getImageInfo(): Promise<image.ImageInfo>;

    /**
     * 获取图像像素信息。同步返回结果。
     *
     * @returns { image.ImageInfo } 图像像素信息。
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getImageInfoSync(): image.ImageInfo;

    /**
     * 获取图像每行像素的字节数。
     *
     * @returns { number } 图像像素的行字节数。单位：字节（Byte）。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getBytesNumberPerRow(): number;

    /**
     * 获取图像所有像素占用的总字节数，不包含内存对齐填充字节。
     *
     * @returns { number } 图像像素的总字节数。单位：字节（Byte）。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getPixelBytesNumber(): number;

    /**
     * 获取图像的像素密度。
     *
     * @returns { number } 图像的像素密度，单位：ppi（像素/英寸）。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    getDensity(): number;

    /**
     * 设置PixelMap的不透明度，指定的不透明度值将被应用于所有像素，不受原图不透明度的影响。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > YUV格式的图像不支持设置不透明度。
     *
     * @param { number } rate - 不透明度的值，取值范围是(0.0, 1.0]。1.0表示完全不透明，数值越接近0.0则透明度越高。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    opacity(rate: number): Promise<void>;

    /**
     * 设置PixelMap的不透明度，指定的不透明度值将被应用于所有像素，不受原图不透明度的影响。同步返回结果。
     *
     * > **说明：**
     * >
     * > YUV格式的图像不支持设置不透明度。
     *
     * @param { number } rate - 不透明度的值，取值范围是(0.0, 1.0]。1.0表示完全不透明，数值越接近0.0则透明度越高。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    opacitySync(rate: number): void;

    /**
     * 根据Alpha通道的信息，生成一个仅包含Alpha通道信息的ALPHA_8格式的PixelMap，生成的新PixelMap不可编辑，可用于阴影效果。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - YUV格式不支持此接口。
     * > - 如果原PixelMap的格式是ALPHA_F16，则新生成的PixelMap将维持ALPHA_F16格式。
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}
     * 方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @returns { Promise<PixelMap> } Promise对象，返回仅包含Alpha通道信息的ALPHA_8格式的PixelMap。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    createAlphaPixelmap(): Promise<PixelMap>;

    /**
     * 根据Alpha通道的信息，生成一个仅包含Alpha通道信息的ALPHA_8格式的PixelMap，生成的新PixelMap不可编辑，可用于阴影效果。同步返回结果。
     *
     * > **说明：**
     * >
     * > - YUV格式不支持此接口。
     * > - 如果原PixelMap的格式是ALPHA_F16，则新生成的PixelMap将维持ALPHA_F16格式。
     * > - 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}
     * 方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * @returns { PixelMap } 成功同步返回仅包含Alpha通道信息的ALPHA_8格式的PixelMap对象，失败抛出异常。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    createAlphaPixelmapSync(): PixelMap;

    /**
     * 根据输入的宽高缩放倍数对图片进行缩放。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 缩放倍数 = 缩放后的图像尺寸 / 缩放前的图像尺寸。
     *
     * @param { number } x - 宽度的缩放倍数。<br>取值不能为0，建议取正数，否则会产生翻转效果。
     * @param { number } y - 高度的缩放倍数。<br>取值不能为0，建议取正数，否则会产生翻转效果。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    scale(x: number, y: number): Promise<void>;

    /**
     * 根据输入的宽高缩放倍数对图片进行缩放。同步返回结果。
     *
     * > **说明：**
     * >
     * > 缩放倍数 = 缩放后的图像尺寸 / 缩放前的图像尺寸。
     *
     * @param { number } x - 宽度的缩放倍数。<br>取值不能为0，建议取正数，否则会产生翻转效果。
     * @param { number } y - 高度的缩放倍数。<br>取值不能为0，建议取正数，否则会产生翻转效果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    scaleSync(x: number, y: number): void;

    /**
     * 根据输入的坐标对图片进行位置变换。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 平移后的图像尺寸将变为：宽度 = 原宽度 + x，高度 = 原高度 + y。
     *
     * @param { number } x - 横向平移的距离。方向为正数向右，负数向左。取值范围是(-图像宽度, +∞)。单位：像素（px）。<br>取值为负数时，平移的效果等同于裁剪掉自图像左侧起的x列像素。
     * @param { number } y - 纵向平移的距离。方向为正数向下，负数向上。取值范围是(-图像高度, +∞)。单位：像素（px）。<br>取值为负数时，平移的效果等同于裁剪掉自图像上方起的y行像素。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    translate(x: number, y: number): Promise<void>;

    /**
     * 根据输入的坐标对图片进行位置变换。同步返回结果。
     *
     * > **说明：**
     * >
     * > 平移后的图像尺寸将变为：宽度 = 原宽度 + x，高度 = 原高度 + y。
     *
     * @param { number } x - 横向平移的距离。方向为正数向右，负数向左。取值范围是(-图像宽度, +∞)。单位：像素（px）。<br>取值为负数时，平移的效果等同于裁剪掉自图像左侧起的x列像素。
     * @param { number } y - 纵向平移的距离。方向为正数向下，负数向上。取值范围是(-图像高度, +∞)。单位：像素（px）。<br>取值为负数时，平移的效果等同于裁剪掉自图像上方起的y行像素。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    translateSync(x: number, y: number): void;

    /**
     * 根据输入的角度对图片进行旋转。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > - YUV格式仅支持90°倍数的旋转角。
     * > - 图像旋转的角度取值范围：[0, 360]。超出取值范围时，根据圆周360°自动矫正。例如，-100°与260°效果相同。
     * > - 如果图片旋转的角度不是90的整数倍，旋转后图片的尺寸会发生改变。
     *
     * @param { number } angle - 图像旋转的角度。方向为正数顺时针，负数逆时针。单位：角度（°）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    rotate(angle: number): Promise<void>;

    /**
     * 根据输入的角度对图片进行旋转。同步返回结果。
     *
     * > **说明：**
     * >
     * > - YUV格式仅支持90°倍数的旋转角。
     * > - 图像旋转的角度取值范围：[0, 360]。超出取值范围时，根据圆周360°自动矫正。例如，-100°与260°效果相同。
     * > - 如果图片旋转的角度不是90的整数倍，旋转后图片的尺寸会发生改变。
     *
     * @param { number } angle - 图像旋转的角度。方向为正数顺时针，负数逆时针。单位：角度（°）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    rotateSync(angle: number): void;

    /**
     * 根据输入的水平或垂直翻转条件对图片进行翻转。使用Promise异步回调。
     *
     * @param { boolean } horizontal - true表示进行水平翻转，false表示不进行水平翻转。
     * @param { boolean } vertical - true表示进行垂直翻转，false表示不进行垂直翻转。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    flip(horizontal: boolean, vertical: boolean): Promise<void>;

    /**
     * 根据输入的水平或垂直翻转条件对图片进行翻转。同步返回结果。
     *
     * @param { boolean } horizontal - true表示进行水平翻转，false表示不进行水平翻转。
     * @param { boolean } vertical - true表示进行垂直翻转，false表示不进行垂直翻转。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    flipSync(horizontal: boolean, vertical: boolean): void;

    /**
     * 根据输入的区域信息对图片进行裁剪。使用Promise异步回调。
     *
     * @param { Region } region - 裁剪的区域，包含起始坐标和宽高。取值范围不能超过图片的宽高。单位：像素（px）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    crop(region: image.Region): Promise<void>;

    /**
     * 根据输入的区域信息对图片进行裁剪。同步返回结果。
     *
     * @param { Region } region - 裁剪的区域，包含起始坐标和宽高。取值范围不能超过图片的宽高。单位：像素（px）。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 501 - The resource is unavailable as it is occupied by another thread.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    cropSync(region: image.Region): void;

    /**
     * 获取图像的色彩空间。
     *
     * @returns { colorSpaceManager.ColorSpaceManager } 图像色彩空间信息。如果图像不含色彩空间信息，则会抛出异常。
     * @throws { BusinessError } 62980101 - If the image data abnormal.
     * @throws { BusinessError } 62980103 - If the image data unsupport.
     * @throws { BusinessError } 62980115 - If the image parameter invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform  
     * @since 12 dynamiconly
     */
    getColorSpace(): colorSpaceManager.ColorSpaceManager;

    /**
     * 设置图像的色彩空间。如需同时对图像的像素颜色进行色彩空间转换，请使用[applyColorSpace]{@link sendableImage.PixelMap.applyColorSpace}。
     *
     * @param { colorSpaceManager.ColorSpaceManager } colorSpace - 图像色彩空间信息。
     * @throws { BusinessError } 62980111 - If the operation invalid.
     * @throws { BusinessError } 62980115 - If the image parameter invalid.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform 
     * @since 12 dynamiconly
     */
    setColorSpace(colorSpace: colorSpaceManager.ColorSpaceManager): void;

    /**
     * 图像的行数据是否已进行内存对齐。true表示已进行内存对齐，每行数据的末尾有空白填充字节以满足对齐要求（如果数据本身已满足对齐要求，则不会有填充字节）；false表示未进行内存对齐，每行数据紧密排列，末尾无空白填充字节。
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly isStrideAlignment: boolean;

    /**
     * 根据输入的目标色彩空间对图像的像素颜色进行色彩空间转换。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 本接口仅执行色彩空间之间的数学转换，不包含HDR到SDR的色调映射。当源图像为HDR色彩空间（传输函数为HLG或PQ，例如BT2020_HLG、BT2020_PQ、P3_HLG、P3_PQ等）且目标为SDR色彩空间
     * （传输函数为sRGB gamma，例如SRGB、DISPLAY_P3、DCI_P3、ADOBE_RGB_1998等）时，直接调用本接口会导致图像整体偏亮、泛白、高光细节丢失。
     *
     * @param { colorSpaceManager.ColorSpaceManager } targetColorSpace - 目标色彩空间，支持SRGB、DCI_P3、DISPLAY_P3、ADOBE_RGB_1998。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     *     2.Incorrect parameter types. 3.Parameter verification failed.
     * @throws { BusinessError } 62980104 - Failed to initialize the internal object.
     * @throws { BusinessError } 62980108 - Failed to convert the color space.
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 12 dynamiconly
     */
    applyColorSpace(targetColorSpace: colorSpaceManager.ColorSpaceManager): Promise<void>;

    /**
     * 释放PixelMap对象。释放后，任何访问该对象内部数据的方法调用都会失败。使用Promise异步回调。
     *
     * 图片使用的内存往往较大，在PixelMap对象使用完成后，应主动调用该方法及时释放内存。
     *
     * 释放时应确保该对象的所有异步方法均执行完成，且后续不再使用该对象。
     *
     * > **注意：**
     * >
     * > 释放指的是ArkTS对象释放与之关联的native对象的管理权。仅当所有管理该native对象的ArkTS对象都被释放时，native对象占用的内存才会被回收。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    release(): Promise<void>;

    /**
     * 将PixelMap序列化后写入MessageSequence。
     *
     * @param { rpc.MessageSequence } sequence - 新创建的MessageSequence。
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    marshalling(sequence: rpc.MessageSequence): void;

    /**
     * 从MessageSequence中反序列化并获取PixelMap。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 如需使用同步方式反序列化并创建PixelMap可使用[createPixelMapFromParcel]{@link sendableImage.createPixelMapFromParcel}。
     *
     * @param { rpc.MessageSequence } sequence - 保存有PixelMap信息的MessageSequence。
     * @returns { Promise<PixelMap> } Promise对象，返回反序列化后的PixelMap。
     * @throws { BusinessError } 62980115 - Invalid image parameter.
     * @throws { BusinessError } 62980097 - IPC error.
     * @throws { BusinessError } 62980096 - The operation failed.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    unmarshalling(sequence: rpc.MessageSequence): Promise<PixelMap>;
  }

  /**
     * ImageSource类，用于获取图片相关信息。在调用ImageSource的方法前，需要先通过
     * [sendableImage.createImageSource]{@link sendableImage.createImageSource}构建一个ImageSource实例。
     * 
     * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行
     * 完成，且后续不再使用该实例。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    interface ImageSource {
    /**
     * 通过图片解码参数创建PixelMap对象。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当PixelMap对象使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该对象的所有异步方法均执行完成，
     * 且后续不再使用该对象。
     *
     * @param { DecodingOptions } options - 解码参数。
     * @returns { Promise<PixelMap> } Promise实例，用于异步返回创建结果。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12 dynamiconly
     */
    createPixelMap(options?: image.DecodingOptions): Promise<PixelMap>;

    /**
     * 释放ImageSource实例。使用Promise异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageSource实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } Promise实例，异步返回结果。
     * @syscap SystemCapability.Multimedia.Image.ImageSource
     * @crossplatform
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }

  /**
   * 提供基本的图像操作，包括获取图像信息、读写图像数据。调用[readNextImage]{@link sendableImage.ImageReceiver.readNextImage}和
   * [readLatestImage]{@link sendableImage.ImageReceiver.readLatestImage}接口时会返回Image。继承自
   * [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)。
   * 
   * 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用[release]{@link sendableImage.PixelMap.release}方法及时释放内存。释放时应确保该实例的所有异步方法均执行完成，且后续不再
   * 使用该实例。
   *
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 12 dynamiconly
   */
  interface Image extends lang.ISendable {
    /**
     * 要裁剪的图像区域。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    clipRect: Region;

    /**
     * 图像大小。
     * 
     * 如果Image对象所存储的是相机预览流数据（YUV图像数据），那么获取到的size中的宽和高分别对应YUV图像的宽和高。
     * 
     * 如果Image对象所存储的是相机拍照流数据（JPEG图像数据），由于已是编码后的文件，size中的宽等于JPEG文件大小，高等于1。
     * 
     * Image对象所存储的数据是预览流还是拍照流，取决于应用将receiver中的surfaceId传给相机的是previewOutput还是captureOutput。
     * 
     * 相机预览与拍照最佳实践请参考[双路预览(ArkTS)](docroot://media/camera/camera-dual-channel-preview.md)与
     * [拍照实践(ArkTS)](docroot://media/camera/camera-shooting-case.md)。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly size: Size;

    /**
     * 图像格式，参考
     * [OH_NativeBuffer_Format](docroot://reference/apis-arkgraphics2d/capi-buffer-common-h.md#oh_nativebuffer_format)。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly format: number;

    /**
     * 图像时间戳。时间戳以纳秒为单位，通常是单调递增的。时间戳的具体含义和基准取决于图像的生产者，在相机预览/拍照场景，生产者就是相机。来自不同生产者的图像的时间戳可能有不同的含义和基准，因此可能无法进行比较。如果要获取某张照片的生
     * 成时间，可以通过
     * [getImageProperty]{@link @ohos.multimedia.image:image.ImageSource.getImageProperty(key: PropertyKey, options?: ImagePropertyOptions)}
     * 接口读取相关的EXIF信息。
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    readonly timestamp: number;

    /**
     * 根据图像的组件类型从图像中获取组件缓存。使用Promise异步回调。getComponent是线程不安全的。
     *
     * @param { ComponentType } componentType - 图像的组件类型。
     * @returns { Promise<image.Component> } Promise实例，用于异步返回组件缓冲区。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    getComponent(componentType: image.ComponentType): Promise<image.Component>;

    /**
     * 释放当前图像。使用Promise异步回调。
     * 
     * 在接收另一个图像前必须先释放对应资源。
     * 
     * 由于图片占用内存较大，所以当Image实例使用完成后，应主动调用该方法及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } promise返回操作结果。
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }

  /**
   * 图像接收类，用于获取组件Surface ID，接收最新的图片和读取下一张图片，以及释放ImageReceiver实例。
   * 
   * 在调用以下方法前需要先创建ImageReceiver实例。
   *
   * @syscap SystemCapability.Multimedia.Image.ImageReceiver
   * @since 12 dynamiconly
   */
  interface ImageReceiver {
    /**
     * 图片大小。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly size: image.Size;

    /**
     * 同时访问的图像数。该参数仅作为期望值，实际capacity由设备硬件决定。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly capacity: number;

    /**
     * 图像格式。
     *
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readonly format: image.ImageFormat;

    /**
     * 用于获取一个Surface ID供Camera或其他组件使用。使用promise异步回调。
     *
     * @returns { Promise<string> } 异步返回Surface ID。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    getReceivingSurfaceId(): Promise<string>;

    /**
     * 从ImageReceiver读取最新的图片。使用promise异步回调。
     * 
     * > **注意**：
     * >
     * > 此接口需要在[on]{@link sendableImage.ImageReceiver.on}回调触发后调用，才能正常的接收到数据。且此接口返回的[Image]{@link sendableImage.Image}对象使
     * > 用完毕后需要调用[release]{@link sendableImage.PixelMap.release}方法释放，释放后才可以继续接收新的数据。
     *
     * @returns { Promise<Image> } 异步返回最新图片。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readLatestImage(): Promise<Image>;

    /**
     * 从ImageReceiver读取下一张图片。使用promise异步回调。
     * 
     * > **注意**：
     * >
     * > 此接口需要在[on]{@link sendableImage.ImageReceiver.on}回调触发后调用，才能正常的接收到数据。且此接口返回的[Image]{@link sendableImage.Image}对象使
     * > 用完毕后需要调用[release]{@link sendableImage.PixelMap.release}方法释放，释放后才可以继续接收新的数据。
     *
     * @returns { Promise<Image> } 异步返回下一张图片。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    readNextImage(): Promise<Image>;

    /**
     * 接收图片时注册。使用callback异步回调。
     *
     * @param { 'imageArrival' } type - 注册事件的类型，固定为'imageArrival'，接收图片时触发。
     * @param { AsyncCallback<void> } callback - 注册的事件回调。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    on(type: 'imageArrival', callback: AsyncCallback<void>): void;

    /**
     * 释放ImageReceiver实例。使用promise异步回调。
     * 
     * 由于图片占用内存较大，所以当ImageReceiver实例使用完成后，应主动调用该方法，及时释放内存。
     * 
     * 释放时应确保该实例的所有异步方法均执行完成，且后续不再使用该实例。
     *
     * @returns { Promise<void> } 异步返回操作结果。
     * @syscap SystemCapability.Multimedia.Image.ImageReceiver
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
  }
}

export default sendableImage;