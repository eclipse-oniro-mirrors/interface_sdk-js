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
 * @file
 * @kit ArkUI
 */

/*** if arkts 1.2 */
import { CommonShapeMethod, CommonMethod } from './common';
import { Length } from './units';
/*** endif */

/**
 * Defines the Shape Point, the first element is the x-axis offset and the second is the y-axis.
 * 
 * @typedef { [Length, Length] } ShapePoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
export type ShapePoint = [Length, Length];

/**
 * Defines Line constructor options.
 *
 * @interface LineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface LineOptions {
  /**
   * Width of the rectangle where the line resides.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Width of the rectangle where the line resides.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Width of the rectangle where the line resides.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Width of the rectangle where the line resides.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Width of the rectangle where the line resides.
   * Anonymous Object Rectification.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Width of the rectangle where the line resides.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  width?: Length;

  /**
   * Height of the rectangle where the line resides.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Height of the rectangle where the line resides.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Height of the rectangle where the line resides.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Height of the rectangle where the line resides.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Height of the rectangle where the line resides.
   * Anonymous Object Rectification.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  /**
   * Height of the rectangle where the line resides.
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  height?: Length;
}

/**
 * Line drawing component.
 *
 * @interface LineInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Line drawing component.
 *
 * @interface LineInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Line drawing component.
 *
 * @interface LineInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Line drawing component.
 *
 * @interface LineInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface LineInterface {
  /**
   * Uses new to create the line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Uses new to create the line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Uses new to create the line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Uses new to create the line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Uses new to create the line.
   * Anonymous Object Rectification.
   *
   * @param { LineOptions } [options] - Line options
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  new (options?: LineOptions): LineAttribute;

  /**
   * The return value of the parameter is Line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The return value of the parameter is Line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * The return value of the parameter is Line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * The return value of the parameter is Line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   *
   * @param { object } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * The return value of the parameter is Line.
   * Anonymous Object Rectification.
   *
   * @param { LineOptions } [options] - Line options
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */
  (options?: LineOptions): LineAttribute;
}

/**
 * inheritance CommonShapeMethod.
 *
 * @extends CommonShapeMethod<LineAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * inheritance CommonShapeMethod.
 *
 * @extends CommonShapeMethod<LineAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * inheritance CommonShapeMethod.
 *
 * @extends CommonShapeMethod<LineAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * inheritance CommonShapeMethod.
 *
 * @extends CommonShapeMethod<LineAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class LineAttribute extends CommonShapeMethod<LineAttribute> {
  /**
   * Coordinate of the start point of the line (relative coordinate).
   *
   * @param { Array<any> } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Coordinate of the start point of the line (relative coordinate).
   *
   * @param { Array<any> } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Coordinate of the start point of the line (relative coordinate).
   *
   * @param { Array<any> } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Coordinate of the start point of the line (relative coordinate).
   *
   * @param { Array<any> } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  startPoint(value: Array<any>): LineAttribute;

  /**
   * Coordinate of the start point of the line (relative coordinate).
   *
   * @param { ShapePoint } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  startPoint(value: ShapePoint): LineAttribute;

  /**
   * Line end coordinates (relative coordinates).
   *
   * @param { Array<any> } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Line end coordinates (relative coordinates).
   *
   * @param { Array<any> } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Line end coordinates (relative coordinates).
   *
   * @param { Array<any> } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Line end coordinates (relative coordinates).
   *
   * @param { Array<any> } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  endPoint(value: Array<any>): LineAttribute;

  /**
   * Line end coordinates (relative coordinates).
   *
   * @param { ShapePoint } value
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  endPoint(value: ShapePoint): LineAttribute;
}

/**
 * Defines Line Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Line Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Line Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Line Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Line: LineInterface;

/**
 * Defines Line Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Line Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Line Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Line Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const LineInstance: LineAttribute;

/**
 * Line drawing component.
 *
 * @interface LineInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface LineInterface {
  /**
   * The return value of the parameter is Line.
   *
   * @param { LineOptions } [options] - Line options
   * @returns { LineAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  (options?: LineOptions): LineAttribute;
}
