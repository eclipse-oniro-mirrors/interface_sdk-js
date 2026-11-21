/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { KeyboardOptions, PasteEvent } from "./richEditor";
import { CaretStyle, DeleteValue, EditMenuOptions, EditableTextOnChangeCallback, InsertValue, AutoCapitalizationMode, EditableTextChangeValue, KeyboardAppearance, SelectedDragPreviewStyle, VoiceButtonOptions, TextDirection, LineSpacingOptions, MaxLinesOptions, IMEClient, ShaderStyle, StrokeJoinStyle } from "./textCommon";
import { BarState, CopyOptions, FontStyle, FontWeight, LineBreakStrategy, TextContentStyle, TextAlign, TextOverflow, TextHeightAdaptivePolicy, WordBreak, EllipsisMode } from "./enums";
import { EnterKeyType, SubmitEvent, ContentType } from "./textInput";
import { Dimension, Font, Length, LengthMetrics, ResourceColor, ResourceStr, ColorMetrics } from "./units";
import { InputCounterOptions, TextContentControllerBase, SelectionOptions, TextDecorationOptions, CommonMethod, Callback, Bindable } from './common';
import { Builder, CustomBuilder, CustomBuilderT, ComponentBuilder } from './builder';
import { Resource } from '../../global/resource';
import { ComponentBuilder } from "./../stateManagement/runtime";
import { AttributeModifier, CommonMethod } from "./common";
import { ColorMetrics } from '../Graphics';
import { ComponentContentBase } from '../ComponentContent';
/**
 * TextArea组件的控制器继承自[TextContentControllerBase]{@link TextContentControllerBase}，涉及的接口有
 * [getTextContentRect]{@link TextContentControllerBase#getTextContentRect}、
 * [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount}、
 * [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}、[addText]{@link TextContentControllerBase#addText}、
 * [deleteText]{@link TextContentControllerBase#deleteText}、[getSelection]{@link TextContentControllerBase#getSelection}
 * 、[clearPreviewText]{@link TextContentControllerBase#clearPreviewText}、
 * [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder}、
 * [deleteBackward]{@link TextContentControllerBase#deleteBackward}、
 * [scrollToVisible]{@link TextContentControllerBase#scrollToVisible}<!--Del-->以及系统接口
 * [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->。
 *
 * ###### 导入对象
 *
 * ```ts
 * controller: TextAreaController = new TextAreaController();
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class TextAreaController extends TextContentControllerBase {
  /**
   * TextAreaController的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();
  /**
   * 设置输入光标的位置。
   *
   * @param { int } value - 从字符串开始到光标所在位置的字符长度。 <br>当value<0时，按照0处理。当value>字符串长度时，按照字符串长度处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  caretPosition(value: int): void;
  /**
   * 组件在获焦状态下，调用该接口设置文本选择区域并高亮显示，且只有在selectionStart小于selectionEnd时，文字才会被选取、高亮显示。
   *
   * @param { int } selectionStart - 文本选择区域起始位置，文本框中文字的起始位置为0。
   *     <br>当selectionStart小于0时，按0处理；当selectionStart大于文字最大长度时，按照文字最大长度处理。
   * @param { int } selectionEnd - 文本选择区域结束位置。
   *     <br>当selectionEnd小于0时，按0处理；当selectionEnd大于文字最大长度时，按照文字最大长度处理。
   * @param { SelectionOptions } [options] - 选中文字时的配置。
   *     <br>默认值：MenuPolicy.DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTextSelection(selectionStart: int, selectionEnd: int, options?: SelectionOptions): void;
  /**
   * 退出编辑态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopEditing(): void;
}
/**
 * TextArea初始化参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextAreaOptions {
  /**
   * 设置无输入时的提示文本。输入内容后，提示文本不显示。
   *
   * 仅设置placeholder属性时，手柄依然跟随拖动，手柄松开后光标停留在文字开头位置。
   *
   * 默认值：空字符串，不设置时不显示提示文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  placeholder?: ResourceStr;
  /**
   * 设置输入框当前的文本内容。默认值：空字符串。
   *
   * 建议通过onChange事件将状态变量与文本实时绑定，
   *
   * 避免组件刷新时TextArea中的文本内容异常。
   *
   * 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。
   *
   * 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  text?: ResourceStr | Bindable<ResourceStr> | Bindable<Resource> | Bindable<string>;
  /**
   * 设置TextArea控制器。不设置时，组件使用内部默认控制器，但无法调用控制器相关方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  controller?: TextAreaController;
}
/**
 * 多行文本输入框类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextAreaType {
  /**
   * 基本输入模式，无特殊限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NORMAL = 0,
  /**
   * 纯数字输入模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NUMBER = 2,
  /**
   * 电话号码输入模式。
   *
   * 支持输入数字、空格、+ 、-、*、#、(、)，长度不限。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PHONE_NUMBER = 3,
  /**
   * 邮箱地址输入模式。
   *
   * 支持数字，字母，下划线、小数点、!、#、$、%、&、'、*、+、-、/、=、?、^、`、{、|、}、~，以及@字符（只能存在一个@字符）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EMAIL = 5,
  /**
   * 带小数点的数字输入模式。
   *
   * 支持数字，小数点（只能存在一个小数点）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NUMBER_DECIMAL = 12,
  /**
   * 带URL的输入模式，无特殊限制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  URL = 13,
  /**
   * 一次性验证码
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  ONE_TIME_CODE = 14
}
/**
 * 软键盘按下回车键时的回调事件。
 *
 * @param { EnterKeyType } enterKeyType - 软键盘输入法回车键类型。
 *     <br>类型为EnterKeyType.NEW_LINE时不触发onSubmit。
 * @param { SubmitEvent } [event] - Provides the method of keeping textArea editable state when submitted.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type TextAreaSubmitCallback = (enterKeyType: EnterKeyType, event?: SubmitEvent) => void;
/**
 * 除支持[通用属性]{@link CommonMethod}，还支持以下属性：
 *
 * > **说明：**
 * >
 * > [通用属性padding]{@link CommonMethod#padding}的默认值为
 *
 * {
 *
 * &nbsp;top: '8vp',
 *
 * &nbsp;right: '16vp',
 *
 * &nbsp;bottom: '8vp',
 *
 * &nbsp;left: '16vp'
 *
 * }
 *
 * > 从API version 11开始，多行输入框可设置.width('auto')使组件宽度自适应文本宽度，自适应时组件宽度受constraintSize属性以及父容器传递的最大最小宽度限制，其余使用方式参考
 * > [尺寸设置]{@link CommonMethod}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface TextAreaAttribute extends CommonMethod {
  /**
   * 设置placeholder文本颜色。未通过该接口设置时，默认placeholder文本颜色跟随主题，深色模式下显示为#ffffff（白色），浅色模式下显示为#000000（黑色）。
   *
   * @param { ResourceColor | undefined } value - placeholder文本颜色。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default placeholderColor(value: ResourceColor | undefined): this;
  /**
   * 设置placeholder文本样式，包括字体大小、字体粗细、字体族、字体风格。未通过该接口设置时，默认placeholder文本样式为：字体大小14fp，字体粗细FontWeight.Normal，字体族HarmonyOS
   * Sans，字体风格FontStyle.Normal。
   *
   * > **说明：**
   * >
   * > 可以使用[loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}注册自定义字体。
   *
   * @param { Font | undefined } value - placeholder文本样式，包括字体大小、字体粗细、字体族、字体风格。用于自定义placeholder文本的显示样式。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default placeholderFont(value: Font | undefined): this;
  /**
   * 设置输入法回车键类型。未通过该接口设置时，默认输入法回车键类型为EnterKeyType.NEW_LINE。
   *
   * > **说明：**
   * >
   * > 从API version 12开始，该接口支持在[attributeModifier]{@link CommonMethod#attributeModifier}中调用。
   *
   * @param { EnterKeyType | undefined } value - 输入法回车键类型。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enterKeyType(value: EnterKeyType | undefined): this;
  /**
   * 设置文本在输入框中的水平对齐方式。未通过该接口设置时，默认文本在输入框中的水平对齐方式为TextAlign.Start。
   *
   * 支持TextAlign.Start、TextAlign.Center和TextAlign.End。从API version 11开始，新增TextAlign.JUSTIFY选项。
   *
   * 可通过[align]{@link CommonMethod#align(value: Alignment)}属性控制文本段落在垂直方向上的位置，此组件中不可通过align属性控制文本段落在水平方向上的位置。
   *
   * - Alignment.TopStart、Alignment.Top、Alignment.TopEnd：内容顶部对齐。
   * - Alignment.Start、Alignment.Center、Alignment.End：内容垂直居中。
   * - Alignment.BottomStart、Alignment.Bottom、Alignment.BottomEnd：内容底部对齐。
   *
   * 当textAlign属性设置为TextAlign.JUSTIFY时，最后一行文本不参与两端对齐，为水平对齐首部效果。
   *
   * @param { TextAlign | undefined } value - 文本在输入框中的水平对齐方式。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textAlign(value: TextAlign | undefined): this;
  /**
   * 设置输入框光标颜色。当同时设置caretColor属性和caretStyle属性中的color参数时，后设置的属性值生效。例如，先设置caretColor再设置caretStyle.color，则caretStyle.color生
   * 效；反之，先设置caretStyle.color再设置caretColor，则caretColor生效。未通过该接口设置时，默认输入框光标颜色为'#007DFF'（蓝色）。
   *
   * @param { ResourceColor | undefined } value - 输入框光标颜色。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default caretColor(value: ResourceColor | undefined): this;
  /**
   * 设置字体颜色。未通过该接口设置时，默认字体颜色跟随主题。
   *
   * @param { ResourceColor | undefined } value - 字体颜色，用于自定义输入文本的颜色。 <br>**说明：
   *     ** 当同时设置[shaderStyle]{@link TextAreaAttribute#shaderStyle}时，shaderStyle优先级更高，fontColor不生效。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontColor(value: ResourceColor | undefined): this;
  /**
   * 设置字体大小。未通过该接口设置时，默认字体大小为16fp。Wearable设备上默认字体大小为18fp。
   * @param { Length | undefined } value - 字体大小。
   *     fontSize为number类型时，使用fp单位。不支持设置百分比字符串。
   *     <br>取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontSize(value: Length | undefined): this;
  /**
   * 设置字体样式。未通过该接口设置时，默认字体样式为FontStyle.Normal。
   *
   * @param { FontStyle | undefined } value - 字体样式。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontStyle(value: FontStyle | undefined): this;
  /**
   * 设置字体粗细时调用。
   *
   * @param { int | FontWeight | ResourceStr | undefined } value - 默认值为FontWeight.Normal。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontWeight(value: int | FontWeight | ResourceStr | undefined): this;
  /**
   * 设置字体列表。
   * > **说明：**
   * >
   * > 可以使用[loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}注册自定义字体。
   * @param { ResourceStr | undefined } value - 字体列表。默认字体'HarmonyOS Sans'。<br>
   *     使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial, HarmonyOS Sans'。<br>
   *     应用当前支持'HarmonyOS Sans'字体和[注册自定义字体](../js-apis-font.md)。<br>卡片当前仅支持'HarmonyOS Sans'字体。<br>取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFamily(value: ResourceStr | undefined): this;
  /**
   * 设置文本超长时的显示方式。未通过该接口设置时，默认文本超长时的显示方式为TextOverflow.Clip。
   *
   * 内联模式，主动配置textOverflow才会生效按[maxLines]{@link TextAreaAttribute#maxLines(value: number)}截断效果，不配置时，默认不截断。
   *
   * 文本截断是按字截断。例如，英文以单词为最小单位进行截断，若需要以字母为单位进行截断，[wordBreak]{@link @global:WordBreak}属性可设置为WordBreak.BREAK_ALL。
   *
   * 当textOverflow设置为TextOverflow.None、TextOverflow.Clip、TextOverflow.Ellipsis时，需配合
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)}使用，单独设置不生效。设置TextOverflow.None与TextOverflow.Clip效果一样。
   *
   * > **说明：**
   * >
   * > TextArea组件不支持设置TextOverflow.MARQUEE模式，当设置为TextOverflow.MARQUEE模式时，显示为TextOverflow.Clip。
   *
   * @param { TextOverflow | undefined } value - 文本超长时的显示方式。 <br>内联模式需主动配置才生效，设置为None、Clip、Ellipsis时需配合maxLines使用，
   *     单独设置不生效。 <br>不支持TextOverflow.MARQUEE模式，设置为MARQUEE时显示为Clip。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textOverflow(value: TextOverflow | undefined): this;
  /**
   * 设置首行文本缩进。未通过该接口设置时，默认首行文本缩进为0。
   * @param { Dimension | undefined } value - 首行文本缩进。<br>单位：[vp](ts-pixel-units.md#基本像素单位) <br>
   *     取值范围：大于等于0。设置负数时，按默认值处理。<br>取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textIndent(value: Dimension | undefined): this;
  /**
   * 通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。
   * 单字符输入场景仅支持单字符匹配，多字符输入场景支持字符串匹配，例如粘贴。
   * 从API version 11开始，设置inputFilter且输入的字符不为空字符，会导致[type]{@link TextAreaAttribute#type}接口附带的文本过滤效果失效。
   * @param { ResourceStr | undefined } value - 正则表达式。<br>取值为undefined时，按无正则匹配过滤处理。
   * @param { function | undefined } [error] - 匹配失败时的回调。<br>value：正则匹配失败时，返回被过滤的内容。正则匹配成功时，无返回。<br>
   *     取值为undefined时，不使用回调函数。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default inputFilter(value: ResourceStr | undefined, error?: ((value: string) => void) | undefined): this;
  /**
   * 设置光标风格。
   *
   * @param { CaretStyle | undefined } value - 光标的风格，用于自定义光标的显示样式，包括宽度和颜色。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default caretStyle(value: CaretStyle | undefined): this;
  /**
   * 设置文本选中高亮颜色。如果未设置不透明度或设置为完全不透明，默认使用20%不透明度。
   *
   * @param { ResourceColor | undefined } value - 文本选中高亮颜色。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedBackgroundColor(value: ResourceColor | undefined): this;
  /**
   * 按下软键盘输入法回车键时，触发该回调。
   * @param { TextAreaSubmitCallback | undefined } callback - 按下软键盘输入法回车键时的回调事件。<br>取值为undefined时，不使用回调函数。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onSubmit(callback: TextAreaSubmitCallback | undefined): this;
  /**
   * 输入内容发生变化时，触发该回调。
   *
   * 在本回调中，若执行了光标操作，需要开发者在预上屏场景下依据[EditableTextOnChangeCallback]{@link EditableTextOnChangeCallback}的previewText参数调整光标逻
   * 辑，以适应预上屏场景。
   *
   * > **说明：**
   * >
   * > onWillChange和onChange形成will/did时序模式：
   * >
   * > - onWillChange在文本变更前触发，可通过返回false拦截变更；返回true则允许变更，随后触发onChange。
   * >
   * > - onChange在变更完成后触发，无法拦截。
   * >
   * > - 两者可以同时使用，onWillChange用于拦截控制，onChange用于获取变更结果。
   *
   * @param { EditableTextOnChangeCallback | undefined } callback - 当前输入文本内容变化时的回调。 [since 12]
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onChange(callback: EditableTextOnChangeCallback | undefined): this;
  /**
   * 文本选择的位置或编辑状态下光标位置发生变化时，触发该回调。
   * @param { function | undefined } callback - 文本选择的位置或编辑状态下光标位置发生变化时，触发该回调。<br>
   *     selectionStart：所选文本的起始位置，文字的起始位置为0。<br>selectionEnd：所选文本的结束位置。<br>取值为undefined时，不使用回调函数。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onTextSelectionChange(callback: ((selectionStart: int, selectionEnd: int) => void) | undefined): this;
  /**
   * 文本内容滚动时，触发该回调。
   * @param { function | undefined } callback - 文本内容滚动时，触发该回调。<br>totalOffsetX：文本在内容区的横坐标偏移。<br>
   *     单位：[px](ts-pixel-units.md#基本像素单位)<br>totalOffsetY：文本在内容区的纵坐标偏移。<br>单位：[px](ts-pixel-units.md#基本像素单位) <br>
   *     取值为undefined时，不使用回调函数。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onContentScroll(callback: ((totalOffsetX: double, totalOffsetY: double) => void) | undefined): this;
  /**
   * 输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。
   * @param { function | undefined } callback - 输入状态变化时，触发该回调。<br>isEditing：是否处于编辑态。<br> true：编辑态；false：非编辑态。<br>
   *     取值为undefined时，不使用回调函数。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onEditChange(callback: ((isEditing: boolean) => void) | undefined): this;
  /**
   * 进行复制操作时，触发该回调。
   * > **说明：**
   * >
   * > onWillCopy和onCopy形成will/did时序模式：
   * >
   * > - onWillCopy在复制操作前触发，可通过返回false拦截复制操作；返回true则允许复制，随后触发onCopy。
   * >
   * > - onCopy在复制操作完成后触发，无法拦截。
   * >
   * > - 两者可以同时使用，onWillCopy用于拦截控制，onCopy用于获取复制结果。
   *
   * @param { function | undefined } callback - 进行复制操作时，触发该回调。<br>value：复制的文本内容。<br>取值为undefined时，不使用回调函数。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onCopy(callback: ((value: string) => void) | undefined): this;
  /**
   * 在使用剪贴板复制菜单之前调用。
   *
   * @param { Callback<string, boolean> | undefined } callback - 判断是否允许拷贝的回调。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCopy(callback: Callback<string, boolean> | undefined): this;
  /**
   * 进行剪切操作时，触发该回调。
   * > **说明：**
   * >
   * > onWillCut和onCut形成will/did时序模式：
   * >
   * > - onWillCut在剪切操作前触发，可通过返回false拦截剪切操作；返回true则允许剪切，随后触发onCut。
   * >
   * > - onCut在剪切操作完成后触发，无法拦截。
   * >
   * > - 两者可以同时使用，onWillCut用于拦截控制，onCut用于获取剪切结果。
   *
   * @param { function | undefined } callback - 进行剪切操作时，触发该回调。<br>value：剪切的文本内容。 <br>取值为undefined时，不使用回调函数。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onCut(callback: ((value: string) => void) | undefined): this;
  /**
   * 在使用剪贴板剪切菜单之前调用。
   *
   * @param { Callback<string, boolean> | undefined } callback - 判断是否允许剪切的回调。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default onWillCut(callback: Callback<string, boolean> | undefined): this;
  /**
   * 进行粘贴操作时，触发该回调。
   *
   * @param { function | undefined } callback - 进行粘贴操作时，触发该回调。<br>value：粘贴的文本内容。<br>
   *     event：用户自定义的粘贴事件[PasteEvent](ts-basic-components-richeditor.md#pasteevent11) 。<br>取值为undefined时，不使用回调函数。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onPaste(callback: ((value: string, event: PasteEvent) => void) | undefined): this;
  /**
   * 设置输入的文本是否可复制。设置CopyOptions.None时，只支持粘贴和全选。未通过该接口设置时，默认输入的文本可复制（CopyOptions.LocalDevice，支持设备内复制）。
   *
   * 设置CopyOptions.None时，不支持拖拽操作。[enableSelectedDataDetector]{@link TextAreaAttribute#enableSelectedDataDetector}功能需要
   * CopyOptions为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时才生效。
   *
   * @param { CopyOptions | undefined } value - 输入的文本是否可复制。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default copyOption(value: CopyOptions | undefined): this;
  /**
   * 设置TextArea通过点击以外的方式获焦时，是否主动拉起软键盘。未通过该接口设置时，默认通过点击以外的方式获焦时主动拉起软键盘。
   * 从API version 10开始，获焦默认绑定输入法。
   *
   * @param { boolean | undefined } value - 通过点击以外的方式获焦时，是否主动拉起软键盘。<br>true表示主动拉起，false表示不主动拉起。<br>
   *     取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableKeyboardOnFocus(value: boolean | undefined): this;
  /**
   * 设置文本的最大输入字符数。到达文本最大字符限制，将无法继续输入字符。未通过该接口设置时，默认不设置最大输入字符数限制。
   *
   * @param { int | undefined } value - 文本的最大输入字符数。 <br>取值范围：[0, UINT32_MAX]。当value<0时，不设限制。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxLength(value: int | undefined): this;
  /**
   * 设置当通过InputCounterOptions输入的字符数超过阈值时显示计数器。未调用showCounter接口时，默认不显示计数器。
   * 参数value为true时，才能设置options，文本框开启计数器功能，需要配合maxLength（设置最大字符限制）一起使用，未设置maxLength时计数器功能不生效。字符计数器显示的效果是当前输入字符数/最大可输入字符数。
   * 当输入字符数大于最大字符数乘百分比值时，显示字符计数器。如果用户设置计数器时不设置InputCounterOptions，那么当前输入字符数达到最大字符数时，边框和计数器下标将变为红色。若用户同时设置参数value为true和
   * InputCounterOptions，当thresholdPercentage数值在有效区间内且输入字符数超过最大字符数时，边框和计数器下标将变为红色，框体抖动。计数器默认显示红色边框；highlightBorder设置为
   * false时，则不显示红色边框。内联模式下字符计数器不显示。
   * [示例2（设置计数器）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#示例2设置计数器)展示了设置showCounter的效果。
   *
   * @param { boolean | undefined } value - 是否显示计数器。
   *     <br>true表示显示计数器，false表示不显示。<br>取值为undefined时，不显示计数器。
   * @param { InputCounterOptions } [options] - Set the percentage of counter.
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default showCounter(value: boolean | undefined, options?: InputCounterOptions): this;
  /**
   * 设置文本框多态样式，内联输入风格只支持TextAreaType.NORMAL类型。未通过该接口设置时，默认文本框多态样式为TextContentStyle.DEFAULT。
   *
   * @param { TextContentStyle | undefined } value - 文本框多态样式。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default style(value: TextContentStyle | undefined): this;
  /**
   * 设置输入框滚动条的显示模式。未通过该接口设置时，默认输入框滚动条的显示模式为BarState.Auto。
   *
   * @param { BarState | undefined } value - 输入框滚动条的显示模式。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default barState(value: BarState | undefined): this;

  /**
   * 滚动条的颜色。
   *
   * @param { ColorMetrics | undefined } thumbColor - 滚动条缩略图TextArea的颜色。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default scrollBarColor(thumbColor: ColorMetrics | undefined): this;

  /**
   * 设置是否不弹出系统文本选择菜单。未通过该接口设置时，默认弹出系统文本选择菜单。
   *
   * @param { boolean | undefined } value - 是否不弹出系统文本选择菜单。<br>设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，
   *     不弹出系统文本选择菜单。<br>设置为false时，弹出系统文本选择菜单。<br>
   *     **说明：** 设置为true时，即使[setTextSelection](#settextselection10)方法中options设置为MenuPolicy.SHOW，也不会弹出菜单。
   *     <br>取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectionMenuHidden(value: boolean | undefined): this;
  /**
   * 设置文本最小显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * 需配合[maxFontSize]{@link TextAreaAttribute#maxFontSize}以及[maxLines]{@link TextAreaAttribute#maxLines(value: number)}或
   * 布局大小限制使用，单独设置不生效。
   *
   * 自适应字号生效时，fontSize设置不生效。
   *
   * minFontSize小于或等于0时，自适应字号不生效，此时按照[fontSize]{@link TextAreaAttribute#fontSize}属性的值生效，未设置时按照其默认值生效。
   *
   * @param { double | string | Resource | undefined } value - 文本最小显示字号。 <br>需配合maxFontSize以及maxLines或布局大小限制使用，单独设置不生效。
   *     <br>取值范围：(0, maxFontSize]。超出取值范围时按照fontSize属性值生效。 <br>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置文本最大显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。
   *
   * 需配合[minFontSize]{@link TextAreaAttribute#minFontSize}以及[maxLines]{@link TextAreaAttribute#maxLines(value: number)}或
   * 布局大小限制使用，单独设置不生效。
   *
   * 自适应字号生效时，fontSize设置不生效。
   *
   * maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照[fontSize]{@link TextAreaAttribute#fontSize}属性的值生效，未设置时按照其
   * 默认值生效。
   *
   * @param { double | string | Resource | undefined } value - 文本最大显示字号。 <br>需配合minFontSize以及maxLines或布局大小限制使用，单独设置不生效。
   *     <br>取值范围：(0, +∞)。超出取值范围时按照fontSize属性值生效。 <br>单位：
   *     [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontSize(value: double | string | Resource | undefined): this;
  /**
   * 设置文本最小的字体缩放倍数。
   *
   * @param { double | Resource | undefined } scale - 文本最小的字体缩放倍数，支持undefined类型。 <br>取值范围：[0, 1] <br>**说明：** <br>
   *     设置的值小于0时，按值为0处理。设置的值大于1，按值为1处理。异常值默认不生效。
   *     <br>使用前需在工程中配置configuration.json文件和app.json5文件，
   *     具体详见
   *     [示例17（设置最小字体范围与最大字体范围）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#示例17设置最小字体范围与最大字体范围)。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default minFontScale(scale: double | Resource | undefined): this;
  /**
   * 设置文本最大的字体缩放倍数。
   *
   * @param { double | Resource | undefined } scale - 文本最大的字体缩放倍数，支持undefined类型。 
   *     <br>取值范围：[1, +∞) <br>**说明：** <br>
   *     设置的值小于1时，按值为1处理。异常值默认不生效。
   *     <br>使用前需在工程中配置configuration.json文件和app.json5文件，具体详见
   *     [示例17（设置最小字体范围与最大字体范围）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#示例17设置最小字体范围与最大字体范围)。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxFontScale(scale: double | Resource | undefined): this;
  /**
   * 设置文本自适应高度的方式。未通过该接口设置时，默认文本自适应高度的方式为TextHeightAdaptivePolicy.MAX_LINES_FIRST。
   *
   * 当设置为TextHeightAdaptivePolicy.MAX_LINES_FIRST时，优先使用[maxLines]{@link TextAreaAttribute#maxLines(value: number)}属性来调整文
   * 本高度。如果使用maxLines属性的布局大小超过了布局约束，则尝试在[minFontSize]{@link TextAreaAttribute#minFontSize}和
   * [maxFontSize]{@link TextAreaAttribute#maxFontSize}的范围内缩小字体以显示更多文本。
   *
   * 组件设置为内联输入风格时，编辑态与非编辑态的字体大小可能不一致。
   *
   * 当设置为TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST时，优先使用minFontSize属性来调整文本高度。如果使用minFontSize属性可以将文本布局在一行中，则尝试在
   * minFontSize和maxFontSize的范围内增大字体并使用最大可能的字体大小。
   *
   * 当设置为TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST时，优先使用布局约束来调整文本高度。如果布局大小超过布局约束，则尝试在minFontSize和maxFontSize的范围内缩
   * 小字体以满足布局约束。
   *
   * @param { TextHeightAdaptivePolicy | undefined } value - 文本自适应高度的方式。 <br>MAX_LINES_FIRST优先使用maxLines调整高度，
   *     超出布局约束时在minFontSize和maxFontSize范围内缩小字体；MIN_FONT_SIZE_FIRST优先使用minFontSize调整 高度；LAYOUT_CONSTRAINT_FIRST优先使用布局约束调整高度，
   *     超出约束时缩小字体。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default heightAdaptivePolicy(value: TextHeightAdaptivePolicy | undefined): this;
  /**
   * 定义文本区域的最大行数。
   * 取值范围：(0, +∞)
   *
   * <p><strong>注意</strong>：
   * <br>设置可以显示的最大行数。
   * <br>设置textOverflow时，如果内容超过此限制，文本将被截断。
   * <br>当textOverflow未设置时，在内联样式中
   * 当文本框处于焦点状态时，如果内容超出限制，则文本是可滚动的；
   * 当文本框没有焦点时，maxLines不适用。
   * <br>在非内联样式中，文本会根据行数进行截断。
   * <br>默认值：内联样式为3，非内联样式为+∞，
   * 表示没有最大行数。
   * </p>
   *
   * @param { int | undefined } value - 节点最大行数
   * @param { MaxLinesOptions } [options] - 设置选项的最大行数。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default maxLines(value: int | undefined, options?: MaxLinesOptions): this;
  /**
   * 设置文本断行规则。该属性对placeholder文本无效。当设置为WordBreak.BREAK_ALL时，
   * [lineBreakStrategy]{@link TextAreaAttribute#lineBreakStrategy}属性不生效，
   * [orphanCharOptimization]{@link TextAreaAttribute#orphanCharOptimization}功能也不生效。未通过该接口设置时，默认文本断行规则为
   * WordBreak.BREAK_WORD。
   * @param { WordBreak | undefined } value - 文本断行规则。<br>取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default wordBreak(value: WordBreak | undefined): this;
  /**
   * 设置折行规则。适用于需要优化多行文本换行效果的场景，例如GREEDY策略适合一般文本的快速排版，HIGH_QUALITY策略适合对排版质量要求较高的正式文档，BALANCED策略适合需要各行宽度均衡的展示场景。该属性在
   * [wordBreak]{@link TextAreaAttribute#wordBreak}不等于WordBreak.BREAK_ALL的时候生效，不支持连词符。未通过该接口设置时，默认文本的折行规则为
   * LineBreakStrategy.GREEDY。
   * @param { LineBreakStrategy | undefined } strategy - 文本的折行规则。
   *     该属性在[wordBreak](#wordbreak12)不等于WordBreak.BREAK_ALL时生效，不支持连词符。<br>取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineBreakStrategy(strategy: LineBreakStrategy | undefined): this;
  /**
   * 定义多行文本输入框的自定义键盘。
   *
   * <p><strong>注意</strong>:
   * <br>设置自定义键盘时，激活文本框将打开指定的自定义组件，而不是系统输入法。
   * <br>自定义键盘的高度可以通过自定义组件的根节点的height属性设置，
   * 其宽度固定为默认值。
   * <br>自定义键盘通过覆盖原屏幕的方式呈现，如果未启用回避模式或文本框不需要回避，则不会压缩或提升该键盘。
   * <br>自定义键盘无法获取焦点，但会阻止手势事件。
   * <br>默认情况下，当输入组件失去焦点时，自定义键盘将关闭。
   * <br>您也可以使用TextAreaController.stopEditing API来关闭键盘。
   * <br>设置自定义键盘时，文本框不支持相机输入，即使设备支持。
   * <br>设置自定义键盘时，可以绑定onKeyPrelme事件，防止物理键盘输入。
   * </p>
   *
   * @param { CustomBuilder | ComponentContentBase | undefined } value - 设置多行文本输入框的自定义键盘。
   *     传入 undefined 可将其重置为默认键盘。
   * @param { KeyboardOptions } [options] - 指多行文本输入框的自定义键盘选项
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default customKeyboard(value: CustomBuilder | ComponentContentBase | undefined, options?: KeyboardOptions): this;

  /**
   * 设置文本装饰线类型样式及其颜色。未通过该接口设置时，默认文本装饰线对象为
   *
   * {
   *
   * &nbsp;type:&nbsp;TextDecorationType.None,
   *
   * &nbsp;color:&nbsp;Color.Black,
   *
   * &nbsp;style:&nbsp;TextDecorationStyle.SOLID,
   *
   * &nbsp;thicknessScale:&nbsp;1.0
   *
   * }
   *
   * @param { TextDecorationOptions | undefined } value - 文本装饰线对象。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default decoration(value: TextDecorationOptions | undefined): this;
  /**
   * 设置文本字符间距。设置该值为百分比时，按默认值显示。当设置该值为0时，使用默认值。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。未通过该接口设置时，默认文本字符间距为0fp。
   *
   * 当取值为负值时，文字会发生压缩，负值过小时会将组件内容区大小压缩为0，导致无内容显示。
   *
   * 对每个字符生效，包括行尾字符。
   *
   * @param { double | string | Resource | undefined } value - 文本字符间距。 <br>设置为百分比时按默认值处理；设置为0时使用默认值；负值会导致文字压缩，
   *     过小时可能无内容显示。 <br>单位：[fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位)
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default letterSpacing(value: double | string | Resource | undefined): this;
  /**
   * 设置字体行间距。
   * <p><strong>注意</strong>：
   * <br>如果指定的值小于或等于0，则使用默认值0。
   * </p>
   * @param { LengthMetrics | undefined } value - 文本的行间距。设置值不大于0时，取默认值0。<br>取值为undefined时，按默认值处理。
   * @param { LineSpacingOptions } [options] - 设置行间距配置项。<br>默认值：{ onlyBetweenLines: false }
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineSpacing(value: LengthMetrics | undefined, options?: LineSpacingOptions): this;
  /**
   * 设置文本的行高，设置值不大于0时，不限制文本行高，自适应字体大小。
   *
   * @param { double | string | Resource | undefined } value - 文本的行高。需要显式指定[像素单位]{@link CommonMethod}，如'10px'，
   *     也可设置百分比字符串，如'100%'。 <br>**说明**：不指定像素单位时，默认单位fp，如'10'，等同于10。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default lineHeight(value: double | string | Resource | undefined): this;
  /**
   * 设置输入框类型。未通过该接口设置时，默认输入框类型为TextAreaType.NORMAL。
   *
   * 不同的TextAreaType会拉起对应类型的键盘，同时限制输入。从API version 11开始，设置[inputFilter]{@link TextAreaAttribute#inputFilter}且输入的字符不为空字符
   * 时，type接口附带的文本过滤效果失效。
   *
   * @param { TextAreaType | undefined } value - 输入框类型。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default type(value: TextAreaType | undefined): this;
  /**
   * 设置是否启用自动填充。<!--RP2--><!--RP2End-->未通过该接口设置时，默认启用自动填充。
   *
   * <!--RP6--><!--RP6End-->
   *
   * @param { boolean | undefined } value - 是否启用自动填充。 <br>true表示启用，false表示不启用。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableAutoFill(value: boolean | undefined): this;
  /**
   * 设置自动填充类型。<!--RP3--><!--RP3End-->
   *
   * @param { ContentType | undefined } contentType - 自动填充类型，用于指定输入框的自动填充内容类型，以便系统提供正确的自动填充建议。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default contentType(contentType: ContentType | undefined): this;

  /**
   * 启用选中数据AI识别。
   *
   * @param { boolean | undefined } enable - 是否启用所选数据AI识别。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableSelectedDataDetector(enable: boolean | undefined): this;

  /**
   * 设置文字特性效果，比如数字等宽的特性。
   *
   * 格式为：normal \| \<feature-tag-value\>
   *
   * \<feature-tag-value\>的格式为：\<string\> \[ \<integer\> \| on \| off ]
   *
   * \<feature-tag-value\>的个数可以有多个，中间用','隔开。
   *
   * 例如，使用等宽数字的输入格式为："ss01" on。
   *
   * @param { string | undefined } value - 文字特性效果，用于设置文字的特殊显示效果，如数字等宽等。格式为：normal | <feature-tag-value>。
   *     <br>取值为undefined时，按默认值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fontFeature(value: string | undefined): this;
  /**
   * 在将要输入时，触发该回调。
   *
   * > **说明：**
   * >
   * > onWillInsert和onDidInsert形成will/did时序模式：
   * >
   * > - onWillInsert在插入操作前触发，可通过返回false拦截插入操作；返回true则允许插入，随后触发onDidInsert。
   * >
   * > - onDidInsert在插入完成后触发，无法拦截。
   * >
   * > - 两者可以同时使用，onWillInsert用于拦截控制，onDidInsert用于获取插入结果。
   *
   * @param { Callback<InsertValue, boolean> | undefined } callback - 在将要输入时调用的回调。 <br>在返回true时，表示正常插入，返回false时，表示不插入。
   *     <br>在预上屏和候选词操作时，该回调不触发。 <br>仅支持系统输入法输入的场景。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillInsert(callback: Callback<InsertValue, boolean> | undefined): this;
  /**
   * 在输入完成时，触发该回调。
   *
   * > **说明：**
   * >
   * > onWillInsert和onDidInsert形成will/did时序模式：
   * >
   * > - onWillInsert在插入操作前触发，可通过返回false拦截插入操作；返回true则允许插入，随后触发onDidInsert。
   * >
   * > - onDidInsert在插入完成后触发，无法拦截。
   * >
   * > - 两者可以同时使用，onWillInsert用于拦截控制，onDidInsert用于获取插入结果。
   *
   * @param { Callback<InsertValue> | undefined } callback - 在输入完成时调用的回调。 <br>仅支持系统输入法输入的场景。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidInsert(callback: Callback<InsertValue> | undefined): this;
  /**
   * 在将要删除时，触发该回调。
   *
   * 点击清除按钮不触发onWillDelete回调。
   *
   * > **说明：**
   * >
   * > - 点击清除按钮不触发onWillDelete回调。
   * >
   * > - onWillDelete和onDidDelete形成will/did时序模式：
   * >
   * > - onWillDelete在删除操作前触发，可通过返回false拦截删除操作；返回true则允许删除，随后触发onDidDelete。
   * >
   * > - onDidDelete在删除完成后触发，无法拦截。
   * >
   * > - 两者可以同时使用，onWillDelete用于拦截控制，onDidDelete用于获取删除结果。
   *
   * @param { Callback<DeleteValue, boolean> | undefined } callback - 在将要删除时调用的回调。 <br>在返回true时，表示正常删除，返回false时，表示不删除。
   *     <br>在预上屏和候选词操作时，该回调不触发。点击清除按钮不触发onDidDelete回调。 <br>仅支持系统输入法输入的场景。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillDelete(callback: Callback<DeleteValue, boolean> | undefined): this;
  /**
   * 在删除完成时，触发该回调。
   *
   * > **说明：**
   * >
   * > - 点击清除按钮不触发onDidDelete回调。
   * >
   * > - onWillDelete和onDidDelete形成will/did时序模式：
   * >
   * > - onWillDelete在删除操作前触发，可通过返回false拦截删除操作；返回true则允许删除，随后触发onDidDelete。
   * >
   * > - onDidDelete在删除完成后触发，无法拦截。
   * >
   * > - 两者可以同时使用，onWillDelete用于拦截控制，onDidDelete用于获取删除结果。
   *
   * @param { Callback<DeleteValue> | undefined } callback - 在删除完成时调用的回调。 <br>点击清除按钮不触发onDidDelete回调。 <br>仅支持系统输入法输入的场景。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onDidDelete(callback: Callback<DeleteValue> | undefined): this;
  /**
   * 设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。
   *
   * 调用[disableMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableMenuItems}或
   * [disableSystemServiceMenuItems]{@link @ohos.arkui.UIContext:TextMenuController.disableSystemServiceMenuItems}接口屏蔽文本
   * 选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法[onCreateMenu]{@link EditMenuOptions.onCreateMenu}的入参列表中不包含被屏蔽的菜单选项。
   *
   * @param { EditMenuOptions | undefined } editMenu - 扩展菜单选项，用于自定义文本选择菜单扩展项，允许设置扩展项的文本内容、图标、回调方法。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default editMenuOptions(editMenu: EditMenuOptions | undefined): this;
  /**
   * 设置是否开启输入预上屏。未通过该接口设置时，默认开启输入预上屏。
   *
   * 预上屏内容定义为文字暂存态，目前不支持文字拦截功能。
   *
   * @param { boolean | undefined } enable - 是否开启输入预上屏。 <br>true表示开启，false表示不开启。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enablePreviewText(enable: boolean | undefined): this;
  /**
   * 设置是否开启触控反馈。未通过该接口设置时，默认开启触控反馈。
   * 开启触控反馈时，需要在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段以开启振动权限，配置如
   * 下：
   * <code>
   * "requestPermissions": [
   *   {
   *      "name": "ohos.permission.VIBRATE",
   *   }
   * ]
   * </code>
   * @param { boolean | undefined } isEnabled - 是否开启触控反馈。<br>true表示开启，false表示不开启。<br>取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default enableHapticFeedback(isEnabled: boolean | undefined): this;
  /**
   * 设置语音输入配置项
   *
   * @param { VoiceButtonOptions | undefined } options - 语音按钮的选项。
   * @returns { TextAreaAttribute } returns the instance of the TextAreaAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default voiceButton(options: VoiceButtonOptions | undefined): this;
  /**
   * 设置自动大小写模式的文本模式，只提供接口能力，具体实现以输入法应用为主。未通过该接口设置时，默认不产生大小写转换效果，具体实现以输入法应用为主。
   *
   * @param { AutoCapitalizationMode | undefined } mode - 自动大小写模式，用于设置输入法的大小写转换规则，具体实现以输入法应用为主。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default autoCapitalizationMode(mode: AutoCapitalizationMode | undefined): this;
  /**
   * 设置文本是否使用半行距。
   *
   * @param { boolean | undefined } halfLeading - 默认值为false。值为true表示启用半行距，false表示不启用。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default halfLeading(halfLeading: boolean | undefined): this;
  /**
   * 设置省略位置。ellipsisMode属性需要配合[textOverflow]{@link TextAreaAttribute#textOverflow}设置为TextOverflow.Ellipsis以及
   * [maxLines]{@link TextAreaAttribute#maxLines(value: number)}使用，单独设置ellipsisMode属性不生效。未通过该接口设置时，默认省略位置为
   * EllipsisMode.END。
   * EllipsisMode.START和EllipsisMode.CENTER仅在[maxLines]{@link TextAreaAttribute#maxLines(value: number)}设置为1生效。
   * @param { EllipsisMode | undefined } mode - 省略位置。
   *     需配合[textOverflow](#textoverflow12)设置为TextOverflow.Ellipsis以及[maxLines](#maxlines10)使用，单独设置不生效。
   *     <br>EllipsisMode.START和EllipsisMode.CENTER仅在maxLines设置为1时生效。<br>取值为undefined时，按默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default ellipsisMode(mode: EllipsisMode | undefined): this;
  /**
   * 设置是否阻止返回按键的回调事件。
   *
   * @param { boolean | undefined } isStopped - 默认值为true，设置为false将触发最近的回调事件。
   * @returns { TextAreaAttribute } - 返回TextAreaAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default stopBackPress(isStopped: boolean | undefined): this;
  /**
   * 在文本内容将要发生变化时，触发该回调。
   *
   * > **说明：**
   * >
   * > - onWillChange的回调时序晚于onWillInsert、onWillDelete，早于onDidInsert、onDidDelete。
   * >
   * > - onWillChange和onChange形成will/did时序模式：
   * >
   * > - onWillChange在文本变更前触发，可通过返回false拦截变更；返回true则允许变更，随后触发onChange。
   * >
   * > - onChange在变更完成后触发，无法拦截。
   * >
   * > - 两者可以同时使用，onWillChange用于拦截控制，onChange用于获取变更结果。
   * > onWillChange的回调时序晚于onWillInsert、onWillDelete，早于onDidInsert、onDidDelete。
   *
   * @param { Callback<EditableTextChangeValue, boolean> | undefined } callback - 在文本内容将要发生变化时的回调。 <br>返回true时，表示正常修改。
   *     返回false时，表示拦截此次触发。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default onWillChange(callback: Callback<EditableTextChangeValue, boolean> | undefined): this;
  /**
   * 设置键盘外观样式。
   *
   * @param { KeyboardAppearance | undefined } appearance - 默认值为 KeyboardAppearance.NONE_IMMERSIVE
   * @returns { TextAreaAttribute } - 返回 TextAreaAttribute实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default keyboardAppearance(appearance: KeyboardAppearance | undefined): this;
  /**
   * 是否启用中文和拉丁字符之间的自动间隔。
   *
   * @param { boolean | undefined } enabled - 默认值为false。
   *     是否启用自动间隔标志。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default enableAutoSpacing(enabled: boolean | undefined): this;
  /**
   * 除支持[通用属性]{@link CommonMethod}，还支持以下属性：
   * > **说明：**
   * >
   * > [通用属性padding]{@link CommonMethod#padding}的默认值为
   * {
   * &nbsp;top: '8vp',
   * &nbsp;right: '16vp',
   * &nbsp;bottom: '8vp',
   * &nbsp;left: '16vp'
   * }
   * > 从API version 11开始，多行输入框可设置.width('auto')使组件宽度自适应文本宽度，自适应时组件宽度受constraintSize属性以及父容器传递的最大最小宽度限制，其余使用方式参考
   * > [尺寸设置]{@link CommonMethod}。
   *
   * @param { AttributeModifier<TextAreaAttribute> | AttributeModifier<CommonMethod> | undefined } modifier - undefined
   *     动态设置TextArea组件的属性。<br>取值为undefined时，按当前组件的属性方法默认值处理。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<TextAreaAttribute> | AttributeModifier<CommonMethod> | undefined): this;
  /**
   * 设置描边宽度。
   *
   * @param { LengthMetrics | undefined } width - 表示描边宽度。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default strokeWidth(width: LengthMetrics | undefined): this;
  /**
   * 设置描边颜色。
   *
   * @param { ResourceColor | undefined } color - 表示描边颜色。
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default strokeColor(color: ResourceColor | undefined): this;
  /**
   * 定义多行输入框的最小行数。
   *
   * @param { int | undefined } lines - 节点的最小行数
   *     传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default minLines(lines: int | undefined): this;

  /**
   * 该方法在输入框组件绑定输入法前被调用。
   *
   * @param { Callback<IMEClient> | undefined } callback - 在输入框组件绑定输入法前被调用的回调函数。
   *     若undefined被传入，则当前绑定的回调函数会被移除。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default onWillAttachIME(callback: Callback<IMEClient> | undefined): this;
  /**
   * 用于设置拖拽后的背板样式。
   *
   * @param { SelectedDragPreviewStyle | undefined } value - 选中拖拽后的背板样式。
   *        若传入undefined会重置样式。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): this;
  /**
   * 设置文本方向。
   *
   * @param { TextDirection | undefined } direction - 表示文本方向。
   *     当设置为undefined，该属性会被重置为TextDirection.DEFAULT。
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default textDirection(direction: TextDirection | undefined): this;
  /**
   * 确定布局是否在顶部和底部添加额外的填充，以便为字符腾出空间。
   *
   * @param { boolean | undefined } include - 是否开启，默认为false。
   *     传`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } - 返回TextInputAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default includeFontPadding(include: boolean | undefined): this;
  /**
   * 是否包含回退字体的上升/下降，以防止重叠行。
   *
   * @param { boolean | undefined } enabled - 是否开启，默认为false。传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } - 返回TextInputAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default fallbackLineSpacing(enabled: boolean | undefined): this;
  /**
   * 是否压缩行首的标点符号。
   *
   * @param { boolean | undefined } enabled - 是否开启，默认为false。传递`undefined`会将其重置为默认值。
   * @returns { TextAreaAttribute } - 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  default compressLeadingPunctuation(enabled: boolean | undefined): this;
  /**
   * 是否避免在段落的最后一行出现孤词。
   *
   * @param { boolean | undefined } enabled - 如果为true，则启用该功能；如果为false，则禁用该功能。
   *     默认值为false。
   * @returns { TextAreaAttribute } - 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 26.0.0 static
   */
  default orphanCharOptimization(enabled: boolean | undefined): this;
  /**
   * 当文本宽度大于视图时，是否启用水平滚动。
   * 默认值为false，文本达到控件宽度自动换行。
   *
   * @param { boolean | undefined } enabled - 是否启用水平滚动。true表示开启此功能，false表示关闭此功能。
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  default horizontalScrolling(enabled: boolean | undefined): this;
  /**
   * 设置描边的连接样式。
   *
   * @param { StrokeJoinStyle | undefined } strokeJoinStyle - 描边的连接样式。
   *     传递`undefined`会将其重置为默认值
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): this;

  /**
   * 设置文本的着色器样式，如线性渐变或径向渐变。
   *
   * @param { ShaderStyle | undefined } shader - 文本的着色器样式。
   *     传递`undefined`会将其重置为默认值
   * @returns { TextAreaAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default shaderStyle(shader: ShaderStyle | undefined): this;

  /**
   * 是否启用行尾标点溢出。
   *
   * @param { boolean | undefined } enabled - 是否开启，默认为false。
   *     传递`undefined`会将其重置为默认值
   * @returns { TextAreaAttribute } 返回TextAreaAttribute的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  default punctuationOverflow(enabled: boolean | undefined): this;

  /**
   * 设置TextArea组件选项。
   *
   * @param { TextAreaOptions } [value] - 构建TextArea组件的选项。
   * @returns { TextAreaAttribute } 返回TextArea属性的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @unpublished
   * @stagemodelonly
   * @since 26.0.1 staticonly
   */
  default setTextAreaOptions(value?: TextAreaOptions): this;
}

/**
 * 定义多行输入框组件。
 *
 * @param { TextAreaOptions } [value]
 * @returns { TextAreaAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function TextArea(
    value?: TextAreaOptions
): TextAreaAttribute;

/**
 * 定义TextArea组件。
 *
 * @param { CustomBuilderT<TextAreaAttribute> } style - TextArea属性实例。
 * @returns { TextAreaAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @unpublished
 * @stagemodelonly
 * @since 26.0.1 staticonly
 * @noninterop
 */
@Builder
export declare function TextArea(
    style: CustomBuilderT<TextAreaAttribute>,
): TextAreaAttribute;