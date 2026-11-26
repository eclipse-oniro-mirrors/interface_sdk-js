'use static'
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
import { CommonMethod, ComponentBuilder, CustomBuilder, ImageFit, ImageAIOptions } from '@ohos.arkui.component';

/**
 * 定义动态照片视图选项。
 *
 * @interface MovingPhotoViewOptions
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MovingPhotoViewOptions {
    /**
     * 动态照片数据。
     *
     * @type { photoAccessHelper.MovingPhoto }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    movingPhoto: photoAccessHelper.MovingPhoto;
    /**
     * MovePhotoView的控制器。
     *
     * @type { ?MovingPhotoViewController }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    controller?: MovingPhotoViewController;
    /**
     * MovePhotoView的图像ai选项。
     *
     * @type { ?ImageAIOptions }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    imageAIOptions?: ImageAIOptions;
    /**
     * 动态照片视图的格式。
     *
     * @type { ?PixelMapFormat }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    movingPhotoFormat?: PixelMapFormat;
    /**
     * MovePhotoView的范围模式。
     *
     * @type { ?DynamicRangeMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    dynamicRangeMode?: DynamicRangeMode;
    /**
     * 动态图片播放时是否包含封面图片的水印
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    playWithMask?: boolean;
}
/**
 * 动态照片查看媒体事件回调的函数。
 *
 * @typedef { function }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
declare type MovingPhotoViewEventCallback = () => void;
/**
 * 定义动态照片视图属性函数。
 *
 * @extends CommonMethod
 * @interface MovingPhotoViewAttribute
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MovingPhotoViewAttribute extends CommonMethod {
    /**
     * 判断视频是否静音时调用。
     *
     * @param { boolean } isMuted
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    muted(isMuted: boolean): MovingPhotoViewAttribute;
    /**
     * 在确定视图的缩放类型时调用。
     *
     * @param { ImageFit } value
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    objectFit(value: ImageFit): MovingPhotoViewAttribute;
    /**
     * 在图像加载完成时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onComplete(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 在播放视频时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onStart(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 当视频播放停止时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onStop(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 当视频播放暂停时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onPause(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 当视频播放结束时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onFinish(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 播放失败时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onError(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 在播放准备时调用。
     *
     * @param { MovingPhotoViewEventCallback } callback
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    onPrepared(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute;
    /**
     * 设置自动播放时间，如果不设置，则在整个视频时间内播放动态图片。
     * 如果设置，则在自动播放时段内播放移动照片。
     *
     * @param { double } startTime - 视频播放开始时间
     * @param { double } endTime - 视频播放结束时间
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    autoPlayPeriod(startTime: double, endTime: double): MovingPhotoViewAttribute;
    /**
     * 设置是否允许自动播放。如果该值为true，则移动照片开始
     * 在资源加载完成后自动执行。
     *
     * @param { boolean } isAutoPlay - 是否自动播放
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    autoPlay(isAutoPlay: boolean): MovingPhotoViewAttribute;
    /**
     * 设置是否允许重复播放。如果值为true，则播放动态图片
     * 资源加载完成后，重复执行。
     *
     * @param { boolean } isRepeatPlay - 是否重复播放
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    repeatPlay(isRepeatPlay: boolean): MovingPhotoViewAttribute;
    /**
     * 设置是否启用动态照片分析器。如果为true，则移动照片可以
     * 被AI分析。
     *
     * @param { boolean } enabled - 是否启用动态照片分析器
     * @returns { MovingPhotoViewAttribute }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
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
     * @stagemodelonly
     * @since 26.0.0 static
     */
    setPlaybackStrategy(strategy: media.PlaybackStrategy): MovingPhotoViewAttribute;
}
/**
 * 定义MovePhotoView控制器。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class MovingPhotoViewController {
    /**
     * 构造函数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    constructor();
    /**
     * 开始播放动态照片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    startPlayback(): void;
    /**
     * 停止播放动态照片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    stopPlayback(): void;
    /**
     * 刷新动态照片数据
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 static
     */
    refreshMovingPhoto(): void;
    /**
     * 暂停动态照片并显示当前帧，当从当前帧开始播放时
     * 再播放一次
     *
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    pausePlayback(): void;
    /**
     * 将动态照片播放选项重置为默认选项。
     *
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    reset(): void;
    /**
     * 使用当前配置信息重新播放视频。
     *
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    restart(): void;
    /**
     * 启用或禁用缩放过渡效果，可在初始化时设置
     *
     * @param { boolean } enabled - 是否启用过渡效果
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enableTransition(enabled: boolean): void;
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
     * @stagemodelonly
     * @since 26.0.0 static
     */
    setPlaybackPeriod(startTime: double, endTime: double): void;
    /**
     * 动态刷新autoplay属性，设置为true时将强制
     * 动态照片在初始化后进行播放
     *
     * @param { boolean } enabled - 是否自动播放
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    enableAutoPlay(enabled: boolean): void;
    /**
     * 通知组件执行图片转场动画。
     *
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
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
     * @since 26.1.0 static
     */
    startPlayback(mode: DisplayMode): void;
 
    /**
     * 设置动态照片显示模式，并在完成时触发回调。
     *
     * @param { DisplayMode } mode - 显示模式。
     * @param { MovingPhotoViewEventCallback } callback - Set display mode completion callback.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    setDisplayMode(mode: DisplayMode, callback: MovingPhotoViewEventCallback): void;
}
/**
 * 动态照片的动态范围模式。
 *
 * @enum { number }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DynamicRangeMode {
    /**
     * 将图像内容的动态范围限制在标准范围内
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    STANDARD = 2,
    /**
     * 允许图像内容使用一些扩展范围
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    CONSTRAINT = 1,
    /**
     * 允许图像内容使用不受限制的扩展范围
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    HIGH = 0
}
/**
 * 位图格式的枚举定义。
 *
 * @enum { number }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PixelMapFormat {
    /**
     * 表示存储顺序是先存储Y，然后交替存储V U各占8位
     * 和从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    NV21 = 2,
    /**
     * 表示存储顺序是先存储Y，再存储U V，各占用10位
     * 和从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    YCBCR_P010 = 4,
    /**
     * 表示每个像素以32位为单位存储。每个像素包含4个分量：
     * R(10bits)、G(10bits)、B(10bits)、A(2bits)，并从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    RGBA_1010102 = 3,
    /**
     * 表示每个像素以32位为单位存储。每个像素包含4个分量：B(8bits)、G(8bits)、R(8bits)、A(8bits)
     * 和从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    RGBA_8888 = 1,
    /**
     * 表示存储顺序是先存储Y，然后交替存储V U各占10位
     * 和从高位到低位存储。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    YCRCB_P010 = 5,
    /**
     * 未知格式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 static
     */
    UNKNOWN = 0
}
/**
 * 动态照片显示模式枚举。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare enum DisplayMode {
    /**
     * 显示封面帧和视频帧。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    IMAGE_AND_VIDEO = 0,
    /**
     * 显示视频帧，隐藏封面帧。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 static
     */
    VIDEO_ONLY = 1
}
/**
 * Defines the MovingPhotoView component.
 *
 * @param { MovingPhotoViewOptions } options - MovePhotoView选项。
 * @param { CustomBuilder } [content_] - 容器
 * @returns { MovingPhotoViewAttribute } MovePhotoView的属性。
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@ComponentBuilder
export declare function MovingPhotoView(
    options: MovingPhotoViewOptions, 
    content_?: CustomBuilder,
): MovingPhotoViewAttribute;