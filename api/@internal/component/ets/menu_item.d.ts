/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
import { ResourceStr, Font, ResourceColor } from './units';
import { CommonMethod, Bindable } from './common';
import { CustomBuilder } from './builder';
import { SymbolGlyphModifier } from '../../arkui/SymbolGlyphModifier';
/*** endif */

/**
 * Defines the option of MenuItem.
 *
 * @interface MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the option of MenuItem.
 *
 * @interface MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the option of MenuItem.
 *
 * @interface MenuItemOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface MenuItemOptions {
  /**
   * Defines the start display image info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Defines the start display image info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the start display image info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  startIcon?: ResourceStr;

  /**
   * Defines the start display symbol info.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Defines the start display symbol info.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  symbolStartIcon?: SymbolGlyphModifier;

  /**
   * Defines the content string display info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Defines the content string display info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the content string display info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  content?: ResourceStr;

  /**
   * Defines the end display image info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Defines the end display image info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the end display image info.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  endIcon?: ResourceStr;

  /**
   * Defines the end display symbol info.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 12
   */
  /**
   * Defines the end display symbol info.
   *
   * @type { ?SymbolGlyphModifier }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  symbolEndIcon?: SymbolGlyphModifier;

  /**
   * Defines the end label info like shortcut.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Defines the end label info like shortcut.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Defines the end label info like shortcut.
   *
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  labelInfo?: ResourceStr;

  /**
   * Create the submenu.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Create the submenu.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Create the submenu.
   *
   * @type { ?CustomBuilder }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  builder?: CustomBuilder;
}

/**
 * Defines the MenuItem Component.
 *
 * @interface MenuItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the MenuItem Component.
 *
 * @interface MenuItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the MenuItem Component.
 *
 * @interface MenuItemInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface MenuItemInterface {
  /**
   * Creates the MenuItem component.
   *
   * @param { MenuItemOptions | CustomBuilder } value
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Creates the MenuItem component.
   *
   * @param { MenuItemOptions | CustomBuilder } value
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Creates the MenuItem component.
   *
   * @param { MenuItemOptions | CustomBuilder } value
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  (value?: MenuItemOptions | CustomBuilder): MenuItemAttribute;
}

/**
 * Defines the MenuItem component attribute functions.
 *
 * @extends CommonMethod<MenuItemAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the MenuItem component attribute functions.
 *
 * @extends CommonMethod<MenuItemAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the MenuItem component attribute functions.
 *
 * @extends CommonMethod<MenuItemAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class MenuItemAttribute extends CommonMethod<MenuItemAttribute> {
  /**
   * Setting whether menuItem is selected.
   *
   * @param { boolean } value
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Setting whether menuItem is selected.
   *
   * @param { boolean } value
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Setting whether menuItem is selected.
   *
   * @param { boolean } value
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  selected(value: boolean): MenuItemAttribute;

    /**
   * Setting whether menuItem is selected.
   *
   * @param { boolean | undefined | Bindable<boolean> } value
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
    selected(value: boolean | undefined | Bindable<boolean>): MenuItemAttribute;


  /**
   * Whether the relevant check icon is displayed when a menu item is selected.
   *
   * @param { boolean } value - Indicates whether to display the check icon when selected.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Whether the relevant check icon is displayed when a menu item is selected.
   * Use type ResourceStr to specify icon instead of the default check mark.
   *
   * @param { boolean | ResourceStr } value - Indicates whether to display icon when selected.
   *                                          true: displays the default check mark when selected.
   *                                          false: does not displays icon when selected.
   *                                          ResourceStr: displays the specified icon when selected.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Whether the relevant check icon is displayed when a menu item is selected.
   * Use type ResourceStr to specify icon instead of the default check mark.
   *
   * @param { boolean | ResourceStr } value - Indicates whether to display icon when selected.
   *                                          true: displays the default check mark when selected.
   *                                          false: does not displays icon when selected.
   *                                          ResourceStr: displays the specified icon when selected.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Whether the relevant check icon is displayed when a menu item is selected.
   * Use type ResourceStr or SymbolGlyphModifier to specify icon instead of the default check mark.
   *
   * @param { boolean | ResourceStr | SymbolGlyphModifier } value - Indicates whether to display icon when selected.
   * <br>true: displays the default check mark when selected.
   * <br>false: does not displays icon when selected.
   * <br>ResourceStr or SymbolGlyphModifier: displays the specified icon when selected.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier): MenuItemAttribute;

  /**
   * Triggers a callback when a menu item is selected or unchecked.
   *
   * @param { function } callback
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   */
  /**
   * Triggers a callback when a menu item is selected or unchecked.
   *
   * @param { function } callback
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Triggers a callback when a menu item is selected or unchecked.
   *
   * @param { function } callback
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChange(callback: (selected: boolean) => void): MenuItemAttribute;

  /**
   * Sets the content font style.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Font } value - Indicates the font style of content text.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the content font style.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Font } value - Indicates the font style of content text.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentFont(value: Font): MenuItemAttribute;

  /**
   * Sets the font color of content text.
   *
   * @param { ResourceColor } value - Indicates the font color of content text.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the font color of content text.
   *
   * @param { ResourceColor } value - Indicates the font color of content text.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentFontColor(value: ResourceColor): MenuItemAttribute;

  /**
   * Sets the label info font style.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Font } value - Indicates the font style of label info text.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the label info font style.
   * Family and style are not supported currently and will be fixed in future.
   *
   * @param { Font } value - Indicates the font style of label info text.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  labelFont(value: Font): MenuItemAttribute;

  /**
   * Sets the font color of label info text.
   *
   * @param { ResourceColor } value - Indicates the font color of label info text.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Sets the font color of label info text.
   *
   * @param { ResourceColor } value - Indicates the font color of label info text.
   * @returns { MenuItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  labelFontColor(value: ResourceColor): MenuItemAttribute;
}

/**
 * Defines MenuItem Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines MenuItem Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines MenuItem Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const MenuItem: MenuItemInterface;

/**
 * Defines MenuItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines MenuItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines MenuItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const MenuItemInstance: MenuItemAttribute;
