/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * Provides an interface for SymbolGlyph.
 *
 * @interface SymbolGlyphInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Provides an interface for SymbolGlyph.
 *
 * @interface SymbolGlyphInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Provides an interface for SymbolGlyph.
 *
 * @interface SymbolGlyphInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @noninterop
 */
interface SymbolGlyphInterface {
  /**
   * Called when resource is entered in SymbolGlyph.
   *
   * @param { Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when resource is entered in SymbolGlyph.
   *
   * @param { Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when resource is entered in SymbolGlyph.
   *
   * @param { Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  (value?: Resource): SymbolGlyphAttribute;
}

/**
 * The symbol rendering strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * The symbol rendering strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * The symbol rendering strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare enum SymbolRenderingStrategy {
  /**
   * The single rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The single rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The single rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  SINGLE = 0,

  /**
   * The multiple color rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The multiple color rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The multiple color rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  MULTIPLE_COLOR = 1,

  /**
   * The multiple opacity rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The multiple opacity rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The multiple opacity rendering strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  MULTIPLE_OPACITY = 2,
}

/**
 * The symbol effect strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * The symbol effect strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * The symbol effect strategy.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare enum SymbolEffectStrategy {
  /**
   * There is no effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * There is no effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * There is no effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  NONE = 0,

  /**
   * The scale effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The scale effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The scale effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  SCALE = 1,

  /**
   * The hierarchical effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * The hierarchical effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The hierarchical effect strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  HIERARCHICAL = 2,
}

/**
 * The direction type of symbol effect
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * The direction type of symbol effect
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare enum EffectDirection {
  /**
   * The scale down animation of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The scale down animation of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  DOWN = 0,
  /**
   * The scale up animation of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The scale up animation of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  UP = 1,
}

/**
 * Declare scope type of the symbol effect
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Declare scope type of the symbol effect
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare enum EffectScope {
  /**
   * The layered animation of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The layered animation of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  LAYER = 0,
  /**
   * The whole animation of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The whole animation of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  WHOLE = 1,
}

/**
 * Declare fill style of symbol
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Declare fill style of symbol
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare enum EffectFillStyle {
  /**
   * The cumulative fill style of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The cumulative fill style of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  CUMULATIVE = 0,

  /**
   * The iterative fill style of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The iterative fill style of symbol
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  ITERATIVE = 1,
}

/**
 * Defines SymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines SymbolEffect class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare class SymbolEffect {
}

/**
 * Defines ScaleSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines ScaleSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare class ScaleSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @param { EffectDirection } [direction] - The direction of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @param { EffectDirection } [direction] - The direction of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);

  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  scope?: EffectScope;
  
  /**
   * The direction of symbol effect
   *
   * @type { ?EffectDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The direction of symbol effect
   *
   * @type { ?EffectDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  direction?: EffectDirection;
}

/**
 * Defines HierarchicalSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines HierarchicalSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare class HierarchicalSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { EffectFillStyle } [fillStyle] -  The fill style of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * constructor.
   *
   * @param { EffectFillStyle } [fillStyle] -  The fill style of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  constructor(fillStyle?: EffectFillStyle);
  
  /**
   * The fill style of symbol effect
   *
   * @type { ?EffectFillStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The fill style of symbol effect
   *
   * @type { ?EffectFillStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  fillStyle?: EffectFillStyle;
}

/**
 * Defines AppearSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines AppearSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare class AppearSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  constructor(scope?: EffectScope);
  
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  scope?: EffectScope;
}

/**
 * Defines DisappearSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines DisappearSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare class DisappearSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  constructor(scope?: EffectScope);
  
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  scope?: EffectScope;
}

/**
 * Defines BounceSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines BounceSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare class BounceSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @param { EffectDirection } [direction] - The direction of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @param { EffectDirection } [direction] - The direction of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  constructor(scope?: EffectScope, direction?: EffectDirection);
  
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  scope?: EffectScope;
  
  /**
   * The direction of symbol effect
   *
   * @type { ?EffectDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The direction of symbol effect
   *
   * @type { ?EffectDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  direction?: EffectDirection;
}

/**
 * Defines ReplaceSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines ReplaceSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare class ReplaceSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  constructor(scope?: EffectScope);
  
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  scope?: EffectScope;
}

/**
 * Defines PulseSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
declare class PulseSymbolEffect extends SymbolEffect {
}

/**
 * Defines DisableSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 20
 */
declare class DisableSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 20
   */
  constructor(scope?: EffectScope);

  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 20
   */
  scope?: EffectScope;
}

/**
 * Defines QuickReplaceSymbolEffect class.
 *
 * @extends SymbolEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 20
 */
declare class QuickReplaceSymbolEffect extends SymbolEffect {
  /**
   * constructor.
   *
   * @param { EffectScope } [scope] -  The scope type of symbol effect.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 20
   */
  constructor(scope?: EffectScope);

  /**
   * The scope type of symbol effect
   *
   * @type { ?EffectScope }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 20
   */
  scope?: EffectScope;
}

/**
 * Provides attribute for SymbolGlyph.
 * 
 * @extends CommonMethod<SymbolGlyphAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Provides attribute for SymbolGlyph.
 * 
 * @extends CommonMethod<SymbolGlyphAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Provides attribute for SymbolGlyph.
 * 
 * @extends CommonMethod<SymbolGlyphAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @noninterop
 */
declare class SymbolGlyphAttribute extends CommonMethod<SymbolGlyphAttribute> {
  /**
   * Called when the SymbolGlyph size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the SymbolGlyph size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the SymbolGlyph size is set.
   *
   * @param { number | string | Resource } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  fontSize(value: number | string | Resource): SymbolGlyphAttribute;

  /**
   * Called when the SymbolGlyph color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the SymbolGlyph color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the SymbolGlyph color is set.
   *
   * @param { Array<ResourceColor> } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  fontColor(value: Array<ResourceColor>): SymbolGlyphAttribute;

  /**
   * Set the shader style of the symbol, such as lineargradient or radialgradient.
   *
   * @param { Array<ShaderStyle> } shaders - The shaders style of the symbol.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 20
   */
  shaderStyle(shaders: Array<ShaderStyle>): SymbolGlyphAttribute;

  /**
   * Called when the font symbolGlyph weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the font symbolGlyph weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the font symbolGlyph weight is set.
   *
   * @param { number | FontWeight | string } value
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  fontWeight(value: number | FontWeight | string): SymbolGlyphAttribute;

  /**
   * Called when the symbolGlyph effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the symbolGlyph effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the symbolGlyph effect is set.
   *
   * @param { SymbolEffectStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  effectStrategy(value: SymbolEffectStrategy): SymbolGlyphAttribute;

  /**
   * Called when the symbolGlyph rendering strategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 11
   */
  /**
   * Called when the symbolGlyph rendering strategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Called when the symbolGlyph rendering strategy is set.
   *
   * @param { SymbolRenderingStrategy } value
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  renderingStrategy(value: SymbolRenderingStrategy): SymbolGlyphAttribute;

  /**
   * Define effect options for SymbolGlyph.
   *
   * @param { SymbolEffect } [symbolEffect] - The symbol effect type
   * @param { boolean } [isActive] - The active state of the effect
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   * Define effect options for SymbolGlyph.
   *
   * @param { SymbolEffect } [symbolEffect] - The symbol effect type
   * @param { boolean } [isActive] - The active state of the effect
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean): SymbolGlyphAttribute;

  /**
   *  Define effect options for SymbolGlyph.
   *
   * @param { SymbolEffect } [symbolEffect] - The symbol effect type
   * @param { number } [triggerValue] - The trigger of the effect
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 12
   */
  /**
   *  Define effect options for SymbolGlyph.
   *
   * @param { SymbolEffect } [symbolEffect] - The symbol effect type
   * @param { number } [triggerValue] - The trigger of the effect
   * @returns { SymbolGlyphAttribute } The attribute of the SymbolGlyph.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   */
  symbolEffect(symbolEffect: SymbolEffect, triggerValue?: number): SymbolGlyphAttribute;

  /**
   * Called when the minimum font scale of the font is set.
   *
   * @param { Optional<number|Resource> } scale
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  /**
   * Called when the minimum font scale of the font is set.
   *
   * @param { Optional<number|Resource> } scale
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  minFontScale(scale: Optional<number | Resource>): SymbolGlyphAttribute;

  /**
   * Called when the maximum font scale of the font is set.
   *
   * @param { Optional<number|Resource> } scale
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @atomicservice
   * @since 18
   */
  /**
   * Called when the maximum font scale of the font is set.
   *
   * @param { Optional<number|Resource> } scale
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  maxFontScale(scale: Optional<number | Resource>): SymbolGlyphAttribute;

  /**
   * Set the shadow of symbol.
   *
   * <p><strong>NOTE</strong>:
   * <br>This API does not work with the fill attribute, showType attribute or coloring strategy.
   * </p>
   *
   * @param { Optional<ShadowOptions> } shadow - The shadow options.
   * @returns { SymbolGlyphAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @atomicservice
   * @since 20
   */
  symbolShadow(shadow: Optional<ShadowOptions>): SymbolGlyphAttribute;
}

/**
 * Defines SymbolGlyph Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines SymbolGlyph Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines SymbolGlyph Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @noninterop
 */
declare const SymbolGlyph: SymbolGlyphInterface;

/**
 * Defines SymbolGlyph Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines SymbolGlyph Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 12
 */
/**
 * Defines SymbolGlyph Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 * @noninterop
 */
declare const SymbolGlyphInstance: SymbolGlyphAttribute;
