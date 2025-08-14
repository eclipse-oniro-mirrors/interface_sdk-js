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
import { Resource } from "../../global/resource";
import image from '../../@ohos.multimedia.image'
import { CommonMethod, PixelMap } from './common'
import { AnimationStatus,FillMode } from './enums'
/*** endif */

/**
 * Defines the ImageAnimator Interface.
 *
 * @interface ImageAnimatorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the ImageAnimator Interface.
 *
 * @interface ImageAnimatorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the ImageAnimator Interface.
 *
 * @interface ImageAnimatorInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 * @noninterop
 */
interface ImageAnimatorInterface {
  /**
   * ImageAnimator is returned.
   *
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * ImageAnimator is returned.
   *
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * ImageAnimator is returned.
   *
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (): ImageAnimatorAttribute;
}

/**
 * Defines the ImageFrameInfo Interface.
 *
 * @interface ImageFrameInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the ImageFrameInfo Interface.
 *
 * @interface ImageFrameInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the ImageFrameInfo Interface.
 *
 * @interface ImageFrameInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ImageFrameInfo {
  /**
   * Image path
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Image path
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Image path
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Image path
   *
   * @type { string | Resource }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Image path
   *
   * @type { string | Resource | PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  src: string | Resource | PixelMap;
  /**
   * Image width
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Image width
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Image width
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  width?: number | string;
  /**
   * Image height
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Image height
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Image height
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  height?: number | string;
  /**
   * Vertical coordinate of the image relative to the upper left corner of the component
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Vertical coordinate of the image relative to the upper left corner of the component
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Vertical coordinate of the image relative to the upper left corner of the component
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  top?: number | string;
  /**
   * Horizontal coordinate of the image relative to the upper left corner of the component
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Horizontal coordinate of the image relative to the upper left corner of the component
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Horizontal coordinate of the image relative to the upper left corner of the component
   *
   * @type { ?(number | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  left?: number | string;
  /**
   * Playback duration of this image frame, in milliseconds.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Playback duration of this image frame, in milliseconds.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Playback duration of this image frame, in milliseconds.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  duration?: number;
}

/**
 * inheritance CommonMethod
 *
 * @extends CommonMethod<ImageAnimatorAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * inheritance CommonMethod
 *
 * @extends CommonMethod<ImageAnimatorAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * inheritance CommonMethod
 *
 * @extends CommonMethod<ImageAnimatorAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 * @noninterop
 */
declare class ImageAnimatorAttribute extends CommonMethod<ImageAnimatorAttribute> {
  /**
   * list images
   *
   * @param { Array<ImageFrameInfo> } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * list images
   *
   * @param { Array<ImageFrameInfo> } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the image frame information.
   *
   * <p><strong>NOTE</strong>:
   * <br>Dynamic update is not supported.
   * </p>
   *
   * @param { Array<ImageFrameInfo> } value - Image frame informatio, Default value is [].
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  images(value: Array<ImageFrameInfo>): ImageAnimatorAttribute;

  /**
   * The default value is the initial state, which is used to control the playback status.
   *
   * @param { AnimationStatus } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The default value is the initial state, which is used to control the playback status.
   *
   * @param { AnimationStatus } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the playback state of the animation.
   *
   * @param { AnimationStatus } value - Playback state of the animation, Default value is AnimationStatus.Initial.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  state(value: AnimationStatus): ImageAnimatorAttribute;

  /**
   * The unit is millisecond.
   *
   * @param { number } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * The unit is millisecond.
   *
   * @param { number } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the playback duration.
   * The unit is millisecond.
   *
   * <p><strong>NOTE</strong>:
   * <br>This attribute does not take effect when a separate duration is set for any of the image frames.
   * </p>
   *
   * @param { number } value - Playback duration, Default value is 1000.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  duration(value: number): ImageAnimatorAttribute;

  /**
   * Set the playback sequence.
   *
   * @param { boolean } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the playback sequence.
   *
   * @param { boolean } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the playback direction.
   *
   * @param { boolean } value - Playback direction, Default value is false.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  reverse(value: boolean): ImageAnimatorAttribute;

  /**
   * Sets whether the image size is fixed to the component size.
   *
   * @param { boolean } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets whether the image size is fixed to the component size.
   *
   * @param { boolean } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets whether the image size is fixed at the component size.
   *
   * @param { boolean } value - Whether the image size is fixed at the component size, Default value is true.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fixedSize(value: boolean): ImageAnimatorAttribute;

  /**
   * Sets the number of images to be pre-decoded.
   *
   * @param { number } value - Number of images to be pre-decoded, Default value is 0.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   * @deprecated since 9
   */
  preDecode(value: number): ImageAnimatorAttribute;

  /**
   * Sets the state before and after the animation starts
   *
   * @param { FillMode } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the state before and after the animation starts
   *
   * @param { FillMode } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the status before and after execution of the animation in the current playback direction.
   *
   * @param { FillMode } value - Status before and after execution of the animation in the current playback direction,
   * Default value is FillMode.Forwards.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  fillMode(value: FillMode): ImageAnimatorAttribute;

  /**
   * Played once by default
   *
   * @param { number } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Played once by default
   *
   * @param { number } value
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the number of times that the animation is played.
   * Played once by default
   *
   * @param { number } value - Number of times that the animation is played, Default value is 1.
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  iterations(value: number): ImageAnimatorAttribute;

  /**
   * Sets whether the component should automatically pause or resume based on its visibility, using the system's
   * onVisibleAreaChange event.
   *
   * @param { boolean } monitorInvisibleArea - 	Whether the component should automatically pause or resume based on
   * its visibility, using the system's onVisibleAreaChange event, Default value is false.
   * @returns { ImageAnimatorAttribute }
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'17','1.2':'20'}
   * @arkts 1.1&1.2
   */
  monitorInvisibleArea(monitorInvisibleArea: boolean) : ImageAnimatorAttribute;

  /**
   * Status callback, which is triggered when the animation starts to play.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Status callback, which is triggered when the animation starts to play.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Status callback, which is triggered when the animation starts to play.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onStart(event: () => void): ImageAnimatorAttribute;

  /**
   * Status callback, which is triggered when the animation pauses.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Status callback, which is triggered when the animation pauses.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Status callback, which is triggered when the animation pauses.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onPause(event: () => void): ImageAnimatorAttribute;

  /**
   * Status callback, triggered when the animation is replayed
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Status callback, triggered when the animation is replayed
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Status callback, triggered when the animation is replayed
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onRepeat(event: () => void): ImageAnimatorAttribute;

  /**
   * Status callback, which is triggered when the animation is canceled.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Status callback, which is triggered when the animation is canceled.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Status callback, which is triggered when the animation playback returns to the initial state.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onCancel(event: () => void): ImageAnimatorAttribute;

  /**
   * Status callback, which is triggered when the animation playback is complete.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Status callback, which is triggered when the animation playback is complete.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Status callback, which is triggered when the animation playback is complete or stopped.
   *
   * @param { function } event
   * @returns { ImageAnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onFinish(event: () => void): ImageAnimatorAttribute;
}

/**
 * Defines ImageAnimator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ImageAnimator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines ImageAnimator Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const ImageAnimator: ImageAnimatorInterface;

/**
 * Defines ImageAnimator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines ImageAnimator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines ImageAnimator Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const ImageAnimatorInstance: ImageAnimatorAttribute;
