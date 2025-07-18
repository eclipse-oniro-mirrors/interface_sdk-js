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
import { PointLightStyle, Optional, CommonMethod } from './common';
import { HorizontalAlign, FlexAlign } from './enums';
import { Resource } from './../../global/resource';
/*** endif */

/**
 * Defines the space property with string, number and resource unit.
 *
 * @typedef { string | number | Resource } SpaceType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type SpaceType = string | number | Resource;

/**
 * Column constructor options.
 *
 * @interface ColumnOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ColumnOptions {
  /**
   * Vertical layout element spacing
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Vertical layout element spacing.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Vertical layout element spacing.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Vertical layout element spacing.
   *
   * @type { ?(string | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  space?: string | number;
}

/**
 * Column constructor options.
 *
 * @interface ColumnOptionsV2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ColumnOptionsV2 {
  /**
   * Vertical layout element spacing.
   *
   * @type { ?SpaceType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  space?: SpaceType;
}

/**
 * Defines the Column Component.
 *
 * @interface ColumnInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the Column Component.
 *
 * @interface ColumnInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Column Component.
 *
 * @interface ColumnInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Column Component.
 *
 * @interface ColumnInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ColumnInterface {
  /**
   * Set the value.
   * useAlign:Use a custom alignment.
   * space: Vertical layout element spacing.
   *
   * @param { object } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Set the value.
   * useAlign:Use a custom alignment.
   * space: Vertical layout element spacing.
   *
   * @param { object } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set the value.
   * useAlign:Use a custom alignment.
   * space: Vertical layout element spacing.
   *
   * @param { object } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set the value.
   * useAlign:Use a custom alignment.
   * space: Vertical layout element spacing.
   *
   * @param { object } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Set the options.
   *
   * @param { ColumnOptions } [options] - column options
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options?: ColumnOptions): ColumnAttribute;
  /**
   * Set the options.
   *
   * @param { ColumnOptions | ColumnOptionsV2 } [options] - column options
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options?: ColumnOptions | ColumnOptionsV2): ColumnAttribute;
}

/**
 * Defines the Column component attribute functions.
 *
 * @extends CommonMethod<ColumnAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the Column component attribute functions.
 *
 * @extends CommonMethod<ColumnAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Column component attribute functions.
 *
 * @extends CommonMethod<ColumnAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Column component attribute functions.
 *
 * @extends CommonMethod<ColumnAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ColumnAttribute extends CommonMethod<ColumnAttribute> {
  /**
   * Sets the alignment format of the subassembly in the horizontal direction.
   *
   * @param { HorizontalAlign } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Sets the alignment format of the subassembly in the horizontal direction.
   *
   * @param { HorizontalAlign } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the alignment format of the subassembly in the horizontal direction.
   *
   * @param { HorizontalAlign } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the alignment format of the subassembly in the horizontal direction.
   *
   * @param { HorizontalAlign } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  alignItems(value: HorizontalAlign): ColumnAttribute;

  /**
   * Sets the alignment format of the subassembly in the vertical direction.
   *
   * @param { FlexAlign } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the alignment format of the subassembly in the vertical direction.
   *
   * @param { FlexAlign } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Sets the alignment format of the subassembly in the vertical direction.
   *
   * @param { FlexAlign } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Sets the alignment format of the subassembly in the vertical direction.
   *
   * @param { FlexAlign } value
   * @returns { ColumnAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  justifyContent(value: FlexAlign): ColumnAttribute;
  /**
   * Defines the PointLight
   *
   * @param { PointLightStyle } value - The point light style.
   * @returns { ColumnAttribute } The attribute of the column.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  pointLight(value: PointLightStyle): ColumnAttribute;
  /**
   * Called when the Main-Axis's direction is set reversed or not
   *
   * @param { Optional<boolean> } isReversed - If the main axis is reversed.
   * @returns { ColumnAttribute } The attribute of the column.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  reverse(isReversed: Optional<boolean>): ColumnAttribute;
}

/**
 * Defines Column Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Column Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Column Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Column Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Column: ColumnInterface;

/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Column Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ColumnInstance: ColumnAttribute;
