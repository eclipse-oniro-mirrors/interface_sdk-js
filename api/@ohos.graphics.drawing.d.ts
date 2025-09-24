/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */

import type image from './@ohos.multimedia.image';
import type common2D from './@ohos.graphics.common2D';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import { Resource } from './global/resource';
/*** if arkts static */
import { ResourceColor } from '@ohos.arkui.component';
/*** endif */

/**
 * The common2D module defines some common data types in the 2D graphics field.
 *
 * @namespace drawing
 * @syscap SystemCapability.Graphics.Drawing
 * @since 11 dynamic
 * @since 20 static
 */
declare namespace drawing {
  /**
   * Enumerates the blend modes. A blend mode combines two colors (source color and destination color) in a specific way to create a new color.
   * This is commonly used in graphics operations like overlaying, filtering, and masking.
   * The blending process applies the same logic to the red, green, and blue color channels separately.
   * The alpha channel, however, is handled according to the specific definitions of each blend mode.
   * 
   * For brevity, the following abbreviations are used:
   * 
   * s: source.
   * d: destination.
   * sa: source alpha.
   * da: destination alpha.
   * The following abbreviations are used in the calculation result:
   * 
   * r: used when the calculation method is the same for the four channels (alpha, red, green, and blue channels).
   * ra: used when only the alpha channel is manipulated.
   * rc: used when the other three color channels are manipulated.
   * The table below shows the effect of each blend mode, where the yellow rectangle is the source and the blue circle is the destination.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11 dynamic
   * @since 20 static
   */
  enum BlendMode {
    /**
     * r = 0, sets the the destination pixels to fully transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    CLEAR = 0,
    /**
     * r = s (all channels of the result equal those of the source), replaces the destination pixels with the source pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    SRC = 1,
    /**
     * r = d (all channels of the result equal those of the destination), keeps the destination pixels unchanged.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    DST = 2,
    /**
     * r = s + (1 - sa) * d, draws the source pixels over the destination pixels, considering the source's transparency.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    SRC_OVER = 3,
    /**
     * r = d + (1 - da) * s, draws the destination pixels over the source pixels, considering the destination's transparency.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    DST_OVER = 4,
    /**
     * r = s * da, retains only the intersection of the source pixels with the opaque parts of the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    SRC_IN = 5,
    /**
     * r = d * sa, retains only the intersection of the destination pixels with the opaque parts of the source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    DST_IN = 6,
    /**
     * r = s * (1 - da), retains the parts of the source pixels that do not overlap with the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    SRC_OUT = 7,
    /**
     * r = d * (1 - sa), retains the parts of the destination pixels that do not overlap with the source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    DST_OUT = 8,
    /**
     * r = s * da + d * (1 - sa), covers the destination pixels with the source pixels, showing the source only in the opaque parts of the destination.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    SRC_ATOP = 9,
    /**
     * r = d * sa + s * (1 - da), covers the source pixels with the destination pixels, showing the destination only in the opaque parts of the source.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    DST_ATOP = 10,
    /**
     * r = s * (1 - da) + d * (1 - sa), shows only the non-overlapping parts of the source and destination pixels.	
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    XOR = 11,
    /**
     * r = min(s + d, 1), adds the color values of the source and destination pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    PLUS = 12,
    /**
     * r = s * d, multiplies the color values of the source and destination pixels.	
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    MODULATE = 13,
    /**
     * r = s + d - s * d, inverts the color values of the source and destination pixels, multiplies them,
     * and then inverts the result, typically producing a brighter outcome.	
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    SCREEN = 14,
    /**
     * Selectively applies MULTIPLY or SCREEN based on the brightness of the destination pixels, enhancing contrast.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    OVERLAY = 15,
    /**
     * rc = s + d - max(s * da, d * sa), ra = s + (1 - sa) * d, takes the darker color values between the source and destination pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    DARKEN = 16,
    /**
     * rc = s + d - min(s * da, d * sa), ra = s + (1 - sa) * d, takes the lighter color values between the source and destination pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    LIGHTEN = 17,
    /**
     * Brightens the destination pixels by reducing contrast to reflect the source pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    COLOR_DODGE = 18,
    /**
     * Darkens the destination pixels by increasing contrast to reflect the source pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    COLOR_BURN = 19,
    /**
     * Selectively applies MULTIPLY or SCREEN based on the brightness of the source pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    HARD_LIGHT = 20,
    /**
     * Softly brightens or darkens the destination pixels based on the brightness of the source pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    SOFT_LIGHT = 21,
    /**
     * rc = s + d - 2 * (min(s * da, d * sa)), ra = s + (1 - sa) * d, calculates the difference between the color values of the source and destination pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    DIFFERENCE = 22,
    /**
     * rc = s + d - two(s * d), ra = s + (1 - sa) * d, similar to DIFFERENCE but with lower contrast.	
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    EXCLUSION = 23,
    /**
     * r = s * (1 - da) + d * (1 - sa) + s * d, multiplies the color values of the source and destination pixels, typically resulting in a darker outcome.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    MULTIPLY = 24,
    /**
     * Uses the hue of the source pixels and the saturation and brightness of the destination pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    HUE = 25,
    /**
     * Uses the saturation of the source pixels and the hue and brightness of the destination pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    SATURATION = 26,
    /**
     * Uses the hue and saturation of the source pixels and the brightness of the destination pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    COLOR = 27,
    /**
     * Uses the brightness of the source pixels and the hue and saturation of the destination pixels.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    LUMINOSITY = 28,
  }

  /**
   * Enumerates the directions of a closed contour.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the directions of a closed contour.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum PathDirection {
    /**
     * Adds a closed contour clockwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds a closed contour clockwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    CLOCKWISE = 0,

    /**
     * Adds a closed contour counterclockwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds a closed contour counterclockwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    COUNTER_CLOCKWISE = 1,
  }

  /**
   * Enumerates the fill types of a path.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the fill types of a path.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum PathFillType {
    /**
     * Specifies that "inside" is computed by a non-zero sum of signed edge crossings.
     * Specifically, draws a point and emits a ray in any direction.
     * A count is used to record the number of intersection points of the ray and path,
     * and the initial count is 0.
     * When encountering a clockwise intersection point (the path passes from the left to the right of the ray),
     * the count increases by 1.
     * When encountering a counterclockwise intersection point (the path passes from the right to the left of the ray),
     * the count decreases by 1.
     * If the final count is not 0, the point is inside the path and needs to be colored. If the final count is 0,
     * the point is not colored.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Specifies that "inside" is computed by a non-zero sum of signed edge crossings.
     * Specifically, draws a point and emits a ray in any direction.
     * A count is used to record the number of intersection points of the ray and path,
     * and the initial count is 0.
     * When encountering a clockwise intersection point (the path passes from the left to the right of the ray),
     * the count increases by 1.
     * When encountering a counterclockwise intersection point (the path passes from the right to the left of the ray),
     * the count decreases by 1.
     * If the final count is not 0, the point is inside the path and needs to be colored. If the final count is 0,
     * the point is not colored.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    WINDING = 0,

    /**
     * Specifies that "inside" is computed by an odd number of edge crossings.
     * Specifically, draws a point and emits a ray in any direction.
     * If the number of intersection points of the ray and path is an odd number,
     * the point is considered to be inside the path and needs to be colored.
     * If the number is an even number, the point is not colored.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Specifies that "inside" is computed by an odd number of edge crossings.
     * Specifically, draws a point and emits a ray in any direction.
     * If the number of intersection points of the ray and path is an odd number,
     * the point is considered to be inside the path and needs to be colored.
     * If the number is an even number, the point is not colored.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    EVEN_ODD = 1,

    /**
     * Same as WINDING, but draws outside of the path, rather than inside.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Same as WINDING, but draws outside of the path, rather than inside.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    INVERSE_WINDING = 2,

    /**
     * Same as EVEN_ODD, but draws outside of the path, rather than inside.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Same as EVEN_ODD, but draws outside of the path, rather than inside.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    INVERSE_EVEN_ODD = 3,
  }

  /**
  * Enumerates the types of matrix information obtained during path measurement.
  * @enum { int }
  * @syscap SystemCapability.Graphics.Drawing
  * @since 12
  */
  /**
   * Enumerates the dimensions of matrix information in path measurement.
   * It is often used in animation scenarios where objects move along a path.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum PathMeasureMatrixFlags {
    /**
     * Matrix corresponding to the position information.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Matrix corresponding to the position information.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    GET_POSITION_MATRIX = 0,
    /**
     * Matrix corresponding to the tangent information.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Matrix corresponding to the tangent information.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    GET_TANGENT_MATRIX = 1,
    /**
     * Matrix corresponding to the position and tangent information.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Matrix corresponding to the position and tangent information.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    GET_POSITION_AND_TANGENT_MATRIX = 2,
  }

  /**
   * Provides the definition of the roundRect.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Implements a rounded rectangle.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class RoundRect {

    /**
     * Creates a deep copy of the specified round rect object.
     * @param { RoundRect } roundRect - The round rect object to copy.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    constructor(roundRect: RoundRect);

    /**
     * Creates a simple round rect with the same four corner radii.
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { double } xRadii - Indicates the corner radii on x-axis.
     * @param { double } yRadii - Indicates the corner radii on y-axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * A constructor used to create a RoundRect object.
     * A rounded rectangle is created when both xRadii and yRadii are greater than 0.
     * Otherwise, only a rectangle is created.
     * @param { common2D.Rect } rect - Rectangle that encloses the rounded rectangle to create.
     * @param { double } xRadii - Radius of the rounded corner on the X axis.
     *     The value is a floating point number. A negative number is invalid.
     * @param { double } yRadii - Radius of the rounded corner on the Y axis.
     *     The value is a floating point number. A negative number is invalid.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor(rect: common2D.Rect, xRadii: double, yRadii: double);

    /**
     * Sets the radii of the specified rounded corner in this rounded rectangle.
     * @param { CornerPos } pos - Position of the rounded corner.
     * @param { double } x - Radius of the rounded corner on the X axis.
     *     The value is a floating point number. A negative number is invalid.
     * @param { double } y - Radius of the rounded corner on the Y axis.
     *     The value is a floating point number. A negative number is invalid.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the radii of the specified rounded corner in this rounded rectangle.
     * @param { CornerPos } pos - Position of the rounded corner.
     * @param { double } x - Radius of the rounded corner on the X axis.
     *     The value is a floating point number. A negative number is invalid.
     * @param { double } y - Radius of the rounded corner on the Y axis.
     *     The value is a floating point number. A negative number is invalid.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setCorner(pos: CornerPos, x: double, y: double): void;

    /**
     * Obtains the radii of the specified rounded corner in this rounded rectangle.
     * @param { CornerPos } pos - Position of the rounded corner.
     * @returns { common2D.Point } Point. The horizontal coordinate indicates the radius of
     *     the rounded corner on the X axis,
     * and the vertical coordinate indicates the radius on the Y axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    /**
     * Obtains the radii of the specified rounded corner in this rounded rectangle.
     * @param { CornerPos } pos - Position of the rounded corner.
     * @returns { common2D.Point } Point. The horizontal coordinate indicates the radius of
     *     the rounded corner on the X axis,
     * and the vertical coordinate indicates the radius on the Y axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getCorner(pos: CornerPos): common2D.Point;

    /**
     * Obtains the radii of the specified rounded corner in this rounded rectangle.
     * @param { CornerPos } pos - Position of the rounded corner.
     * @returns { common2D.Point | undefined } Point. The horizontal coordinate indicates the radius of
     *     the rounded corner on the X axis,
     * and the vertical coordinate indicates the radius on the Y axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getCorner(pos: CornerPos): common2D.Point | undefined;

    /**
     * Translates this rounded rectangle by an offset along the X axis and Y axis.
     * @param { double } dx - Horizontal distance to translate. A positive number indicates a translation towards
     *     the positive direction of the X axis, and a negative number indicates a translation towards the negative
     *     direction of the X axis. The value is a floating point number.
     * @param { double } dy - Vertical distance to translate. A positive number indicates a translation towards
     *     the positive direction of the Y axis, and a negative number indicates a translation towards the negative
     *     direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Translates this rounded rectangle by an offset along the X axis and Y axis.
     * @param { double } dx - Horizontal distance to translate. A positive number indicates a translation towards
     *     the positive direction of the X axis, and a negative number indicates a translation towards the negative
     *     direction of the X axis. The value is a floating point number.
     * @param { double } dy - Vertical distance to translate. A positive number indicates a translation towards
     *     the positive direction of the Y axis, and a negative number indicates a translation towards the negative
     *     direction of the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    offset(dx: double, dy: double): void;
  }

  /**
   * Enumerates the operations when two paths are combined.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the path operation types. It is often used in path combination and clipping scenarios.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum PathOp {
    /**
     * Difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    DIFFERENCE = 0,

    /**
     * Intersection operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Intersection operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    INTERSECT = 1,

    /**
     * Union operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Union operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    UNION = 2,

    /**
     * XOR operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * XOR operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    XOR = 3,

    /**
     * Reverse difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Reverse difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    REVERSE_DIFFERENCE = 4
  }

  /**
   * Enumerates the path operation types contained in an iterator. It is used to read path operation instructions.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18
   */
  /**
   * Enumerates the path operation types contained in an iterator. It is used to read path operation instructions.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum PathIteratorVerb {
    /**
     * Sets the start point.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Sets the start point.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    MOVE = 0,

    /**
     * Adds a line segment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Adds a line segment.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    LINE = 1,

    /**
     * Adds a quadratic Bezier curve for smooth transitions.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Adds a quadratic Bezier curve for smooth transitions.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    QUAD = 2,

    /**
     * Adds a conic curve.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Adds a conic curve.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    CONIC = 3,

    /**
     * Adds a cubic Bezier curve for smooth transitions.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Adds a cubic Bezier curve for smooth transitions.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    CUBIC = 4,

    /**
     * Closes a path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Closes a path.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    CLOSE = 5,

    /**
     * The path setting is complete.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * The path setting is complete.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    DONE = CLOSE + 1,
  }

  /**
   * Describes a pathIterator object
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18
   */
  /**
   * Implements a path operation iterator. You can read path operation instructions by traversing the iterator.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class PathIterator {
    /**
     * Creates an iterator and binds it with a path.
     * @param { Path } path - Path object bound to the iterator.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     * @since 20 static
     */
    constructor(path: Path);

    /**
     * Retrieves the next operation in this path and moves the iterator to that operation.
     * @param { Array<common2D.Point> } points - Indicates the point array.
     * @param { number } [offset] - Indicates the offset into the array where entries should be placed.
     *     The default value is 0.
     * @returns { PathIteratorVerb } Returns the next verb in this iterator's path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Retrieves the next operation in this path and moves the iterator to that operation.
     * @param { Array<common2D.Point> } points - Indicates the point array.
     * @param { number } [offset] - Indicates the offset into the array where entries should be placed.
     *     The default value is 0.
     * @returns { PathIteratorVerb } Returns the next verb in this iterator's path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    next(points: Array<common2D.Point>, offset?: number): PathIteratorVerb;

    /**
     * Retrieves the next operation in this path and moves the iterator to that operation.
     * @param { Array<common2D.Point> } points - Indicates the point array.
     * @param { int } [offset] - Indicates the offset into the array where entries should be placed.
     *     The default value is 0.
     * @returns { PathIteratorVerb | undefined } Returns the next verb in this iterator's path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    next(points: Array<common2D.Point>, offset?: int): PathIteratorVerb | undefined;

    /**
     * Retrieves the next operation in this path, without moving the iterator.
     * @returns { PathIteratorVerb } Returns the next verb in the iteration.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Retrieves the next operation in this path, without moving the iterator.
     * @returns { PathIteratorVerb } Returns the next verb in the iteration.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    peek(): PathIteratorVerb;

    /**
     * Retrieves the next operation in this path, without moving the iterator.
     * @returns { PathIteratorVerb | undefined } Returns the next verb in the iteration.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    peek(): PathIteratorVerb | undefined;

    /**
     * Checks whether there is a next operation in the path operation iterator.
     * @returns { boolean } Returns true if there are more elements to be iterated through, false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Checks whether there is a next operation in the path operation iterator.
     * @returns { boolean } Returns true if there are more elements to be iterated through, false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    hasNext(): boolean;
  }

  /**
   * A compound geometric path consisting of line segments, arcs, quadratic Bezier curves, and cubic Bezier curves.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11 dynamic
   * @since 20 static
   */
  class Path {
    /**
     * Constructs a path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    constructor();

    /**
     * Constructs a copy of an existing path.
     * @param { Path } path - Path to copy.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    constructor(path: Path);

    /**
     * Sets the Path with the same content of another.
     * @param { Path } src - the path to copy content from.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    set(src: Path): void;

    /**
     * Sets the start point of this path.
     * @param { double } x - X coordinate of the start point. The value is a floating point number.
     * @param { double } y - Y coordinate of the start point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets the start point of this path.
     * @param { double } x - X coordinate of the start point. The value is a floating point number.
     * @param { double } y - Y coordinate of the start point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    moveTo(x: double, y: double): void;

    /**
     * Draws a line segment from the last point of this path to the target point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } x - X coordinate of the target point. The value is a floating point number.
     * @param { double } y - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws a line segment from the last point of this path to the target point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } x - X coordinate of the target point. The value is a floating point number.
     * @param { double } y - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    lineTo(x: double, y: double): void;

    /**
     * Draws an arc to this path using angle arc mode. This mode first defines a rectangle and takes its inscribed ellipse.
     * Then, it specifies a start angle and a sweep angle. The arc is the portion of the ellipse's circumference defined by the start angle
     * and the sweep angle. By default, a line segment from the last point of the path to the start point of the arc is also added.
     * @param { double } x1 - X coordinate of the upper left corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } y1 - Y coordinate of the upper left corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } x2 - X coordinate of the lower right corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } y2 - Y coordinate of the lower right corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } startDeg - Start angle. The start direction (0°) of the angle is
     *     the positive direction of the X axis.
     * @param { double } sweepDeg - Angle to sweep, in degrees. A positive number indicates a clockwise sweep,
     *     and a negative value indicates a counterclockwise swipe.
     *     The actual swipe degree is the modulo operation result of the input parameter by 360.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws an arc to this path using angle arc mode.
     * This mode first defines a rectangle and takes its inscribed ellipse.
     * Then, it specifies a start angle and a sweep angle.
     * The arc is the portion of the ellipse's circumference defined by the start angle and the sweep angle. By default,
     * a line segment from the last point of the path to the start point of the arc is also added.
     * @param { double } x1 - X coordinate of the upper left corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } y1 - Y coordinate of the upper left corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } x2 - X coordinate of the lower right corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } y2 - Y coordinate of the lower right corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } startDeg - Start angle. The start direction (0°) of the angle is
     *     the positive direction of the X axis.
     * @param { double } sweepDeg - Angle to sweep, in degrees. A positive number indicates a clockwise sweep,
     *     and a negative value indicates a counterclockwise swipe.
     *     The actual swipe degree is the modulo operation result of the input parameter by 360.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    arcTo(x1: double, y1: double, x2: double, y2: double, startDeg: double, sweepDeg: double): void;

    /**
     * Draws a quadratic Bezier curve from the last point of this path to the target point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX - X coordinate of the control point. The value is a floating point number.
     * @param { double } ctrlY - Y coordinate of the control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws a quadratic Bezier curve from the last point of this path to the target point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX - X coordinate of the control point. The value is a floating point number.
     * @param { double } ctrlY - Y coordinate of the control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    quadTo(ctrlX: double, ctrlY: double, endX: double, endY: double): void;

    /**
     * Draws a conic curve from the last point of this path to the target point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX - X coordinate of the control point. The value is a floating point number.
     * @param { double } ctrlY - Y coordinate of the control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @param { double } weight - Weight of the curve, which determines its shape. The larger the value,
     *     the closer of the curve to the control point. If the value is less than or equal to 0,
     *     this API has the same effect as lineTo. If the value is 1, it has the same effect as quadTo.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a conic curve from the last point of this path to the target point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX - X coordinate of the control point. The value is a floating point number.
     * @param { double } ctrlY - Y coordinate of the control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @param { double } weight - Weight of the curve, which determines its shape. The larger the value,
     *     the closer of the curve to the control point. If the value is less than or equal to 0,
     *     this API has the same effect as lineTo. If the value is 1, it has the same effect as quadTo.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    conicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void;

    /**
     * Draws a cubic Bezier curve from the last point of this path to the target point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX1 - X coordinate of the first control point. The value is a floating point number.
     * @param { double } ctrlY1 - Y coordinate of the first control point. The value is a floating point number.
     * @param { double } ctrlX2 - X coordinate of the second control point. The value is a floating point number.
     * @param { double } ctrlY2 - Y coordinate of the second control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws a cubic Bezier curve from the last point of this path to the target point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX1 - X coordinate of the first control point. The value is a floating point number.
     * @param { double } ctrlY1 - Y coordinate of the first control point. The value is a floating point number.
     * @param { double } ctrlX2 - X coordinate of the second control point. The value is a floating point number.
     * @param { double } ctrlY2 - Y coordinate of the second control point. The value is a floating point number.
     * @param { double } endX - X coordinate of the target point. The value is a floating point number.
     * @param { double } endY - Y coordinate of the target point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    cubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void;

    /**
     * Sets the start position relative to the last point of this path.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } dx - X offset of the start point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } dy - Y offset of the start point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the start position relative to the last point of this path.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } dx - X offset of the start point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } dy - Y offset of the start point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    rMoveTo(dx: double, dy: double): void;

    /**
     * Draws a line segment from the last point of this path to a point relative to the last point. If the path is empty, the start point (0, 0) is used.
     * @param { double } dx - X offset of the target point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } dy - Y offset of the target point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a line segment from the last point of this path to a point relative to the last point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } dx - X offset of the target point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } dy - Y offset of the target point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    rLineTo(dx: double, dy: double): void;

    /**
     * Draws a quadratic Bezier curve from the last point of this path to a point relative to the last point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } dx1 - X offset of the control point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } dy1 - Y offset of the control point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @param { double } dx2 - X offset of the target point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } dy2 - Y offset of the target point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a quadratic Bezier curve from the last point of this path to a point relative to the last point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } dx1 - X offset of the control point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } dy1 - Y offset of the control point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @param { double } dx2 - X offset of the target point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } dy2 - Y offset of the target point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    rQuadTo(dx1: double, dy1: double, dx2: double, dy2: double): void;

    /**
     * Draws a conic curve from the last point of this path to a point relative to the last point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX - X offset of the control point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } ctrlY - Y offset of the control point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @param { double } endX - X offset of the target point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } endY - Y offset of the target point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @param { double } weight - Weight of the curve, which determines its shape.
     *     The larger the value, the closer of the curve to the control point.
     *     If the value is less than or equal to 0, this API is equivalent to rLineTo, that is,
     *     adding a line segment from the last point of the path to the target point.
     *     If the value is 1, this API is equivalent to rQuadTo. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a conic curve from the last point of this path to a point relative to the last point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX - X offset of the control point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } ctrlY - Y offset of the control point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @param { double } endX - X offset of the target point relative to the last point.
     *     A positive number indicates a rightward shift from the last point,
     *     and a negative number indicates a leftward shift from the last point. The value is a floating point number.
     * @param { double } endY - Y offset of the target point relative to the last point.
     *     A positive number indicates an upward shift from the last point,
     *     and a negative number indicates a downward shift from the last point. The value is a floating point number.
     * @param { double } weight - Weight of the curve, which determines its shape.
     *     The larger the value, the closer of the curve to the control point.
     *     If the value is less than or equal to 0, this API is equivalent to rLineTo, that is,
     *     adding a line segment from the last point of the path to the target point.
     *     If the value is 1, this API is equivalent to rQuadTo. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    rConicTo(ctrlX: double, ctrlY: double, endX: double, endY: double, weight: double): void;

    /**
     * Draws a cubic Bezier curve from the last point of this path to a point relative to the last point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX1 - X offset of the first control point relative to the last point.
     *     A positive number indicates a rightward shift
     *     from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } ctrlY1 - Y offset of the first control point relative to the last point.
     *     A positive number indicates an upward shift
     *     from the last point, and a negative number indicates a downward shift from the last point.
     *     The value is a floating point number.
     * @param { double } ctrlX2 - X offset of the second control point relative to the last point.
     *     A positive number indicates a rightward shift
     *     from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } ctrlY2 - Y offset of the second control point relative to the last point.
     *     A positive number indicates an upward shift
     *     from the last point, and a negative number indicates a downward shift from the last point.
     *     The value is a floating point number.
     * @param { double } endX - X offset of the target point relative to the last point.
     *     A positive number indicates a rightward shift
     *     from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } endY - Y offset of the target point relative to the last point.
     *     A positive number indicates an upward shift
     *     from the last point, and a negative number indicates a downward shift from the last point.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a cubic Bezier curve from the last point of this path to a point relative to the last point.
     * If the path is empty, the start point (0, 0) is used.
     * @param { double } ctrlX1 - X offset of the first control point relative to the last point.
     *     A positive number indicates a rightward shift
     *     from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } ctrlY1 - Y offset of the first control point relative to the last point.
     *     A positive number indicates an upward shift
     *     from the last point, and a negative number indicates a downward shift from the last point.
     *     The value is a floating point number.
     * @param { double } ctrlX2 - X offset of the second control point relative to the last point.
     *     A positive number indicates a rightward shift
     *     from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } ctrlY2 - Y offset of the second control point relative to the last point.
     *     A positive number indicates an upward shift
     *     from the last point, and a negative number indicates a downward shift from the last point.
     *     The value is a floating point number.
     * @param { double } endX - X offset of the target point relative to the last point.
     *     A positive number indicates a rightward shift
     *     from the last point, and a negative number indicates a leftward shift from the last point.
     *     The value is a floating point number.
     * @param { double } endY - Y offset of the target point relative to the last point.
     *     A positive number indicates an upward shift
     *     from the last point, and a negative number indicates a downward shift from the last point.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    rCubicTo(ctrlX1: double, ctrlY1: double, ctrlX2: double, ctrlY2: double, endX: double, endY: double): void;

    /**
     * Adds a polygon to this path.
     * @param { Array<common2D.Point> } points - Array that holds the vertex coordinates of the polygon.
     * @param { boolean } close - Whether to close the path, that is, whether to add a line segment
     *     from the start point to the end point of the path. The value true means to close the path,
     *     and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds a polygon to this path.
     * @param { Array<common2D.Point> } points - Array that holds the vertex coordinates of the polygon.
     * @param { boolean } close - Whether to close the path, that is, whether to add a line segment
     *     from the start point to the end point of the path. The value true means to close the path,
     *     and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    addPolygon(points: Array<common2D.Point>, close: boolean): void;

    /**
     * Combines this path with the passed-in path based on the specified operation mode.
     * @param { Path } path - Path object, which will be combined with the current path.
     * @param { PathOp } pathOp - Operation mode.
     * @returns { boolean } boolean - Result of the path combination result.
     *     The value true means that the path combination is successful, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Combines this path with the passed-in path based on the specified operation mode.
     * @param { Path } path - Path object, which will be combined with the current path.
     * @param { PathOp } pathOp - Operation mode.
     * @returns { boolean } boolean - Result of the path combination result.
     *     The value true means that the path combination is successful, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    op(path: Path, pathOp: PathOp): boolean;

    /**
     * Adds an arc to this path.
     * 
     * When startAngle and sweepAngle meet the following conditions, an oval instead of an arc is added:
     * 
     * The result of startAngle modulo 90 is close to 0.
     * The value of sweepAngle is not in the range of (-360, 360).
     * 
     * In other cases, this API adds an arc by applying the result of sweepAngle modulo 360 to the path.
     * @param { common2D.Rect } rect - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle of the arc, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     The value is a floating point number.
     * @param { double } sweepAngle - Angle to sweep, in degrees.
     *     A positive number indicates a clockwise sweep,
     *     and a negative number indicates a counterclockwise sweep.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds an arc to this path.
     *
     * When startAngle and sweepAngle meet the following conditions, an oval instead of an arc is added:
     *
     * The result of startAngle modulo 90 is close to 0.
     * The value of sweepAngle is not in the range of (-360, 360).
     *
     * In other cases, this API adds an arc by applying the result of sweepAngle modulo 360 to the path.
     * @param { common2D.Rect } rect - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle of the arc, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     The value is a floating point number.
     * @param { double } sweepAngle - Angle to sweep, in degrees. A positive number indicates a clockwise sweep,
     *     and a negative number indicates a counterclockwise sweep. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    addArc(rect: common2D.Rect, startAngle: double, sweepAngle: double): void;

    /**
     * Adds a circle to this path in the specified direction. The start point of the circle is (x + radius, y).
     * @param { double } x - X coordinate of the center of the circle. The value is a floating point number.
     * @param { double } y - Y coordinate of the center of the circle. The value is a floating point number.
     * @param { double } radius - Radius of the circle. The value is a floating point number.
     * If the value is less than or equal to 0, there is no effect.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds a circle to this path in the specified direction. The start point of the circle is (x + radius, y).
     * @param { double } x - X coordinate of the center of the circle. The value is a floating point number.
     * @param { double } y - Y coordinate of the center of the circle. The value is a floating point number.
     * @param { double } radius - Radius of the circle. The value is a floating point number.
     * If the value is less than or equal to 0, there is no effect.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    addCircle(x: double, y: double, radius: double, pathDirection?: PathDirection): void;

    /**
     * Adds the inscribed ellipse of a rectangle to this path in the specified direction.
     * @param { common2D.Rect } rect - Rectangular boundary of the oval.
     * @param { int } start - Start point of the oval, where 0, 1, 2, and 3 correspond to the upper, right, lower, and left points, respectively.
     * The value is an integer greater than or equal to 0. If the value is greater than or equal to 4, the remainder of 4 is used.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds the inscribed ellipse of a rectangle to this path in the specified direction.
     * @param { common2D.Rect } rect - Rectangular boundary of the oval.
     * @param { int } start - Start point of the oval, where 0, 1, 2, and 3 correspond to the upper,
     *     right, lower, and left points, respectively.
     *     The value is an integer greater than or equal to 0. If the value is greater than or equal to 4,
     *     the remainder of 4 is used.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    addOval(rect: common2D.Rect, start: int, pathDirection?: PathDirection): void;

    /**
     * Adds a rectangle to this path in the specified direction. The start point is the upper left corner of the rectangle.
     * @param { common2D.Rect } rect - Rectangle.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds a rectangle to this path in the specified direction. The start point is the upper left corner of the rectangle.
     * @param { common2D.Rect } rect - Rectangle.
     * @param { PathDirection } pathDirection - Direction of the path. The default direction is clockwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    addRect(rect: common2D.Rect, pathDirection?: PathDirection): void;

    /**
     * Adds a rounded rectangle to this path in the specified direction. When the path direction is clockwise,
     * the start point is at the intersection of the rounded rectangle's left boundary and its lower left corner.
     * When the path direction is counterclockwise, the start point is at the intersection point
     * between the left boundary and the upper left corner.
     * @param { RoundRect } roundRect - Rounded rectangle.
     * @param { PathDirection } pathDirection - The default value is CLOCKWISE.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds a rounded rectangle to this path in the specified direction. When the path direction is clockwise,
     * the start point is at the intersection of the rounded rectangle's left boundary and its lower left corner.
     * When the path direction is counterclockwise, the start point is at the intersection point
     * between the left boundary and the upper left corner.
     * @param { RoundRect } roundRect - Rounded rectangle.
     * @param { PathDirection } pathDirection - The default value is CLOCKWISE.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    addRoundRect(roundRect: RoundRect, pathDirection?: PathDirection): void;

    /**
     * Transforms the points in a path by a matrix and stores the resulting path in the current Path object.
     * @param { Path } path - Source Path object.
     * @param { Matrix | null } matrix - Matrix object. The default value is an identity matrix.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Transforms the points in a path by a matrix and stores the resulting path in the current Path object.
     * @param { Path } path - Source Path object.
     * @param { Matrix | null } matrix - Matrix object. The default value is an identity matrix.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    addPath(path: Path, matrix?: Matrix | null): void;

    /**
     * Transforms the points in this path by a matrix.
     * @param { Matrix } matrix - Matrix object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Transforms the points in this path by a matrix.
     * @param { Matrix } matrix - Matrix object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    transform(matrix: Matrix): void;

    /**
     * Checks whether a coordinate point is included in this path. For details, see PathFillType.
     * @param { double } x - X coordinate. The value is a floating point number.
     * @param { double } y - Y coordinate. The value is a floating point number.
     * @returns { boolean } Check result.
     *     The value true means that the coordinate point is included in the path, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether a coordinate point is included in this path. For details, see PathFillType.
     * @param { double } x - X coordinate. The value is a floating point number.
     * @param { double } y - Y coordinate. The value is a floating point number.
     * @returns { boolean } Check result.
     *     The value true means that the coordinate point is included in the path, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    contains(x: double, y: double): boolean;

    /**
     * Changes the last point of the path to specific value.
     * @param { double } x - Indicates the new x-axis value for the last point.
     * @param { double } y - Indicates the new y-axis value for the last point.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setLastPoint(x: double, y: double): void;

    /**
     * Sets the fill type of this path. The fill type determines how "inside" of the path is drawn.
     * For example, when the fill type Winding is used, "inside" of the path is determined by a non-zero sum of signed edge crossings.
     * When EvenOdd is used, "inside" of the path is determined by an odd number of edge crossings.
     * @param { PathFillType } pathFillType - Fill type of the path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the fill type of this path. The fill type determines how "inside" of the path is drawn.
     * For example, when the fill type Winding is used, "inside" of the path is determined by a non-zero sum of signed edge crossings.
     * When EvenOdd is used, "inside" of the path is determined by an odd number of edge crossings.
     * @param { PathFillType } pathFillType - Fill type of the path.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setFillType(pathFillType: PathFillType): void;

    /**
     * Gets fill type, the rule used to fill path.
     * @returns { PathFillType } Returns the pathFillType.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getFillType(): PathFillType;

    /**
     * Obtains the minimum bounding rectangle that encloses this path.
     * @returns { common2D.Rect } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the minimum bounding rectangle that encloses this path.
     * @returns { common2D.Rect } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getBounds(): common2D.Rect;

    /**
     * Obtains the minimum bounding rectangle that encloses this path.
     * @returns { common2D.Rect | undefined } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getBounds(): common2D.Rect | undefined;

    /**
     * Closes this path by adding a line segment from the start point to the last point of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Closes this path by adding a line segment from the start point to the last point of the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    close(): void;

    /**
     * Offsets this path by specified distances along the X axis and Y axis and
     * stores the resulting path in the Path object returned.
     * @param { double } dx - X offset. A positive number indicates an offset
     *     towards the positive direction of the X axis, and a negative number
     *     indicates an offset towards the negative direction of the X axis. The value is a floating point number.
     * @param { double } dy - Y offset. A positive number indicates an offset
     *     towards the positive direction of the Y axis, and a negative number
     *     indicates an offset towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @returns { Path } New path generated.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Offsets this path by specified distances along the X axis and Y axis and
     * stores the resulting path in the Path object returned.
     * @param { double } dx - X offset. A positive number indicates an offset
     *     towards the positive direction of the X axis, and a negative number
     *     indicates an offset towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Y offset. A positive number indicates an offset
     *     towards the positive direction of the Y axis, and a negative number
     *     indicates an offset towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @returns { Path } New path generated.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    offset(dx: double, dy: double): Path;

    /**
     * Offsets this path by specified distances along the X axis and Y axis and
     * stores the resulting path in the Path object returned.
     * @param { double } dx - X offset. A positive number indicates an offset
     *     towards the positive direction of the X axis, and a negative number
     *     indicates an offset towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Y offset. A positive number indicates an offset
     *     towards the positive direction of the Y axis, and a negative number
     *     indicates an offset towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @returns { Path | undefined } New path generated.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    offset(dx: double, dy: double): Path | undefined;

    /**
     * Resets the path data.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    reset(): void;

    /**
     * Clears any lines and curves from the path but keeps the internal storage for faster reuse.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    rewind(): void;

    /**
     * Check if the path is empty (has no line or curve).
     *
     * @returns { boolean } Returns true if the path is empty; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    isEmpty(): boolean;

    /**
     * Check if the path represents a rectangle.
     *
     * @param { common2D.Rect | null } rect - Indicates the Rect object.
     * @returns { boolean } Returns true if the path represents a rectangle; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    isRect(rect: common2D.Rect | null): boolean;

    /**
     * Obtains the path length.
     * @param { boolean } forceClosed - Whether the path is measured as a closed path.
     * The value true means that the path is considered closed during measurement,
     * and false means that the path is measured based on the actual closed status.
     * @returns { double } Return path length.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the path length.
     * @param { boolean } forceClosed - Whether the path is measured as a closed path.
     * The value true means that the path is considered closed during measurement,
     * and false means that the path is measured based on the actual closed status.
     * @returns { double } Return path length.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getLength(forceClosed: boolean): double;

    /**
     * Obtains the coordinates and tangent at a distance from the start point of this path.
     * 
     * @param { boolean } forceClosed - Whether the path is measured as a closed path.
     *     The value true means that the path is considered closed during measurement,
     *     and false means that the path is measured based on the actual closed status.
     * @param { double } distance - Distance from the start point.
     *     If a negative number is passed in, the value 0 is used.
     *     If a value greater than the path length is passed in, the path length is used.
     *     The value is a floating point number.
     * @param { common2D.Point } position - Coordinates obtained.
     * @param { common2D.Point } tangent - Tangent obtained, where tangent.x and tangent.y represent
     *     the cosine and sine of the tangent of the point, respectively.
     * @returns { boolean } - Check result. The value true means that they are obtained,
     *     and false means the opposite. The values of position and tangent are not changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the coordinates and tangent at a distance from the start point of this path.
     * 
     * @param { boolean } forceClosed - Whether the path is measured as a closed path.
     *     The value true means that the path is considered closed during measurement,
     *     and false means that the path is measured based on the actual closed status.
     * @param { double } distance - Distance from the start point. If a negative number is passed in,
     *     the value 0 is used. If a value greater than the path length is passed in, the path length is used.
     *     The value is a floating point number.
     * @param { common2D.Point } position - Coordinates obtained.
     * @param { common2D.Point } tangent - Tangent obtained, where tangent.x and tangent.y represent the cosine
     *     and sine of the tangent of the point, respectively.
     * @returns { boolean } - Check result. The value true means that they are obtained, and false means the opposite.
     *     The values of position and tangent are not changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getPositionAndTangent(forceClosed: boolean, distance: double, position: common2D.Point, tangent: common2D.Point): boolean;

    /**
     * Extracts a segment of this path and appends it to a destination path.
     *
     * @param { boolean } forceClosed - Whether the path is measured as a closed path.
     *     The value true means that the path is considered closed
     *     during measurement, and false means that the path is measured based on the actual closed status.
     * @param { double } start - Distance from the start point of the path to the start point
     *     of the segment. If it is less than 0, it defaults to 0.
     *     If it is greater than or equal to stop, the extraction fails.
     *     The value is a floating point number.
     * @param { double } stop - Distance from the start point of the path to the end point
     *     of the segment. If it is less than or equal to start, the extraction fails.
     *     If it is greater than the path length, it defaults to the path length.
     *     The value is a floating point number.
     * @param { boolean } startWithMoveTo - Whether to execute moveto in the destination path
     *     to move to its start point. The value true means to move to the start point, and false means the opposite.
     * @param { Path } dst - Destination path. If the extraction succeeds,
     *     the segment is appended to the path. If the extraction fails, nothing changes.
     * @returns { boolean } - Extraction result. The value **true** means that the extraction
     *     is successful, and **false** means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Extracts a segment of this path and appends it to a destination path.
     *
     * @param { boolean } forceClosed - Whether the path is measured as a closed path.
     *     The value true means that the path is considered closed
     *     during measurement, and false means that the path is measured based on the actual closed status.
     * @param { double } start - Distance from the start point of the path to the start point
     *     of the segment. If it is less than 0, it defaults to 0.
     *     If it is greater than or equal to stop, the extraction fails. The value is a floating point number.
     * @param { double } stop - Distance from the start point of the path to the end point of the segment.
     *     If it is less than or equal to start,
     *     the extraction fails. If it is greater than the path length, it defaults to the path length.
     *     The value is a floating point number.
     * @param { boolean } startWithMoveTo - Whether to execute moveto in
     *     the destination path to move to its start point.
     *     The value true means to move to the start point, and false means the opposite.
     * @param { Path } dst - Destination path. If the extraction succeeds,
     *     the segment is appended to the path. If the extraction fails, nothing changes.
     * @returns { boolean } - Extraction result.
     *     The value **true** means that the extraction is successful, and **false** means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getSegment(forceClosed: boolean, start: double, stop: double, startWithMoveTo: boolean, dst: Path): boolean;

    /**
     * Checks whether a path is closed.
     * 
     * @returns { boolean } - Check result. The value true means that the path is closed, and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether a path is closed.
     * 
     * @returns { boolean } - Check result. The value true means that the path is closed, and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    isClosed(): boolean;

    /**
     * Obtains a transformation matrix at a specific position along the path,
     * which represents the coordinates and orientation of that point.
     * 
     * @param { boolean } forceClosed - Whether the path is measured as a closed path.
     *     The value true means that the path is considered closed
     *     during measurement, and false means that the path is measured based on the actual closed status.
     * @param { double } distance - Distance from the start point.
     *     If a negative number is passed in, the value 0 is used.
     *     If a value greater than the path length is passed in, the path length is used.
     *     The value is a floating point number.
     * @param { Matrix } matrix - Matrix object used to store the matrix obtained.
     * @param { PathMeasureMatrixFlags } flags - Type of the matrix information obtained.
     * @returns { boolean } - Result indicating whether the transformation matrix is obtained.
     *     The value true means that the operation is successful, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
    */
   /**
     * Obtains a transformation matrix at a specific position along the path,
     * which represents the coordinates and orientation of that point.
     * 
     * @param { boolean } forceClosed - Whether the path is measured as a closed path.
     *     The value true means that the path is considered closed
     *     during measurement, and false means that the path is measured based on the actual closed status.
     * @param { double } distance - Distance from the start point.
     *     If a negative number is passed in, the value 0 is used.
     *     If a value greater than the path length is passed in, the path length is used.
     *     The value is a floating point number.
     * @param { Matrix } matrix - Matrix object used to store the matrix obtained.
     * @param { PathMeasureMatrixFlags } flags - Type of the matrix information obtained.
     * @returns { boolean } - Result indicating whether the transformation matrix is obtained.
     *     The value true means that the operation is successful, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
    */
    getMatrix(forceClosed: boolean, distance: double, matrix: Matrix, flags: PathMeasureMatrixFlags): boolean;

    /**
     * Parses the path represented by an SVG string.
     *
     * @param { string } str - String in SVG format, which is used to describe the path.
     * @returns { boolean } Result of the parsing operation.
     *     The value true means that the operation is successful, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Parses the path represented by an SVG string.
     *
     * @param { string } str - String in SVG format, which is used to describe the path.
     * @returns { boolean } Result of the parsing operation.
     *     The value true means that the operation is successful, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    buildFromSvgString(str: string): boolean;

    /**
     * Obtains the operation iterator of this path.
     *
     * @returns { PathIterator } Indicates the pointer to an pathIterator object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Obtains the operation iterator of this path.
     *
     * @returns { PathIterator } Indicates the pointer to an pathIterator object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getPathIterator(): PathIterator;

    /**
     * Obtains the operation iterator of this path.
     *
     * @returns { PathIterator | undefined } Indicates the pointer to an pathIterator object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getPathIterator(): PathIterator | undefined;

    /**
     * Approximates the path with a series of line segments.
     *
     * @param { double } acceptableError - Indicates the acceptable error for a line on the path. Should be no less than 0.
     * @returns { Array<double> } - Returns with the array containing point components.
     * <br>There are three components for each point:
     * <br>1. Fraction along the length of the path that the point resides [0.0, 1.0].
     * <br>2. The x coordinate of the point.
     * <br>3. The y coordinate of the point.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    approximate(acceptableError: double): Array<double>;

    /**
     * Performs interpolation between the current path and another path based on a given weight, and stores the result in the target path object.
     *
     * @param { Path } other - Indicates the other path to be interpolated with the current path.
     * @param { double } weight - Indicates the interpolation weight, which must be in the range [0, 1].
     * @param { Path } interpolatedPath - Indicates the target path object where the interpolation result will be stored.
     * @returns { boolean } - Returns true if the interpolation operation was successful; returns false otherwise.
     * <br>Possible reasons for failure include:
     * <br>1. The 'other' is incompatible with the current path.
     * <br>2. The 'weight' is outside the [0, 1] range.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    interpolate(other: Path, weight: double, interpolatedPath: Path): boolean;

    /**
     * Checks whether the current path is compatible with another path (other) for interpolation, which means
     * they have exactly the same structure, both paths must have the same operations, in the same order.
     * If any of the operations are of type PathIteratorVerb.CONIC, then the weights of those conics must also match.
     *
     * @param { Path } other - Indicates the path to be checked for compatibility with the current path.
     * @returns { boolean } - Returns true if the current path and the other path are compatible for interpolation; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    isInterpolate(other: Path): boolean;
  }

  /**
   * Enumerates the modes for drawing multiple points in an array.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  enum PointMode {
    /**
     * Draws each point separately.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    POINTS = 0,

    /**
     * Draws every two points as a line segment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    LINES = 1,

    /**
     * Draws an array of points as an open polygon.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    POLYGON = 2,
  }

  /**
   * Enumerates the filter modes.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the filter modes.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum FilterMode {
    /**
     * Nearest filter mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Nearest filter mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    FILTER_MODE_NEAREST = 0,

    /**
     * Linear filter mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Linear filter mode.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    FILTER_MODE_LINEAR = 1,
  }

  /**
   * Enumerates the shadow drawing behaviors.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   */
  enum ShadowFlag {
    /**
     * None of the flags are enabled.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    NONE = 0,

    /**
     * The occluder is transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    TRANSPARENT_OCCLUDER = 1,

    /**
     * Only the geometric shadow effect is used.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    GEOMETRIC_ONLY = 2,

    /**
     * All the flags are enabled.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    ALL = 3,
  }

  /**
   * Implements sampling options.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  class SamplingOptions {
    /**
     * Creates a SamplingOptions object. The default value of FilterMode is FILTER_MODE_NEAREST.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    constructor();
    /**
     * Creates a SamplingOptions object.
     * @param { FilterMode } filterMode - Storage filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    constructor(filterMode: FilterMode);
  }

  /**
   * A carrier that carries the drawn content and drawing status.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11 dynamic
   * @since 20 static
   */
  class Canvas {
    /**
     * Creates a Canvas object that uses a PixelMap as the drawing target.
     * @param { image.PixelMap } pixelmap - PixelMap used to create the object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    constructor(pixelmap: image.PixelMap);

    /**
     * Draws a rectangle. By default, black is used for filling.
     * @param { common2D.Rect } rect - Rectangle to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws a rectangle. By default, black is used for filling.
     * @param { common2D.Rect } rect - Rectangle to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    drawRect(rect: common2D.Rect): void;

    /**
     * Draws a rectangle. By default, black is used for filling.
     * This API provides better performance than drawRect and is recommended.
     * @param { double } left - X coordinate of the upper left corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } top - Y coordinate of the upper left corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } right - X coordinate of the lower right corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } bottom - Y coordinate of the lower right corner of the rectangle.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a rectangle. By default, black is used for filling.
     * This API provides better performance than drawRect and is recommended.
     * @param { double } left - X coordinate of the upper left corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } top - Y coordinate of the upper left corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } right - X coordinate of the lower right corner of the rectangle.
     *     The value is a floating point number.
     * @param { double } bottom - Y coordinate of the lower right corner of the rectangle.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    drawRect(left: double, top: double, right: double, bottom: double): void;

    /**
     * Draws a rounded rectangle.
     * @param { RoundRect } roundRect - Indicates the RectRound object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    drawRoundRect(roundRect: RoundRect): void;

    /**
     * Draws two nested rounded rectangles. The outer rectangle boundary must contain the inner rectangle boundary.
     * Otherwise, there is no drawing effect.
     * @param { RoundRect } outer - Outer rounded rectangle.
     * @param { RoundRect } inner - Inner rounded rectangle.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    drawNestedRoundRect(outer: RoundRect, inner: RoundRect): void;

    /**
     * Uses a brush to fill the drawable area of the canvas.
     * @param { Brush } brush - Indicates the Brush object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    drawBackground(brush: Brush): void;

    /**
     * Draws a spot shadow and uses a given path to outline the ambient shadow.
     * @param { Path } path - Path object, which is used to outline the shadow.
     * @param { common2D.Point3d } planeParams - 3D vector,
     *     which is used to determine the z-axis offset of an occluder relative to the canvas,
     *     based on its x and y coordinates.
     * @param { common2D.Point3d } devLightPos - Position of the light relative to the canvas.
     * @param { double } lightRadius - Radius of the light. The value is a floating point number.
     * @param { common2D.Color } ambientColor - Color of the ambient shadow.
     * @param { common2D.Color } spotColor - Color of the spot shadow.
     * @param { ShadowFlag } flag - Shadow flag.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a spot shadow and uses a given path to outline the ambient shadow.
     * @param { Path } path - Path object, which is used to outline the shadow.
     * @param { common2D.Point3d } planeParams - 3D vector,
     *     which is used to determine the z-axis offset of an occluder relative to the canvas,
     *     based on its x and y coordinates.
     * @param { common2D.Point3d } devLightPos - Position of the light relative to the canvas.
     * @param { double } lightRadius - Radius of the light. The value is a floating point number.
     * @param { common2D.Color } ambientColor - Color of the ambient shadow.
     * @param { common2D.Color } spotColor - Color of the spot shadow.
     * @param { ShadowFlag } flag - Shadow flag.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawShadow(path: Path, planeParams: common2D.Point3d, devLightPos: common2D.Point3d, lightRadius: double,
      ambientColor: common2D.Color, spotColor: common2D.Color, flag: ShadowFlag) : void;

    /**
     * Draws a spot shadow and uses a given path to outline the ambient shadow.
     * @param { Path } path - Path object, which is used to outline the shadow.
     * @param { common2D.Point3d } planeParams - 3D vector, which is used to calculate the offset in the Z axis.
     * @param { common2D.Point3d } devLightPos - Position of the light relative to the canvas.
     * @param { double } lightRadius - Radius of the light. The value is a floating point number.
     * @param { common2D.Color | int } ambientColor - Ambient shadow color,
     *     represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     * @param { common2D.Color | int } spotColor - Spot shadow color,
     *     represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     * @param { ShadowFlag } flag - Indicates the flag to control opaque occluder, shadow, and light position.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Draws a spot shadow and uses a given path to outline the ambient shadow.
     * @param { Path } path - Path object, which is used to outline the shadow.
     * @param { common2D.Point3d } planeParams - 3D vector, which is used to calculate the offset in the Z axis.
     * @param { common2D.Point3d } devLightPos - Position of the light relative to the canvas.
     * @param { double } lightRadius - Radius of the light. The value is a floating point number.
     * @param { common2D.Color | int } ambientColor - Ambient shadow color,
     *     represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     * @param { common2D.Color | int } spotColor - Spot shadow color,
     *     represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     * @param { ShadowFlag } flag - Indicates the flag to control opaque occluder, shadow, and light position.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawShadow(path: Path, planeParams: common2D.Point3d, devLightPos: common2D.Point3d, lightRadius: double,
      ambientColor: common2D.Color | int, spotColor: common2D.Color | int, flag: ShadowFlag) : void;

    /**
     * Draws a circle. If the radius is less than or equal to zero, nothing is drawn.
     * By default, black is used for filling.
     * @param { double } x - X coordinate of the center of the circle. The value is a floating point number.
     * @param { double } y - Y coordinate of the center of the circle. The value is a floating point number.
     * @param { double } radius - Radius of the circle. The value is a floating point number greater than 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws a circle. If the radius is less than or equal to zero, nothing is drawn.
     * By default, black is used for filling.
     * @param { double } x - X coordinate of the center of the circle. The value is a floating point number.
     * @param { double } y - Y coordinate of the center of the circle. The value is a floating point number.
     * @param { double } radius - Radius of the circle. The value is a floating point number greater than 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawCircle(x: double, y: double, radius: double): void;

    /**
     * Draw a pixelmap, with the upper left corner at (left, top).
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @param { double } left - Left side of image.
     * @param { double } top - Top side of image.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws an image. The coordinates of the upper left corner of the image are (left, top).
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @param { double } left - X coordinate of the upper left corner of the image.
     *     The value is a floating point number.
     * @param { double } top - Y coordinate of the upper left corner of the image. The value is a floating point number.
     * @param { SamplingOptions } samplingOptions - Sampling options. By default,
     *     the SamplingOptions object created using the no-argument constructor is used.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws an image. The coordinates of the upper left corner of the image are (left, top).
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @param { double } left - X coordinate of the upper left corner of the image.
     *     The value is a floating point number.
     * @param { double } top - Y coordinate of the upper left corner of the image.
     *     The value is a floating point number.
     * @param { SamplingOptions } samplingOptions - Sampling options. By default,
     *     the SamplingOptions object created using the no-argument constructor is used.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawImage(pixelmap: image.PixelMap, left: double, top: double, samplingOptions?: SamplingOptions): void;
    
    /**
     * Splits an image into multiple sections based on the lattice object's configuration and
     * draws each section into the specified target rectangle on the canvas.
     * The intersections of even-numbered rows and columns (starting from 0) are fixed points.
     * If the fixed lattice area fits within the target rectangle, it will be drawn without scaling.
     * Otherwise, it will be scaled proportionally to fit the target rectangle.
     * Any remaining space will be filled by stretching or compressing the remaining sections to cover the entire target rectangle.
     * @param { image.PixelMap } pixelmap - The source image.
     * @param { Lattice } lattice - The area of source image.
     * @param { common2D.Rect } dstRect - The area of destination canvas.
     * @param { FilterMode } filterMode - Filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    drawImageLattice(pixelmap: image.PixelMap, lattice: Lattice, dstRect: common2D.Rect,
      filterMode: FilterMode): void;
    
    /**
     * Splits an image into nine sections using two horizontal and two vertical lines: four edge sections, four corner sections, and a central section.
     * If the four corner sections are smaller than the target rectangle, they will be drawn in the target rectangle without scaling.
     * Otherwise, they will be scaled to fit the target rectangle. Any remaining space will be filled by stretching or
     * compressing the other five sections to cover the entire target rectangle.
     * @param { image.PixelMap } pixelmap - PixelMap to split.
     * @param { common2D.Rect } center - Central rectangle that divides the image into nine sections by extending its four edges.
     * @param { common2D.Rect } dstRect - Target rectangle drawn on the canvas.
     * @param { FilterMode } filterMode - Filter mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    drawImageNine(pixelmap: image.PixelMap, center: common2D.Rect, dstRect: common2D.Rect,
      filterMode: FilterMode): void;

    /**
     * Draws an image onto a specified area of the canvas.
     * @param { image.PixelMap } pixelmap - The source image.
     * @param { common2D.Rect } dstRect - Rectangle object, which specifies the area of the canvas onto which the image will be drawn.
     * @param { SamplingOptions } samplingOptions - Sampling options.
     * By default, the SamplingOptions object created using the no-argument constructor is used.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    drawImageRect(pixelmap: image.PixelMap, dstRect: common2D.Rect, samplingOptions?: SamplingOptions): void;

    /**
     * Draws a portion of an image onto a specified area of the canvas.
     * @param { image.PixelMap } pixelmap - The source image.
     * @param { common2D.Rect } srcRect - Rectangle object, which specifies the portion of the image to draw.
     * @param { common2D.Rect } dstRect - Rectangle object, which specifies the area of the canvas onto which the image will be drawn.
     * @param { SamplingOptions } samplingOptions - Sampling options.
     * By default, the SamplingOptions object created using the no-argument constructor is used.
     * @param { SrcRectConstraint } constraint - Constraint type of the source rectangle. The default value is STRICT.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    drawImageRectWithSrc(pixelmap: image.PixelMap, srcRect: common2D.Rect, dstRect: common2D.Rect,
      samplingOptions?: SamplingOptions, constraint?: SrcRectConstraint): void;

    /**
     * Fills the drawable area of the canvas with the specified color and blend mode.
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255.
     * @param { BlendMode } [blendMode] - Blend mode. The default mode is SRC_OVER.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    drawColor(color: common2D.Color, blendMode?: BlendMode): void;

    /**
     * Fills the drawable area of the canvas with the specified color and blend mode.
     * This API provides better performance and is recommended.
     * @param { int } alpha - Alpha channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down.
     * @param { BlendMode } [blendMode] - Blend mode. The default mode is SRC_OVER.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Fills the drawable area of the canvas with the specified color and blend mode.
     * This API provides better performance and is recommended.
     * @param { int } alpha - Alpha channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down.
     * @param { BlendMode } [blendMode] - Blend mode. The default mode is SRC_OVER.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawColor(alpha: int, red: int, green: int, blue: int, blendMode?: BlendMode): void;

    /**
     * Fills the drawable area of the canvas with the specified color and blend mode.
     * @param { int } color - Color in hexadecimal ARGB format.
     * @param { BlendMode } [blendMode] - Blend mode. The default mode is SRC_OVER.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Fills the drawable area of the canvas with the specified color and blend mode.
     * @param { int } color - Color in hexadecimal ARGB format.
     * @param { BlendMode } [blendMode] - Blend mode. The default mode is SRC_OVER.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawColor(color: int, blendMode?: BlendMode): void;

    /**
     * Draws an oval on the canvas, where the shape and position of the oval are defined by its bounding rectangle.
     * @param { common2D.Rect } oval - Rectangle. The oval inscribed within the rectangle is the oval to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    drawOval(oval: common2D.Rect): void;

    /**
     * Draws an arc on the canvas, with the start angle and sweep angle specified.
     * If the absolute value of the sweep angle exceeds 360 degrees, an ellipse is drawn.
     * @param { common2D.Rect } arc - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle, in degrees. The value is a floating point number.
     *     When the degree is 0, the start point is located at the right end of the oval.
     *     A positive number indicates that the start point is placed clockwise,
     *     and a negative number indicates that the start point is placed counterclockwise.
     * @param { double } sweepAngle - Angle to sweep, in degrees. The value is a floating point number.
     *     A positive number indicates a clockwise sweep, and a negative value indicates
     *     a counterclockwise swipe. The valid range is from -360 degrees to 360 degrees.
     *     If the absolute value of the sweep angle exceeds 360 degrees, an ellipse is drawn.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws an arc on the canvas, with the start angle and sweep angle specified.
     * If the absolute value of the sweep angle exceeds 360 degrees, an ellipse is drawn.
     * @param { common2D.Rect } arc - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle, in degrees. The value is a floating point number.
     *     When the degree is 0, the start point is located at the right end of the oval.
     *     A positive number indicates that the start point is placed clockwise,
     *     and a negative number indicates that the start point is placed counterclockwise.
     * @param { double } sweepAngle - Angle to sweep, in degrees. The value is a floating point number.
     *     A positive number indicates a clockwise sweep, and a negative value indicates
     *     a counterclockwise swipe. The valid range is from -360 degrees to 360 degrees.
     *     If the absolute value of the sweep angle exceeds 360 degrees, an ellipse is drawn.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawArc(arc: common2D.Rect, startAngle: double, sweepAngle: double): void;

    /**
     * Draws an arc on the canvas. It enables you to define the start angle, sweep angle,
     * and whether the arc's endpoints should connect to its center.
     * @param { common2D.Rect } arc - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle, in degrees. The value is a floating point number.
     * When the degree is 0, the start point is located at the right end of the oval.
     * A positive number indicates that the start point is placed clockwise,
     * and a negative number indicates that the start point is placed counterclockwise.
     * @param { double } sweepAngle - Angle to sweep, in degrees. The value is a floating point number.
     * A positive number indicates a clockwise sweep, and a negative value indicates a counterclockwise swipe.
     * The swipe angle can exceed 360 degrees, and a complete ellipse is drawn.
     * @param { boolean } useCenter - Whether the start point and end point of the arc are connected to its center.
     * The value true means that they are connected to the center; the value false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Draws an arc on the canvas. It enables you to define the start angle, sweep angle,
     * and whether the arc's endpoints should connect to its center.
     * @param { common2D.Rect } arc - Rectangular boundary that encapsulates the oval including the arc.
     * @param { double } startAngle - Start angle, in degrees. The value is a floating point number.
     * When the degree is 0, the start point is located at the right end of the oval.
     * A positive number indicates that the start point is placed clockwise,
     * and a negative number indicates that the start point is placed counterclockwise.
     * @param { double } sweepAngle - Angle to sweep, in degrees. The value is a floating point number.
     * A positive number indicates a clockwise sweep, and a negative value indicates a counterclockwise swipe.
     * The swipe angle can exceed 360 degrees, and a complete ellipse is drawn.
     * @param { boolean } useCenter - Whether the start point and end point of the arc are connected to its center.
     * The value true means that they are connected to the center; the value false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawArcWithCenter(arc: common2D.Rect, startAngle: double, sweepAngle: double, useCenter: boolean): void;

    /**
     * Draws a point.
     * @param { double } x - X coordinate of the point. The value is a floating point number.
     * @param { double } y - Y coordinate of the point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws a point.
     * @param { double } x - X coordinate of the point. The value is a floating point number.
     * @param { double } y - Y coordinate of the point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawPoint(x: double, y: double): void;

    /**
     * Draws a group of points, line segments, or polygons on the canvas, with the specified drawing mode. An array is used to hold these points.
     * @param { Array<common2D.Point> } points - Array that holds the points to draw. The length cannot be 0.
     * @param { PointMode } mode - Mode in which the points are drawn. The default value is drawing.PointMode.POINTS.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    drawPoints(points: Array<common2D.Point>, mode?: PointMode): void;

    /**
     * Draws a custom path, which contains a set of path outlines. Each path outline can be open or closed.
     * @param { Path } path - Path object to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    drawPath(path: Path): void;

    /**
     * Draws a line segment from the start point to the end point.
     * If the coordinates of the start point are the same as those of the end point, nothing is drawn.
     * @param { double } x0 - X coordinate of the start point of the line segment. The value is a floating point number.
     * @param { double } y0 - Y coordinate of the start point of the line segment. The value is a floating point number.
     * @param { double } x1 - X coordinate of the end point of the line segment. The value is a floating point number.
     * @param { double } y1 - Y coordinate of the end point of the line segment. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws a line segment from the start point to the end point.
     * If the coordinates of the start point are the same as those of the end point,
     * nothing is drawn.
     * @param { double } x0 - X coordinate of the start point of the line segment. The value is a floating point number.
     * @param { double } y0 - Y coordinate of the start point of the line segment. The value is a floating point number.
     * @param { double } x1 - X coordinate of the end point of the line segment. The value is a floating point number.
     * @param { double } y1 - Y coordinate of the end point of the line segment. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawLine(x0: double, y0: double, x1: double, y1: double): void;

    /**
     * Draws a single character. If the typeface of the current font does not support the character to draw,
     * the system typeface is used to draw the character.
     * @param { string } text - Single character to draw. The length of the string must be 1.
     * @param { Font } font - Font object.
     * @param { double } x - X coordinate of the left point (red point in the figure below) of
     *     the character baseline (blue line in the figure below). The value is a floating point number.
     * @param { double } y - Y coordinate of the left point (red point in the figure below) of
     *     the character baseline (blue line in the figure below). The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a single character. If the typeface of the current font does not support the character to draw,
     * the system typeface is used to draw the character.
     * @param { string } text - Single character to draw. The length of the string must be 1.
     * @param { Font } font - Font object.
     * @param { double } x - X coordinate of the left point (red point in the figure below) of
     *     the character baseline (blue line in the figure below). The value is a floating point number.
     * @param { double } y - Y coordinate of the left point (red point in the figure below) of
     *     the character baseline (blue line in the figure below). The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawSingleCharacter(text: string, font: Font, x: double, y: double): void;

    /**
     * Draws a text blob. If the typeface used to construct blob does not support a character,
     * that character will not be drawn.
     * @param { TextBlob } blob - TextBlob to draw.
     * @param { double } x - X coordinate of the left point (red point in the figure below) of the text
     *     baseline (blue line in the figure below). The value is a floating point number.
     * @param { double } y - Y coordinate of the left point (red point in the figure below) of the text
     * baseline (blue line in the figure below). The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Draws a text blob. If the typeface used to construct blob does not support a character,
     * that character will not be drawn.
     * @param { TextBlob } blob - TextBlob to draw.
     * @param { double } x - X coordinate of the left point (red point in the figure below) of the text
     *     baseline (blue line in the figure below). The value is a floating point number.
     * @param { double } y - Y coordinate of the left point (red point in the figure below) of the text
     * baseline (blue line in the figure below). The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    drawTextBlob(blob: TextBlob, x: double, y: double): void;

    /**
     * Draws a PixelMap based on a mesh, where mesh vertices are evenly distributed across the PixelMap.
     * @param { image.PixelMap } pixelmap - The pixelmap to draw using the mesh.
     * @param { int } meshWidth - The number of columns in the mesh.
     * @param { int } meshHeight - The number of rows in the mesh.
     * @param { Array<double> } vertices - Array of vertices, specifying where the mesh should be drawn.
     * @param { int } vertOffset - Number of vert elements to skip before drawing.
     * @param { Array<int> } colors - Array of colors, specifying a color at each vertex.
     * @param { int } colorOffset - Number of color elements to skip before drawing.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws a PixelMap based on a mesh, where mesh vertices are evenly distributed across the PixelMap.
     * @param { image.PixelMap } pixelmap - PixelMap to draw.
     * @param { int } meshWidth - Number of columns in the mesh. The value is an integer greater than 0.
     * @param { int } meshHeight - Number of rows in the mesh. The value is an integer greater than 0.
     * @param { Array<double> } vertices - Array of vertices, which specify the position to draw.
     *     The value is a floating-point array and the size must be ((meshWidth+1) * (meshHeight+1) + vertOffset) * 2.
     * @param { int } vertOffset - Number of vert elements to skip before drawing.
     *     The value is an integer greater than or equal to 0.
     * @param { Array<int> } colors - Array of colors, which specify the color at each vertex.
     *     The value is an integer array and can be null. The size must be (meshWidth+1) * (meshHeight+1) + colorOffset.
     * @param { int } colorOffset - Number of color elements to skip before drawing.
     *     The value is an integer greater than or equal to 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    drawPixelMapMesh(pixelmap: image.PixelMap, meshWidth: int, meshHeight: int,
      vertices: Array<double>, vertOffset: int, colors: Array<int>, colorOffset: int): void;

    /**
     * Draws a region.
     * @param { Region } region - Region to draw.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    drawRegion(region: Region): void;

    /**
     * Attaches a pen to the canvas. When you draw on the canvas, the pen's style is used to outline shapes.
     * @param { Pen } pen - Pen object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    attachPen(pen: Pen): void;

    /**
     * Attaches a brush to the canvas. When you draw on the canvas, the brush's style is used to fill the interior of shapes.
     * @param { Brush } brush - Brush object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    attachBrush(brush: Brush): void;

    /**
     * Detaches the pen from the canvas. When you draw on the canvas, the pen is no longer used to outline shapes.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    detachPen(): void;

    /**
     * Detaches the brush from the canvas. When you draw on the canvas, the brush is no longer used to fill the interior of shapes.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    detachBrush(): void;

    /**
     * Saves the canvas states (canvas matrix and drawable area) to the top of the stack.
     * This API must be used in pair with restore.
     * @returns { int } Number of canvas statuses. The value is a positive integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Saves the canvas states (canvas matrix and drawable area) to the top of the stack.
     * This API must be used in pair with restore.
     * @returns { int } Number of canvas statuses. The value is a positive integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    save(): int;

    /**
     * Saves the matrix and clip, and allocates a bitmap for subsequent drawing.
     * Calling restore doscards changes to matrix and clip, and draws the bitmap.
     * @param { common2D.Rect | null} rect - Optional layer size. The default value is null.
     * @param { Brush | null} brush - Optional brush effect effect used to draw the layer. The default value is null.
     * @returns { long } Return the number of saved states before this call.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Saves the matrix and cropping region of the canvas, and allocates a PixelMap for subsequent drawing.
     * If you call restore, changes made to the matrix and clipping region are discarded, and the PixelMap is drawn.
     * @param { common2D.Rect | null} rect - Rect object, which is used to limit the size of the graphics layer.
     *     The default value is the current canvas size.
     * @param { Brush | null} brush - Brush object. The alpha value, filter effect,
     *     and blend mode of the brush are applied when the PixelMap is drawn.
     *     If null is passed in, no effect is applied.
     * @returns { long } Number of canvas statuses that have been saved. The value is a positive integer.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    saveLayer(rect?: common2D.Rect | null, brush?: Brush | null): long;

    /**
     * Clears the canvas with a given color. This API has the same effect as drawColor.
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    clear(color: common2D.Color): void;

    /**
     * Clears the canvas with a given color.
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Clears the canvas with a given color.
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    clear(color: common2D.Color | int): void;

    /**
     * Restores the canvas state (canvas matrix and clipping area) saved on the top of the stack.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    restore(): void;

    /**
     * Restores the canvas state (canvas matrix and clipping area) to a specified number.
     * @param { int } count - Depth of the canvas statuses to restore. The value is an integer.
     *     If the value is less than or equal to 1, the canvas is restored to the initial state.
     *     If the value is greater than the number of canvas statuses that have been saved, no operation is performed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Restores the canvas state (canvas matrix and clipping area) to a specified number.
     * @param { int } count - Depth of the canvas statuses to restore. The value is an integer.
     *     If the value is less than or equal to 1, the canvas is restored to the initial state.
     *     If the value is greater than the number of canvas statuses that have been saved, no operation is performed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    restoreToCount(count: int): void;

    /**
     * Obtains the number of canvas states (canvas matrix and clipping area) saved in the stack.
     * @returns { int } Number of canvas statuses that have been saved. The value is a positive integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the number of canvas states (canvas matrix and clipping area) saved in the stack.
     * @returns { int } Number of canvas statuses that have been saved. The value is a positive integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getSaveCount(): int;

    /**
     * Obtains the canvas width.
     * @returns { int } Canvas width. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the canvas width.
     * @returns { int } Canvas width. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getWidth(): int;

    /**
     * Obtains the canvas height.
     * @returns { int } Canvas height. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the canvas height.
     * @returns { int } Canvas height. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getHeight(): int;

    /**
     * Obtains the bounds of the cropping region of the canvas.
     * @returns { common2D.Rect } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    getLocalClipBounds(): common2D.Rect;

    /**
     * Obtains the canvas matrix.
     * @returns { Matrix } Canvas matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    getTotalMatrix(): Matrix;

    /**
     * Scales the canvas.
     * @param { double } sx - Scale ratio on the X axis. The value is a floating point number.
     * @param { double } sy - Scale ratio on the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Applies a scaling matrix on top of the current canvas matrix (identity matrix by default).
     * Subsequent drawing and clipping operations will automatically have a scaling effect applied to
     * the shapes and positions.
     * @param { double } sx - Scale ratio on the X axis. The value is a floating point number.
     * @param { double } sy - Scale ratio on the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    scale(sx: double, sy: double): void;

    /**
     * Skews the canvas in both the horizontal and vertical directions.
     * @param { double } sx - Amount of tilt on the X axis. The value is a floating point number.
     *     A positive number tilts the drawing rightwards along the positive direction of the Y axis,
     *     and a negative number tilts the drawing leftwards along the positive direction of the Y axis.
     * @param { double } sy - Amount of tilt on the Y axis. The value is a floating point number.
     *     A positive number tilts the drawing downwards along the positive direction of the X axis,
     *     and a negative number tilts the drawing upwards along the positive direction of the X axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Applies a skewing matrix on top of the current canvas matrix (identity matrix by default).
     * Subsequent drawing and clipping operations will automatically have a skewing effect applied to
     * the shapes and positions.
     * @param { double } sx - Amount of tilt on the X axis. The value is a floating point number.
     *     A positive number tilts the drawing rightwards along the positive direction of the Y axis,
     *     and a negative number tilts the drawing leftwards along the positive direction of the Y axis.
     * @param { double } sy - Amount of tilt on the Y axis. The value is a floating point number.
     *     A positive number tilts the drawing downwards along the positive direction of the X axis,
     *     and a negative number tilts the drawing upwards along the positive direction of the X axis.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    skew(sx: double, sy: double) : void;

    /**
     * Rotates by degrees, positive degrees rotates clockwise.
     * @param { double } degrees - Indicates the amount to rotate, in degrees.
     * @param { double } sx - Indicates the x-axis valie of the point to rotate about.
     * @param { double } sy - Indicates the y-axis valie of the point to rotate about.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Applies a rotation matrix on top of the current canvas matrix (identity matrix by default).
     * Subsequent drawing and clipping operations will automatically have a rotation effect applied to
     * their shapes and positions.
     * @param { double } degrees - Angle to rotate, in degrees. The value is a floating point number.
     *     A positive value indicates a clockwise rotation, and a negative value indicates a counterclockwise rotation.
     * @param { double } sx - X coordinate of the rotation center. The value is a floating point number.
     * @param { double } sy - Y coordinate of the rotation center. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    rotate(degrees: double, sx: double, sy: double) : void;

    /**
     * Applies a translation matrix on top of the current canvas matrix (identity matrix by default).
     * Subsequent drawing and clipping operations will automatically have a translation effect applied
     * to the shapes and positions.
     * @param { double } dx - Distance to translate on the X axis. The value is a floating point number.
     * @param { double } dy - Distance to translate on the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Applies a translation matrix on top of the current canvas matrix (identity matrix by default).
     * Subsequent drawing and clipping operations will automatically have a translation effect applied
     * to the shapes and positions.
     * @param { double } dx - Distance to translate on the X axis. The value is a floating point number.
     * @param { double } dy - Distance to translate on the Y axis. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    translate(dx: double, dy: double): void;

    /**
     * Clips the drawable area of the canvas using a custom path.
     * @param { Path } path - To combine with clip.
     * @param { ClipOp } clipOp - Clip mode. The default value is INTERSECT.
     * @param { boolean } doAntiAlias - Whether to enable anti-aliasing. The value true means to enable anti-aliasing,
     * and false means the opposite. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    clipPath(path: Path, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Clips the drawable area of the canvas using a rectangle.
     * @param { common2D.Rect } rect - To combine with clipping area.
     * @param { ClipOp } clipOp - Clip mode. The default value is INTERSECT.
     * @param { boolean } doAntiAlias - Whether to enable anti-aliasing. The value true means to enable anti-aliasing,
     * and false means the opposite. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    clipRect(rect: common2D.Rect, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Multiplies the current canvas matrix by the incoming matrix on the left. This API does not affect previous drawing operations,
     * but subsequent drawing and clipping operations will be influenced by this matrix in terms of shape and position.
     * @param { Matrix } matrix - Declares functions related to the matrix object in the drawing module.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    concatMatrix(matrix: Matrix): void;

    /**
     * Clips a region on the canvas.
     * @param { Region } region - Region object, which indicates the range to clip.
     * @param { ClipOp } clipOp - Clipping mode. The default value is INTERSECT.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    clipRegion(region: Region, clipOp?: ClipOp): void;

    /**
     * Clips a rounded rectangle on the canvas.
     * @param { RoundRect } roundRect - To combine with clipping area.
     * @param { ClipOp } clipOp - Clipping mode. The default value is INTERSECT.
     * @param { boolean } doAntiAlias - Whether to enable anti-aliasing. The value true means to enable anti-aliasing,
     * and false means the opposite. The default value is false.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    clipRoundRect(roundRect: RoundRect, clipOp?: ClipOp, doAntiAlias?: boolean): void;

    /**
     * Checks whether the region that can be drawn is empty after clipping.
     * @returns { boolean } Returns true if drawable area is empty.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    isClipEmpty(): boolean;

    /**
     * Sets a matrix for the canvas.
     * Subsequent drawing and clipping operations will be affected by this matrix in terms of shape and position.
     * @param { Matrix } matrix - Declares functions related to the matrix object in the drawing module.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a matrix for the canvas.
     * Subsequent drawing and clipping operations will be affected by this matrix in terms of shape and position.
     * @param { Matrix } matrix - Declares functions related to the matrix object in the drawing module.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setMatrix(matrix: Matrix): void;

    /**
     * Resets the matrix of this canvas to an identity matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    resetMatrix(): void;

    /**
     * Checks whether the path is not intersecting with the canvas area. The canvas area includes its boundaries.
     * @param { Path } path - Path to draw.
     * @returns { boolean } Returns true if path is not intersect; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    quickRejectPath(path: Path): boolean;

    /**
     * Checks whether the rectangle is not intersecting with the canvas area. The canvas area includes its boundaries.
     * @param { common2D.Rect } rect - Rectangle to determines.
     * @returns { boolean } Returns true if rect and region is not intersect; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18 dynamic
     */
    quickRejectRect(rect: common2D.Rect): boolean;
  }

  /**
   * Enumerates clip operations.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  /**
   * Enumerates the canvas clipping modes.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum ClipOp {
    /**
     * Clips a specified area. That is, the difference set is obtained.	
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Clips a specified area. That is, the difference set is obtained.	
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    DIFFERENCE = 0,
    /**
     * Retains a specified area. That is, the intersection is obtained.	
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Retains a specified area. That is, the intersection is obtained.	
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    INTERSECT = 1,
  }

  /**
   * Describes a series of consecutive glyphs with the same attributes in a text blob.
   * @typedef TextBlobRunBuffer
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  /**
   * Describes a series of consecutive glyphs with the same attributes in a text blob.
   * @typedef TextBlobRunBuffer
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  interface TextBlobRunBuffer {
    /**
     * Index of the glyph. The value is an integer. If a floating point number is passed in, the value is rounded down.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Index of the glyph. The value is an integer. If a floating point number is passed in, the value is rounded down.
     * @type { int }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    glyph: int;
    /**
     * X coordinate of the start point of the text blob. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * X coordinate of the start point of the text blob. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    positionX: double;
    /**
     * Y coordinate of the start point of the text blob. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Y coordinate of the start point of the text blob. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    positionY: double;
  }

  /**
   * Enumerates the text encoding types.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11 dynamic
   */
  /**
   * Enumerates the text encoding types.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum TextEncoding {
    /**
     * One byte is used to indicate UTF-8 or ASCII characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    /**
     * One byte is used to indicate UTF-8 or ASCII characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    TEXT_ENCODING_UTF8 = 0,
    /**
     * Two bytes are used to indicate most Unicode characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    /**
     * Two bytes are used to indicate most Unicode characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    TEXT_ENCODING_UTF16 = 1,
    /**
     * Four bytes are used to indicate all Unicode characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    /**
     * Four bytes are used to indicate all Unicode characters.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    TEXT_ENCODING_UTF32 = 2,
    /**
     * Two bytes are used to indicate the glyph index.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    /**
     * Two bytes are used to indicate the glyph index.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    TEXT_ENCODING_GLYPH_ID = 3,
  }

  /**
   * Defines a block consisting of one or more characters with the same font.
   *
   * class TextBlob
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  /**
   * Defines a block consisting of one or more characters with the same font.
   *
   * class TextBlob
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class TextBlob {
    /**
     * Converts a value of the string type into a TextBlob object.
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @param { TextEncoding } [encoding] - Encoding type. The default value is TEXT_ENCODING_UTF8.
     *     Currently, only TEXT_ENCODING_UTF8 takes effect, and other encoding types are treated as TEXT_ENCODING_UTF8.
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Converts a value of the string type into a TextBlob object.
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @param { TextEncoding } [encoding] - Encoding type. The default value is TEXT_ENCODING_UTF8.
     *     Currently, only TEXT_ENCODING_UTF8 takes effect, and other encoding types are treated as TEXT_ENCODING_UTF8.
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *    <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob;

    /**
     * Converts a value of the string type into a TextBlob object.
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @param { TextEncoding } [encoding] - Encoding type. The default value is TEXT_ENCODING_UTF8.
     * Currently, only TEXT_ENCODING_UTF8 takes effect, and other encoding types are treated as TEXT_ENCODING_UTF8.
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob | undefined;

    /**
     * Creates a TextBlob object from the text.
     * The coordinates of each font in the TextBlob object are determined by
     * the coordinate information in the points array.
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { number } len - Number of fonts. The value is an integer and is obtained from countText.
     * @param { common2D.Point[] } points - Array of points, which are used to specify the coordinates of each font.
     *     The array length must be the same as the value of len.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a TextBlob object from the text.
     * The coordinates of each font in the TextBlob object are determined by
     * the coordinate information in the points array.
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { number } len - Number of fonts. The value is an integer and is obtained from countText.
     * @param { common2D.Point[] } points - Array of points, which are used to specify the coordinates of each font.
     *     The array length must be the same as the value of len.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeFromPosText(text: string, len: number, points: common2D.Point[], font: Font): TextBlob;

    /**
     * Creates a TextBlob object from the text.
     * The coordinates of each font in the TextBlob object are determined by
     * the coordinate information in the points array.
     * @param { string } text - Content to be used for drawing the text blob.
     * @param { int } len - Number of fonts. The value is an integer and is obtained from countText.
     * @param { common2D.Point[] } points - Array of points, which are used to specify the coordinates of each font.
     *     The array length must be the same as the value of len.
     * @param { Font } font - Specify text size, font, text scale, etc.
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static makeFromPosText(text: string, len: int, points: common2D.Point[], font: Font): TextBlob | undefined;

    /**
     * Creates a Textblob object based on the RunBuffer information.
     * @param { Array<TextBlobRunBuffer> } pos - The array of TextBlobRunBuffer.
     * @param { Font } font - Font used for this run.
     * @param { common2D.Rect } [bounds] - Optional run bounding box. The default value is null;
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Creates a Textblob object based on the RunBuffer information.
     * @param { Array<TextBlobRunBuffer> } pos - The array of TextBlobRunBuffer.
     * @param { Font } font - Font used for this run.
     * @param { common2D.Rect } [bounds] - Optional run bounding box. The default value is null;
     * @returns { TextBlob } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob;

    /**
     * Creates a Textblob object based on the RunBuffer information.
     * @param { Array<TextBlobRunBuffer> } pos - The array of TextBlobRunBuffer.
     * @param { Font } font - Font used for this run.
     * @param { common2D.Rect } [bounds] - Optional run bounding box. The default value is null;
     * @returns { TextBlob | undefined } TextBlob object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob | undefined;

    /**
     * Obtains the rectangular bounding box of the text blob.
     * @returns { common2D.Rect } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Obtains the rectangular bounding box of the text blob.
     * @returns { common2D.Rect } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    bounds(): common2D.Rect;

    /**
     * Obtains the rectangular bounding box of the text blob.
     * @returns { common2D.Rect | undefined } Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    bounds(): common2D.Rect | undefined;

    /**
     * Obtains the unique, non-zero identifier of this TextBlob object.
     * @returns { long } Unique, non-zero identifier of this TextBlob object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the unique, non-zero identifier of this TextBlob object.
     * @returns { long } Unique, non-zero identifier of this TextBlob object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    uniqueID(): long;
  }

  /**
   * Provides an interface to the drawing, and describe the arguments for a font.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class TypefaceArguments {
    /**
     * Constructor for the TypefaceArguments.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor();
    /**
     * Adds variation axis for the TypefaceArguments.
     * @param { string } axis  - Indicates the axis tag, which must contain four ASCII characters.
     * @param { double } value  - Indicates the value of the axis field.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    addVariation(axis: string, value: double);

    /**
     * Adds variation axis for the TypefaceArguments.
     * @param { string } axis  - Indicates the axis tag, which must contain four ASCII characters.
     * @param { double } value  - Indicates the value of the axis field.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 static
     */
    addVariation(axis: string, value: double): void;
  }

  /**
   * The Typeface class specifies the typeface and intrinsic style of a font.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  /**
   * Describes the style of a typeface, such as SimSun or KaiTi.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class Typeface {
    /**
     * Obtains the name of the typeface, that is, the name of the font family.
     * @returns { string } Family name.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Get the family name for this typeface.
     * @returns { string } Family name.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getFamilyName(): string;

    /**
     * Get the family name for this typeface.
     * @returns { string | undefined } Family name.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getFamilyName(): string | undefined;

    /**
     * Generate typeface from current typeface and TypefaceArguments.
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    makeFromCurrent(typefaceArguments: TypefaceArguments): Typeface;

    /**
     * Generate a typeface from a file.
     * @param { string } filePath - file path for typeface.
     * @returns { Typeface } Typeface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Constructs a typeface from a file.
     * @param { string } filePath - file path for typeface.
     * @returns { Typeface } Typeface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeFromFile(filePath: string): Typeface;

    /**
     * Constructs a typeface from a file.
     * @param { string } filePath - file path for typeface.
     * @returns { Typeface | undefined } Typeface.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static makeFromFile(filePath: string): Typeface | undefined;

    /**
     * Constructs a typeface from a file, which must be stored in the
     * resources/rawfile directory of the application project.
     * @param { Resource } rawfile - Resource object corresponding to the file. Currently,
     *     only resource objects referenced in rawfile format are supported.
     *     The corresponding format is rawfile('filePath'),
     *     where filePath is the relative path of the file to the resources/rawfile directory in the project.
     *     If the file is stored in resources/rawfile, the reference format is rawfile('HarmonyOS_Sans_Bold.ttf').
     *     If the file is stored in a subdirectory, for example, in resources/rawfile/ttf,
     *     the reference format is rawfile('ttf/HarmonyOS_Sans_Bold.ttf').
     * @returns { Typeface } Typeface.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Constructs a typeface from a file, which must be stored in the
     * resources/rawfile directory of the application project.
     * @param { Resource } rawfile - Resource object corresponding to the file.
     *     Currently, only resource objects referenced in rawfile format are supported.
     *     The corresponding format is rawfile('filePath'),
     *     where filePath is the relative path of the file to the resources/rawfile directory in the project.
     *     If the file is stored in resources/rawfile, the reference format is rawfile('HarmonyOS_Sans_Bold.ttf').
     *     If the file is stored in a subdirectory, for example, in resources/rawfile/ttf,
     *     the reference format is rawfile('ttf/HarmonyOS_Sans_Bold.ttf').
     * @returns { Typeface } Typeface.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeFromRawFile(rawfile: Resource): Typeface;

    /**
     * Constructs a typeface from a file, which must be stored in the
     * resources/rawfile directory of the application project.
     * @param { Resource } rawfile - Resource object corresponding to the file.
     *     Currently, only resource objects referenced in rawfile format are supported.
     *     The corresponding format is rawfile('filePath'),
     *     where filePath is the relative path of the file to the resources/rawfile directory in the project.
     *     If the file is stored in resources/rawfile, the reference format is rawfile('HarmonyOS_Sans_Bold.ttf').
     *     If the file is stored in a subdirectory, for example, in resources/rawfile/ttf,
     *     the reference format is rawfile('ttf/HarmonyOS_Sans_Bold.ttf').
     * @returns { Typeface | undefined } Typeface.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static makeFromRawFile(rawfile: Resource): Typeface | undefined;

    /**
     * Generate typeface from file and TypefaceArguments.
     * @param { string } filePath - file path for typeface.
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface } Typeface.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeFromFileWithArguments(filePath: string, typefaceArguments: TypefaceArguments): Typeface;

    /**
     * Generate typeface from Rawfile and TypefaceArguments.
     * @param { Resource } rawfile - RawFile for typeface.
     * @param { TypefaceArguments } typefaceArguments - TypefaceArguments for typeface.
     * @returns { Typeface } Typeface.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeFromRawFileWithArguments(rawfile: Resource, typefaceArguments: TypefaceArguments): Typeface;
  }

  /**
   * Enumerates the font edging types.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the font edging types.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum FontEdging {
    /**
     * No anti-aliasing processing is used.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * No anti-aliasing processing is used.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    ALIAS = 0,

    /**
     * Uses anti-aliasing to smooth the jagged edges.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Uses anti-aliasing to smooth the jagged edges.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    ANTI_ALIAS = 1,

    /**
     * Uses sub-pixel anti-aliasing to provide a smoother effect for jagged edges.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Uses sub-pixel anti-aliasing to provide a smoother effect for jagged edges.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    SUBPIXEL_ANTI_ALIAS = 2,
  }

  /**
   * Enumerates the font hinting types.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the font hinting types.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum FontHinting {
    /**
     * No font hinting is used.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * No font hinting is used.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    NONE = 0,

    /**
     * Slight font hinting is used to improve contrast.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Slight font hinting is used to improve contrast.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    SLIGHT = 1,

    /**
     * Normal font hinting is used to improve contrast.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Normal font hinting is used to improve contrast.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    NORMAL = 2,

    /**
     * Full font hinting is used to improve contrast.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Full font hinting is used to improve contrast.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    FULL = 3,
  }

  /**
   * Describes the attributes used for text rendering, such as size and typeface.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11 dynamic
   * @since 20 static
   */
  class Font {
    /**
     * Enables subpixel font rendering.
     * @param { boolean } isSubpixel - Whether to enable subpixel font rendering.
     * The value true means to enable subpixel font rendering, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    enableSubpixel(isSubpixel: boolean): void;

    /**
     * Enables emboldened fonts.
     * @param { boolean } isEmbolden - Whether to enable emboldened fonts.
     * The value true means to enable emboldened fonts, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    enableEmbolden(isEmbolden: boolean): void;

    /**
     * Enables linear font scaling.
     * @param { boolean } isLinearMetrics - Whether to enable linear font scaling.
     * The value true means to enable linear font scaling, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    enableLinearMetrics(isLinearMetrics: boolean): void;

    /**
     * Sets the font size.
     * @param { double } textSize - Font size. The value is a floating point number.
     * If a negative number is passed in, the size is set to 0. If the size is 0, the text drawn will not be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets the font size.
     * @param { double } textSize - Font size. The value is a floating point number.
     * If a negative number is passed in, the size is set to 0. If the size is 0, the text drawn will not be displayed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setSize(textSize: double): void;

    /**
     * Obtains the font size.
     * @returns { double } Font size. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Obtains the font size.
     * @returns { double } Font size. The value is a floating point number.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getSize(): double;

    /**
     * Sets the typeface style (including attributes such as font name, weight, and italic) for the font.
     * @param { Typeface } typeface - Typeface style (including attributes such as font name, weight, and italic).
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    setTypeface(typeface: Typeface): void;

    /**
     * Obtains the typeface.
     * @returns { Typeface } Typeface object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     */
    getTypeface(): Typeface;

    /**
     * Obtains the font metrics of the typeface.
     * @returns { FontMetrics } The fontMetrics value returned to the caller.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11 dynamic
     * @since 20 static
     */
    getMetrics(): FontMetrics;

    /**
     * Measures the width of a single character.
     * If the typeface of the current font does not support the character to measure,
     *     the system typeface is used to measure the character width.
     * @param { string } text - Single character to measure. The length of the string must be 1.
     * @returns { double } Width of the character. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Measures the width of a single character.
     * If the typeface of the current font does not support the character to measure,
     *     the system typeface is used to measure the character width.
     * @param { string } text - Single character to measure. The length of the string must be 1.
     * @returns { double } Width of the character. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    measureSingleCharacter(text: string): double;

    /**
     * Measures the text width.
     * @param { string } text - Text Symbol Content.
     * @param { TextEncoding } encoding - Encoding format.
     * @returns { double } Width of the text. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Measures the text width.
     * @param { string } text - Text Symbol Content.
     * @param { TextEncoding } encoding - Encoding format.
     * @returns { double } Width of the text. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    measureText(text: string, encoding: TextEncoding): double;

    /**
     * Sets a horizontal scale factor for this font.
     * @param { double } scaleX - Horizontal scale factor. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a horizontal scale factor for this font.
     * @param { double } scaleX - Horizontal scale factor. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setScaleX(scaleX: double): void;

    /**
     * Sets a horizontal skew factor for this font.
     * @param { double } skewX - Horizontal skew factor.
     *     A positive number means a skew to the left, and a negative number means a skew to the right.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a horizontal skew factor for this font.
     * @param { double } skewX - Horizontal skew factor.
     *     A positive number means a skew to the left, and a negative number means a skew to the right.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setSkewX(skewX: double): void;

    /**
     * Sets a font edging effect.
     * @param { FontEdging } edging - Font edging effect.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    setEdging(edging: FontEdging): void;

    /**
     * Sets a font hinting effect.
     * @param { FontHinting } hinting - Font hinting effect.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    setHinting(hinting: FontHinting): void;

    /**
     * Obtains the number of glyphs represented by text.
     * @param { string } text - Indicates the character storage encoded with text encoding.
     * @returns { int } Returns the count of text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the number of glyphs represented by text.
     * @param { string } text - Indicates the character storage encoded with text encoding.
     * @returns { int } Returns the count of text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    countText(text: string): int;

    /**
     * Sets whether to request that baselines be snapped to pixels when the current canvas matrix is axis aligned.
     * @param { boolean } isBaselineSnap - Whether to request that baselines be snapped to pixels.
     * The value true means to request that baselines be snapped to pixels, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    setBaselineSnap(isBaselineSnap: boolean): void;

    /**
     * Checks whether baselines are requested to be snapped to pixels when the current canvas matrix is axis aligned.
     * @returns { boolean } Check result. The value true means that the baselines are requested to be snapped to pixels,
     * and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    isBaselineSnap(): boolean;

    /**
     * Sets whether to use bitmaps in this font.
     * @param { boolean } isEmbeddedBitmaps - Whether to use bitmaps in the font. The value true means to use bitmaps in the font,
     * and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    setEmbeddedBitmaps(isEmbeddedBitmaps: boolean): void;

    /**
     * Checks whether bitmaps are used in this font.
     * @returns { boolean } Check result. The value true means that the bitmaps are used, and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    isEmbeddedBitmaps(): boolean;

    /**
     * Sets whether to forcibly use auto hinting, that is, whether to always hint glyphs.
     * @param { boolean } isForceAutoHinting - Whether to forcibly use auto hinting. The value true means to forcibly use auto hinting,
     * and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    setForceAutoHinting(isForceAutoHinting: boolean): void;

    /**
     * Checks whether auto hinting is forcibly used.
     * @returns { boolean } Check result. The value true means that auto hinting is forcibly used, and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    isForceAutoHinting(): boolean;

    /**
     * Obtains the width of each glyph in an array.
     * @param { Array<int> } glyphs - Glyph array, which can be generated by textToGlyphs.
     * @returns { Array<double> } Glyph array, which can be generated by textToGlyphs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the width of each glyph in an array.
     * @param { Array<int> } glyphs - Glyph array, which can be generated by textToGlyphs.
     * @returns { Array<double> } Glyph array, which can be generated by textToGlyphs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getWidths(glyphs: Array<int>): Array<double>;

    /**
     * Converts text into glyph indexes.
     * @param { string } text - Text string.
     * @param { int } glyphCount - Number of glyphs represented by the text.
     *     The value must be the same as the value obtained from countText.
     *     The default value is the number of characters in the text string. The value is an integer.
     * @returns { Array<int> } Returns the storage for glyph indices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Converts text into glyph indexes.
     * @param { string } text - Text string.
     * @param { int } glyphCount - Number of glyphs represented by the text.
     *     The value must be the same as the value obtained from countText.
     *     The default value is the number of characters in the text string. The value is an integer.
     * @returns { Array<int> } Returns the storage for glyph indices.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    textToGlyphs(text: string, glyphCount?: int): Array<int>;

    /**
     * Checks whether sub-pixel rendering is used for this font.
     * @returns { boolean } Check result. The value true means that sub-pixel rendering is used, and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    isSubpixel(): boolean;

    /**
     * Checks whether linear scaling is used for this font.
     * @returns { boolean } Checks whether linear scaling is used for this font.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    isLinearMetrics(): boolean;
    
    /**
     * Obtains the horizontal skew factor of this font.
     * @returns { double } Horizontal skew factor.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the horizontal skew factor of this font.
     * @returns { double } Horizontal skew factor.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getSkewX(): double;

    /**
     * Checks whether the bold effect is set for this font.
     * @returns { boolean } Check result. The value true means that the bold effect is set, and false means the opposite.
     * returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    isEmbolden(): boolean;

    /**
     * Obtains the horizontal scale ratio of this font.
     * @returns { double } Horizontal scale ratio.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the horizontal scale ratio of this font.
     * @returns { double } Horizontal scale ratio.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getScaleX(): double;

    /**
     * Obtains the font hinting effect.
     * @returns { FontHinting } Font hinting effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    getHinting(): FontHinting;

    /**
     * Obtains the font edging effect.
     * @returns { FontEdging } Font edging effect.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     */
    getEdging(): FontEdging;

    /**
     * Obtains the outline path of a glyph.
     * @param { int } index - Index of the glyph.
     * @returns { Path } Outline path of the glyph.
     * Note: Path use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Obtains the outline path of a glyph.
     * @param { int } index - Index of the glyph.
     * @returns { Path } Outline path of the glyph.
     * Note: Path use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    createPathForGlyph(index: int): Path;

    /**
     * Obtains the rectangular bounding box of each glyph in an array.
     * @param { Array<number> } glyphs - Glyph array, which can be generated by textToGlyphs.
     * @returns { Array<common2D.Rect> } Array that holds the rectangular bounding boxes.
     *     Note: 1. Rect use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     *     <br>2. Rect use two points(left-bottom & right-top) to describe the bound.
     *     <br>3. The bound rect will be snap to integral boundaries.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Obtains the rectangular bounding box of each glyph in an array.
     * @param { Array<int> } glyphs - Glyph array, which can be generated by textToGlyphs.
     * @returns { Array<common2D.Rect> } Array that holds the rectangular bounding boxes.
     *     Note: 1. Rect use y-axis-goes-down system, y axis is inverted to the y-axis-goes-up system.
     *     <br>2. Rect use two points(left-bottom & right-top) to describe the bound.
     *     <br>3. The bound rect will be snap to integral boundaries.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getBounds(glyphs: Array<int>): Array<common2D.Rect>;

    /**
     * Obtains the outline path of a text.
     * @param { string } text - UTF-8 text-encoded characters.
     * @param { int } byteLength - Length of the outline path,
     *     which is obtained based on the minimum value between the passed value of byteLength and
     *     the actual text byte size.
     * @param { double } x - X coordinate of the text in the drawing area, with the origin as the start point.
     * @param { double } y - Y coordinate of the text in the drawing area, with the origin as the start point.
     * @returns { Path } Outline path of the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Obtains the outline path of a text.
     * @param { string } text - UTF-8 text-encoded characters.
     * @param { int } byteLength - Length of the outline path,
     *     which is obtained based on the minimum value between the passed value of byteLength and
     *     the actual text byte size.
     * @param { double } x - X coordinate of the text in the drawing area, with the origin as the start point.
     * @param { double } y - Y coordinate of the text in the drawing area, with the origin as the start point.
     * @returns { Path } Outline path of the text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getTextPath(text: string, byteLength: int, x: double, y: double): Path;

    /**
     * Sets whether to follow the theme font. When followed is set to true,
     * the theme font is used if it is enabled by the system and no typeface is set.
     * @param { boolean } followed - Whether to follow the theme font.
     * The value true means to follow the theme font, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 15 dynamic
     */
    setThemeFontFollowed(followed: boolean): void;

    /**
     * Checks whether the font follows the theme font. By default, the font follows the theme font.
     * @returns { boolean } Check result. The value true means that the theme font is followed, and false means the opposite.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 15 dynamic
     */
    isThemeFontFollowed(): boolean;
  }

  /**
   * Enumerates the font measurement flags,
   * which is used to specify whether a field in the font measurement information is valid.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the font measurement flags,
   * which is used to specify whether a field in the font measurement information is valid.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum FontMetricsFlags {
    /**
     * The underlineThickness field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * The underlineThickness field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    UNDERLINE_THICKNESS_VALID = 1 << 0,

    /**
     * The underlinePosition field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * The underlinePosition field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    UNDERLINE_POSITION_VALID = 1 << 1,

    /**
     * The strikethroughThickness field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * The strikethroughThickness field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    STRIKETHROUGH_THICKNESS_VALID = 1 << 2,

    /**
     * The strikethroughPosition field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * The strikethroughPosition field in the FontMetrics struct is valid.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    STRIKETHROUGH_POSITION_VALID = 1 << 3,

    /**
     * The boundary metrics (such as top, bottom, xMin, and xMax) in the FontMetrics struct are invalid.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * The boundary metrics (such as top, bottom, xMin, and xMax) in the FontMetrics struct are invalid.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    BOUNDS_INVALID = 1 << 4,
  }

  /**
   * Describes the attributes that describe the font size and layout. A typeface has similar font metrics.
   * @typedef FontMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  /**
   * Describes the attributes that describe the font size and layout. A typeface has similar font metrics.
   * @typedef FontMetrics
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  interface FontMetrics {
    /**
     * Font measurement flags that are valid.
     * @type { ?FontMetricsFlags }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Font measurement flags that are valid.
     * @type { ?FontMetricsFlags }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    flags?: FontMetricsFlags;

    /**
     * Maximum distance from the baseline to the highest coordinate of the text. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Maximum distance from the baseline to the highest coordinate of the text. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    top: double;
    /**
     * Distance from the baseline to the highest coordinate of the text. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Distance from the baseline to the highest coordinate of the text. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    ascent: double;
    /**
     * Distance from the baseline to the lowest coordinate of the text. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Distance from the baseline to the lowest coordinate of the text. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    descent: double;
    /**
     * Maximum distance from the baseline to the lowest coordinate of the text. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Maximum distance from the baseline to the lowest coordinate of the text. The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    bottom: double;
    /**
     * Interline spacing, that is, the distance from the descent of one line of text to the ascent of the next line.
     * The value is a floating point number.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Interline spacing, that is, the distance from the descent of one line of text to the ascent of the next line.
     * The value is a floating point number.
     * @type { double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    leading: double;
    /**
     * Average character width.
     * @type { ?double }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Average character width.
     * @type { ?double }
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
     avgCharWidth?: double;

     /**
      * Maximum character width.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Maximum character width.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     maxCharWidth?: double;
 
     /**
      * Horizontal distance from the leftmost edge of any glyph bounding box to the origin.
      * This value is usually less than 0, indicating the minimum horizontal coordinate across all glyph bounding boxes.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Horizontal distance from the leftmost edge of any glyph bounding box to the origin.
      * This value is usually less than 0, indicating the minimum horizontal coordinate across all glyph bounding boxes.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     xMin?: double;
 
     /**
      * Horizontal distance from the rightmost edge of any glyph bounding box to the origin.
      * The value is a positive number, indicating the maximum horizontal coordinate across all glyph bounding boxes.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Horizontal distance from the rightmost edge of any glyph bounding box to the origin.
      * The value is a positive number, indicating the maximum horizontal coordinate across all glyph bounding boxes.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     xMax?: double;
 
     /**
      * Height of the lowercase letter x. The value is usually a negative value.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Height of the lowercase letter x. The value is usually a negative value.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     xHeight?: double;
 
     /**
      * Height of a capital letter. The value is usually a negative value.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Height of a capital letter. The value is usually a negative value.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     capHeight?: double;
 
     /**
      * Thickness of the underline.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Thickness of the underline.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     underlineThickness?: double;
 
     /**
      * Vertical distance from the baseline to the top of the underline. The value is usually a positive number.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Vertical distance from the baseline to the top of the underline. The value is usually a positive number.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     underlinePosition?: double;
 
     /**
      * Thickness of the strikethrough.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Thickness of the strikethrough.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     strikethroughThickness?: double;
 
     /**
      * Vertical distance from the baseline to the bottom of the strikethrough. The value is usually a negative value.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @since 12
      */
     /**
      * Vertical distance from the baseline to the bottom of the strikethrough. The value is usually a negative value.
      * @type { ?double }
      * @syscap SystemCapability.Graphics.Drawing
      * @crossplatform
      * @since 20 dynamic&static
      */
     strikethroughPosition?: double;
  }

  /**
   * Implements a lattice object, which is used to divide an image by lattice.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12 dynamic
   * @since 20 static
   */
  class Lattice {
    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *     the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<common2D.Color> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *     The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *     the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<common2D.Color> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *     The default value is null.
     *     If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    static createImageLattice(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
      fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice;

    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *     the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *    If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<int> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *    Each color is represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     *    The default value is null.
     *    If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *     The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *     the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *    If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<int> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *    Each color is represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     *    The default value is null.
     *    If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createImageLattice(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
      fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<int> | null): Lattice;

    /**
     * Divides the image into lattices. The lattices on both even columns and even rows are fixed,
     * and they are drawn at their original size if the target is large enough.
     * If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target,
     * and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.
     * @param { Array<int> } xDivs - Array of X coordinates used to divide the image. The value is an integer.
     * @param { Array<int> } yDivs - Array of Y coordinates used to divide the image. The value is an integer.
     * @param { int } fXCount - Size of the array that holds the X coordinates. The value range is [0, 5].
     * @param { int } fYCount - Size of the array that holds the Y coordinates. The value range is [0, 5].
     * @param { common2D.Rect | null } [fBounds] - Source bounds to draw. The rectangle parameter must be an integer.
     *    The default value is the rectangle size of the original image. If the rectangle parameter is a decimal,
     *    the decimal part is discarded and converted into an integer.
     * @param { Array<RectType> | null } [fRectTypes] - Array that holds the rectangle types. The default value is null.
     *    If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @param { Array<int> | null } [fColors] - Array that holds the colors used to fill the lattices.
     *    Each color is represented by a 32-bit unsigned integer in hexadecimal ARGB format.
     *    The default value is null.
     *    If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1).
     * @returns { Lattice | undefined } Lattice object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 22 static
     */
    static createImageLatticeWithArrayInt(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
      fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<int> | null): Lattice  | undefined;
  }

  /**
   * Enumerate rect types. Optional setting per rectangular grid entry to make it transparent,
   * or to fill the grid entry with a color. only used in Lattice.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the types of rectangles used to fill the lattices. This enum is used only in Lattice.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum RectType {
    /**
     * Draws an image into the lattice.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws an image into the lattice.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    DEFAULT = 0,

    /**
     * Sets the lattice to transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the lattice to transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    TRANSPARENT = 1,

    /**
     * Draws the colors in the fColors array in Lattice into the lattice.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Draws the colors in the fColors array in Lattice into the lattice.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    FIXEDCOLOR = 2
  }

  /**
   * Implements a mask filter.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Implements a mask filter.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class MaskFilter {
    /**
     * Creates a mask filter with a blur effect.
     * @param { BlurType } blurType - Blur type.
     * @param { number } sigma - Standard deviation of the Gaussian blur to apply.
     *     The value must be a floating point number greater than 0.
     * @returns { MaskFilter } MaskFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a mask filter with a blur effect.
     * @param { BlurType } blurType - Blur type.
     * @param { number } sigma - Standard deviation of the Gaussian blur to apply.
     *     The value must be a floating point number greater than 0.
     * @returns { MaskFilter } MaskFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createBlurMaskFilter(blurType: BlurType, sigma: number): MaskFilter;

    /**
     * Creates a mask filter with a blur effect.
     * @param { BlurType } blurType - Blur type.
     * @param { double } sigma - Standard deviation of the Gaussian blur to apply.
     *     The value must be a floating point number greater than 0.
     * @returns { MaskFilter | undefined } MaskFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createBlurMaskFilter(blurType: BlurType, sigma: double): MaskFilter | undefined;
  }

  /**
   * Enumerates the styles of the dashed path effect.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 18
   */
  /**
   * Enumerates the styles of the dashed path effect.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
   enum PathDashStyle {
    /**
     * Translates only, not rotating with the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Translates only, not rotating with the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    TRANSLATE = 0,
    /**
     * Rotates with the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Rotates with the path.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    ROTATE = 1,
    /**
     * Rotates with the path and stretches or compresses at turns to enhance smoothness.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Rotates with the path and stretches or compresses at turns to enhance smoothness.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    MORPH = 2,
  }

  /**
   * Implements a path effect.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Implements a path effect.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class PathEffect {
    /**
     * Creates a PathEffect object that converts a path into a dotted line.
     * @param { Array<number> } intervals - Array of ON and OFF lengths of dotted lines.
     * The number of arrays must be an even number and be greater than or equal to 2.
     * @param { number } phase - Offset used during drawing. The value is a floating point number.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a PathEffect object that converts a path into a dotted line.
     * @param { Array<number> } intervals - Array of ON and OFF lengths of dotted lines.
     * The number of arrays must be an even number and be greater than or equal to 2.
     * @param { number } phase - Offset used during drawing. The value is a floating point number.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createDashPathEffect(intervals: Array<number>, phase: number): PathEffect;

    /**
     * Creates a PathEffect object that converts a path into a dotted line.
     * @param { Array<double> } intervals - Array of ON and OFF lengths of dotted lines.
     * The number of arrays must be an even number and be greater than or equal to 2.
     * @param { double } phase - Offset used during drawing. The value is a floating point number.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createDashPathEffect(intervals: Array<double>, phase: double): PathEffect | undefined;

    /**
     * Creates a path effect that transforms the sharp angle between line segments
     * into a rounded corner with the specified radius.
     * @param { number } radius - Radius of the rounded corner.
     *     The value must be greater than 0. The value is a floating point number.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a path effect that transforms the sharp angle between line segments
     * into a rounded corner with the specified radius.
     * @param { number } radius - Radius of the rounded corner.
     *     The value must be greater than 0. The value is a floating point number.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createCornerPathEffect(radius: number): PathEffect;

    /**
     * Creates a path effect that transforms the sharp angle between line segments
     * into a rounded corner with the specified radius.
     * @param { double } radius - Radius of the rounded corner.
     *     The value must be greater than 0. The value is a floating point number.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createCornerPathEffect(radius: double): PathEffect | undefined;

    /**
     * Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.
     * @param { number } segLength - Distance along the path at which each segment is fragmented.
     *     The value is a floating point number.
     *     If a negative number or the value 0 is passed in, no effect is created.
     * @param { number } dev - Maximum amount by which the end points of the segments can be
     *     randomly displaced during rendering. The value is a floating-point number.
     * @param { number } [seedAssist] - Optional parameter to assist in generating a pseudo-random seed for the effect.
     *     The default value is 0, and the value is a 32-bit unsigned integer.
     * @returns { PathEffect } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.
     * @param { number } segLength - Distance along the path at which each segment is fragmented.
     *     The value is a floating point number.
     *     If a negative number or the value 0 is passed in, no effect is created.
     * @param { number } dev - Maximum amount by which the end points of the segments can be
     *     randomly displaced during rendering. The value is a floating-point number.
     * @param { number } [seedAssist] - Optional parameter to assist in generating a pseudo-random seed for the effect.
     *     The default value is 0, and the value is a 32-bit unsigned integer.
     * @returns { PathEffect } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createDiscretePathEffect(segLength: number, dev: number, seedAssist?: number): PathEffect;

    /**
     * Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.
     * @param { double } segLength - Distance along the path at which each segment is fragmented.
     *     The value is a floating point number.
     *     If a negative number or the value 0 is passed in, no effect is created.
     * @param { double } dev - Maximum amount by which the end points of the segments can be
     *     randomly displaced during rendering. The value is a floating-point number.
     * @param { int } [seedAssist] - Optional parameter to assist in generating a pseudo-random seed for the effect.
     *     The default value is 0, and the value is a 32-bit unsigned integer.
     * @returns { PathEffect | undefined } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createDiscretePathEffect(segLength: double, dev: double, seedAssist?: int): PathEffect | undefined;

    /**
     * Creates a path effect by sequentially applying the inner effect and then the outer effect.
     * @param { PathEffect } outer - Path effect that is applied second, overlaying the first effect.
     * @param { PathEffect } inner - Inner path effect that is applied first.
     * @returns { PathEffect } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Creates a path effect by sequentially applying the inner effect and then the outer effect.
     * @param { PathEffect } outer - Path effect that is applied second, overlaying the first effect.
     * @param { PathEffect } inner - Inner path effect that is applied first.
     * @returns { PathEffect } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect;

    /**
     * Creates a path effect by sequentially applying the inner effect and then the outer effect.
     * @param { PathEffect } outer - Path effect that is applied second, overlaying the first effect.
     * @param { PathEffect } inner - Inner path effect that is applied first.
     * @returns { PathEffect | undefined } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect | undefined;

    /**
     * Creates a dashed path effect based on the shape described by a path.
     * @param { Path } path - Path that defines the shape to be used for filling each dash in the pattern.
     * @param { number } advance - Distance between two consecutive dashes.
     *     The value is a floating point number greater than 0.
     *     Otherwise, an error code is thrown.
     * @param { number } phase - Starting offset of the dash pattern. The value is a floating point number.
     *     The actual offset used is the absolute value of this value modulo the value of advance.
     * @param { PathDashStyle } style - Style of the dashed path effect.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Creates a dashed path effect based on the shape described by a path.
     * @param { Path } path - Path that defines the shape to be used for filling each dash in the pattern.
     * @param { number } advance - Distance between two consecutive dashes.
     *     The value is a floating point number greater than 0.
     *     Otherwise, an error code is thrown.
     * @param { number } phase - Starting offset of the dash pattern. The value is a floating point number.
     *     The actual offset used is the absolute value of this value modulo the value of advance.
     * @param { PathDashStyle } style - Style of the dashed path effect.
     * @returns { PathEffect } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createPathDashEffect(path: Path, advance: number, phase: number, style: PathDashStyle): PathEffect;
    /**
     * Creates a dashed path effect based on the shape described by a path.
     * @param { Path } path - Path that defines the shape to be used for filling each dash in the pattern.
     * @param { double } advance - Distance between two consecutive dashes.
     *     The value is a floating point number greater than 0.
     *     Otherwise, an error code is thrown.
     * @param { double } phase - Starting offset of the dash pattern. The value is a floating point number.
     *     The actual offset used is the absolute value of this value modulo the value of advance.
     * @param { PathDashStyle } style - Style of the dashed path effect.
     * @returns { PathEffect | undefined } PathEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createPathDashEffect(path: Path, advance: double, phase: double, style: PathDashStyle): PathEffect | undefined;

    /**
     * Creates an overlay path effect based on two distinct path effects.
     * Different from createComposePathEffect,
     * this API applies each effect separately and then displays them as a simple overlay.
     * @param { PathEffect } firstPathEffect - First path effect.
     * @param { PathEffect } secondPathEffect - Second path effect.
     * @returns { PathEffect } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Creates an overlay path effect based on two distinct path effects.
     * Different from createComposePathEffect,
     * this API applies each effect separately and then displays them as a simple overlay.
     * @param { PathEffect } firstPathEffect - First path effect.
     * @param { PathEffect } secondPathEffect - Second path effect.
     * @returns { PathEffect } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect;

    /**
     * Creates an overlay path effect based on two distinct path effects.
     * Different from createComposePathEffect,
     * this API applies each effect separately and then displays them as a simple overlay.
     * @param { PathEffect } firstPathEffect - First path effect.
     * @param { PathEffect } secondPathEffect - Second path effect.
     * @returns { PathEffect | undefined } PathEffect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 dynamic
     */
    static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect | undefined;
  }

  /**
   * Implements the shader effect. After a shader effect is set for a pen or brush,
   * the shader effect instead of the color attribute is used for drawing. In this case,
   * the alpha value set for the pen or brush still takes effect.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Implements the shader effect. After a shader effect is set for a pen or brush,
   * the shader effect instead of the color attribute is used for drawing. In this case,
   * the alpha value set for the pen or brush still takes effect.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class ShaderEffect {
    /**
     * Creates a ShaderEffect object with a single color.
     * @param { number } color - Color in the ARGB format. The value is a 32-bit unsigned integer.
     * @returns { ShaderEffect } Returns the shader with single color ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a ShaderEffect object with a single color.
     * @param { number } color - Color in the ARGB format. The value is a 32-bit unsigned integer.
     * @returns { ShaderEffect } Returns the shader with single color ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createColorShader(color: number): ShaderEffect;

    /**
     * Creates a ShaderEffect object with a single color.
     * @param { int } color - Color in the ARGB format. The value is a 32-bit unsigned integer.
     * @returns { ShaderEffect | undefined } Returns the shader with single color ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createColorShader(color: int): ShaderEffect | undefined;

    /**
     * Creates a ShaderEffect object that generates a linear gradient between two points.
     * @param { common2D.Point } startPt - Start point.
     * @param { common2D.Point } endPt - End point.
     * @param { Array<int> } colors - Array of colors to distribute between the two points.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0, and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two points.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a linear gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a ShaderEffect object that generates a linear gradient between two points.
     * @param { common2D.Point } startPt - Start point.
     * @param { common2D.Point } endPt - End point.
     * @param { Array<int> } colors - Array of colors to distribute between the two points.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0, and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two points.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a linear gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<int>,
        mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a linear gradient between two points.
     * @param { common2D.Point } startPt - Start point.
     * @param { common2D.Point } endPt - End point.
     * @param { Array<int> } colors - Array of colors to distribute between the two points.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0, and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two points.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a linear gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<int>,
        mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates a ShaderEffect object that generates a radial gradient based on the center and radius of a circle.
     * A radial gradient refers to the color transition that spreads out gradually from the center of a circle.
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { double } radius - Radius of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { Array<int> } colors - Array of colors to distribute between the center
     *     and ending shape of the circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between
     *     the center and ending shape of the circle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a radial gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a ShaderEffect object that generates a radial gradient based on the center and radius of a circle.
     * A radial gradient refers to the color transition that spreads out gradually from the center of a circle.
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { double } radius - Radius of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { Array<int> } colors - Array of colors to distribute between the center
     *     and ending shape of the circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between
     *     the center and ending shape of the circle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a radial gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createRadialGradient(centerPt: common2D.Point, radius: double, colors: Array<int>,
      mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a radial gradient based on the center and radius of a circle.
     * A radial gradient refers to the color transition that spreads out gradually from the center of a circle.
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { double } radius - Radius of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { Array<int> } colors - Array of colors to distribute between the center
     *     and ending shape of the circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors. The first element in the array must be 0.0,
     *     the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between
     *     the center and ending shape of the circle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a radial gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createRadialGradient(centerPt: common2D.Point, radius: double, colors: Array<int>,
      mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates a ShaderEffect object that generates a color sweep gradient around a given center point,
     * either in a clockwise or counterclockwise direction.
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { Array<number> } colors - Array of colors to distribute between the start angle and end angle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { number } startAngle - Start angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     The value is a floating point number.
     * @param { number } endAngle - End angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     A value less than the start angle is invalid.
     *     The value is a floating point number.
     * @param { Array<number> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that the colors are evenly distributed between
     *     the start angle and end angle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a sweep gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a ShaderEffect object that generates a color sweep gradient around a given center point,
     * either in a clockwise or counterclockwise direction.
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { Array<number> } colors - Array of colors to distribute between the start angle and end angle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { number } startAngle - Start angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     The value is a floating point number.
     * @param { number } endAngle - End angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     A value less than the start angle is invalid.
     *     The value is a floating point number.
     * @param { Array<number> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that the colors are evenly distributed between
     *     the start angle and end angle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a sweep gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createSweepGradient(centerPt: common2D.Point, colors: Array<number>,
        mode: TileMode, startAngle: number, endAngle: number, pos?: Array<number> | null,
        matrix?: Matrix | null): ShaderEffect;
    
    /**
     * Creates a ShaderEffect object that generates a color sweep gradient around a given center point,
     * either in a clockwise or counterclockwise direction.
     * @param { common2D.Point } centerPt - Center of the circle.
     * @param { Array<int> } colors - Array of colors to distribute between the start angle and end angle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { double } startAngle - Start angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     The value is a floating point number.
     * @param { double } endAngle - End angle of the sweep gradient, in degrees.
     *     The value 0 indicates the positive direction of the X axis.
     *     A positive number indicates an offset towards the positive direction,
     *     and a negative number indicates an offset towards the negative direction.
     *     A value less than the start angle is invalid.
     *     The value is a floating point number.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that the colors are evenly distributed between
     *     the start angle and end angle.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a sweep gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createSweepGradient(centerPt: common2D.Point, colors: Array<int>,
        mode: TileMode, startAngle: double, endAngle: double, pos?: Array<double> | null,
        matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates a ShaderEffect object that generates a conical gradient between two given circles.
     * @param { common2D.Point } startPt - Center of the start circle of the gradient.
     * @param { number } startRadius - Radius of the start circle of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { common2D.Point } endPt - Center of the end circle of the gradient.
     * @param { number } endRadius - Radius of the end circle of the gradient. A negative value is invalid.
     *     The value is a floating point number.
     * @param { Array<number> } colors - Array of colors to distribute between the start circle and end circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<number> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two circles.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a conical gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a ShaderEffect object that generates a conical gradient between two given circles.
     * @param { common2D.Point } startPt - Center of the start circle of the gradient.
     * @param { number } startRadius - Radius of the start circle of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { common2D.Point } endPt - Center of the end circle of the gradient.
     * @param { number } endRadius - Radius of the end circle of the gradient. A negative value is invalid.
     *     The value is a floating point number.
     * @param { Array<number> } colors - Array of colors to distribute between the start circle and end circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<number> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two circles.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect } Returns a conical gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createConicalGradient(startPt: common2D.Point, startRadius: number, endPt: common2D.Point,
        endRadius: number, colors: Array<number>, mode: TileMode,
        pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect;

    /**
     * Creates a ShaderEffect object that generates a conical gradient between two given circles.
     * @param { common2D.Point } startPt - Center of the start circle of the gradient.
     * @param { double } startRadius - Radius of the start circle of the gradient. A negative number is invalid.
     *     The value is a floating point number.
     * @param { common2D.Point } endPt - Center of the end circle of the gradient.
     * @param { double } endRadius - Radius of the end circle of the gradient. A negative value is invalid.
     *     The value is a floating point number.
     * @param { Array<int> } colors - Array of colors to distribute between the start circle and end circle.
     *     The values in the array are 32-bit (ARGB) unsigned integers.
     * @param { TileMode } mode - Tile mode of the shader effect.
     * @param { Array<double> | null } [pos] - Relative position of each color in the color array.
     *     The array length must be the same as that of colors.
     *     The first element in the array must be 0.0, the last element must be 1.0,
     *     and the middle elements must be between 0.0 and 1.0 and increase by index.
     *     The default value is null, indicating that colors are evenly distributed between the two circles.
     * @param { Matrix | null } [matrix] - Matrix object used to perform matrix transformation on the shader effect.
     *     The default value is null, indicating the identity matrix.
     * @returns { ShaderEffect | undefined } Returns a conical gradient ShaderEffect object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createConicalGradient(startPt: common2D.Point, startRadius: double, endPt: common2D.Point,
        endRadius: double, colors: Array<int>, mode: TileMode,
        pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined;

    /**
     * Creates an ShaderEffect object that generates a shader with single image.
     * @param { image.PixelMap } pixelmap - PixelMap.
     * @param { TileMode } tileX - Indicates the type of tile mode for horizontal shader effect.
     * @param { TileMode } tileY - Indicates the type of tile mode for vertical shader effect.
     * @param { SamplingOptions } samplingOptions - SamplingOptions used to describe the sampling mode.
     * @param { Matrix | null } matrix - Indicates the Matrix object. The default value is null.
     * @returns { ShaderEffect } Returns the shader with single image ShaderEffect object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createImageShader(pixelmap: image.PixelMap, tileX: TileMode, tileY: TileMode,
      samplingOptions: SamplingOptions, matrix?: Matrix | null): ShaderEffect;
    
    /**
     * Creates an ShaderEffect object that generates a blend ShaderEffect object by two shaders.
     * @param { ShaderEffect } dstShaderEffect - Indicates a destination ShaderEffect pointer.
     * @param { ShaderEffect } srcShaderEffect - Indicates a source ShaderEffect pointer.
     * @param { BlendMode } blendMode - BlendMode.
     * @returns { ShaderEffect } Returns a blend ShaderEffect object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createComposeShader(dstShaderEffect: ShaderEffect, srcShaderEffect: ShaderEffect,
      blendMode: BlendMode): ShaderEffect;
  }

  /**
   * Enumerates the tile modes of the shader effect.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the tile modes of the shader effect.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum TileMode {
    /**
     * Replicates the edge color if the shader effect draws outside of its original boundary.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Replicates the edge color if the shader effect draws outside of its original boundary.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    CLAMP = 0,

    /**
     * Repeats the shader effect in both horizontal and vertical directions.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Repeats the shader effect in both horizontal and vertical directions.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    REPEAT = 1,

    /**
     * Repeats the shader effect in both horizontal and vertical directions, alternating mirror images.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Repeats the shader effect in both horizontal and vertical directions, alternating mirror images.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    MIRROR = 2,

    /**
     * Renders the shader effect only within the original boundary.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Renders the shader effect only within the original boundary.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    DECAL = 3,
  }

  /**
   * Implements a shadow layer.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Implements a shadow layer.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class ShadowLayer {
    /**
     * Creates a ShadowLayer object.
     *
     * @param { number } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { number } x - Offset on the X axis. The value is a floating point number.
     * @param { number } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @returns { ShadowLayer } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a ShadowLayer object.
     *
     * @param { number } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { number } x - Offset on the X axis. The value is a floating point number.
     * @param { number } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @returns { ShadowLayer } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static create(blurRadius: number, x: number, y: number, color: common2D.Color): ShadowLayer;

    /**
     * Creates a ShadowLayer object.
     *
     * @param { double } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { double } x - Offset on the X axis. The value is a floating point number.
     * @param { double } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @returns { ShadowLayer | undefined } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static create(blurRadius: double, x: double, y: double, color: common2D.Color): ShadowLayer | undefined;

    /**
     * Creates a ShadowLayer object.
     *
     * @param { number } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { number } x - Offset on the X axis. The value is a floating point number.
     * @param { number } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color | number } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @returns { ShadowLayer } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Creates a ShadowLayer object.
     *
     * @param { number } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { number } x - Offset on the X axis. The value is a floating point number.
     * @param { number } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color | number } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @returns { ShadowLayer } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static create(blurRadius: number, x: number, y: number, color: common2D.Color | number): ShadowLayer;

    /**
     * Creates a ShadowLayer object.
     *
     * @param { double } blurRadius - Radius of the shadow layer.
     *     The value must be a floating point number greater than 0.
     * @param { double } x - Offset on the X axis. The value is a floating point number.
     * @param { double } y - Offset on the Y axis. The value is a floating point number.
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @returns { ShadowLayer | undefined } ShadowLayer object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static create(blurRadius: double, x: double, y: double, color: common2D.Color | int): ShadowLayer | undefined;
  }

  /**
   * Defines a color filter.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11 dynamic
   * @since 20 static
   */
  class ColorFilter {
    /**
     * Creates a ColorFilter object with a given color and blend mode.
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Creates a ColorFilter object with a given color and blend mode.
     * @param { common2D.Color } color - Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter;

    /**
     * Creates a ColorFilter object with a given color and blend mode.
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Creates a ColorFilter object with a given color and blend mode.
     * @param { common2D.Color | int } color - Color, represented by an unsigned integer in hexadecimal ARGB format.
     * @param { BlendMode } mode - Blend mode.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    static createBlendModeColorFilter(color: common2D.Color | int, mode: BlendMode): ColorFilter;

    /**
     * Creates a ColorFilter object by combining another two color filters.
     * @param { ColorFilter } outer - Color filter that takes effect later in the new filter.
     * @param { ColorFilter } inner - Color filter that takes effect first in the new filter.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Creates a ColorFilter object by combining another two color filters.
     * @param { ColorFilter } outer - Color filter that takes effect later in the new filter.
     * @param { ColorFilter } inner - Color filter that takes effect first in the new filter.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter;

    /**
     * Creates a ColorFilter object by combining another two color filters.
     * @param { ColorFilter } outer - Color filter that takes effect later in the new filter.
     * @param { ColorFilter } inner - Color filter that takes effect first in the new filter.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter | undefined;

    /**
     * Creates a ColorFilter object that applies the sRGB gamma curve to the RGB channels.
     * @returns { ColorFilter } Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Creates a ColorFilter object that applies the sRGB gamma curve to the RGB channels.
     * @returns { ColorFilter } Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createLinearToSRGBGamma(): ColorFilter;

    /**
     * Creates a ColorFilter object that applies the sRGB gamma curve to the RGB channels.
     * @returns { ColorFilter | undefined} Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createLinearToSRGBGamma(): ColorFilter | undefined;

    /**
     * Creates a ColorFilter object that applies the RGB channels to the sRGB gamma curve.
     * @returns { ColorFilter } Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Creates a ColorFilter object that applies the RGB channels to the sRGB gamma curve.
     * @returns { ColorFilter } Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createSRGBGammaToLinear(): ColorFilter;

    /**
     * Creates a ColorFilter object that applies the RGB channels to the sRGB gamma curve.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createSRGBGammaToLinear(): ColorFilter | undefined;

    /**
     * Creates a ColorFilter object that multiplies the luma into the alpha channel and sets the RGB channels to zero.
     * @returns { ColorFilter } Colorfilter.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Creates a ColorFilter object that multiplies the luma into the alpha channel and sets the RGB channels to zero.
     * @returns { ColorFilter } Colorfilter.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createLumaColorFilter(): ColorFilter;

    /**
     * Creates a ColorFilter object that multiplies the luma into the alpha channel and sets the RGB channels to zero.
     * @returns { ColorFilter | undefined } Colorfilter.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createLumaColorFilter(): ColorFilter | undefined;

    /**
     * Creates a color filter object with a 4*5 color matrix.
     * @param { Array<double> } matrix - An array of 20 numbers, indicating the 4*5 matrix.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a color filter object with a 4*5 color matrix.
     * @param { Array<double> } matrix - An array of 20 numbers, indicating the 4*5 matrix.
     * @returns { ColorFilter } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createMatrixColorFilter(matrix: Array<double>): ColorFilter;

    /**
     * Creates a color filter object with a 4*5 color matrix.
     * @param { Array<double> } matrix - An array of 20 numbers, indicating the 4*5 matrix.
     * @returns { ColorFilter | undefined } Colorfilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createMatrixColorFilter(matrix: Array<double>): ColorFilter | undefined;
    
    /**
     * Makes a color filter with the given mutColor and addColor.
     * @param { common2D.Color | int } mutColor - The range of color channels must be [0, 255], used to multiply source color.
     * @param { common2D.Color | int } addColor - The range of color channels must be [0, 255], used to add to source color.
     * @returns { ColorFilter } Colorfilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createLightingColorFilter(mutColor: common2D.Color | int, addColor: common2D.Color | int): ColorFilter;

  }

  /**
   * Implements an image filter.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Implements an image filter.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class ImageFilter {
    /**
     * Creates an image filter with a given blur effect.
     * @param { double } sigmaX - Standard deviation of the Gaussian blur along the X axis.
     *     The value must be a floating point number greater than 0.
     * @param { double } sigmaY - Standard deviation of the Gaussian blur along the Y axis.
     *     The value must be a floating point number greater than 0.
     * @param { TileMode } tileMode - Tile mode to apply to the edges.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied.
     *     The default value is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates an image filter with a given blur effect.
     * @param { double } sigmaX - Standard deviation of the Gaussian blur along the X axis.
     *     The value must be a floating point number greater than 0.
     * @param { double } sigmaY - Standard deviation of the Gaussian blur along the Y axis.
     *     The value must be a floating point number greater than 0.
     * @param { TileMode } tileMode - Tile mode to apply to the edges.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied.
     *     The default value is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createBlurImageFilter(sigmaX: double, sigmaY: double,
      tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter;
    
    /**
     * Creates an image filter with a given blur effect.
     * @param { double } sigmaX - Standard deviation of the Gaussian blur along the X axis.
     *     The value must be a floating point number greater than 0.
     * @param { double } sigmaY - Standard deviation of the Gaussian blur along the Y axis.
     *     The value must be a floating point number greater than 0.
     * @param { TileMode } tileMode - Tile mode to apply to the edges.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied.
     *     The default value is null, indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createBlurImageFilter(sigmaX: double, sigmaY: double,
      tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter | undefined;

    /**
     * Creates an image filter object with a given color filter effect.
     * @param { ColorFilter } colorFilter - Color filter.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied. The default value is null,
     * indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates an image filter object with a given color filter effect.
     * @param { ColorFilter } colorFilter - Color filter.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied. The default value is null,
     * indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter;

    /**
     * Creates an image filter object with a given color filter effect.
     * @param { ColorFilter } colorFilter - Color filter.
     * @param { ImageFilter | null } [imageFilter] - Filter to which the image filter will be applied. The default value is null,
     * indicating that the image filter is directly applied to the original image.
     * @returns { ImageFilter | undefined } ImageFilter object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter | undefined;

    /**
     * Makes an ImageFilter object that instance with the provided x and y offset.
     * @param { double } dx - Indicates the offset in the X direction.
     * @param { double } dy - Indicates the offset in the Y direction.
     * @param { ImageFilter | null } [input] - Indicates the input image filter used to generate offset effects, or uses
     * the source bitmap if this is null.
     * @returns { ImageFilter } ImageFilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createOffsetImageFilter(dx: double, dy: double, input?: ImageFilter | null): ImageFilter;
    
    /**
     * Makes an ImageFilter object that applies the bitmap to the input.
     * @param { image.PixelMap } pixelmap - The source input image.
     * @param { common2D.Rect | null } srcRect - Indicates the input srcRect, or uses the source bitmap if this is null.
     * @param { common2D.Rect | null } dstRect - Indicates the input dstRect, or uses the source bitmap if this is null.
     * @returns { ImageFilter } ImageFilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createFromImage(pixelmap: image.PixelMap, srcRect?: common2D.Rect | null, dstRect?: common2D.Rect | null): ImageFilter;
  
    /**
     * Makes an ImageFilter object that applies the blend to the input.
     * @param { BlendMode } mode - Blendmode.
     * @param { ImageFilter } background - Indicates the input background filter.
     * @param { ImageFilter } foreground - Indicates the input foreground filter.
     * @returns { ImageFilter } ImageFilter object.
     * @throws { BusinessError } 25900001 - Parameter error. Possible causes: Incorrect parameter range.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
    */
    static createBlendImageFilter(mode: BlendMode, background: ImageFilter, foreground: ImageFilter): ImageFilter;

    /**
     * Makes an ImageFilter object that combines the "inner" and "outer" filters, allowing the output of the "inner"
     * filter to serve as the input source bitmap for the "outer" filter.
     * @param { ImageFilter } cOuter - Indicates the instance to apply its effects to the output of the 'inner'
     * filter.
     * @param { ImageFilter } cInner - Indicates the output as input for "outer" filters.
     * @returns { ImageFilter } ImageFilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createComposeImageFilter(cOuter: ImageFilter, cInner: ImageFilter): ImageFilter;

    /**
     * Makes an ImageFilter object that renders the contents of the input Shader.
     * 
     * @param { ShaderEffect } shader - Indicates the shader effect to be applied to the image.
     * @returns { ImageFilter } ImageFilter object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static createFromShaderEffect(shader: ShaderEffect): ImageFilter;
  }
  /**
   * Enumerates the join styles of a pen. The join style defines the shape of the joints of a polyline segment drawn by the pen.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the join styles of a pen. The join style defines the shape of the joints of a polyline segment drawn by the pen.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum JoinStyle {
    /**
     * Mitered corner. If the angle of a polyline is small, its miter length may be inappropriate.
     * In this case, you need to use the miter limit to limit the miter length.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Mitered corner. If the angle of a polyline is small, its miter length may be inappropriate.
     * In this case, you need to use the miter limit to limit the miter length.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    MITER_JOIN = 0,

    /**
     * Round corner.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Round corner.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    ROUND_JOIN = 1,

    /**
     * Bevel corner.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Mitered corner. If the angle of a polyline is small, its miter length may be inappropriate.
     * In this case, you need to use the miter limit to limit the miter length.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    BEVEL_JOIN = 2
  }

  /**
   * Enumerates the cap styles of a pen. The cap style defines the style of both ends of a line segment drawn by the pen.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the cap styles of a pen. The cap style defines the style of both ends of a line segment drawn by the pen.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum CapStyle {
    /**
     * There is no cap style. Both ends of the line segment are cut off square.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * There is no cap style. Both ends of the line segment are cut off square.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    FLAT_CAP = 0,

    /**
     * Square cap style. Both ends have a square, the height of which is half of the width of the line segment, with the same width.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Square cap style. Both ends have a square, the height of which is half of the width of the line segment, with the same width.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    SQUARE_CAP = 1,

    /**
     * Round cap style. Both ends have a semicircle centered, the diameter of which is the same as the width of the line segment.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Round cap style. Both ends have a semicircle centered, the diameter of which is the same as the width of the line segment.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    ROUND_CAP = 2
  }

  /**
   * Enumerates the blur types of a mask filter.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the blur types of a mask filter.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum BlurType {
    /**
     * Both the outer edges and the inner solid parts are blurred.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Both the outer edges and the inner solid parts are blurred.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    NORMAL = 0,

    /**
     * The inner solid part remains unchanged, while only the outer edges are blurred.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * The inner solid part remains unchanged, while only the outer edges are blurred.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    SOLID = 1,

    /**
     * Only the outer edges are blurred, with the inner solid part being fully transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Only the outer edges are blurred, with the inner solid part being fully transparent.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    OUTER = 2,

    /**
     * Only the inner solid part is blurred, while the outer edges remain sharp.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Only the inner solid part is blurred, while the outer edges remain sharp.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    INNER = 3
  }

  /**
   * Provides settings for strokes during drawing.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  /**
   * Defines a pen, which is used to describe the style and color to outline a shape.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class Pen {
    /**
     * Constructor for the pen.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * A constructor used to create a Pen object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor();

    /**
     * Constructor for the pen from an existing pen object pen.
     * @param { Pen } pen - Indicates the Pen object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Copies a Pen object to create a new one.
     * @param { Pen } pen - Pen object to copy.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor(pen: Pen);

    /**
     * Sets the maximum ratio allowed between the sharp corner length of a polyline and its line width.
     * When drawing a polyline with the pen, if JoinStyle is set to MITER_JOIN and this maximum ratio is exceeded,
     * the corner will be displayed as beveled instead of mitered.
     * @param { double } miter - Maximum ratio of the sharp corner length of the polyline to the line width.
     *     A negative number is processed as 4.0 during drawing. Non-negative numbers take effect normally.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the maximum ratio allowed between the sharp corner length of a polyline and its line width.
     * When drawing a polyline with the pen, if JoinStyle is set to MITER_JOIN and this maximum ratio is exceeded,
     * the corner will be displayed as beveled instead of mitered.
     * @param { double } miter - Maximum ratio of the sharp corner length of the polyline to the line width.
     *     A negative number is processed as 4.0 during drawing. Non-negative numbers take effect normally.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setMiterLimit(miter: double): void;

    /**
     * Obtains the maximum ratio allowed between the sharp corner length of a polyline and its line width.
     * @returns { double } Returns the miter limit.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the maximum ratio allowed between the sharp corner length of a polyline and its line width.
     * @returns { double } Returns the miter limit.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getMiterLimit(): double;

    /**
     * Sets the shader effect for this pen.
     * @param { ShaderEffect } shaderEffect -  ShaderEffect object.
     *     If null is passed in, the shader effect will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the shader effect for this pen.
     * @param { ShaderEffect | null } shaderEffect -  ShaderEffect object.
     *     If null is passed in, the shader effect will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setShaderEffect(shaderEffect: ShaderEffect | null): void;

    /**
     * Sets a color for this pen.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets a color for this pen.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setColor(color: common2D.Color): void;

    /**
     * Sets a color for this pen. This API provides better performance than setColor and is recommended.
     * @param { int } alpha - Alpha channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255
     *     Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a color for this pen. This API provides better performance than setColor and is recommended.
     * @param { int } alpha - Alpha channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255
     *     Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setColor(alpha: int, red: int, green: int, blue: int): void;

    /**
     * Sets a color for this pen.
     * @param { int } color - Color in hexadecimal ARGB format.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Sets a color for this pen.
     * @param { int } color - Color in hexadecimal ARGB format.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setColor(color: int): void;

    /**
     * Set the color by four floating point values, unpremultiplied. The color values are interpreted as being in
     * the colorSpace. If colorSpace is nullptr, then color is assumed to be in the sRGB color space.
     *
     * @param { common2D.Color4f } color4f - Indicates four floating point values that describes the color.
     * @param { colorSpaceManager.ColorSpaceManager | null } colorSpace - Indicates colorSpaceManager.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void;

    /**
     * Obtains the color of this pen.
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the color of this pen.
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColor(): common2D.Color;

    /**
     * Obtains the color of this pen.
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getColor(): common2D.Color | undefined;

    /**
     * Obtains the color of a pen. The color is used by the pen to outline a shape.
     * @returns { common2D.Color4f } Returns four floating point values that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColor4f(): common2D.Color4f;

    /**
     * Obtains the color of this pen.
     * @returns { int } Returns a 32-bit (ARGB) variable that describes the color of hexadecimal format.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Obtains the color of this pen.
     * @returns { int } Returns a 32-bit (ARGB) variable that describes the color of hexadecimal format.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getHexColor(): int;

    /**
     * Sets the stroke width for this pen. The value 0 is treated as an unusually thin width. During drawing,
     * the width of 0 is always drawn as 1 pixel wide, regardless of any scaling applied to the canvas.
     * Negative values are also regarded as the value 0 during the drawing process.
     *
     * @param { double } width - Stroke width. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets the stroke width for this pen. The value 0 is treated as an unusually thin width. During drawing,
     * the width of 0 is always drawn as 1 pixel wide, regardless of any scaling applied to the canvas.
     * Negative values are also regarded as the value 0 during the drawing process.
     *
     * @param { double } width - Stroke width. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setStrokeWidth(width: double): void;

    /**
     * Obtains the stroke width of this pen. The width describes the thickness of the outline of a shape.
     * @returns { double } Stroke width for the pen, in px.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the stroke width of this pen. The width describes the thickness of the outline of a shape.
     * @returns { double } Stroke width for the pen, in px.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getWidth(): double;

    /**
     * Enables anti-aliasing for this pen. Anti-aliasing makes the edges of the content smoother.
     * If this API is not called, anti-aliasing is disabled by default.
     *
     * @param { boolean } aa - Whether to enable anti-aliasing.
     *     The value true means to enable anti-aliasing, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Enables anti-aliasing for this pen. Anti-aliasing makes the edges of the content smoother.
     * If this API is not called, anti-aliasing is disabled by default.
     *
     * @param { boolean } aa - Whether to enable anti-aliasing.
     *     The value true means to enable anti-aliasing, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setAntiAlias(aa: boolean): void;

    /**
     * Checks whether anti-aliasing is enabled for this pen.
     * @returns { boolean } Returns true if the anti-aliasing is enabled; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether anti-aliasing is enabled for this pen.
     * @returns { boolean } Returns true if the anti-aliasing is enabled; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    isAntiAlias(): boolean;

    /**
     * Sets an alpha value for this pen.
     *
     * @param { int } alpha - Alpha value. The value is an integer in the range [0, 255].
     *     If a floating point number is passed in, the value is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets an alpha value for this pen.
     *
     * @param { int } alpha - Alpha value. The value is an integer in the range [0, 255].
     *     If a floating point number is passed in, the value is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setAlpha(alpha: int): void;

    /**
     * Obtains the alpha value of this pen.
     * @returns { int } Returns a 8-bit variable that describes the alpha.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the alpha value of this pen.
     * @returns { int } Returns a 8-bit variable that describes the alpha.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getAlpha(): int;

    /**
     * Sets a color filter for this pen.
     *
     * @param { ColorFilter } filter - Color filter. If null is passed in, the color filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets a color filter for this pen.
     *
     * @param { ColorFilter | null } filter - Color filter. If null is passed in, the color filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setColorFilter(filter: ColorFilter | null): void;
  
    /**
     * Obtains the color filter of this pen.
     * @returns { ColorFilter } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the color filter of this pen.
     * @returns { ColorFilter } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColorFilter(): ColorFilter;

    /**
     * Obtains the color filter of this pen.
     * @returns { ColorFilter | undefined } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getColorFilter(): ColorFilter | undefined;
    /**
     * Sets an image filter for this pen.
     * @param { ImageFilter | null } filter - Image filter.
     *     If null is passed in, the image filter effect of the pen will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets an image filter for this pen.
     * @param { ImageFilter | null } filter - Image filter.
     *     If null is passed in, the image filter effect of the pen will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setImageFilter(filter: ImageFilter | null): void;
    /**
     * Adds a mask filter for this pen.
     *
     * @param { MaskFilter } filter - Mask filter. If null is passed in, the mask filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds a mask filter for this pen.
     *
     * @param { MaskFilter | null } filter - Mask filter. If null is passed in, the mask filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setMaskFilter(filter: MaskFilter | null): void;

    /**
     * Sets the path effect for this pen.
     *
     * @param { PathEffect } effect - Path effect. If null is passed in, the path filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the path effect for this pen.
     *
     * @param { PathEffect | null } effect - Path effect. If null is passed in, the path filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setPathEffect(effect: PathEffect | null): void;

    /**
     * Sets a shadow layer for this pen. The shadow layer effect takes effect only when text is drawn.
     *
     * @param { ShadowLayer } shadowLayer - Shadow layer. If null is passed in, the shadow layer is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a shadow layer for this pen. The shadow layer effect takes effect only when text is drawn.
     *
     * @param { ShadowLayer | null } shadowLayer - Shadow layer. If null is passed in, the shadow layer is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setShadowLayer(shadowLayer: ShadowLayer | null): void;

    /**
     * Sets a blender that implements the specified blendmode enum.
     *
     * @param { BlendMode } mode - Blendmode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets a blend mode for this pen.
     *
     * @param { BlendMode } mode - Blend mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setBlendMode(mode: BlendMode): void;

    /**
     * Enables dithering for this pen. Dithering make the drawn color more realistic.
     *
     * @param { boolean } dither - Whether to enable dithering.
     *     The value true means to enable dithering, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Enables dithering for this pen. Dithering make the drawn color more realistic.
     *
     * @param { boolean } dither - Whether to enable dithering.
     *     The value true means to enable dithering, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setDither(dither: boolean): void;

    /**
     * Sets the join style for this pen. If this API is not called, the default join style is MITER_JOIN.
     *
     * @param { JoinStyle } style - Join style.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the join style for this pen. If this API is not called, the default join style is MITER_JOIN.
     *
     * @param { JoinStyle } style - Join style.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setJoinStyle(style: JoinStyle): void;

    /**
     * Obtains the join style of this pen.
     *
     * @returns { JoinStyle } The JoinStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the join style of this pen.
     *
     * @returns { JoinStyle } The JoinStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getJoinStyle(): JoinStyle;

    /**
     * Sets the cap style for this pen. If this API is not called, the default cap style is FLAT_CAP.
     *
     * @param { CapStyle } style - Cap style.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the cap style for this pen. If this API is not called, the default cap style is FLAT_CAP.
     *
     * @param { CapStyle } style - Cap style.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setCapStyle(style: CapStyle): void;

    /**
     * Obtains the cap style of this pen.
     *
     * @returns { CapStyle } The CapStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the cap style of this pen.
     *
     * @returns { CapStyle } The CapStyle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getCapStyle(): CapStyle;

    /**
     * Resets all pen contents to their initial values.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Resets this pen to the initial state.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    reset(): void;
    /**
     * Obtains the source path outline drawn using this pen and represents it using a destination path.
     *
     * @param { Path } src - Source path.
     * @param { Path } dst - Destination path.
     * @returns { boolean } true if the path should be filled,
     *     or false if it should be drawn with a hairline (width == 0)
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the source path outline drawn using this pen and represents it using a destination path.
     *
     * @param { Path } src - Source path.
     * @param { Path } dst - Destination path.
     * @returns { boolean } true if the path should be filled,
     *     or false if it should be drawn with a hairline (width == 0)
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getFillPath(src: Path, dst: Path): boolean;
  }

  /**
   * Provides settings for brush fill when drawing.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 11
   */
  /**
   * Defines a brush, which is used to describe the style and color to fill in a shape.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class Brush {
    /**
     * Constructor for the Brush.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * A constructor used to create a Brush object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor();

    /**
     * Constructor for the Brush from an existing brush object brush.
     * @param { Brush } brush - Indicates the Brush object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Copies a Brush object to create a new one.
     * @param { Brush } brush - Indicates the Brush object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor(brush: Brush);

    /**
     * Sets a color for this brush.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets a color for this brush.
     * @param { common2D.Color } color - Color in ARGB format.
     *     The value of each color channel is an integer ranging from 0 to 255.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setColor(color: common2D.Color): void;

    /**
     * Sets a color for this brush. This API provides better performance than setColor and is recommended.
     * @param { int } alpha - Alpha channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a color for this brush. This API provides better performance than setColor and is recommended.
     * @param { int } alpha - Alpha channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } red - Red channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } green - Green channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @param { int } blue - Blue channel value of the color in ARGB format.
     *     The value is an integer ranging from 0 to 255.
     *     Any passed-in floating point number is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setColor(alpha: int, red: int, green: int, blue: int): void;

    /**
     * Sets a color for this brush.
     * @param { int } color - Color in hexadecimal ARGB format.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Sets a color for this brush.
     * @param { int } color - Color in hexadecimal ARGB format.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setColor(color: int): void;

    /**
     * Sets the color by four floating point values, unpremultiplied. The color values are interpreted as being in
     * the colorSpace. If colorSpace is nullptr, then color is assumed to be in the sRGB color space.
     *
     * @param { common2D.Color4f } color4f - Indicates four floating point values that describes the color.
     * @param { colorSpaceManager.ColorSpaceManager | null } colorSpace - Indicates colorSpaceManager.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void;

    /**
     * Obtains the color of this brush.
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the color of this brush.
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColor(): common2D.Color;

    /**
     * Obtains the color of this brush.
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getColor(): common2D.Color | undefined;

    /**
     * Obtains the color of a brush. The color is used by the brush to outline a shape.
     * @returns { common2D.Color4f } Returns four floating point values that describes the color.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColor4f(): common2D.Color4f;

    /**
     * Obtains the color of this brush.
     * @returns { int } Returns a 32-bit (ARGB) variable that describes the color of hexadecimal format.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 18
     */
    /**
     * Obtains the color of this brush.
     * @returns { int } Returns a 32-bit (ARGB) variable that describes the color of hexadecimal format.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getHexColor(): int;

    /**
     * Enables anti-aliasing for this brush. Anti-aliasing makes the edges of the content smoother.
     * If this API is not called, anti-aliasing is disabled by default.
     * @param { boolean } aa - Whether to enable anti-aliasing.
     *     The value true means to enable anti-aliasing, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Enables anti-aliasing for this brush. Anti-aliasing makes the edges of the content smoother.
     * If this API is not called, anti-aliasing is disabled by default.
     * @param { boolean } aa - Whether to enable anti-aliasing.
     *     The value true means to enable anti-aliasing, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setAntiAlias(aa: boolean): void;

    /**
     * Checks whether anti-aliasing is enabled for this brush.
     * @returns { boolean } Returns true if anti-aliasing is enabled; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether anti-aliasing is enabled for this brush.
     * @returns { boolean } Returns true if anti-aliasing is enabled; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    isAntiAlias(): boolean;

    /**
     * Sets an alpha value for this brush.
     * @param { int } alpha - Alpha value. The value is an integer in the range [0, 255].
     *     If a floating point number is passed in, the value is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets an alpha value for this brush.
     * @param { int } alpha - Alpha value. The value is an integer in the range [0, 255].
     *     If a floating point number is passed in, the value is rounded down.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setAlpha(alpha: int): void;

    /**
     * Obtains the alpha value of this brush.
     * @returns { int } Returns a 8-bit variable that describes the alpha.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the alpha value of this brush.
     * @returns { int } Returns a 8-bit variable that describes the alpha.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getAlpha(): int;

    /**
     * Sets a color filter for this brush.
     * @param { ColorFilter } filter - Color filter. If null is passed in, the color filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets a color filter for this brush.
     * @param { ColorFilter | null } filter - Color filter. If null is passed in, the color filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setColorFilter(filter: ColorFilter | null): void;

    /**
     * Obtains the color filter of this brush.
     * @returns { ColorFilter } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the color filter of this brush.
     * @returns { ColorFilter } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getColorFilter(): ColorFilter;

    /**
     * Obtains the color filter of this brush.
     * @returns { ColorFilter | undefined } ColorFilter.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getColorFilter(): ColorFilter | undefined;

    /**
     * Sets an image filter for this brush.
     * @param { ImageFilter | null } filter - Image filter.
     *     If null is passed in, the image filter effect of the brush will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets an image filter for this brush.
     * @param { ImageFilter | null } filter - Image filter.
     *     If null is passed in, the image filter effect of the brush will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setImageFilter(filter: ImageFilter | null): void;
    /**
     * Adds a mask filter for this brush.
     * @param { MaskFilter } filter - Mask filter. If null is passed in, the mask filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Adds a mask filter for this brush.
     * @param { MaskFilter | null } filter - Mask filter. If null is passed in, the mask filter is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setMaskFilter(filter: MaskFilter | null): void;

    /**
     * Sets a shadow layer for this brush. The shadow layer effect takes effect only when text is drawn.
     *
     * @param { ShadowLayer } shadowLayer - Shadow layer. If null is passed in, the shadow layer is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a shadow layer for this brush. The shadow layer effect takes effect only when text is drawn.
     *
     * @param { ShadowLayer | null } shadowLayer - Shadow layer. If null is passed in, the shadow layer is cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setShadowLayer(shadowLayer: ShadowLayer | null): void;

    /**
     * Sets the shader effect for this brush.
     * @param { ShaderEffect } shaderEffect - ShaderEffect object.
     *     If null is passed in, the shader effect will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets the shader effect for this brush.
     * @param { ShaderEffect | null } shaderEffect - ShaderEffect object.
     *     If null is passed in, the shader effect will be cleared.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setShaderEffect(shaderEffect: ShaderEffect | null): void;

    /**
     * Sets a blender that implements the specified blendmode enum.
     * @param { BlendMode } mode - Blend mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 11
     */
    /**
     * Sets a blend mode for this brush. If this API is not called, the default blend mode is SRC_OVER.
     * @param { BlendMode } mode - Blendmode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setBlendMode(mode: BlendMode): void;

    /**
     * Resets all brush contents to their initial values.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Resets this brush to the initial state.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    reset(): void;
  }

  /**
   * Implements a matrix.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Implements a matrix.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class Matrix {
    /**
     * Creates a Matrix object.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Creates a Matrix object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor();

    /**
     * Creates a deep copy of the specified matrix object.
     * @param { Matrix } matrix - The matrix object to copy.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor(matrix: Matrix);

    /**
     * Query whether the current matrix is affine or not.
     * @returns { boolean } Returns true if the matrix is affine; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    isAffine(): boolean;

    /**
     * Query whether a rectangle will map to another rectangle after applying this matrix.
     * @returns { boolean } Returns true if the transformation keeps rectangles as rectangles; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    rectStaysRect(): boolean;

    /**
     * Sets this matrix as an identity matrix and rotates it by a given degree around the rotation point (px, py).
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     *     and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets this matrix as an identity matrix and rotates it by a given degree around the rotation point (px, py).
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     *     and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setRotation(degree: double, px: double, py: double): void;

    /**
     * Sets this matrix as an identity matrix and scales it with the coefficients (sx, sy) at the scale point (px, py).
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in,
     *     the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     *     the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets this matrix as an identity matrix and scales it with the coefficients (sx, sy) at the scale point (px, py).
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in,
     *     the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     *     the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setScale(sx: double, sy: double, px: double, py: double): void;

    /**
     * Sets this matrix as an identity matrix and translates it by a given distance (dx, dy).
     * @param { double } dx - Horizontal distance to translate.
     *     A positive number indicates a translation towards the positive direction of the X axis,
     *     and a negative number indicates a translation towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Vertical distance to translate.
     *     A positive number indicates a translation towards the positive direction of the Y axis,
     *     and a negative number indicates a translation towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets this matrix as an identity matrix and translates it by a given distance (dx, dy).
     * @param { double } dx - Horizontal distance to translate.
     *     A positive number indicates a translation towards the positive direction of the X axis,
     *     and a negative number indicates a translation towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Vertical distance to translate.
     *     A positive number indicates a translation towards the positive direction of the Y axis,
     *     and a negative number indicates a translation towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setTranslation(dx: double, dy: double): void;

    /**
     * Sets the skew transformation with a pivot point.
     * @param { double } kx - The skew factor along the x-axis.
     * @param { double } ky - The skew factor along the y-axis.
     * @param { double } px - The x-coordinate of the point around which to apply the skew.
     * @param { double } py - The y-coordinate of the point around which to apply the skew.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setSkew(kx: double, ky: double, px: double, py: double): void;

    /**
     * Sets the sine and cosine values for a rotation transformation around a point.
     * @param { double } sinValue - The sine of the angle of rotation.
     * @param { double } cosValue - The cosine of the angle of rotation.
     * @param { double } px - The x-coordinate of the point around which to rotate.
     * @param { double } py - The y-coordinate of the point around which to rotate.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setSinCos(sinValue: double, cosValue: double, px: double, py: double): void;

    /**
     * Sets parameters for this matrix.
     * @param { Array<double> } values - Each value in the array represents the following parameters:
     * values[0] - horizontal scale factor to store.
     * values[1] - horizontal skew factor to store.
     * values[2] - horizontal translation to store.
     * values[3] - vertical skew factor to store.
     * values[4] - vertical scale factor to store.
     * values[5] - vertical translation to store.
     * values[6] - input x-axis values perspective factor to store.
     * values[7] - input y-axis values perspective factor to store.
     * values[8] - perspective scale factor to store.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets parameters for this matrix.
     * @param { Array<double> } values - Each value in the array represents the following parameters:
     * values[0] - horizontal scale factor to store.
     * values[1] - horizontal skew factor to store.
     * values[2] - horizontal translation to store.
     * values[3] - vertical skew factor to store.
     * values[4] - vertical scale factor to store.
     * values[5] - vertical translation to store.
     * values[6] - input x-axis values perspective factor to store.
     * values[7] - input y-axis values perspective factor to store.
     * values[8] - perspective scale factor to store.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setMatrix(values: Array<double>): void;

    /**
     * Sets matrix to the copy of anther matrix object.
     * @param { Array<double> | Matrix } matrix - Indicates the Matrix object to copy.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setMatrix(matrix: Array<double> | Matrix): void;

    /**
     * Sets matrix to the product of matrix A and matrix B.
     * @param { Matrix } matrixA - Indicates the MatrixA object.
     * @param { Matrix } matrixB - Indicates the MatrixB object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setConcat(matrixA: Matrix, matrixB: Matrix): void;

    /**
     * Sets matrix to the product of 'this' and another.
     * @param { Matrix } matrix - Indicates the other Matrix object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    postConcat(matrix: Matrix): void;

    /**
     * Preconcats the existing matrix with the passed-in matrix.
     * @param { Matrix } matrix - Matrix object, which is on the right of a multiplication expression.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Preconcats the existing matrix with the passed-in matrix.
     * @param { Matrix } matrix - Matrix object, which is on the right of a multiplication expression.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    preConcat(matrix: Matrix): void;

    /**
     * Checks whether this matrix is equal to another matrix.
     * @param { Matrix } matrix - Matrix to compare.
     * @returns { Boolean } Returns true if the two matrices are equal; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether this matrix is equal to another matrix.
     * @param { Matrix } matrix - Matrix to compare.
     * @returns { Boolean } Returns true if the two matrices are equal; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    isEqual(matrix: Matrix): Boolean;

    /**
     * Checks whether this matrix is equal to another matrix.
     * @param { Matrix } matrix - Matrix to compare.
     * @returns { boolean } Returns true if the two matrices are equal; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    isEqual(matrix: Matrix): boolean;

    /**
     * Inverts this matrix and returns the result.
     * @param { Matrix } matrix - Matrix object used to store the inverted matrix.
     * @returns { Boolean } Check result. The value true means that the matrix is revertible
     *     and the matrix object is set to its inverse,
     *     and false means that the matrix is not revertible and the matrix object remains unchanged.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Inverts this matrix and returns the result.
     * @param { Matrix } matrix - Matrix object used to store the inverted matrix.
     * @returns { Boolean } Check result. The value true means that the matrix is revertible
     *     and the matrix object is set to its inverse,
     *     and false means that the matrix is not revertible and the matrix object remains unchanged.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    invert(matrix: Matrix): Boolean;

    /**
     * Inverts this matrix and returns the result.
     * @param { Matrix } matrix - Matrix object used to store the inverted matrix.
     * @returns { boolean } Check result. The value true means that the matrix is revertible
     *     and the matrix object is set to its inverse,
     *     and false means that the matrix is not revertible and the matrix object remains unchanged.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    invert(matrix: Matrix): boolean;

    /**
     * Checks whether this matrix is an identity matrix.
     * @returns { Boolean } Returns true if matrix is identity; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether this matrix is an identity matrix.
     * @returns { Boolean } Returns true if matrix is identity; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    isIdentity(): Boolean;

    /**
     * Obtains the value of a given index in this matrix. The index ranges from 0 to 8.
     * @param { int } index - Index. The value is an integer ranging from 0 to 8.
     * @returns { double } Returns value corresponding to index.Returns 0 if out of range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains the value of a given index in this matrix. The index ranges from 0 to 8.
     * @param { int } index - Index. The value is an integer ranging from 0 to 8.
     * @returns { double } Returns value corresponding to index.Returns 0 if out of range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    getValue(index: int): double;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been rotated by a
     * given degree around the rotation point (px, py).
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     *     and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been rotated by a
     * given degree around the rotation point (px, py).
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     *     and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    postRotate(degree: double, px: double, py: double): void;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been
     * scaled with the coefficient (sx, sy) at the scale point (px, py).
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in,
     *     the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     *     the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after it has been
     * scaled with the coefficient (sx, sy) at the scale point (px, py).
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in,
     *     the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     *     the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    postScale(sx: double, sy: double, px: double, py: double): void;
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after
     * it has been translated by a given distance (dx, dy).
     * @param { double } dx - Horizontal distance to translate.
     *     A positive number indicates a translation towards the positive direction of the X axis,
     *     and a negative number indicates a translation towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Vertical distance to translate.
     *     A positive number indicates a translation towards the positive direction of the Y axis,
     *     and a negative number indicates a translation towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Post multiplies this matrix by a matrix that is derived from an identity matrix after
     * it has been translated by a given distance (dx, dy).
     * @param { double } dx - Horizontal distance to translate.
     *     A positive number indicates a translation towards the positive direction of the X axis,
     *     and a negative number indicates a translation towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Vertical distance to translate.
     *     A positive number indicates a translation towards the positive direction of the Y axis,
     *     and a negative number indicates a translation towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    postTranslate(dx: double, dy: double): void;

    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been rotated by a
     * given degree around the rotation point (px, py).
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     *     and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been rotated by a
     * given degree around the rotation point (px, py).
     * @param { double } degree - Angle to rotate, in degrees. A positive number indicates a clockwise rotation,
     *     and a negative number indicates a counterclockwise rotation. The value is a floating point number.
     * @param { double } px - X coordinate of the rotation point. The value is a floating point number.
     * @param { double } py - Y coordinate of the rotation point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    preRotate(degree: double, px: double, py: double): void;

    /**
     * Sets matrix to matrix constructed from skewing by (kx, ky) about pivot point (px, py), multiplied by matrix.
     * This can be thought of as skewing relative to a pivot point after applying matrix.
     * @param { double } kx - Indicates the horizontal skew factor.
     * @param { double } ky - Indicates the vertical skew factor.
     * @param { double } px - Indicates the pivot on x-axis.
     * @param { double } py - Indicates the pivot on y-axis.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    postSkew(kx: double, ky: double, px: double, py: double): void;

    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been scaled with the
     * coefficient (sx, sy) at the scale point (px, py).
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in,
     *     the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     *     the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after it has been scaled with the
     * coefficient (sx, sy) at the scale point (px, py).
     * @param { double } sx - Scale coefficient along the X axis. If a negative number is passed in,
     *     the matrix is mirrored around y = px before being scaled. The value is a floating point number.
     * @param { double } sy - Scale coefficient along the Y axis. If a negative number is passed in,
     *     the matrix is mirrored around x = py before being scaled. The value is a floating point number.
     * @param { double } px - X coordinate of the scale point. The value is a floating point number.
     * @param { double } py - Y coordinate of the scale point. The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    preScale(sx: double, sy: double, px: double, py: double): void;
    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after
     * it has been translated by a given distance (dx, dy).
     * @param { double } dx - Horizontal distance to translate.
     *     A positive number indicates a translation towards the positive direction of the X axis,
     *     and a negative number indicates a translation towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Vertical distance to translate.
     *     A positive number indicates a translation towards the positive direction of the Y axis,
     *     and a negative number indicates a translation towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Premultiplies this matrix by a matrix that is derived from an identity matrix after
     * it has been translated by a given distance (dx, dy).
     * @param { double } dx - Horizontal distance to translate.
     *     A positive number indicates a translation towards the positive direction of the X axis,
     *     and a negative number indicates a translation towards the negative direction of the X axis.
     *     The value is a floating point number.
     * @param { double } dy - Vertical distance to translate.
     *     A positive number indicates a translation towards the positive direction of the Y axis,
     *     and a negative number indicates a translation towards the negative direction of the Y axis.
     *     The value is a floating point number.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    preTranslate(dx: double, dy: double): void;
    
    /**
     * Sets matrix to matrix multiplied by matrix constructed from skewing by (kx, ky) about pivot point (px, py).
     * This can be thought of as scaling relative to a pivot point before applying matrix.
     * @param { double } kx - Indicates the horizontal skew factor.
     * @param { double } ky - Indicates the vertical skew factor.
     * @param { double } px - Indicates the pivot on x-axis.
     * @param { double } py - Indicates the pivot on y-axis.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    preSkew(kx: double, ky: double, px: double, py: double): void;
    /**
     * Resets this matrix to an identity matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12 dynamic
     * @since 20 static
     */
    reset(): void;
    /**
     * Maps a source point array to a destination point array by means of matrix transformation.
     * @param { Array<common2D.Point> } src - Array of source points.
     * @returns { Array<common2D.Point> } Return mapped points array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Maps a source point array to a destination point array by means of matrix transformation.
     * @param { Array<common2D.Point> } src - Array of source points.
     * @returns { Array<common2D.Point> } Return mapped points array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    mapPoints(src: Array<common2D.Point>): Array<common2D.Point>;

    /**
     * Maps a source point array to a destination point array by means of matrix transformation.
     * @param { Array<common2D.Point> } src - Array of source points.
     * @returns { Array<common2D.Point> | undefined } Return mapped points array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    mapPoints(src: Array<common2D.Point>): Array<common2D.Point> | undefined;

    /**
     * Forms a circle by radius and maps it to a ellipse, returns the average radius of the ellipse.
     * The average radius is equal to the square root of the product of the major axis length and the minor axis length.
     * @param { double } radius - circle size to map.
     * @returns { double } Return average mapped radius.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    mapRadius(radius: double): double;

    /**
     * Obtains all element values of this matrix.
     * @returns { Array<number> } nine scalar values contained by Matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Obtains all element values of this matrix.
     * @returns { Array<number> } nine scalar values contained by Matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getAll(): Array<number>;

    /**
     * Obtains all element values of this matrix.
     * @returns { Array<double> | undefined } nine scalar values contained by Matrix.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    getAll(): Array<double> | undefined;

    /**
     * Sets the destination rectangle to the bounding rectangle of the shape obtained after transforming the
     * source rectangle with a matrix transformation.
     * @param { common2D.Rect } dst - Rectangle object, which is used to store the bounding rectangle.
     * @param { common2D.Rect } src - Source rectangle.
     * @returns { boolean } Returns true if the mapped src is equal to the dst; returns false is not equal.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * ets the destination rectangle to the bounding rectangle of the shape obtained after
     * transforming the source rectangle
     * with a matrix transformation. As shown in the figure below, the blue rectangle represents the source rectangle,
     * and the yellow rectangle is the shape obtained after a matrix transformation is applied to the source rectangle.
     * Since the edges of the yellow rectangle are not aligned with the coordinate axes,
     * it cannot be represented by a rectangle object.
     * To address this issue, a destination rectangle (black rectangle) is defined as the bounding rectangle.
     * @param { common2D.Rect } dst - Rectangle object, which is used to store the bounding rectangle.
     * @param { common2D.Rect } src - Source rectangle.
     * @returns { boolean } Returns true if the mapped src is equal to the dst; returns false is not equal.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    mapRect(dst: common2D.Rect, src: common2D.Rect): boolean;
    /**
     * Sets this matrix to a transformation matrix that maps a source rectangle to a destination rectangle.
     * @param { common2D.Rect } src - Source rectangle.
     * @param { common2D.Rect } dst - Destination rectangle.
     * @param { ScaleToFit } scaleToFit - Mapping mode from the source rectangle to the target rectangle.
     * @returns { boolean } Check result. The value true means that the matrix can represent the mapping,
     *     and false means the opposite.
     *     If either the width or the height of the source rectangle is less than or equal to 0,
     *     the API returns false and sets the matrix to an identity matrix.
     *     If either the width or height of the destination rectangle is less than or equal to 0,
     *     the API returns true and sets the matrix to a matrix with all values 0,
     *     except for a perspective scaling coefficient of 1.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets this matrix to a transformation matrix that maps a source rectangle to a destination rectangle.
     * @param { common2D.Rect } src - Source rectangle.
     * @param { common2D.Rect } dst - Destination rectangle.
     * @param { ScaleToFit } scaleToFit - Mapping mode from the source rectangle to the target rectangle.
     * @returns { boolean } Check result. The value true means that the matrix can represent the mapping,
     *     and false means the opposite.
     *     If either the width or the height of the source rectangle is less than or equal to 0,
     *     the API returns false and sets the matrix to an identity matrix.
     *     If either the width or height of the destination rectangle is less than or equal to 0,
     *     the API returns true and sets the matrix to a matrix with all values 0,
     *     except for a perspective scaling coefficient of 1.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setRectToRect(src: common2D.Rect, dst: common2D.Rect, scaleToFit: ScaleToFit): boolean;
    /**
     * Sets this matrix to a transformation matrix that maps the source point array to the destination point array.
     * Both the number of source points and that of destination points must be in the range [0, 4].
     * @param { Array<common2D.Point> } src - Array of source points.
     *     The array length must be the same as the value of count.
     * @param { Array<common2D.Point> } dst - Array of destination points.
     *     The array length must be the same as the value of count.
     * @param { int } count - Number of points in each array. The value is an integer.
     * @returns { boolean } Returns true if Matrix was constructed successfully
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets this matrix to a transformation matrix that maps the source point array to the destination point array.
     * Both the number of source points and that of destination points must be in the range [0, 4].
     * @param { Array<common2D.Point> } src - Array of source points.
     *     The array length must be the same as the value of count.
     * @param { Array<common2D.Point> } dst - Array of destination points.
     *     The array length must be the same as the value of count.
     * @param { int } count - Number of points in each array. The value is an integer.
     * @returns { boolean } Returns true if Matrix was constructed successfully
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setPolyToPoly(src: Array<common2D.Point>, dst: Array<common2D.Point>, count: int): boolean;
  }

  /**
   * Enumerates the modes of scaling a source rectangle into a destination rectangle.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the modes of scaling a source rectangle into a destination rectangle.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum ScaleToFit {
    /**
     * Scales the source rectangle to completely fill the destination rectangle, potentially changing the aspect ratio of the source rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Scales the source rectangle to completely fill the destination rectangle, potentially changing the aspect ratio of the source rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    FILL_SCALE_TO_FIT = 0,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the upper left corner of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the upper left corner of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    START_SCALE_TO_FIT = 1,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the center of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the center of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    CENTER_SCALE_TO_FIT = 2,

    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the lower right corner of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Scales the source rectangle, preserving its aspect ratio, to align it to the lower right corner of the destination rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    END_SCALE_TO_FIT = 3
  }

  /**
   * Describes a region object.
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Describes a region, which is used to describe the region where the shape can be drawn.
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class Region {
    /**
     * Creates an empty region.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor();

    /**
     * Creates a deep copy of the specified region object.
     * @param { Region } region - The region object to copy.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor(region: Region);

    /**
     * Creates a region with a rectangle.
     * @param { int } left - Indicates the left edge of the rectangle.
     * @param { int } top - Indicates the top edge of the rectangle.
     * @param { int } right - Indicates the right edge of the rectangle.
     * @param { int } bottom - Indicates the bottom edge of the rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    constructor(left: int, top: int, right: int, bottom: int);

    /**
     * Query whether this region is equal to the other region.
     * @param { Region } other - Indicates the region object for comparasion.
     * @returns { boolean } Returns compare result.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    isEqual(other: Region): boolean;

    /**
     * Query whether the region contains multiple rectangles.
     * @returns { boolean } Returns true if the region contains more than one rectangle;
     * <br>returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    isComplex(): boolean;

    /**
     * Query whether the region is empty .
     * @returns { boolean } Returns true if the region is empty; returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    isEmpty(): boolean;

    /**
     * Gets the bounds of the region.
     * @returns { common2D.Rect } Returns Rect object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getBounds(): common2D.Rect;

    /** Gets the boundary of the region, which represents by a path.
     * Gets the bounds of the region.
     * @returns { Path } Returns Path object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    getBoundaryPath(): Path;

    /**
     * Checks whether a point is contained in this region.
     * @param { int } x - X coordinate of the point. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } y - Y coordinate of the point. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if (x, y) is inside region; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether a point is contained in this region.
     * @param { int } x - X coordinate of the point. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } y - Y coordinate of the point. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if (x, y) is inside region; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    isPointContained(x: int, y:int): boolean;

    /**
     * Checks whether another region is contained in this region.
     * @param { Region } other - Region object.
     * @returns { boolean } Returns true if other region is completely inside the region object;
     *     <br>returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether another region is contained in this region.
     * @param { Region } other - Region object.
     * @returns { boolean } Returns true if other region is completely inside the region object;
     *     <br>returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    isRegionContained(other: Region): boolean;

    /**
     * Performs an operation on this region and another region, and stores the resulting region in this Region object.
     * @param { Region } region - Region object.
     * @param { RegionOp } regionOp - Operation mode of the region.
     * @returns { boolean } Returns true if replaced region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Performs an operation on this region and another region, and stores the resulting region in this Region object.
     * @param { Region } region - Region object.
     * @param { RegionOp } regionOp - Operation mode of the region.
     * @returns { boolean } Returns true if replaced region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    op(region: Region, regionOp: RegionOp): boolean;

    /**
     * Offsets the region by adding dx along the x-axis and dy along the y-axis.
     * @param { int } dx - Indicates the x coordinate of the point. The parameter must be an integer.
     * @param { int } dy - Indicates the y coordinate of the point. The parameter must be an integer.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    offset(dx: int, dy: int): void;

    /**
     * Checks whether a rectangle do not intersect with this region. Actually,
     * this API determines whether the rectangle does not intersect with the bounding rectangle of the region,
     * and therefore the result may not be accurate.
     * @param { int } left - Left position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } top - Top position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } right - Right position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } bottom - Bottom position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if rect and region is not intersect; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Checks whether a rectangle do not intersect with this region. Actually,
     * this API determines whether the rectangle does not intersect with the bounding rectangle of the region,
     * and therefore the result may not be accurate.
     * @param { int } left - Left position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } top - Top position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } right - Right position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } bottom - Bottom position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if rect and region is not intersect; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    quickReject(left: int, top: int, right: int, bottom: int): boolean;

    /**
     * Determines whether region is intersect with another.
     * @param { Region } region - Indicates the other region for comparasion.
     * @returns { boolean } Returns true if the region dose not intersect the other, or the region is empty;
     * <br>returns false otherwise.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    quickRejectRegion(region: Region): boolean;

    /**
     * Sets a region that matches the outline of a path within the cropping area.
     * @param { Path } path - Path object.
     * @param { Region } clip - Region object.
     * @returns { boolean } Returns true if constructed region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a region that matches the outline of a path within the cropping area.
     * @param { Path } path - Path object.
     * @param { Region } clip - Region object.
     * @returns { boolean } Returns true if constructed region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setPath(path: Path, clip: Region): boolean;

    /**
     * Sets a rectangle.
     * @param { int } left - Left position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } top - Top position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } right - Right position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } bottom - Bottom position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if constructed region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Sets a rectangle.
     * @param { int } left - Left position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } top - Top position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } right - Right position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @param { int } bottom - Bottom position of the rectangle. The value must be an integer.
     *     If a decimal is passed in, the decimal part is rounded off.
     * @returns { boolean } Returns true if constructed region is not empty; returns false otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    setRect(left: int, top: int, right: int, bottom: int): boolean;

    /**
     * Sets the region to the specified region.
     * @param { Region } region - Region object.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setRegion(region: Region): void;

    /**
     * Sets the region to empty.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    setEmpty(): void;
  }

  /**
   * Enumerates the operations for combining two regions.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the operations for combining two regions.
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum RegionOp {
    /**
     * Difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    DIFFERENCE = 0,

    /**
     * Intersect operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Intersect operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    INTERSECT = 1,

    /**
     * Union operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Union operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    UNION = 2,

    /**
     * Xor operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Xor operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    XOR = 3,

    /**
     * Reverse difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Reverse difference operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    REVERSE_DIFFERENCE = 4,

    /**
     * Replace operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Replace operation.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    REPLACE = 5
  }

  /**
   * Enumerates the corner positions of a rounded rectangle.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the corner positions of a rounded rectangle.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum CornerPos {
    /**
     * Top left corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Top left corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    TOP_LEFT_POS = 0,

    /**
     * Top right corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Top right corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    TOP_RIGHT_POS = 1,

    /**
     * Bottom right corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Bottom right corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    BOTTOM_RIGHT_POS = 2,

    /**
     * Bottom left corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * Bottom left corner of the rounded rectangle.
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    BOTTOM_LEFT_POS = 3
  }

  /**
   * Enumerates the constraints on the source rectangle.
   * It is used to specify whether to limit the sampling range within the source
   * rectangle when drawing an image on a canvas.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  /**
   * Enumerates the constraints on the source rectangle.
   * It is used to specify whether to limit the sampling range within the source
   * rectangle when drawing an image on a canvas.
   *
   * @enum { int }
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  enum SrcRectConstraint {

    /**
     * The sampling range is strictly confined to the source rectangle, resulting in a slow sampling speed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * The sampling range is strictly confined to the source rectangle, resulting in a slow sampling speed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    STRICT = 0,

    /**
     * The sampling range is not limited to the source rectangle and can extend beyond it,
     * allowing for a high sampling speed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    /**
     * The sampling range is not limited to the source rectangle and can extend beyond it,
     * allowing for a high sampling speed.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic&static
     */
    FAST = 1
  }

  /**
   * A utility class that provides only static methods to convert data structs defined in other modules and common2D.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @since 15
   */
  /**
   * A utility class that provides only static methods to convert data structs defined in other modules and common2D.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic&static
   */
  class Tool {
    /**
     * Converts a color value of the ResourceColor type to a common2D.Color object.
     * @param { ResourceColor } resourceColor - Color value of the ResourceColor type.
     *     (All four types of inputs are supported. The following provides 13 example inputs.)
     *     The fourth type of Resource supports only the construction method $r('belonging.type.name').
     *     Ensure that the resource has been defined in the main/resources/base/element directory.
     *     (The types color, string, and integer are available for the belonging app,
     *     whereas only the type color is available for the belonging sys.)
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.Graphics.Drawing
     * @since 15
     */
    /**
     * Converts a color value of the ResourceColor type to a common2D.Color object.
     * @param { ResourceColor } resourceColor - Color value of the ResourceColor type.
     *     (All four types of inputs are supported. The following provides 13 example inputs.)
     *     The fourth type of Resource supports only the construction method $r('belonging.type.name').
     *     Ensure that the resource has been defined in the main/resources/base/element directory.
     *     (The types color, string, and integer are available for the belonging app,
     *     whereas only the type color is available for the belonging sys.)
     * @returns { common2D.Color } Returns a 32-bit (ARGB) variable that describes the color.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color;

    /**
     * Converts a color value of the ResourceColor type to a common2D.Color object.
     * @param { ResourceColor } resourceColor - Color value of the ResourceColor type.
     *     (All four types of inputs are supported. The following provides 13 example inputs.)
     *     The fourth type of Resource supports only the construction method $r('belonging.type.name').
     *     Ensure that the resource has been defined in the main/resources/base/element directory.
     *     (The types color, string, and integer are available for the belonging app,
     *     whereas only the type color is available for the belonging sys.)
     * @returns { common2D.Color | undefined } Returns a 32-bit (ARGB) variable that describes the color.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @since 20 static
     */
    static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color | undefined;
  }

  /**
   * This class offers a comprehensive set of operations to handle for common2D Rect object.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   */
  class RectUtils {
    /**
     * Makes an uninitialized 2D rectangular object with zero dimensions and origin at (0, 0).
     *
     * @returns { common2D.Rect } - Returns an empty Rect object with all coordinates (left, top, right, bottom) set to 0.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeEmpty() : common2D.Rect;

    /**
     * Makes a 2D rectangular object from boundary coordinates.
     * @param { double } left - Indicates the X-coordinate of the left edge.
     * @param { double } top - Indicates the Y-coordinate of the top edge.
     * @param { double } right - Indicates the X-coordinate of the right edge.
     * @param { double } bottom - Indicates the Y-coordinate of the bottom edge.
     * @returns { common2D.Rect } - Returns an Rect object with the specific coordinates (left, top, right, bottom).
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeLtrb(left: double, top: double, right: double, bottom: double) : common2D.Rect;

    /**
     * Makes a deep copy of a 2D rectangular object.
     * @param { common2D.Rect } src - Indicates the source rectangle to copy.
     * @returns { common2D.Rect } - Returns an Rect object has the same boundary coordinates with the source.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static makeCopy(src: common2D.Rect) : common2D.Rect;

    /**
     * Gets the width of a 2D rectangular object.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object to query.
     * @returns { double } - Returns the width.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static getWidth(rect: common2D.Rect): double;

    /**
     * Gets the height of a 2D rectangular object.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object to query.
     * @returns { double } - Returns the height.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static getHeight(rect: common2D.Rect): double;

    /**
     * Calculates the x-coordinate of the center point of the 2D rectangular object.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object to query.
     * @returns { double } - Returns the center X coordinate.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static centerX(rect: common2D.Rect): double;

    /**
     * Calculates the y-coordinate of the center point of the 2D rectangular object.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object to query.
     * @returns { double } - Returns the center Y coordinate.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static centerY(rect: common2D.Rect): double;

    /**
     * Checks if one 2D rectangular object fully contains another.
     *
     * @param { common2D.Rect } rect - The container Rect object.
     * @param { common2D.Rect } other - The Rect object to check for containment.
     * @returns { boolean } - Returns true if 'rect' fully contains 'other'; returns false otherwise.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static contains(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * Checks if one 2D rectangular object fully contains the specified boundary coordinates.
     *
     * @param { common2D.Rect } rect - The container Rect object.
     * @param { double } left - Indicates the left boundary of the target region.
     * @param { double } top - Indicates the top boundary of the target region.
     * @param { double } right - Indicates the right boundary of the target region.
     * @param { double } bottom - Indicates the bottom boundary of the target region.
     * @returns { boolean } - Returns true if 'rect' fully contains the specified boundary coordinates; returns false otherwise.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static contains(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): boolean;

    /**
     * Checks if one 2D rectangular object contains a specific point.
     *
     * @param { common2D.Rect } rect - The container Rect object.
     * @param { double } x - Indicates the X-coordinate of the point to check.
     * @param { double } y - Indicates the Y-coordinate of the point to check.
     * @returns { boolean } - Returns true if 'rect' contains the specified point; returns false otherwise.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static contains(rect: common2D.Rect, x: double, y: double): boolean;

    /**
     * Modifies a 2D rectangular's boundaries by inward offsets.
     *
     * @param { common2D.Rect } rect - The Rect object to adjust.
     * @param { double } left - Indicates the amount to add from the left boundary.
     * @param { double } top - Indicates the amount to add from the top boundary.
     * @param { double } right - Indicates the amount to substract from the right boundary.
     * @param { double } bottom - Indicates the amount to substract from the bottom boundary.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static inset(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): void;

    /**
     * Relpace a 2D rectangular object by the intersection of itself and another.
     * If the intersection is empty, nothing is done.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { common2D.Rect } other - Indicates the other Rect object.
     * @returns { boolean } - Returns true if have area in common and 'rect' will be replaced by the intersection;
     * returns false if the intersection is empty and 'rect' will not be modified.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static intersect(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * Checks if two 2D rectangular objects intersect.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { common2D.Rect } other - Indicates the other Rect object.
     * @returns { boolean } - Returns true if have area in common, otherwise return false.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static isIntersect(rect: common2D.Rect, other: common2D.Rect): boolean;

    /**
     * Sets a 2D rectangular object to the union of itself and another.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { common2D.Rect } other - Indicates the other Rect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static union(rect: common2D.Rect, other: common2D.Rect): void;

    /**
     * Checks if the 2D rectangular object is empty.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @returns { boolean } - Returns true if the rectangle is empty (left >= right or top >= bottom); returns false otherwise.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static isEmpty(rect: common2D.Rect): boolean;

    /**
     * Offsets the 2D rectangular object by adding dx to its left and right coordinates,
     * and adding dy to its top and bottom coordinates.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { double } dx - Indicates the amount to add to the rectangle's left and right coordinates.
     * @param { double } dy - Indicates the amount to add to the rectangle's top and bottom coordinates.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static offset(rect: common2D.Rect, dx: double, dy: double): void;

    /**
     * Offsets the rectangle to a specific position and kepps the width and height unchanged.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { double } newLeft - Indicates the new left coordinates.
     * @param { double } newTop - Indicates the new top coordinates.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static offsetTo(rect: common2D.Rect, newLeft: double, newTop: double): void;

    /**
     * Sets the boundary coordinates of a 2D rectangular object with that of another.
     * @param { common2D.Rect } rect - Indicates the Rect object to be modified.
     * @param { common2D.Rect } other - Indicates the source rectangle to copy.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static setRect(rect: common2D.Rect, other: common2D.Rect): void;

    /**
     * Sets the boundary coordinates of a 2D rectangular object with that of specific value.
     * @param { common2D.Rect } rect - Indicates the Rect object to be modified.
     * @param { double } left - Indicates the X-coordinate of the left edge.
     * @param { double } top - Indicates the Y-coordinate of the top edge.
     * @param { double } right - Indicates the X-coordinate of the right edge.
     * @param { double } bottom - Indicates the Y-coordinate of the bottom edge.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static setLtrb(rect: common2D.Rect, left: double, top: double, right: double, bottom: double): void;

    /**
     * Sets the boundary coordinates of a 2D rectangular object to zero.
     * @param { common2D.Rect } rect - Indicates the Rect object to be modified.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static setEmpty(rect: common2D.Rect): void;

    /**
     * Normalizes the 2D rectangular object to ensuer validity.
     * Swaps the left and right if the left is greater than right;
     * and swaps top and bottom if the top is greater than bottom.
     * If the edges are already valid, then nothing is done.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static sort(rect: common2D.Rect): void;

    /**
     * Checks if the 2D rectangular object has the same coordinates value with another.
     *
     * @param { common2D.Rect } rect - Indicates the Rect object.
     * @param { common2D.Rect } other - Indicates the other Rect object for comparison.
     * @returns { boolean } Returns true if left, top, right and bottom of rect and other are equal; returns false otherwise.
     * @static
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     */
    static isEqual(rect: common2D.Rect, other: common2D.Rect): boolean;
  }
}

export default drawing;