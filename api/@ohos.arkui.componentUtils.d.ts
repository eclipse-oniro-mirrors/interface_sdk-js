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
 * @file ComponentUtils
 * @kit ArkUI
 */

import type image from './@ohos.multimedia.image';
import type common2D from './@ohos.graphics.common2D';

/**
 * The **componentUtils** module provides API for obtaining the coordinates and size of the drawing area of a component.
 * It is applicable to scenarios where the actual drawing area information of a component needs to be queried after the
 * component layout is complete, helping you obtain layout results such as component sizes and positions.
 *
 * > **NOTE**
 * >
 * > - The functionality of this module depends on UI context. This means that the APIs of this module cannot be used
 * > where [the UI context is ambiguous](docroot://ui/arkts-global-interface.md#ambiguous-ui-context). For details, see
 * > [UIContext]{@link @ohos.arkui.UIContext}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare namespace componentUtils {

  /**
   * Implements a **ComponentInfo** object, which provides the size, position, translation, scaling, rotation, and
   * affine matrix information of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface ComponentInfo {

    /**
     * Component size.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    size: Size;

    /**
     * Offset of the component relative to its parent component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    localOffset: Offset;

    /**
     * Offset of the component relative to the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    windowOffset: Offset;

    /**
     * Offset of the component relative to the screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    screenOffset: Offset;

    /**
     * Translation of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    translate: TranslateResult;

    /**
     * Scaling of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    scale: ScaleResult;

    /**
     * Rotation of the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    rotate: RotateResult;

    /**
     * Affine matrix of the component, which is a 4x4 matrix object created based on the input parameter.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    transform: Matrix4Result;
  }

  /**
   * Defines the size property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface Size {

    /**
     * Component width.
     *
     * Unit: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    width: number;

    /**
     * Component height.
     *
     * Unit: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    height: number;
  }

  /**
   * Defines the offset property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface Offset {

    /**
     * X-coordinate.
     *
     * Unit: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    x: number;

    /**
     * Y-coordinate.
     *
     * Unit: px
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    y: number;
  }

  /**
   * Translation Result
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface TranslateResult {

    /**
     * Translation distance along the x-axis.
     *
     * Unit: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    x: number;

    /**
     * Translation distance along the y-axis.
     *
     * Unit: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    y: number;

    /**
     * Translation distance along the z-axis.
     *
     * Unit: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    z: number;
  }

  /**
   * Scale Result
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface ScaleResult {

    /**
     * Scale factor along the x-axis.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    x: number;

    /**
     * Scale factor along the y-axis.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    y: number;

    /**
     * Scale factor along the z-axis.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    z: number;

    /**
     * X-axis coordinate of the transform center point.
     *
     * Unit: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    centerX: number;

    /**
     * Y-axis coordinate of the transform center point.
     *
     * Unit: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    centerY: number;
  }

  /**
   * Rotation Result.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  interface RotateResult {

    /**
     * X-coordinate of the rotation vector.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    x: number;

    /**
     * Y-coordinate of the rotation vector.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    y: number;

    /**
     * Z-coordinate of the rotation vector.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    z: number;

    /**
     * X-axis coordinate of the transform center point.
     *
     * Unit: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    centerX: number;

    /**
     * Y-axis coordinate of the transform center point.
     *
     * Unit: vp
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    centerY: number;

    /**
     * Rotation angle.
     *
     * Unit: deg
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    angle: number;
  }

  /**
   * Number array whose length is 16 (4 x 4). The matrix is column-first.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  type Matrix4Result = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];

  /**
   * Describes a rotation in 2D, which can be defined by rotation angle and rotation center.
   *
   * @typedef Rotation2D
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface Rotation2D {
    /**
     * Rotation angle Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    angle: double;
    /**
     * Rotation centerX Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    centerX: double;
    /**
     * Rotation centerY Information.
     *
     * @type { double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    centerY: double;
  }

  /**
   * Image object with layout information.
   *
   * @interface ImageItem
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface ImageItem {
    /**
     * Image Decoding Information.
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    image: image.PixelMap;

    /**
     * Information about the position and size of the box which displays the image.
     *
     * @type { common2D.Rect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    rect: common2D.Rect;

    /**
     * Information about the rotation of the box which displays the image.
     *
     * @type { ?Rotation2D }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    rotation?: Rotation2D;

    /**
     * Information about image rendering hierarchy.
     *
     * @type { int }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    zIndex: int;
  }

  /**
   * Image options setted when need to get the image objects.
   *
   * @interface GetItemsInShapePathParams
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  interface GetItemsInShapePathParams {
    /**
     * image information.
     *
     * @type { Array<ImageItem> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    images: Array<ImageItem>;

    /**
     * Indicates the path points information.
     *
     * @type { Array<common2D.Point> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    shapePath: Array<common2D.Point>;

    /**
     * The proportion of non-transparent blank pixels in the selected area
     * relative to the total pixels of the image. Default value is 0.15.
     *
     * @type { ?double }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    ratio?: double;
   }

  /**
   * Get the image objects located within the selected area.
   *
   * @param { GetItemsInShapePathParams } value - options to get images in shapePath.
   * @returns { Array<ImageItem> } Returns the image objects located within the selected area.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  function getItemsInShapePath(value: GetItemsInShapePathParams): Array<ImageItem>;

  /**
   * Obtains a **ComponentInfo** object based on the component ID and synchronously returns the geometric properties of
   * the component.
   *
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the
   * > [getComponentUtils]{@link @ohos.arkui.UIContext:UIContext#getComponentUtils} API in
   * > [UIContext]{@link @ohos.arkui.UIContext} to obtain the [ComponentUtils]{@link @ohos.arkui.UIContext} object
   * > associated with the current UI context. This API provides access to component coordinates and size information
   * > after the target component completes layout. It is recommended that you invoke this API within
   * > [layout completion callbacks]{@link @ohos.arkui.inspector:inspector}. Note that dynamically created components
   * > must be mounted to the component tree before this API can obtain their information, as unmounted components are
   * > not measured or laid out by the UI framework. Always ensure that component mounting precedes information
   * > retrieval attempts.
   * >
   * > - The component position returned by this API is the layout position. Certain attribute calculations are not
   * > supported, such as position-related attributes like **offset**, **markAnchor**, and **position** of the
   * > **Edges** and **LocalizedEdges** types, as well as transformation-related attributes like **rotate**,
   * > **translate**, **scale**, and **transform**. You can use the alternative API
   * > [getPositionToWindowWithTransform]{@link FrameNode:FrameNode#getPositionToWindowWithTransform} to obtain the
   * > position offset of a component relative to the window with drawing attributes.
   *
   * @param {string} id - Component ID. The target component must be mounted to the component tree and have completed
   *     layout.
   * @returns {ComponentInfo} **ComponentInfo** object, which provides the size, position, translation, scaling,
   *     rotation, and affine matrix information of the component.
   * @throws { BusinessError } 100001 - UI execution context not found.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.ComponentUtils#getRectangleById
   */
  function getRectangleById(id: string): ComponentInfo;
}

export default componentUtils;