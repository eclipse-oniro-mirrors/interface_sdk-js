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

/**
 * Enumerates the **GridItem** styles, used to define the interaction state styles of **GridItem**.
 *
 * > **NOTE**
 * >
 * > To set the focused style for the grid item, the grid container must have paddings of greater than 4 vp for
 * > accommodating the focus frame of the grid item.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum GridItemStyle {

  /**
   * No style. **Hover** and **Press** state styles are not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  NONE = 0,

  /**
   * Displays **Hover** and **Press** state styles. The **Hover** state is the style when the mouse hovers, and the
   * **Press** state is the style when pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PLAIN = 1,
}

/**
 * Defines the **GridItem** style object, used to configure the style options of **GridItem**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GridItemOptions {

  /**
   * Style of **GridItem**.
   *
   * Default value: **GridItemStyle.NONE**
   *
   * When set to **GridItemStyle.NONE**, no style is applied.
   *
   * When set to **GridItemStyle.PLAIN**, the **Hover** and **Press** state styles are displayed. The **Hover** state is
   * the style when the mouse hovers over the item, and the **Press** state is the style when the item is pressed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style?: GridItemStyle;
}

/**
 * The **GridItem** component provides a single item in a grid.
 *
 * > **NOTE**
 * >
 * > * This component can be used only as a child of [Grid]{@link ./grid}.
 * >
 * > * When this component is used with
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are
 * > created when it is created. When this component is used with
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is
 * > **Grid**, its child components are created when it is laid out.
 * >
 * > * If a **Grid** component contains a large number of **GridItem** components, using
 * > [columnStart]{@link GridItemAttribute#columnStart}/[columnEnd]{@link GridItemAttribute#columnEnd} or
 * > [rowStart]{@link GridItemAttribute#rowStart}/[rowEnd]{@link GridItemAttribute#rowEnd} to set the size of
 * > **GridItem** components can lead to performance issues, especially when **scrollToIndex** is used to scroll to a
 * > specific index. This is because **Grid** will traverse all **GridItem** nodes sequentially to find the specified
 * > index, which can be time-consuming. To address this issue, it is recommended that you use
 * > [GridLayoutOptions]{@link GridLayoutOptions} for layout, which significantly improves the efficiency of finding the
 * > position of **GridItem** components. For best practices, see
 * > [Optimizing Frame Loss for Grid Component Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-improve_grid_performance).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface GridItemInterface {
  /**
   * Creates a **GridItem** component.
   *
   * @param { GridItemOptions } value - Optional parameters for **GridItem**. This object contains the **style**
   *     parameter of the [GridItemStyle]{@link GridItemStyle} enum type. When not passed, the default style is used,
   *     that is, **GridItemStyle.NONE**.<br/> [since 11]
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (value?: GridItemOptions): GridItemAttribute;
}

/**
 * Rules for setting **rowStart**, **rowEnd**, **columnStart**, and **columnEnd**:
 * The valid value range of **rowStart** and **rowEnd** is 0 to the total number of rows minus 1.
 * The valid value range of **columnStart** and **columnEnd** is 0 to the total number of columns minus 1.
 * If **rowStart**, **rowEnd**, **columnStart**, or **columnEnd** is set, **GridItem** components occupy
 * the specified number of rows (**rowEnd** - **rowStart** + 1) or columns (**columnEnd** - **columnStart** + 1).
 * **GridItem** components with properly configured **rowStart** or **rowEnd** or **columnStart** or **columnEnd**
 * attributes can only be laid out according to the specified grid coordinates when the parent **Grid**
 * has both **columnsTemplate** and **rowsTemplate** defined.
 * In the **Grid** component with both **columnsTemplate** and **rowsTemplate** set,
 * **GridItem** components that have **rowStart** or **rowEnd** or **columnStart** or **columnEnd** set
 * are laid out in a row-by-row then column-by-column manner.
 * In the **Grid** component with only **columnsTemplate** set,
 * **GridItem** components that have **columnStart** or **columnEnd** set are laid out in the specified columns.
 * If there are already grid items in those columns, the grid items will be laid out in another row.
 * In the **Grid** component with only **rowsTemplate** set,
 * **GridItem** components that have **rowStart** or **rowEnd** set are laid out on the specified rows.
 * If there are already grid items in those rows, the grid items will be laid out in another column.
 * In the **Grid** component with neither **columnsTemplate** nor **rowsTemplate** set,
 * the row and column number attributes have no effect for **GridItem** components.
 * The following table describes the rules for handling abnormal values for **GridItem** row and column numbers.
 *
 * | Attribute Setting | Exception Type| Layout Principles After Correction |
 * | ----- |----| ------------------------ |
 * | Only **columnsTemplate** is set |  Any row or column exception| Laid out in a row-by-row then column-by-column manner|
 * | Only **rowsTemplate** is set|  Any row or column exception| Laid out in a row-by-row then column-by-column manner|
 * | Both **rowsTemplate** and **columnsTemplate** are set|  rowStart < rowEnd | Row span = min(rowEnd - rowStart + 1, total number of rows)|
 * | Both **rowsTemplate** and **columnsTemplate** are set|  rowStart > rowEnd | Laid out in a row-by-row then column-by-column manner|
 * | Both **rowsTemplate** and **columnsTemplate** are set|  columnStart < columnEnd | Column span = min(columnEnd - columnStart + 1, total number of columns)|
 * | Both **rowsTemplate** and **columnsTemplate** are set|  columnStart > columnEnd | Laid out in a row-by-row then column-by-column manner|
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class GridItemAttribute extends CommonMethod<GridItemAttribute> {

  /**
   * Sets the start row number of the component.
   *
   * @param { number } value - Start row number of the component.
   *     <br>In scenarios where you need to specify the start row and column numbers and the number of rows and columns
   *     of a **GridItem**, you are advised to use the [GridLayoutOptions]{@link GridLayoutOptions} parameter of the
   *     **Grid** component. For details, see
   *     [Example 1: Creating a Fixed Row and Column Grid Layout](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout)
   *     and
   *     [Example 3: Implementing a Scrollable Grid with Grid Items Spanning Rows and Columns](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
   *     <br>Value range: [0, Total number of rows – 1].
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowStart(value: number): GridItemAttribute;

  /**
   * Sets the end row number of the component.
   *
   * @param { number } value - End row number of the current element.<br/>In scenarios where you need to specify the
   *     start row and column and the occupied rows and columns of a **GridItem**, you are advised to use the
   *     [GridLayoutOptions]{@link GridLayoutOptions} parameter of **Grid**. For details, see
   *     [Example 1: Creating a Fixed Row and Column Grid Layout](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout)
   *     and
   *     [Example 3: Implementing a Scrollable Grid with Grid Items Spanning Rows and Columns](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
   *     <br/>Value range: [0, Total Rows - 1]
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  rowEnd(value: number): GridItemAttribute;

  /**
   * Sets the start column number of the component.
   *
   * @param { number } value - Start column number of the component.
   *     <br>In scenarios where you need to specify the start row and column numbers and the number of rows and columns
   *     of a **GridItem**, you are advised to use the [GridLayoutOptions]{@link GridLayoutOptions} parameter of the
   *     **Grid** component. For details, see
   *     [Example 1: Creating a Fixed Row and Column Grid Layout](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout)
   *     and
   *     [Example 3: Implementing a Scrollable Grid with Grid Items Spanning Rows and Columns](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
   *     <br>Value range: [0, Total number of columns – 1].
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnStart(value: number): GridItemAttribute;

  /**
   * Sets the end column number of the component.
   *
   * @param { number } value - End column number of the component.
   *     <br>In scenarios where you need to specify the start row and column numbers and the number of rows and columns
   *     of a **GridItem**, you are advised to use the [GridLayoutOptions]{@link GridLayoutOptions} parameter of the
   *     **Grid** component. For details, see
   *     [Example 1: Creating a Fixed Row and Column Grid Layout](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-1-creating-a-fixed-row-and-column-grid-layout)
   *     and
   *     [Example 3: Implementing a Scrollable Grid with Grid Items Spanning Rows and Columns](docroot://reference/apis-arkui/arkui-ts/ts-container-grid.md#example-3-implementing-a-scrollable-grid-with-grid-items-spanning-rows-and-columns).
   *     <br>Value range: [0, Total number of columns – 1].
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  columnEnd(value: number): GridItemAttribute;

  /**
   * Whether to re-create the component when it is being built.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Whether to re-create the component
   * > is automatically determined based on the component attributes and child component changes. No manual
   * > configuration is required.
   *
   * @param { boolean } value - Whether to recreate this node when the component build is triggered. The value **true**
   *     means to recreate the node, and **false** means not to forcibly recreate the node.<br/>Default value: **false**
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  forceRebuild(value: boolean): GridItemAttribute;

  /**
   * Sets whether the grid item is selectable in the mouse selection box area. This attribute takes effect only when
   * mouse box selection is enabled for the parent **Grid** container.
   *
   * This attribute must be used before the [polymorphic style]{@link ./common} is set. Otherwise, the style settings
   * will not take effect.
   *
   * @param { boolean } value - Whether the grid item is selectable in the mouse selection box area. The value **true**
   *     means that the grid item is selectable in the mouse selection box area, and **false** means the opposite.
   *     <br>Default value: **true**.
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  selectable(value: boolean): GridItemAttribute;

  /**
   * Sets whether the grid item is selected. This attribute supports two-way binding through
   * [$$](docroot://ui/state-management/arkts-two-way-sync.md).
   *
   * This attribute must be used before the [polymorphic style]{@link ./common} is set. Otherwise, the style settings
   * will not take effect.
   *
   * @param { boolean } value - Whether the current **GridItem** is selected. The value **true** indicates the selected
   *     state, and **false** indicates the unselected state.<br/>Default value: **false**
   * @returns { GridItemAttribute } the attribute of the gridItem.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  selected(value: boolean): GridItemAttribute;

  /**
   * Triggered when the selected state of the grid item changes.
   *
   * @param { function } event - Callback invoked when the selected state changes.
   *     The input parameter **isSelected**: Whether the item is selected.
   *     The value **true** indicates that the item enters the mouse selection range and is selected,
   *     and **false** indicates that the item moves out of the mouse selection range and is not selected.
   * @returns { GridItemAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onSelect(event: (isSelected: boolean) => void): GridItemAttribute;
}

/**
 * The **GridItem** component provides a single item in a grid.
 *
 * > **NOTE**
 * >
 * > * This component can be used only as a child of [Grid]{@link ./grid}.
 * >
 * > * When this component is used with
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are
 * > created when it is created. When this component is used with
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or
 * > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is
 * > **Grid**, its child components are created when it is laid out.
 * >
 * > * If a **Grid** component contains a large number of **GridItem** components, using
 * > [columnStart]{@link GridItemAttribute#columnStart}/[columnEnd]{@link GridItemAttribute#columnEnd} or
 * > [rowStart]{@link GridItemAttribute#rowStart}/[rowEnd]{@link GridItemAttribute#rowEnd} to set the size of
 * > **GridItem** components can lead to performance issues, especially when **scrollToIndex** is used to scroll to a
 * > specific index. This is because **Grid** will traverse all **GridItem** nodes sequentially to find the specified
 * > index, which can be time-consuming. To address this issue, it is recommended that you use
 * > [GridLayoutOptions]{@link GridLayoutOptions} for layout, which significantly improves the efficiency of finding the
 * > position of **GridItem** components. For best practices, see
 * > [Optimizing Frame Loss for Grid Component Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-improve_grid_performance).
 *
 * ###### Child Components
 *
 * This component can contain a single child component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const GridItem: GridItemInterface;

/**
 * Defines GridItem Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const GridItemInstance: GridItemAttribute;