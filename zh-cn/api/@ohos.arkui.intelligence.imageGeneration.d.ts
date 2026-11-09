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
 * @kit ArkUI
 */

import type image from './@ohos.multimedia.image';
import { BusinessError, Callback } from './@ohos.base';
import type common2D from './@ohos.graphics.common2D';
import type componentUtils from './@ohos.arkui.componentUtils';
import { UIContext } from './@ohos.arkui.UIContext';
import type Want from './@ohos.app.ability.Want';
import common from './@ohos.app.ability.common';

/**
 * 使用UI组件的AI生成图像模块
 *
 * @namespace imageGeneration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 dynamic
 */
declare namespace imageGeneration {
  /**
   * 提供流输出结果类型的定义。
   *
   *
   * @enum { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  enum PartialResultType {
    /**
     * 表示部分结果的操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    PARTIAL = 0,
    /**
     * 表示完整结果的操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    COMPLETED = 1,
    /**
     * 表示部分失败结果的操作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    PARTIAL_FAIL = 2
  }

  /**
   * AI图像生成模型支持的风格类型，如涂鸦、水彩画。
   *
   * @interface ImageStyle
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface ImageStyle {
    /**
     * 将在样式列表中显示的风格图标信息。
     *
     * @type { image.PixelMap | string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    icon: image.PixelMap | string | Resource;

    /**
     * 将在样式列表中显示的样式名称信息。
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    name: ResourceStr;
  }

  /**
   * AI生成图像任务的配置参数选项。
   *
   * @interface GenerateImageTaskParams
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GenerateImageTaskParams {
    /**
     * 用于AI生成图像任务的图片信息。
     *
     * @type { Array<ImageItem> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    images: Array<ImageItem>;
    /**
     * 多图像生成任务的布局信息参考图。
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    positionImage?: image.PixelMap;
    /**
     * AI生成图像任务中套索选择的路径信息。
     *
     * @type { ?Array<common2D.Point> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    selectPath?: Array<common2D.Point>;
    /**
     * AI生成图像任务的描述信息。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    prompt: string;
    /**
     * 一种任务中的AI生成图像风格。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    style?: string;
    /**
     * 请求AI生图图片的大小信息。
     *
     * @type { image.Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    imageSize: image.Size;
    /**
     * 一项任务中生成的AI图像数量。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    imageCount?: int;
  }

  /**
   * AI生成图像任务的配置流结果。
   *
   * @interface GenerateImageTaskPartialResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GenerateImageTaskPartialResult {
    /**
     * 用于AI生成图像任务的类型信息。
     *
     * @type { PartialResultType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    type: PartialResultType;

    /**
     * AI生成图像任务对应的图片序号，部分结果中可用。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    imageIndex?: int;

    /**
     * 与AI生成图像任务对应的图像的图像数据，部分结果可用。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    imageData?: string;

    /**
     * AI生成图像任务对应的图像总数，可在完成结果中查看。
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    totalCount?: int;

    /**
     * 与AI生成图像任务对应的部分误差信息，可在部分误差结果中获取。
     *
     * @type { ?BusinessError }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    partialFail?: BusinessError;
  }

  /**
   * AI生成图像任务的配置结果。
   *
   * @interface GenerateImageTaskResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GenerateImageTaskResult {
    /**
     * 与AI生成图像任务对应的图像结果。
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    imageData: Array<string>;
  }

  /**
   * AI图像模型抽象接口。
   *
   * @interface ImageGenerationModel
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface ImageGenerationModel {
    /**
     * 获取AI模型支持的图像风格类型。
     *
     * @returns { Array<ImageStyle> } 图片风格信息
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    getModelSupportStyles(): Array<ImageStyle>;
    /**
     * 请求AI图像生成任务以获取生成的图像。
     *
     * @param { int } sessionId - 请求AI图像生成任务的会话ID。
     *     <br>取值范围:[0, +∞]
     * @param { GenerateImageTaskParams } params - 请求AI图像生成任务的参数。
     * @param { Callback<GenerateImageTaskPartialResult> } callback - 回调函数
     *     用于返回 GenerateImageTaskPartialResult。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    requestImageGeneration(sessionId: int, params: GenerateImageTaskParams,
      callback: Callback<GenerateImageTaskPartialResult>): void;
    /**
     * 取消AI图像生成任务。
     *
     * @param { int } sessionId - 请求AI图像生成任务的会话ID。
     *     <br>取值范围: [0, +∞]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    cancelImageGeneration(sessionId: int): void;
    /**
     * 用户使用投诉举报菜单来投诉AI生成图像任务的结果。
     *
     * @param { int } sessionId - 请求AI图像生成任务的会话ID。
     *     <br>取值范围: [0, +∞]
     * @param { GenerateImageTaskParams } request - AI生成图像任务的原始请求。
     * @param { GenerateImageTaskResult } result - AI生成图像任务的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    onComplain(sessionId: int, request: GenerateImageTaskParams, result: GenerateImageTaskResult): void;
  }

  /**
   * AI生成文本任务的配置流结果。
   *
   * @interface GenerateTextTaskPartialResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GenerateTextTaskPartialResult {
    /**
     * 用于AI生成文本任务的类型信息。
     *
     * @type { PartialResultType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    type: PartialResultType;

    /**
     * 思考AI生成文本任务中的信息，在部分结果下可使用。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    reasoningContent?: string;

    /**
     * AI生成文本任务的最终数据，在部分结果下可使用。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    content?: string;

    /**
     * 与AI生成文本任务对应的部分错误信息，可在部分错误结果中获取。
     *
     * @type { ?BusinessError }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    partialFail?: BusinessError;
  }

  /**
   * AI生成文本任务的配置结果。
   *
   * @interface GenerateTextTaskResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GenerateTextTaskResult {
    /**
     * 思考AI生成文本任务中的信息。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    reasoningContent: string;

    /**
     * AI生成文本任务的最终数据。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    content: string;
  }

  /**
   * AI文本模型抽象接口。
   *
   * @interface TextGenerationModel
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  export interface TextGenerationModel {
    /**
     * 请求AI文本生成任务以获取生成的文本。
     *
     * @param { int } sessionId - 请求AI文本生成任务的会话ID。
     *     <br>取值范围:[0, +∞]
     * @param { string } value - 请求AI文本生成任务的参数。
     * @param { Callback<GenerateTextTaskPartialResult> } callback - 回调函数
     *     用于返回GenerateTextTaskPartialResult。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    requestTextGeneration(sessionId: int, value: string,
      callback: Callback<GenerateTextTaskPartialResult>): void;
    /**
     * 取消AI文本生成任务。
     *
     * @param { int } sessionId - 取消AI文本生成任务的会话ID。
     *     <br>取值范围:[0, +∞]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    cancelTextGeneration(sessionId: int): void;
    /**
     * 用户使用投诉举报菜单来投诉AI生成文本任务的结果。
     *
     * @param { int } sessionId - AI文本生成任务的会话ID。
     *     <br>取值范围:[0, +∞]
     * @param { string } request - AI生成文本任务的原始请求。
     * @param { GenerateTextTaskResult } result - AI生成文本任务的结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    onComplain(sessionId: int, request: string, result: GenerateTextTaskResult): void;
  }

  /**
   * AI生成图像的图像信息。
   *
   * @interface ImageItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface ImageItem {
    /**
     * ImageGeneratorDialog页面中预览的图片解码信息。
     *
     * <p>**注意**：
     * 在ImageGeneratorDialog中画布内显示；如果未提供该参数，则将从URL解码图像。</p>
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    image?: image.PixelMap;

    /**
     * 图像生成的原始图像路径信息；
     *
     * <p>**注意**：
     * 对于高分辨率场景，最好提供原始图像路径；如果未提供，则将使用 image.PixelMap 进行图像生成。</p>
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    url?: ResourceStr;

    /**
     * 用于在预览画布中显示图像的容器的大小和位置。
     *
     * 建议在多图像融合场景中提供该功能，以获得更好的效果。
     *
     * @type { ?common2D.Rect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    rect?: common2D.Rect;

    /**
     * The rotation of the container used to display images in the preview canvas.
     *
     * 建议在多图像融合场景中提供该功能，以获得更好的效果。
     *
     *
     * @type { ?componentUtils.Rotation2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    rotation?: componentUtils.Rotation2D;

    /**
     * 在多图像场景中，关于图像渲染层次结构的信息。
     *
     * <p>**注意**：
     * 建议在多图像融合场景中使用，以获得更好的效果。</p
     *
     * @type { ?int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    zIndex?: int;

    /**
     * 图像类型是否为手绘线条艺术。
     *
     * <p>**注意**：
     * 建议在手绘线稿场景中使用，以获得更好的效果。</p
     *
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    isHandwrite?: boolean;
  }

  /**
   * 与AI图像生成任务相关的统计数据。
   *
   * @interface TaskStatistic
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface TaskStatistic {
    /**
     * AI图像生成任务中使用的风格。
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    style: string;

    /**
     * 图像AI生成任务是否为贴纸生成任务。
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    isSticker: boolean;

    /**
     * 用于AI图像生成任务的图像数量。
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    imageCount: int;

    /**
     * AI图像生成任务所需时间（秒）。
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    generationTime: double;
  }

  /**
   * AI生成图像的结果
   *
   * @interface GeneratorResult
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GeneratorResult {
    /**
     * AI生成图像的解码数据。
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    image?: image.PixelMap;
    /**
     * AI生成图像的路径信息。
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    url?: string;

    /**
     * AI生成图像任务的统计数据。
     *
     * @type { TaskStatistic }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    statistic: TaskStatistic;
  }

  /**
   * ImageGeneratorDialog生成结果页面中的自定义图标对象。
   *
   * @interface GeneratorResultPageIcon
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GeneratorResultPageIcon {
    /**
     * 图标图像信息。
     *
     * @type { image.PixelMap | string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    image: image.PixelMap | string | Resource;
    /**
     * 图标文本描述。
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    text: ResourceStr;
    /**
     * 图标点击事件回调。
     *
     * @type { Callback<GeneratorResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    callback: Callback<GeneratorResult>;
  }
  /**
   * 自定义导入图标的导入结果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface CustomImportResult {
    /**
     * 用于导入操作的图片相关的数组。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    images?: Array<ImageItem>;
    /**
     * 导入操作的文本内容。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    content?: ResourceStr;
  }

  /**
   * 自定义导入操作的异步回调类型。
   *
   * @returns { Promise<CustomImportResult> } Import images and text
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type CustomImportCallback = () => Promise<CustomImportResult>;

  /**
   * 自定义导入图标，用于从应用端添加图片和文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface CustomImportIcon {
    /**
     * 图标图片信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    image: image.PixelMap | ResourceStr;
    /**
     * 图标文字描述。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    text: ResourceStr;
    /**
     * 导入操作的异步回调函数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    callback: CustomImportCallback;
  }

  /**
   * 用于打开ImageGeneratorDialog的参数。
   *
   * @interface GeneratorDialogOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GeneratorDialogOptions {
    /**
     * 用于AI生成图像任务的初始图像参数。
     *
     * @type { ?Array<ImageItem> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    images?: Array<ImageItem>;
    /**
     * 用于AI生成图像任务的初始文本信息。
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    content?: ResourceStr;
    /**
     * AI生成图像结果页面上使用的自定义图标。
     *
     * @type { ?Array<GeneratorResultPageIcon> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    customIcons?: Array<GeneratorResultPageIcon>;
    /**
     * 用于AI生成图像任务的模型。
     *
     * @type { ?ImageGenerationModel }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    imageGenerationModel?: ImageGenerationModel;
    /**
     * 用于AI生成图像任务中的文本润色模型。
     *
     * @type { ?TextGenerationModel }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    textGenerationModel?: TextGenerationModel;
    /**
     * 当ImageGeneratorDialog的大小或位置发生变化时触发的回调。
     *
     * @type { ?Callback<common2D.Rect> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    onAreaDidChange?: Callback<common2D.Rect>;
    /**
     * 以下配置参数用于自定义导入的图标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    customImportIcon?: CustomImportIcon;
    /**
     * AI图像生成过程中的实况窗的信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    liveViewInfo?: LiveViewInfo;
    /**
     * 是否在生成图像过程中启用最小化。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    minimizeDuringGeneration?: boolean;
  }
  /**
   * AI图像生成中实况窗的选项。
   *
   * @interface LiveViewInfo
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface LiveViewInfo {
    /**
     * 获取实况窗的Want对象。
     *
     * @returns { Want } 返回Want对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getWant(): Want;

    /**
     * 获取实况窗的长时任务ID。
     *
     * @returns { int } 返回长时任务ID
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getLongTermTaskId(): int;

    /**
     * 是否需要实况窗。
     *
     * @returns { boolean } true-需要显示实况窗，false-不显示
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    isLiveViewNeeded(): boolean;
  }
  /**
   * 打开AI图像生成任务弹窗并执行AI图像生成操作。
   *
   * @param { UIContext } uiContext - UI显示的上下文。
   * @param { GeneratorDialogOptions } [options] - 生成图像任务参数。
   * @returns { Promise<Array<GeneratorResult>> } 返回生成图像的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  function showGeneratorDialog(uiContext: UIContext, options?: GeneratorDialogOptions): Promise<Array<GeneratorResult>>;

  /**
   * 关闭AI图像生成任务弹窗。
   *
   * @param { UIContext } uiContext - 用于ui显示的对话框的上下文。
   * @returns { Promise<void> } - Returns the result of close operation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic
   */
  function closeGeneratorDialog(uiContext: UIContext): Promise<void>;
  /**
   * 隐藏AI图像生成任务弹窗。
   *
   * @param { UIContext } uiContext ui显示对话框的上下文。
   * @returns { Promise<void> } 返回隐藏操作的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function hideGeneratorDialog(uiContext: UIContext): Promise<void>;
  /**
   * 恢复AI图像生成任务弹窗。
   *
   * @param { UIContext } uiContext ui显示对话框的上下文。
   * @returns { Promise<void> } 返回恢复操作的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function restoreGeneratorDialog(uiContext: UIContext): Promise<void>;
  /**
   * 启动智能画布服务。
   *
   * @param { common.ServiceExtensionContext | common.UIAbilityContext | common.UIExtensionContext } context - different
   *     ability context.
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic
   */
  function startSmartCanvasService(
    context: common.ServiceExtensionContext | common.UIAbilityContext | common.UIExtensionContext): Promise<void>;
  /**
   * 打开NodeGraphComponent的参数。
   *
   * @interface GeneratorNodeGraphOptions
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GeneratorNodeGraphOptions {
    /**
     * AI生成图像结果页面上使用的自定义图标。
     *
     * @type { ?Array<GeneratorResultPageIcon> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    customIcons?: Array<GeneratorResultPageIcon>;
    /**
     * 用于AI生成图像任务的模型。
     *
     * @type { ?ImageGenerationModel }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    imageGenerationModel?: ImageGenerationModel;
    /**
     * 用于AI生成图像任务中的文本润色模型。
     *
     * @type { ?TextGenerationModel }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    textGenerationModel?: TextGenerationModel;
    /**
     * 以下配置参数用于自定义导入的图标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    customImportIcon?: CustomImportIcon;
    /**
     * AI图像生成过程中的实况窗的信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    liveViewInfo?: LiveViewInfo;
  }

  /**
   * 打开AI节点图Sheet页。
   *
   * @param { UIContext } uiContext - 用于ui显示的对话框的上下文。
   * @param { GeneratorNodeGraphOptions } [options] - 节点图任务参数。
   * @returns { Promise<void> } 返回结果
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  function openGeneratorNodeGraph(uiContext: UIContext, options?: GeneratorNodeGraphOptions): Promise<void>;

  /**
   * 关闭AI节点图Sheet页。
   *
   * @param { UIContext } uiContext - 用于ui显示的对话框的上下文。
   * @returns { Promise<void> } - Returns the result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  function closeGeneratorNodeGraph(uiContext: UIContext): Promise<void>;
  /**
   * 隐藏AI节点图Sheet页。
   *
   * @param { UIContext } uiContext ui显示对话框的上下文。
   * @returns { Promise<void> } 返回隐藏操作的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function hideGeneratorNodeGraph(uiContext: UIContext): Promise<void>;
  /**
   * 恢复AI节点图Sheet页。
   *
   * @param { UIContext } uiContext ui显示对话框的上下文。
   * @returns { Promise<void> } 返回恢复操作的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function restoreGeneratorNodeGraph(uiContext: UIContext): Promise<void>;
}

export default imageGeneration;