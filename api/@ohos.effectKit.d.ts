/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit ArkGraphics2D
 */

/*** if arkts dynamic */
import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
/*** endif */
/*** if arkts static */
import { AsyncCallback } from './@ohos.base';
import image from './@ohos.multimedia.image';
/*** endif */

/**
 * @namespace effectKit
 * @since 9
 */
/**
 * @namespace effectKit
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * @namespace effectKit
 * @crossplatform
 * @form
 * @atomicservice
 * @since 14 dynamic
 * @since 20 static
 */

declare namespace effectKit {

  /**
   * The Filter of FilterChain.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The Filter of FilterChain.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class used to add a specified effect to an image. Before calling any method of Filter, use createEffect to create a Filter instance.
   * @typedef Filter
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 20 static
   */
  interface Filter {

    /**
    * A blur effect is added to the image.
    * @param { double } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A blur effect is added to the image.
    * @param { double } radius - The degree of blur, the value is measured in pixels.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the blur effect to the filter linked list, and returns the head node of the linked list.
    * @param { double } radius - Blur radius, in pixels. The blur effect is proportional to the configured value.
    *  A larger value indicates a more obvious effect.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14 dynamic
    * @since 20 static
    */
    blur(radius: double): Filter;

    /**
    * Adds the blur effect to the filter linked list, and returns the head node of the linked list.
    * @param { double } radius - Blur radius, in pixels. The blur effect is proportional to the configured value.
    *  A larger value indicates a more obvious effect.
    * @param { TileMode } tileMode - Tile mode of the shader effect. The blur effect of image edges is affected. Currently,
    *  only CPU rendering is supported. Therefore, the tile mode supports only DECAL.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 14 dynamic
    * @since 20 static
    */
    blur(radius: double, tileMode: TileMode): Filter;

    /**
    * A Brightness effect is added to the image.
    * @param { double } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A Brightness effect is added to the image.
    * @param { double } bright - The degree of light and darkness,the value range is 0 to 1.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the brightness effect to the filter linked list, and returns the head node of the linked list.
    * @param { double } bright - Brightness value, ranging from 0 to 1. When the value is 0, the image brightness remains unchanged.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14 dynamic
    * @since 20 static
    */
    brightness(bright: double): Filter;

    /**
    * A Grayscale effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9
    */
    /**
    * A Grayscale effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Adds the grayscale effect to the filter linked list, and returns the head node of the linked list.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14 dynamic
    * @since 20 static
    */
    grayscale(): Filter;

    /**
    * A invert effect is added to the image.
    * @returns { Filter } Filters for the current effect have been added.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 12
    */
    /**
    * Adds the inversion effect to the filter linked list, and returns the head node of the linked list.
    * @returns { Filter } Final image effect.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @since 14 dynamic
    * @since 20 static
    */
    invert(): Filter;

    /**
     * A custom effect is added to the image.
     *
     * @param { Array<double> } colorMatrix - A matrix of 5x4 size for create effect filter.
     * @returns { Filter } Filters for the current effect have been added.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 12
     */
    /**
     * Adds a custom effect to the filter linked list, and returns the head node of the linked list.
     *
     * @param { Array<double> } colorMatrix - Custom color matrix.
     * A 5 x 4 matrix can be created. The value range of the matrix element is [0, 1],
     * where 0 indicates that the color channel is not involved in the calculation,
     * and 1 indicates that the color channel is involved in the calculation and retains the original weight.
     * @returns { Filter } Final image effect.
     * @throws { BusinessError } 401 - Input parameter error.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 20 static
     */
    setColorMatrix(colorMatrix: Array<double>): Filter;

    /**
    * Obtains image.PixelMap of the source image to which the filter linked list is added.
    * @returns { image.PixelMap } image.PixelMap.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 9 dynamiconly
    * @deprecated since 11
    * @useinstead effectKit.Filter#getEffectPixelMap
    */
    getPixelMap(): image.PixelMap;
  
    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @since 11
    */
    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @form
    * @atomicservice
    * @since 12
    */
    /**
    * Obtains image.PixelMap of the source image to which the filter linked list is added. This API uses a promise to return the result.
    * @returns { Promise<image.PixelMap> } - Promise used to return image.PixelMap of the source image.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 14 dynamic
    * @since 20 static
    */
    getEffectPixelMap(): Promise<image.PixelMap>;

    /**
    * Gets the PixelMap where all filter effects have been added to the image.
    * @param { boolean } useCpuRender -  Whether to use cpu render.
    * @returns { Promise<image.PixelMap> } - returns the PixelMap generated.
    * @syscap SystemCapability.Multimedia.Image.Core
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20 dynamic
    */
    getEffectPixelMap(useCpuRender : boolean): Promise<image.PixelMap>;
  }

  /**
   * The color picker of an image.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The color picker of an image.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class used to obtain the color from an image. Before calling any method of ColorPicker, use createColorPicker to create a ColorPicker instance.
   * @typedef ColorPicker
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 20 static
   */
  interface ColorPicker {

    /**
     * get main color of an image
     * @returns { Promise<Color> } returns the MainColor generated.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * get main color of an image
     * @returns { Promise<Color> } returns the MainColor generated.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the main color from the image and writes the result to a Color instance. This API uses a promise to return the result.
     * @returns { Promise<Color> } Promise used to return the color value of the main color. If the operation fails, an error message is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    getMainColor(): Promise<Color>;

    /**
     * get main color of an image
     * @returns { Color } Main color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * get main color of an image
     * @returns { Color } Main color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the main color from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Color value of the main color. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    getMainColorSync(): Color;

    /**
     * Get largest proportion color of an image
     * @returns { Color } Largest proportion color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get largest proportion color of an image
     * @returns { Color } Largest proportion color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the color with the largest proportion from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Color value of the color with the largest proportion. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    getLargestProportionColor(): Color;

    /**
     * Get top proportion color of an image
     * @param { int } colorCount - The number of colors to require, the value is 1 to 10.
     * @returns { Array<Color | null> } An array of feature colors sorted by proportion, with a size equal to
     *                                  the minimum of colorCount and the actual number of extracted feature colors.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains a given number of colors with the top proportions in the image. This API returns the result synchronously.
     * @param { int } colorCount - Number of colors to obtain. The value range is [1, 10]. If a non-integer is passed in, the value will be rounded down.
     * @returns { Array<Color | null> } Array of colors, sorted by proportion.
     * - If the number of colors obtained is less than the value of colorCount, the array size is the actual number obtained.
     * - If the colors fail to be obtained or the number of colors obtained is less than 1, [null] is returned.
     * - If the value of colorCount is greater than 10, an array holding the first 10 colors with the top proportions is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    getTopProportionColors(colorCount: int): Array<Color | null>;

    /**
     * Get top proportion colors and percentages of an image
     * @param { int } colorCount - The number of colors to require, the value is 1 to 10.
     * @returns { Map<Color | null, double | null> } Map of colors and percentages, sorted by proportion.
     *    - If the number of colors obtained is less than the value of colorCount, the map size is 
     *      the actual number obtained.
     *    - If the colors fail to be obtained or the number of colors obtained is less than 1, Map() is returned.
     *    - If the value of colorCount is greater than 10, a map holding the first 10 colors with
     *      the top proportions is returned.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic&static
     */
    getTopProportionColorsAndPercentage(colorCount: int): Map<Color | null, double | null>;

    /**
     * Get shade degree of an image
     * @returns { PictureShadeDegree } shade degree of an image
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic&static
     */
    getShadeDegree(): PictureShadeDegree;

    /**
     * Get complexity degree of an image
     * @returns { PictureComplexityDegree } complexity degree of an image
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @form
     * @since 22 dynamic&static
     */
    getComplexityDegree(): PictureComplexityDegree;

    /**
     * Get highest saturation color of an image
     * @returns { Color } Highest saturation color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get highest saturation color of an image
     * @returns { Color } Highest saturation color picked in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the color with the highest saturation from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Color value of the color with the highest saturation. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    getHighestSaturationColor(): Color;

    /**
     * Get average color of an image
     * @returns { Color } Average color calculated in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Get average color of an image
     * @returns { Color } Average color calculated in the image.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains the average color from the image and writes the result to a Color instance. This API returns the result synchronously.
     * @returns { Color } Average color value. If the operation fails, null is returned.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    getAverageColor(): Color;

    /**
     * Determine whether the color is black or white or gray
     * @param { int } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 10
     */
    /**
     * Determine whether the color is black or white or gray
     * @param { int } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Determine whether the color is black or white or gray
     * @param { int } color - The 32 bit ARGB color to discriminate.
     * @returns { boolean } Result of judging black, white and gray.
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    isBlackOrWhiteOrGrayColor(color: int): boolean;
  }

  /**
   * The color param.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * The color param.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * A class that stores the color picked.
   * @typedef Color
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 20 static
   */
  interface Color {

    /**
     * Red
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Red
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the red component. The value range is [0x0, 0xFF].
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    red: int;

    /**
     * Green
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Green
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the green component. The value range is [0x0, 0xFF].
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    green: int;

    /**
     * Blue
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Blue
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the blue component. The value range is [0x0, 0xFF].
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    blue: int;

    /**
     * Alpha
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 9
     */
    /**
     * Alpha
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Value of the alpha component. The value range is [0x0, 0xFF].
     * @type { int }
     * @syscap SystemCapability.Multimedia.Image.Core
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14 dynamic
     * @since 20 static
     */
    alpha: int;
  }

  /**
   * Create a FilterChain to add multiple effects to an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Filter } Returns the head node of FilterChain.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a FilterChain to add multiple effects to an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Filter } Returns the head node of FilterChain.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a Filter instance based on a pixel map.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained
   * by decoding an image or directly created. For details, see Image Overview.
   * @returns { Filter } Head node of the filter linked list without any effect. If the operation fails, null is returned.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 20 static
   */
  function createEffect(source: image.PixelMap): Filter;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance based on a pixel map. This API uses a promise to return the result.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be
   * obtained by decoding an image or directly created. For details, see Image Overview.
   * @returns { Promise<ColorPicker> } - Promise used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 20 static
   */
  function createColorPicker(source: image.PixelMap): Promise<ColorPicker>;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 10
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @returns { Promise<ColorPicker> } - returns the ColorPicker generated.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance for the selected region based on a pixel map. This API uses a promise to return the result.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained by decoding
   *  an image or directly created. For details, see Image Overview.
   * @param { Array<double> } region - Region of the image from which the color is picked.
   *  The array consists of four elements, representing the left, top, right, and bottom positions of the image, respectively.
   *  The value of each element must be in the range [0, 1]. The leftmost and topmost positions of the image correspond to 0,
   *  and the rightmost and bottom positions correspond to 1. In the array, the third element must be greater than the first element,
   *  and the fourth element must be greater than the second element.
   * @returns { Promise<ColorPicker> } - Promise used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 20 static
   */
  function createColorPicker(source: image.PixelMap, region: Array<double>): Promise<ColorPicker>;

  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 9
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance based on a pixel map. This API uses an asynchronous callback to return the result.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained by
   *  decoding an image or directly created. For details, see Image Overview.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 20 static
   */
  function createColorPicker(source: image.PixelMap, callback: AsyncCallback<ColorPicker>): void;
  
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 10
   */
  /**
   * Create a color picker to get color of an image.
   * @param { image.PixelMap } source - the source pixelmap.
   * @param { Array<double> } region - contains 4 elements, represents the region's left, top, right, bottom coordinates,
   * default is [0, 0, 1, 1], represents the region of color picker is the whole pixelMap.
   * @param { AsyncCallback<ColorPicker> } callback - the callback of createColorPicker.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Creates a ColorPicker instance for the selected region based on a pixel map. This API uses an asynchronous callback to return the result.
   * @param { image.PixelMap } source - PixelMap instance created by the image module. An instance can be obtained by decoding an
   *  image or directly created. For details, see Image Overview.PixelMap instance created by the image module. An instance can be
   *  obtained by decoding an image or directly created. For details, see Image Overview.
   * @param { Array<double> } region - Region of the image from which the color is picked.
   *  The array consists of four elements, representing the left, top, right, and bottom positions of the image, respectively.
   *  The value of each element must be in the range [0, 1]. The leftmost and topmost positions of the image correspond to 0,
   *  and the rightmost and bottom positions correspond to 1. In the array, the third element must be greater than the first element,
   *  and the fourth element must be greater than the second element.
   * @param { AsyncCallback<ColorPicker> } callback - Callback used to return the ColorPicker instance created.
   * @throws { BusinessError } 401 - Input parameter error.
   * @syscap SystemCapability.Multimedia.Image.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 14 dynamic
   * @since 20 static
   */
  function createColorPicker(source: image.PixelMap, region: Array<double>, callback: AsyncCallback<ColorPicker>): void;

  /**
   * Enumerates the tile modes of the shader effect.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @since 14 dynamic
   * @since 20 static
   */
  enum TileMode {
    /**
     * Replicates the edge color if the shader effect draws outside of its original boundary.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 20 static
     */
    CLAMP = 0,

    /**
     * Repeats the shader effect in both horizontal and vertical directions.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 20 static
     */
    REPEAT = 1,

    /**
     * Repeats the shader effect in both horizontal and vertical directions, alternating mirror images.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 20 static
     */
    MIRROR = 2,

    /**
     * Renders the shader effect only within the original boundary.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @since 14 dynamic
     * @since 20 static
     */
    DECAL = 3,
  }

  /**
   * Enumerates the shade degree of an image.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 22 dynamic&static
   */
  enum PictureShadeDegree {
    /**
     * The shade degree of the image is unknown.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    UNKNOWN_SHADE_DEGREE_PICTURE = 0,

    /**
     * The shade degree of the image is extremely light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    EXTREMELY_LIGHT_PICTURE = 1,

    /**
     * The shade degree of the image is very light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    VERY_LIGHT_PICTURE = 2,

    /**
     * The shade degree of the image is light.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    LIGHT_PICTURE = 3,

    /**
     * The shade degree of the image is moderate.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    MODERATE_SHADE_PICTURE = 4,

    /**
     * The shade degree of the image is dark.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    DARK_PICTURE = 5,

    /**
     * The shade degree of the image is extremely dark.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    EXTREMELY_DARK_PICTURE = 6,
  }

  /**
   * Enumerates the complexity degree of an image.
   *
   * @enum { int }
   * @syscap SystemCapability.Multimedia.Image.Core
   * @systemapi
   * @since 22 dynamic&static
   */
  enum PictureComplexityDegree {
    /**
     * The complexity degree of the image is unknown.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    UNKNOWN_COMPLEXITY_DEGREE_PICTURE = 0,

    /**
     * The complexity degree of the image is pure.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    PURE_PICTURE = 1,

    /**
     * The complexity degree of the image is moderate.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    MODERATE_COMPLEXITY_PICTURE = 2,

    /**
     * The complexity degree of the image is very flowery.
     *
     * @syscap SystemCapability.Multimedia.Image.Core
     * @systemapi
     * @since 22 dynamic&static
     */
    VERY_FLOWERY_PICTURE = 3,
  }
}

export default effectKit;
