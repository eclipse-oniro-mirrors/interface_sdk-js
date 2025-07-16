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
import { Bindable, CommonMethod } from './common'
/*** endif */

/**
 * Declare the StepperOptions.
 *
 * @interface StepperOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
interface StepperOptions {
  /**
   * Set the stepper index.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  index?: number;

  /**
   * Set the stepper index.
   *
   * @type { ?(number | Bindable<number>) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  index?: number | Bindable<number>;
}

/**
 * Declare the stepper.
 *
 * @interface StepperInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Declare the stepper.
 *
 * @interface StepperInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Declare the stepper.
 *
 * @interface StepperInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface StepperInterface {
  /**
   * Called when the stepper component is used.
   *
   * @param { object } value
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the stepper component is used.
   *
   * @param { object } value
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the stepper component is used.
   *
   * @param { object } value
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (value?: { index?: number }): StepperAttribute;
  /**
   * Called when the stepper component is used.
   *
   * Anonymous Object Rectification.
   * @param { StepperOptions } value
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  (value?: StepperOptions): StepperAttribute;
}

/**
 * Defines the stepper attribute functions
 *
 * @extends CommonMethod<StepperAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the stepper attribute functions
 *
 * @extends CommonMethod<StepperAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the stepper attribute functions
 *
 * @extends CommonMethod<StepperAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class StepperAttribute extends CommonMethod<StepperAttribute> {
  /**
   * Callback when the finish label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback when the finish label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback when the finish label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onFinish(callback: () => void): StepperAttribute;

  /**
   * Callback when the skip label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback when the skip label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback when the skip label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onSkip(callback: () => void): StepperAttribute;

  /**
   * Callback when the change label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback when the change label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback when the change label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChange(callback: (prevIndex: number, index: number) => void): StepperAttribute;

  /**
   * Callback when the next label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback when the next label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback when the next label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onNext(callback: (index: number, pendingIndex: number) => void): StepperAttribute;

  /**
   * Callback when the previous label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback when the previous label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback when the previous label is clicked.
   *
   * @param { function } callback
   * @returns { StepperAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onPrevious(callback: (index: number, pendingIndex: number) => void): StepperAttribute;
}

/**
 * Defines Stepper Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Stepper Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Stepper Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Stepper: StepperInterface;

/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Stepper Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const StepperInstance: StepperAttribute;
