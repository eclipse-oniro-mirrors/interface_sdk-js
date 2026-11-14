'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
import { Component } from '@ohos.arkui.component';
import { ResourceStr } from '@ohos.arkui.component';
import { PropRef } from '@ohos.arkui.stateManagement';
import { SymbolGlyphModifier } from 'arkui.SymbolGlyphModifier';
import { Builder } from '@ohos.arkui.component';
/**
 * 列表左侧图标类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare enum IconType {
  /**
   * 左侧图标为badge类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BADGE = 1,
  /**
   * 左侧图标为小图标类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NORMAL_ICON = 2,
  /**
   * 左侧图标为系统图标类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SYSTEM_ICON = 3,
  /**
   * 左侧图标为头像类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HEAD_SCULPTURE = 4,
  /**
   * 左侧图标为应用图标类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  APP_ICON = 5,
  /**
   * 左侧图标为预览图类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PREVIEW = 6,
  /**
   * 左侧图标为横向特殊比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LONGITUDINAL = 7,
  /**
   * 左侧图标为竖向特殊比例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  VERTICAL = 8
}
/**
 * 列表右侧图标元素的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class OperateIcon {
  /**
   * 右侧图标/箭头资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: ResourceStr;
  /**
   * 右侧Symbol图标/箭头资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public symbolStyle?: SymbolGlyphModifier;

  /**
   * 右侧图标/箭头点击事件。
   *
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public action?: () => void;
  /**
   * 右侧图标/箭头的无障碍文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityText?: ResourceStr;
  /**
   * 右侧图标/箭头的无障碍描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityDescription?: ResourceStr;
  /**
   * 右侧图标/箭头的无障碍重要性。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityLevel?: string;
}
/**
 * 列表右侧元素为Switch、CheckBox、Radio的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class OperateCheck {
  /**
   * 右侧Switch/CheckBox/Radio选中状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public isCheck?: boolean;
  /**
   * 右侧Switch/CheckBox/Radio选中状态改变时触发回调。
   *
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public onChange?: (value: boolean) => void;
  /**
   * 右侧Switch/CheckBox/Radio的无障碍文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityText?: ResourceStr;
  /**
   * 右侧Switch/CheckBox/Radio的无障碍描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityDescription?: ResourceStr;
  /**
   * 右侧Switch/CheckBox/Radio的无障碍重要性。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityLevel?: string;
}
/**
 * 列表右侧按钮元素的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class OperateButton {
  /**
   * 右侧按钮文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public text?: ResourceStr;
  /**
   * 右侧按钮的无障碍文本属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityText?: ResourceStr;
  /**
   * 右侧按钮的无障碍描述。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityDescription?: ResourceStr;
  /**
   * 右侧按钮的无障碍重要性。
   *
   * @default "auto"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public accessibilityLevel?: string;
}
/**
 * Declare ContentItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class ContentItem {
  /**
   * 左侧元素的图标样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public iconStyle?: IconType;
  /**
   * 左侧元素的图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public icon?: ResourceStr;
  /**
   * 左侧元素的Symbol图标样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public symbolStyle?: SymbolGlyphModifier;
  /**
   * 中间元素的标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public primaryText?: ResourceStr;
  /**
   * 中间元素的副标题内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public secondaryText?: ResourceStr;
  /**
   * 中间元素的描述内容。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public description?: ResourceStr;
}
/**
 * Declare OperateItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare class OperateItem {
  /**
   * 右侧元素的第一个图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public icon?: OperateIcon;
  /**
   * 右侧元素的第二个图标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public subIcon?: OperateIcon;
  /**
   * 右侧元素为按钮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public button?: OperateButton;
  /**
   * 右侧元素为开关。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  public toggle?: OperateCheck;
  /**
   * 右侧元素为多选框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public checkbox?: OperateCheck;
  /**
   * 右侧元素为单选框。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public radio?: OperateCheck;
  /**
   * 右侧元素为图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public image?: ResourceStr;
  /**
   * 右侧元素为Symbol图标资源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public symbolStyle?: SymbolGlyphModifier;
  /**
   * 右侧元素为文字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public text?: ResourceStr;
  /**
   * 右侧元素为箭头。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public arrow?: OperateIcon;
}
/**
 * Declare ComposeListItem
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@Component
export declare struct ComposeListItem {
  /**
   * The ContentItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  contentItem?: ContentItem;
  /**
   * The OperateItem.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  @PropRef
  operateItem?: OperateItem;
  /**
   * 构建组件的方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}