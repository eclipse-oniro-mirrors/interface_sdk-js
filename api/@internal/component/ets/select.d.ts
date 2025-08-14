/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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

/**
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The declare of selectOption.
 *
 * @interface SelectOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare interface SelectOption {
  /**
   * Option string.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Option string.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Option string.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  value: ResourceStr;

  /**
   * Option icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Option icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Option icon.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  icon?: ResourceStr;

  /**
   * Indicates the symbol icon of this menu item.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Indicates the symbol icon of this menu item.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  symbolIcon?: SymbolGlyphModifier;
}

/**
 * Provides the select interface.
 *
 * @interface SelectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Provides the select interface.
 *
 * @interface SelectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides the select interface.
 *
 * @interface SelectInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
interface SelectInterface {
  /**
   * Called when the select is set.
   *
   * @param { Array<SelectOption> } options
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Called when the select is set.
   *
   * @param { Array<SelectOption> } options
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Called when the select is set.
   *
   * @param { Array<SelectOption> } options
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  (options: Array<SelectOption>): SelectAttribute;
}

/**
 * The enum for arrow position in the select
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The enum for arrow position in the select
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ArrowPosition {
  /**
   * The value of arrow position end
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The value of arrow position end
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  END = 0,

  /**
   * The value of arrow position start
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * The value of arrow position start
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  START = 1
}

/**
 * The type of alignment between select and menu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * The type of alignment between select and menu.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum MenuAlignType {
  /**
   * The value of menu align type start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The value of menu align type start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  START,
  /**
   * The value of menu align type center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The value of menu align type center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  CENTER,
  /**
   * The value of menu align type end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * The value of menu align type end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  END
}

/**
 * Enumeration of avoidance modes for the Select dropdown menu
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare enum AvoidanceMode {
  /**
   * The value covers the target component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  COVER_TARGET,
  /**
   * This value is displayed in the maximum space.(Compress the scrollbar)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  AVOID_AROUND_TARGET
}

/**
 * Callback of selecting an item from the select event.
 * 
 * @typedef {function} OnSelectCallback
 * @param {number} index - The index of the selected item.
 * @param {string} selectStr - The value of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type OnSelectCallback = (index: number, selectStr: string) => void;

/**
 * The declare of menuOutlineOptions.
 *
 * @interface MenuOutlineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface MenuOutlineOptions {
  /**
   * the width of the menu outline.
   *
   * @type { ?(Dimension | EdgeOutlineWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  width?: Dimension | EdgeOutlineWidths;
 
  /**
   * the color of the menu outline.
   *
   * @type { ?(ResourceColor | EdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  color?: ResourceColor | EdgeColors;
 }
 
/**
 * The commonMethod of select.
 *
 * @extends CommonMethod<SelectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The commonMethod of select.
 *
 * @extends CommonMethod<SelectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The commonMethod of select.
 *
 * @extends CommonMethod<SelectAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare class SelectAttribute extends CommonMethod<SelectAttribute> {
  /**
   * Sets the serial number of the select item, starting from 0.
   *
   * @param { number } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the serial number of the select item, starting from 0.
   *
   * @param { number } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the serial number of the select item, starting from 0.
   *
   * @param { number | Resource } value - the serial number of the select item.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  selected(value: number | Resource): SelectAttribute;

  /**
   * Sets the serial number of the select item, starting from 0.
   *
   * @param { Optional<number | Resource> } numCount - the serial number of the select item.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  selected(numCount: Optional<number | Resource>): SelectAttribute;


  /**
   * Sets the text display of the select button itself.
   *
   * @param { string } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text display of the select button itself.
   *
   * @param { string } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text display of the select button itself.
   *
   * @param { ResourceStr } value - the text display of the select button itself.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  value(value: ResourceStr): SelectAttribute;

  /**
   * Sets the text display of the select button itself.
   *
   * @param { Optional<ResourceStr> } resStr - the text display of the select button itself.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  value(resStr: Optional<ResourceStr>): SelectAttribute;

  /**
   * Sets the text properties of the select button itself.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text properties of the select button itself.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text properties of the select button itself.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  font(value: Font): SelectAttribute;

  /**
   * Sets the text properties of the select button itself.
   *
   * @param { Optional<Font> } selectFont
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  font(selectFont: Optional<Font>): SelectAttribute;

  /**
   * Sets the text color of the select button itself.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text color of the select button itself.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text color of the select button itself.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  fontColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the text color of the select button itself.
   *
   * @param { Optional<ResourceColor> } resColor
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  fontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the background color of the selected items in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the background color of the selected items in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the background color of the selected items in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  selectedOptionBgColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the background color of the selected items in the select.
   *
   * @param { Optional<ResourceColor> } resColor
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  selectedOptionBgColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the text style of the selected items in the select.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text style of the selected items in the select.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text style of the selected items in the select.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  selectedOptionFont(value: Font): SelectAttribute;

  /**
   * Sets the text style of the selected items in the select.
   *
   * @param { Optional<Font> } selectFont
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  selectedOptionFont(selectFont: Optional<Font>): SelectAttribute;

  /**
   * Sets the text color of the selected item in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text color of the selected item in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text color of the selected item in the select.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  selectedOptionFontColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the text color of the selected item in the select.
   *
   * @param { Optional<ResourceColor> } resColor
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  selectedOptionFontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the background color of the select item.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the background color of the select item.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the background color of the select item.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  optionBgColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the background color of the select item.
   *
   * @param { Optional<ResourceColor> } resColor
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  optionBgColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Sets the text style for select items.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text style for select items.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text style for select items.
   *
   * @param { Font } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  optionFont(value: Font): SelectAttribute;

  /**
   * Sets the text style for select items.
   *
   * @param { Optional<Font> } selectFont
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  optionFont(selectFont: Optional<Font>): SelectAttribute;

  /**
   * Sets the text color for select items.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Sets the text color for select items.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the text color for select items.
   *
   * @param { ResourceColor } value
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  optionFontColor(value: ResourceColor): SelectAttribute;

  /**
   * Sets the text color for select items.
   *
   * @param { Optional<ResourceColor> } resColor
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  optionFontColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * Callback for selecting an item from the select.
   *
   * @param { function } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 8
   */
  /**
   * Callback for selecting an item from the select.
   *
   * @param { function } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Callback for selecting an item from the select.
   *
   * @param { function } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  onSelect(callback: (index: number, value: string) => void): SelectAttribute;

  /**
   * Callback for selecting an item from the select.
   *
   * @param { Optional<OnSelectCallback> } callback
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  onSelect(callback: Optional<OnSelectCallback>): SelectAttribute;

  /**
   * Set the space for text and icon in select
   *
   * @param { Length } value - indicates the length of the space
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the space for text and icon in select
   *
   * @param { Length } value - indicates the length of the space
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  space(value: Length): SelectAttribute;

  /**
   * Set the space for text and icon in select
   *
   * @param { Optional<Length> } spaceLength - indicates the length of the space
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  space(spaceLength: Optional<Length>): SelectAttribute;

  /**
   * Set the layout direction for text and arrow in select
   *
   * @param { ArrowPosition } value - indicates the arrow position in the select
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set the layout direction for text and arrow in select
   *
   * @param { ArrowPosition } value - indicates the arrow position in the select
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  arrowPosition(value: ArrowPosition): SelectAttribute;

  /**
   * Set the layout direction for text and arrow in select
   *
   * @param { Optional<ArrowPosition> } position - indicates the arrow position in the select
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  arrowPosition(position: Optional<ArrowPosition>): SelectAttribute;

  /**
   * Set the alignment between select and menu.
   *
   * @param { MenuAlignType } alignType - The type of alignment between select and menu.
   * @param { Offset } offset - The offset between select and menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  /**
   * Set the alignment between select and menu.
   *
   * @param { MenuAlignType } alignType - The type of alignment between select and menu.
   * @param { Offset } offset - The offset between select and menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */ 
  menuAlign(alignType: MenuAlignType, offset?: Offset): SelectAttribute;

  /**
   * Set the alignment between select and menu.
   *
   * @param { Optional<MenuAlignType> } alignType - The type of alignment between select and menu.
   * @param { Offset } offset - The offset between select and menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  menuAlign(alignType: Optional<MenuAlignType>, offset?: Offset): SelectAttribute;

  /** 
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @param { Dimension | OptionWidthMode } value - The length of option width and decide option width to fit trigger or content.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /** 
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @param { Dimension | OptionWidthMode } value - The length of option width and decide option width to fit trigger or content.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  optionWidth(value: Dimension | OptionWidthMode ): SelectAttribute;

  /** 
   * Set the width of each option and set whether the option width fit the trigger.
   *
   * @param { Optional<Dimension | OptionWidthMode> } width - The length of option width and decide option width to fit trigger or content.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  optionWidth(width: Optional<Dimension | OptionWidthMode> ): SelectAttribute;

  /** 
   * Set the height of each option.
   * 
   * @param { Dimension } value - The length of option height.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /** 
   * Set the height of each option.
   * 
   * @param { Dimension } value - The length of option height.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  optionHeight(value: Dimension): SelectAttribute;

  /** 
   * Set the height of each option.
   * 
   * @param { Optional<Dimension> } height - The length of option height.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  optionHeight(height: Optional<Dimension>): SelectAttribute;

  /**
   * set the menu's background color
   *
   * @param { ResourceColor } value - The backgroundColor of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * set the menu's background color
   *
   * @param { ResourceColor } value - The backgroundColor of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  menuBackgroundColor(value: ResourceColor): SelectAttribute;

  /**
   * set the menu's background color
   *
   * @param { Optional<ResourceColor> } resColor - The backgroundColor of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  menuBackgroundColor(resColor: Optional<ResourceColor>): SelectAttribute;

  /**
   * set menu background blur Style
   *
   * @param { BlurStyle } value - The BackgroundBlurStyle of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * set menu background blur Style
   *
   * @param { BlurStyle } value - The BackgroundBlurStyle of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  menuBackgroundBlurStyle(value: BlurStyle): SelectAttribute;

  /**
   * set menu background blur Style
   *
   * @param { Optional<BlurStyle> } style - The BackgroundBlurStyle of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  menuBackgroundBlurStyle(style: Optional<BlurStyle>): SelectAttribute;

  /**
   * Sets the size for controls within Select Component.
   *
   * @param { ControlSize } value - control size
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  controlSize(value: ControlSize): SelectAttribute;

  /**
   * Sets the size for controls within Select Component.
   *
   * @param { Optional<ControlSize> } size - control size
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  controlSize(size: Optional<ControlSize>): SelectAttribute;

  /**
   * Register a ContentModifier for each menu item.
   *
   * @param { ContentModifier<MenuItemConfiguration> } modifier - The content modifier of select menu item.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  menuItemContentModifier(modifier: ContentModifier<MenuItemConfiguration>): SelectAttribute;

  /**
   * Register a ContentModifier for each menu item.
   *
   * @param { Optional<ContentModifier<MenuItemConfiguration>> } modifier - The content modifier of select menu item.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */  
  menuItemContentModifier(modifier: Optional<ContentModifier<MenuItemConfiguration>>): SelectAttribute;

  /**
   * Set the divider of select.
   *
   * @param { Optional<DividerOptions> | null } options Set custom and hidden divider.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  divider(options: Optional<DividerOptions> | null): SelectAttribute;

  /**
   * Sets the attribute modifier for the text of select.
   *
   * @param { Optional<TextModifier> } modifier Set modifier for the text of select.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  textModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * Sets the attribute modifier for the arrow symbol of select.
   *
   * @param { Optional<SymbolGlyphModifier> } modifier Set modifier for the arrow symbol of select.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  arrowModifier(modifier: Optional<SymbolGlyphModifier>): SelectAttribute;
  
  /**
   * Sets the attribute modifier for the text of each option.
   *
   * @param { Optional<TextModifier> } modifier Set modifier for the text of each option.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  optionTextModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * Sets the attribute modifier for the text of selected option.
   *
   * @param { Optional<TextModifier> } modifier Set modifier for the text of selected option.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  selectedOptionTextModifier(modifier: Optional<TextModifier>): SelectAttribute;

  /**
   * Set the divider style of option
   *
   * @param { Optional<DividerStyleOptions> } style
   * @returns { SelectAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  dividerStyle(style: Optional<DividerStyleOptions>): SelectAttribute;

  /**
   * Set the select menu avoidance mode
   *
   * @param { AvoidanceMode } mode - Enumeration value of the avoidance mode
   * @returns { SelectAttribute } Returns the chained object of Select component attributes
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
  avoidance(mode: AvoidanceMode): SelectAttribute;

  /**
   * Sets the outline of menu.
   *
   * @param { MenuOutlineOptions } outline Set the outline of menu.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  menuOutline(outline: MenuOutlineOptions): SelectAttribute;

  /**
   * Sets whether to display in the sub window.
   *
   * @param { Optional<boolean> } showInSubWindow Whether to display in the sub window.
   * @returns { SelectAttribute } The attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  showInSubWindow(showInSubWindow: Optional<boolean>): SelectAttribute;

  /**
   * Set whether to display the default selected icon
   *
   * @param { boolean } show - whether to display the default selected icon.
   * @returns { SelectAttribute } the attribute of the select.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  showDefaultSelectedIcon(show: boolean): SelectAttribute;
}

/**
 * MenuItemConfiguration used by menu item content modifier.
 *
 * @extends CommonConfiguration<MenuItemConfiguration>
 * @interface MenuItemConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 * @noninterop
 */
declare interface MenuItemConfiguration extends CommonConfiguration<MenuItemConfiguration>{
  /**
   * Indicates the text of this menu item.
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  value: ResourceStr;

  /**
   * Indicates the icon of this menu item.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  icon?: ResourceStr;

  /**
   * Indicates the symbol icon of this menu item.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Indicates the symbol icon of this menu item.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  symbolIcon?: SymbolGlyphModifier;

  /**
   * Indicates whether this menu item is selected or not.
   *
   * @type { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  selected: boolean;

  /**
   * Indicates the index of the menu item.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  index: number;

  /**
   * Select this menu item.
   *
   * @param { number } index - The value of menu item index.
   * @param { string } value - The value of menu item text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  triggerSelect(index: number, value: string): void;
}
/**
 * Defines Select Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Select Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Select Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const Select: SelectInterface;

/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Select Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const SelectInstance: SelectAttribute;
