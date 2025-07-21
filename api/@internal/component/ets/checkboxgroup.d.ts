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
import { CommonMethod, Optional, Bindable } from './common';
import { ResourceColor, MarkStyle } from './units';
import { CheckBoxShape } from './enums';
/*** endif */

/**
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CheckboxGroup SelectStatus
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum SelectStatus {
  /**
   * All checkboxes are selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * All checkboxes are selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * All checkboxes are selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * All checkboxes are selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  All,
  /**
   * Part of the checkbox is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Part of the checkbox is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Part of the checkbox is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Part of the checkbox is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  Part,
  /**
   * None of the checkbox is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * None of the checkbox is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * None of the checkbox is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * None of the checkbox is selected.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  None,
}

/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of CheckboxGroup.
 *
 * @interface CheckboxGroupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface CheckboxGroupOptions {
  /**
   * Setting the group of CheckboxGroup.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Setting the group of CheckboxGroup.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Setting the group of CheckboxGroup.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Setting the group of CheckboxGroup.
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  group?: string;
}

/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of CheckboxGroupResult.
 *
 * @interface CheckboxGroupResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface CheckboxGroupResult {
  /**
   * Checkbox name.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Checkbox name.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Checkbox name.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Checkbox name.
   *
   * @type { Array<string> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  name: Array<string>;
  /**
   * Set the group of status.
   *
   * @type { SelectStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Set the group of status.
   *
   * @type { SelectStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Set the group of status.
   *
   * @type { SelectStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Set the group of status.
   *
   * @type { SelectStatus }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  status: SelectStatus;
}

/**
 * Provides an interface for the CheckboxGroup component.
 *
 * @interface CheckboxGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides an interface for the CheckboxGroup component.
 *
 * @interface CheckboxGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for the CheckboxGroup component.
 *
 * @interface CheckboxGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for the CheckboxGroup component.
 *
 * @interface CheckboxGroupInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface CheckboxGroupInterface {
  /**
   * Called when the CheckboxGroup component is used.
   *
   * @param { CheckboxGroupOptions } options
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the CheckboxGroup component is used.
   *
   * @param { CheckboxGroupOptions } options
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the CheckboxGroup component is used.
   *
   * @param { CheckboxGroupOptions } options
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the CheckboxGroup component is used.
   *
   * @param { CheckboxGroupOptions } options
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (options?: CheckboxGroupOptions): CheckboxGroupAttribute;
}

/**
 * Defines a CheckboxGroup callback when onChange.
 * Anonymous Object Rectification.
 *
 * @typedef { function } OnCheckboxGroupChangeCallback
 * @param { CheckboxGroupResult } value - checkbox group result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type OnCheckboxGroupChangeCallback = (value: CheckboxGroupResult) => void;

/**
 * Defines the attribute functions of CheckboxGroup.
 *
 * @extends CommonMethod<CheckboxGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the attribute functions of CheckboxGroup.
 *
 * @extends CommonMethod<CheckboxGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the attribute functions of CheckboxGroup.
 *
 * @extends CommonMethod<CheckboxGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the attribute functions of CheckboxGroup.
 *
 * @extends CommonMethod<CheckboxGroupAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class CheckboxGroupAttribute extends CommonMethod<CheckboxGroupAttribute> {
  /**
   * setting whether all checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * setting whether all checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * setting whether all checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * setting whether all checkbox is selected.
   *
   * @param { boolean } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  selectAll(value: boolean): CheckboxGroupAttribute;

  /**
   * setting whether all checkbox is selected.
   *
   * @param { Optional<boolean> } isAllSelected
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18
   */  
  selectAll(isAllSelected: Optional<boolean>): CheckboxGroupAttribute;

  /**
   * setting whether all checkbox is selected.
   *
   * @param { boolean| undefined|Bindable<boolean> } isAllSelected
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  selectAll(isAllSelected: boolean | undefined | Bindable<boolean>): CheckboxGroupAttribute;

  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * setting the display color of checkbox.
   *
   * @param { ResourceColor } value
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedColor(value: ResourceColor): CheckboxGroupAttribute;

  /**
   * setting the display color of checkbox.
   *
   * @param { Optional<ResourceColor> } resColor
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectedColor(resColor: Optional<ResourceColor>): CheckboxGroupAttribute;

  /**
   * Set the display border color of unselected checkbox.
   *
   * @param { ResourceColor } value - The color of border when checkboxgroup unselected.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the display border color of unselected checkbox.
   *
   * @param { ResourceColor } value - The color of border when checkboxgroup unselected.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  unselectedColor(value: ResourceColor): CheckboxGroupAttribute;

  /**
   * Set the display border color of unselected checkbox.
   *
   * @param { Optional<ResourceColor> } resColor - The color of border when checkboxgroup unselected.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */  
  unselectedColor(resColor: Optional<ResourceColor>): CheckboxGroupAttribute;

  /**
   * Set the mark style of checkbox.
   *
   * @param { MarkStyle } value - The style configuration of checkboxgroup mark.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the mark style of checkbox.
   *
   * @param { MarkStyle } value - The style configuration of checkboxgroup mark.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  mark(value: MarkStyle): CheckboxGroupAttribute;

  /**
   * Set the mark style of checkbox.
   *
   * @param { Optional<MarkStyle> } style - The style configuration of checkboxgroup mark.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */  
  mark(style: Optional<MarkStyle>): CheckboxGroupAttribute;

  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the selection status changes.
   *
   * @param { function } callback
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when the selection status changes.
   * Anonymous Object Rectification.
   *
   * @param { OnCheckboxGroupChangeCallback } callback
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChange(callback: OnCheckboxGroupChangeCallback): CheckboxGroupAttribute;

  /**
   * Called when the selection status changes.
   *
   * @param { Optional<OnCheckboxGroupChangeCallback> } callback
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChange(callback: Optional<OnCheckboxGroupChangeCallback>): CheckboxGroupAttribute;

  /**
   * Setting the shape of checkbox group.
   *
   * @param { CheckBoxShape } value - The configuration of checkbox group shape.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  checkboxShape(value: CheckBoxShape): CheckboxGroupAttribute;

  /**
   * Setting the shape of checkbox group.
   *
   * @param { Optional<CheckBoxShape> } shape - The configuration of checkbox group shape.
   * @returns { CheckboxGroupAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */  
  checkboxShape(shape: Optional<CheckBoxShape>): CheckboxGroupAttribute;
}

/**
 * Defines CheckboxGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines CheckboxGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines CheckboxGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines CheckboxGroup Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CheckboxGroup: CheckboxGroupInterface;

/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines CheckboxGroup Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CheckboxGroupInstance: CheckboxGroupAttribute;
