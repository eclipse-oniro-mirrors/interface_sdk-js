/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file A component which support applications to show moving photo data 
 * @kit MediaLibraryKit
 */

import photoAccessHelper from './@ohos.file.photoAccessHelper';
import media from './@ohos.multimedia.media';

/**
 * 定义动态照片视图选项。
 *
 * @interface MovingPhotoViewOptions
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface MovingPhotoViewOptions {
    /**
     * 动态照片数据。
     *
     * @type { photoAccessHelper.MovingPhoto }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    movingPhoto: photoAccessHelper.MovingPhoto;
    /**
     * MovePhotoView的控制器。
     *
     * @type { ?MovingPhotoViewController }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    controller?: MovingPhotoViewController;
    /**
     * MovePhotoView的图像ai选项。
     *
     * @type { ?ImageAIOptions }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    imageAIOptions?: ImageAIOptions;

    /**
     * 动态照片视图的格式。
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    movingPhotoFormat?: PixelMapFormat;
    
    /**
     * MovePhotoView的范围模式。
     *
     * @type { ?DynamicRangeMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    dynamicRangeMode?: DynamicRangeMode;
    /**
     * 动态图片播放时是否包含封面图片的水印。
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     */
    playWithMask?: boolean;
}
/**
 * 定义动态照片组件接口
 *
 * @interface MovingPhotoViewInterface
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
interface MovingPhotoViewInterface {
    /**
     * 设置组件参数.
     *
     * @param { MovingPhotoViewOptions } options
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamiconly
     */
    (options: MovingPhotoViewOptions): MovingPhotoViewAttribute;
}

/**
 * 动态照片查看媒体事件回调的函数。
 *
 * @typedef { function } MovingPhotoViewEventCallback
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type MovingPhotoViewEventCallback = () => void;

/**
 * 定义动态照片属性函数。
 *
 * @extends CommonMethod<MovingPhotoViewAttribute>
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class MovingPhotoViewAttribute extends CommonMethod<MovingPhotoViewAttribute> {
    /**
     * 判断视频是否静音时调用。
     *
     * @param { boolean } isMuted
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    muted(isMuted: boolean): MovingPhotoViewAttribute;
	/**
     * 在确定视图的缩放类型时调用。
     *
     * @param { ImageFit } value
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    objectFit(value: ImageFit): MovingPhotoViewAttribute;
    /**
     * 在图像加载完成时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    onComplete(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 在播放视频时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onStart(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 当视频播放停止时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onStop(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 当视频播放暂停时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onPause(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 当视频播放结束时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onFinish(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 播放失败时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    onError(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 在播放准备时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20 dynamic
     */
    onPrepared(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 设置自动播放时间，如果不设置，则在整个视频时间内播放动态图片。
     * 如果设置，则在自动播放时段内播放移动照片。
     *
     * @param { double } startTime - 视频播放开始时间
     * @param { double } endTime  - 视频播放结束时间
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    autoPlayPeriod(startTime: double, endTime: double): MovingPhotoViewAttribute;
    /**
     * 设置是否允许自动播放。如果该值为true，则移动照片开始
     * 在资源加载完成后自动执行。
     *
     * @param { boolean } isAutoPlay  Whether to automatic play
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    autoPlay(isAutoPlay: boolean): MovingPhotoViewAttribute;
    /**
     * 设置是否允许重复播放。如果值为true，则播放动态图片
     * 资源加载完成后，重复执行。
     *
     * @param { boolean } isRepeatPlay - 是否重复播放
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 13 dynamic
     */
    repeatPlay(isRepeatPlay: boolean): MovingPhotoViewAttribute;

    /**
     * 设置是否启用动态照片分析器。如果为true，则移动照片可以
     * 被AI分析。
     *
     * @param { boolean } enabled - 是否启用动态照片分析器
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    enableAnalyzer(enabled: boolean): MovingPhotoViewAttribute;
    /**
     * 设置播放策略。
     *
     * @param { media.PlaybackStrategy } strategy - 回放策略
     * @returns { MovingPhotoViewAttribute }
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @atomicservice
     * @since 23 dynamic
     */
    setPlaybackStrategy(strategy: media.PlaybackStrategy): MovingPhotoViewAttribute;
}
/**
 * 定义MovePhotoView控制器。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class MovingPhotoViewController {
    /**
     * 构造函数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    constructor();
    /**
     * 开始播放动态照片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    startPlayback();
    /**
     * 停止播放动态照片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    stopPlayback();
    /**
     * 刷新动态照片数据
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 18 dynamic
     */
    refreshMovingPhoto();
    /**
     * 暂停动态照片并显示当前帧，当从当前帧开始播放时
     * 再播放一次
     * 
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @atomicservice
     * @since 20 dynamic
     */
    pausePlayback();
    /**
     * 将动态照片播放选项重置为默认选项。
     * 
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @atomicservice
     * @since 20 dynamic
     */
    reset();
    /**
     * 使用当前配置信息重新播放视频。
     * 
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @atomicservice
     * @since 20 dynamic
     */
    restart();
    /**
     * 启用或禁用缩放过渡效果，可在初始化时设置
     *
     * @param { boolean } enabled - 是否启用过渡效果
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @atomicservice
     * @since 20 dynamic
     */
    enableTransition(enabled: boolean);
    /**
     * 设置动态照片播放区间
     *
     * @param { double } startTime - 视频播放开始时间
     *     <br>取值范围:大于等于0，小于视频时长，非法值将不响应此次调用的操作。
     * @param { double } endTime - 视频播放结束时间
     *     <br>取值范围:大于等于0，小于视频时长，非法值将不响应此次调用的操作。
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @atomicservice
     * @since 20 dynamic
     */
    setPlaybackPeriod(startTime: double, endTime: double);
    /**
     * 动态刷新autoplay属性，设置为true时将强制
     * 动态照片在初始化后进行播放
     *
     * @param { boolean } enabled - 是否自动播放
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @atomicservice
     * @since 20 dynamic
     */
    enableAutoPlay(enabled: boolean);
    /**
     * 通知组件执行图片转场动画。
     * 
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic
     */
    notifyMovingPhotoTransition(): void;
    /**
     * 开始播放动态照片。
     * 
     * @param { DisplayMode } mode - 显示模式。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    startPlayback(mode: DisplayMode): void;
    /**
     * 设置动态照片显示模式，并在完成时触发回调。
     *
     * @param { DisplayMode } mode - 显示模式。
     * @param { MovingPhotoViewEventCallback } callback - Set display mode completion callback
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    setDisplayMode(mode: DisplayMode, callback: MovingPhotoViewEventCallback): void;
}
/**
 * 定义动态照片组件。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @uicomponent
 * @since 12 dynamiconly
 */
declare const MovingPhotoView: MovingPhotoViewInterface;
/**
 * Defines MovingPhotoView Component instance.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since 12 dynamiconly
 */
declare const MovingPhotoViewInstance: MovingPhotoViewAttribute;

/**
 * 动态照片的动态范围模式。
 *
 * @enum { int }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @systemapi
 * @since 14 dynamic
 */
export declare enum DynamicRangeMode {
    /**
     * 将图像内容的动态范围限制在标准范围内
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    STANDARD = 2,
    /**
     * 允许图像内容使用一些扩展范围
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    CONSTRAINT = 1,
    /**
     * 允许图像内容使用不受限制的扩展范围
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    HIGH = 0,
}

/**
 * 位图格式的枚举定义。
 *
 * @enum { int }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @systemapi
 * @since 14 dynamic
 */
export declare enum PixelMapFormat {
    /**
     * 表示存储顺序是先存储Y，然后交替存储V U各占8位
     * 和从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    NV21 = 2,

    /**
     * 表示存储顺序是先存储Y，再存储U V，各占用10位
     * 和从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    YCBCR_P010 = 4,

    /**
     * 表示每个像素以32位为单位存储。每个像素包含4个分量：
     * R(10bits)、G(10bits)、B(10bits)、A(2bits)，并从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    RGBA_1010102 = 3,

    /**
     * 表示每个像素以32位为单位存储。每个像素包含4个分量：B(8bits)、G(8bits)、R(8bits)、A(8bits)
     * 和从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    RGBA_8888 = 1,

    /**
     * 表示存储顺序是先存储Y，然后交替存储V U各占10位
     * 和从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    YCRCB_P010 = 5,

    /**
     * 未知格式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    UNKNOWN = 0
}

/**
 * 动态照片显示模式枚举。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic
 */
export declare enum DisplayMode {
    /**
     * 显示封面帧和视频帧。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    IMAGE_AND_VIDEO = 0,
    /**
     * 显示视频帧，隐藏封面帧。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic
     */
    VIDEO_ONLY = 1
}