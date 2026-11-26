/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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
  * @file
  * @kit ArkUI
 */

import type image from './@ohos.multimedia.image';
import type common2D from './@ohos.graphics.common2D';

/**
 * 提供获取组件绘制区域坐标和大小的能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare namespace componentUtils {


  /**
   * 组件大小、位置、平移缩放旋转及仿射矩阵属性信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface ComponentInfo {


    /**
     * 组件大小。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size: Size;


    /**
     * 组件相对于父组件信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    localOffset: Offset;


    /**
     * 组件相对于窗口信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    windowOffset: Offset;


    /**
     * 组件相对于屏幕信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    screenOffset: Offset;


    /**
     * 组件平移信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    translate: TranslateResult;


    /**
     * 组件缩放信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale: ScaleResult;


    /**
     * 组件旋转信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rotate: RotateResult;


    /**
     * 仿射矩阵信息，根据入参创建的四阶矩阵对象。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    transform: Matrix4Result;
    }


  /**
   * 定义尺寸属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface Size {


    /**
     * 组件宽度。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width: double;


    /**
     * 组件高度。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height: double;
    }


  /**
   * 定义坐标属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface Offset {


    /**
     * x点坐标。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;


    /**
     * y点坐标。
     * 
     * 单位: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;
    }


  /**
   * 平移信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface TranslateResult {


    /**
     * x轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;


    /**
     * y轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;


    /**
     * z轴平移距离。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z: double;
    }


  /**
   * 缩放信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface ScaleResult {


    /**
     * x轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;


    /**
     * y轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;


    /**
     * z轴缩放倍数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z: double;


    /**
     * 变换中心点x轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerX: double;


    /**
     * 变换中心点y轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerY: double;
    }


  /**
   * 旋转信息。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export interface RotateResult {


    /**
     * 旋转轴向量x坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    x: double;


    /**
     * 旋转轴向量y坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    y: double;


    /**
     * 旋转轴向量z坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    z: double;


    /**
     * 变换中心点x轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerX: double;


    /**
     * 变换中心点y轴坐标。
     * 
     * 单位: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    centerY: double;


    /**
     * 旋转角度。
     * 
     * 单位: deg
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    angle: double;
    }


  /**
   * 列优先四阶矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  export type Matrix4Result = [
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double,
        double
    ];

  /**
   * 描述二维空间中的旋转，可以通过旋转角度和旋转中心来定义。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface Rotation2D {
    /**
     * 旋转角信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    angle: double;
    /**
     * 旋转中心X信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    centerX: double;
    /**
     * 旋转中心Y信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    centerY: double;
    }

  /**
   * 带有布局信息的图像对象。
   *
   * @interface ImageItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface ImageItem {
    /**
     * 图像解码信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    image: image.PixelMap;
    /**
     * 显示图像的框的位置和大小信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    rect: common2D.Rect;
    /**
     * 显示图像的框的旋转信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    rotation?: Rotation2D;
    /**
     * 图像渲染层次结构信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    zIndex: int;
    }

  /**
   * 需要获取图像对象时设置的图像选项。
   *
   * @interface GetItemsInShapePathParams
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  interface GetItemsInShapePathParams {
    /**
     * 图片信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    images: Array<ImageItem>;

    /**
     * 表示路径的点信息。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    shapePath: Array<common2D.Point>;

    /**
     * 所选区域中非透明空白像素的比例相对于图像总像素的比例。默认值为0.15。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    ratio?: double;
    }

  /**
   * 获取位于选定区域内的图像对象。
   *
   * @param { GetItemsInShapePathParams } value - 获取形状路径中图像的选项。
   * @returns { Array<ImageItem> } 返回位于选定区域内的图像对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>;
}
export default componentUtils;