/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import { LengthMetrics, ColorMetrics } from '@ohos.arkui.node';
import { SymbolGlyphModifier } from '@ohos.arkui.modifier';
import { AdvancedToolBarV2Item, AdvancedToolBarV2Modifier } from '@ohos.arkui.advanced.ToolBarV2';

/**
 * Defines the callback invoked when the drag state of the toolbar changes, specifically when dragging starts or ends.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare type ToolBarDragStateCallback = () => void;
/**
 * Defines the callback for the drag offset relative to the ToolBarContainer container.
 *
 * @param { number } x - Offset along the X-axis, in vp.
 * @param { number } y - Offset along the Y-axis, in vp.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare type ToolBarDragOffsetCallback = (x: number, y: number) => void;
/**
 * Defines the callback invoked when the toolbar state changes.
 *
 * @param { ToolBarState } state - Current toolbar state.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare type ToolBarStateCallback = (state: ToolBarState) => void;
/**
 * Defines the callback invoked when the toolbar docks to the specified area and direction.
 *
 * @param { DockArea } area - Area where the toolbar is docked.
 * @param { Axis } direction - Docking direction.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare type ToolBarDockCallback = (area: DockArea, direction: Axis) => void;
/**
 * Defines the handedness adaptation mode for the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum HandednessAdaptationMode {
  /**
   * Handedness adaptation is disabled for the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  NONE = 0,
  /**
   * The toolbar uses the default handedness adaptation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  DEFAULT = 1
}
/**
 * Defines the toolbar states.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum ToolBarState {
  /**
   * The toolbar is fixed at its current position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  FIXED = 0,
  /**
   * The toolbar is floating and can be dragged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  FLOATING = 1,
  /**
   * The toolbar is minimized to a floating ball.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  MINIMIZED = 2
}

/**
 * Defines the areas where the floating toolbar can dock.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DockArea {
  /**
   * The toolbar is docked to the top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP = 0,
  /**
   * The toolbar is docked to the bottom edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM = 1,
  /**
   * The toolbar is docked to the left edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  LEFT = 2,
  /**
   * The toolbar is docked to the right edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  RIGHT = 3,
  /**
   * The toolbar is docked to the upper left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP_LEFT = 4,
  /**
   * The toolbar is docked to the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  TOP_RIGHT = 5,
  /**
   * The toolbar is docked to the lower left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM_LEFT = 6,
  /**
   * The toolbar is docked to the lower right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  BOTTOM_RIGHT = 7
}

/**
 * Defines the snapping mode used when the floating toolbar is dragged to a corner.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum DockCornerMode {
  /**
   * Snaps the toolbar to a corner and minimizes it; after the corner is clicked, the toolbar follows the edge where it
   * is located.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  MINIMIZE = 0,
  /**
   * Retains the drag direction without minimizing the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  EXPAND = 1
}

/**
 * Defines the safe area padding mode of the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export enum ToolBarSafeAreaMode {
  /**
   * Does not apply safe area padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  NONE = 0,
  /**
   * Applies padding equal to the safe area insets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  PADDING = 1,
  /**
   * Applies both safe area padding and additional padding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  SAFEAREA_PADDING = 2
}

/**
 * Defines options for configuring the floating behavior of the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarFloatingOptions {
  /**
   * Whether the floating toolbar can be dragged. Default value: true. The value true indicates that dragging is
   * supported, and false indicates that dragging is prohibited.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  draggable?: boolean;
  /**
   * Areas where the floating toolbar is allowed to dock.
   * Default value: all eight areas.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dockAreas?: DockArea[];
  /**
   * Minimization configuration for the floating ball of the floating toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  minimizeConfigs?: ToolBarMinimizeConfigs;
  /**
   * Corner snapping mode. MINIMIZE (default) indicates that the toolbar snaps to a corner and follows the edge where
   * it is located; EXPAND indicates that the drag direction is retained.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  cornerMode?: DockCornerMode;
}

/**
 * Observable configuration store for floating toolbar behavior,
 * corresponding to {@link ToolBarFloatingOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export class ToolBarFloatingConfigs {
  /**
   * Whether the floating toolbar can be dragged. Default value: true. The value true indicates that dragging is
   * supported, and false indicates that dragging is prohibited.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  draggable?: boolean;
  /**
   * Areas where the floating toolbar is allowed to dock.
   * All snapping positions are supported by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  dockAreas?: DockArea[];
  /**
   * Minimization configuration.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  minimizeConfigs?: ToolBarMinimizeConfigs;
  /**
   * Corner snapping mode. MINIMIZE (default) indicates that the toolbar snaps to a corner and follows the edge where
   * it is located; EXPAND indicates that the drag direction is retained.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  cornerMode?: DockCornerMode;
  /**
   * Constructor of ToolBarFloatingConfigs. When options is omitted, all fields use their respective default values.
   *
   * @param { ToolBarFloatingOptions } [options] - Floating behavior options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarFloatingOptions);
}

/**
 * Defines options for configuring the minimized floating ball of the toolbar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarMinimizeOptions {
  /**
   * Text label. Default value: undefined, indicating that there is no text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  text?: ResourceStr;
  /**
   * Icon. Default value: undefined, indicating that there is no icon content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  icon?: ResourceStr | SymbolGlyphModifier;
  /**
   * Text color. Default value: $r('sys.color.font_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  textColor?: ColorMetrics;
  /**
   * Icon color. Default value: $r('sys.color.icon_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  iconColor?: ColorMetrics;
  /**
   * Custom builder. Default value: undefined, indicating that there is no custom content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  builder?: CustomBuilder;
  /**
   * Icon size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  iconSize?: LengthMetrics;
  /**
   * Diameter of the minimized floating ball.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  buoySize?: LengthMetrics;
}

/**
 * Observable configuration store for the minimized floating ball,
 * corresponding to {@link ToolBarMinimizeOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export class ToolBarMinimizeConfigs {
  /**
   * Text label. Default value: undefined, indicating that there is no text content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  text?: ResourceStr;
  /**
   * Icon. Default value: undefined, indicating that there is no icon content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  icon?: ResourceStr | SymbolGlyphModifier;
  /**
   * Text color. Default value: $r('sys.color.font_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  textColor?: ColorMetrics;
  /**
   * Icon color. Default value: $r('sys.color.icon_primary').
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  iconColor?: ColorMetrics;
  /**
   * Custom builder. Default value: undefined, indicating that there is no custom content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  builder?: CustomBuilder;
  /**
   * Icon size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  iconSize?: LengthMetrics;
  /**
   * Diameter of the minimized floating ball.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  buoySize?: LengthMetrics;
  /**
   * Constructor of ToolBarMinimizeConfigs. When options is omitted, all fields use their respective default values.
   *
   * @param { ToolBarMinimizeOptions } [options] - Options for the minimized floating ball.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarMinimizeOptions);
}

/**
 * Defines a controller for imperatively managing toolbar docking, pinning, and minimization states.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class ToolBarController {
  /**
   * Docks the floating toolbar to the specified area, with an optional docking direction.
   *
   * @param { DockArea } area - Docking area to set.
   * @param { Axis } [direction] - Docking direction. By default, the docking direction is the arrangement direction of
   *     the current floating toolbar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  setDock(area: DockArea, direction?: Axis): void;
  /**
   * Pins the toolbar in the FIXED state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  pin(): void;
  /**
   * Unpins the toolbar, switching it from FIXED to FLOATING.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  unpin(): void;
  /**
   * Minimizes the floating toolbar to a floating ball, switching it from FLOATING to MINIMIZED.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  minimize(): void;
  /**
   * Restores the minimized floating ball to a floating toolbar, switching it from MINIMIZED to FLOATING.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  restore(): void;
  /**
   * Obtains the current toolbar state.
   *
   * @returns { ToolBarState } Current toolbar state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getState(): ToolBarState;
  /**
   * Obtains the area where the floating toolbar is currently docked.
   *
   * @returns { DockArea } Area where the toolbar is currently docked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getDockArea(): DockArea;
  /**
   * Obtains the docking direction of the floating toolbar.
   *
   * @returns { Axis } Docking direction of the floating toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  getDirection(): Axis;
}

/**
 * Initial position parameters of the toolbar, specifying the docking area, direction, and state at creation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarInitialParams {
  /**
   * Initial area where the toolbar is docked.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dockArea: DockArea;
  /**
   * Initial docking direction of the toolbar. By default, the direction is aligned with the edge to which the toolbar
   * is snapped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  direction?: Axis;
  /**
   * Initial state of the toolbar. Default value: {@link ToolBarState.FLOATING}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  state?: ToolBarState;
}

/**
 * Defines a collection of callbacks for toolbar dragging, snapping, and state changes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class ToolBarCallbacks {
  /**
   * Callback invoked when the toolbar docks to a new area.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDock?: ToolBarDockCallback;
  /**
   * Callback invoked when the user starts dragging the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDragStart?: ToolBarDragStateCallback;
  /**
   * Callback invoked during dragging, which returns the X-axis and Y-axis offsets in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDrag?: ToolBarDragOffsetCallback;
  /**
   * Callback invoked when the user finishes dragging the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDragEnd?: ToolBarDragStateCallback;
  /**
   * Callback invoked when the toolbar state changes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onStateChange?: ToolBarStateCallback;
}

/**
 * Parameters for constructing a toolbar, including the item list, modifier, floating configuration, and callbacks.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarParams {
  /**
   * List of advanced toolbar items to display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  toolBarList: AdvancedToolBarV2Item[];
  /**
   * Initial position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  initialParams: ToolBarInitialParams;
  /**
   * Modifier of the advanced toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  advancedToolBarModifier?: AdvancedToolBarV2Modifier;
  /**
   * Floating behavior configuration of the toolbar. Default value: the respective default values of the fields in
   * {@link ToolBarFloatingConfigs}.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  floatingConfigs?: ToolBarFloatingConfigs;
  /**
   * Toolbar controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  controller?: ToolBarController;
  /**
   * Collection of toolbar callbacks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  callbacks?: ToolBarCallbacks;
}

/**
 * Observable configuration store for the toolbar,
 * corresponding to {@link ToolBarParams}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export class ToolBarConfigs {
  /**
   * List of advanced toolbar items to display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  toolBarList: AdvancedToolBarV2Item[];
  /**
   * Initial position of the advanced toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  initialParams: ToolBarInitialParams;
  /**
   * Modifier of the advanced toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  advancedToolBarModifier: AdvancedToolBarV2Modifier;
  /**
   * Floating configuration of the advanced toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  floatingConfigs?: ToolBarFloatingConfigs;
  /**
   * Toolbar controller.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  controller?: ToolBarController;
  /**
   * Collection of toolbar callbacks.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  callbacks?: ToolBarCallbacks;
  /**
   * Constructor of the toolbar configuration class ToolBarConfigs.
   *
   * @param { ToolBarParams } params - Parameters for constructing the toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(params: ToolBarParams);
}

/**
 * Defines options for configuring the docking offsets of the floating toolbar on each edge.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarDockOffsetOptions {
  /**
   * Top docking offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  top?: LengthMetrics;
  /**
   * Right docking offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  right?: LengthMetrics;
  /**
   * Bottom docking offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  bottom?: LengthMetrics;
  /**
   * Left docking offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  left?: LengthMetrics;
}

/**
 * Defines options for configuring the safe area avoidance mode of the toolbar on each edge.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarSafeAreaOptions {
  /**
   * Safe area avoidance mode for the top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  top?: ToolBarSafeAreaMode;
  /**
   * Safe area avoidance mode for the right edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  right?: ToolBarSafeAreaMode;
  /**
   * Safe area avoidance mode for the bottom edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  bottom?: ToolBarSafeAreaMode;
  /**
   * Safe area avoidance mode for the left edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  left?: ToolBarSafeAreaMode;
}

/**
 * Defines options for configuring the layout, safe area avoidance, and handedness adaptation of the toolbar container.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface ToolBarContainerOptions {
  /**
   * Docking offsets of the floating toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  dockOffset?: ToolBarDockOffsetOptions;
  /**
   * Avoidance spacing used when the toolbar is too long and overflows.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  gutter?: LengthMetrics;
  /**
   * Safe area avoidance mode. Default value: {@link ToolBarSafeAreaMode.NONE} for each edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  safeArea?: ToolBarSafeAreaOptions;
  /**
   * Handedness adaptation mode. Default value: HandednessAdaptationMode.NONE. This parameter takes effect only when
   * there is a single toolbar.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  adaptToHandedness?: HandednessAdaptationMode;
}

/**
 * Observable configuration store for the toolbar container,
 * corresponding to {@link ToolBarContainerOptions}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ObservedV2
export class ToolBarContainerConfigs {
  /**
   * Docking offsets, in vp. Default value: 16 vp for each edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  dockOffset?: ToolBarDockOffsetOptions;
  /**
   * Spacing between toolbars.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  gutter?: LengthMetrics;
  /**
   * Safe area mode. Default value: ToolBarSafeAreaMode.NONE for each edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  safeArea?: ToolBarSafeAreaOptions;
  /**
   * Handedness adaptation mode. Default value: HandednessAdaptationMode.NONE.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Trace
  adaptToHandedness?: HandednessAdaptationMode;
  /**
   * Constructor. When options is omitted, all fields use their respective default values.
   *
   * @param { ToolBarContainerOptions } [options] - Container options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  constructor(options?: ToolBarContainerOptions);
}

/**
 * The ToolBarContainer component hosts one or more floating toolbars,
 * and supports docking, safe area avoidance, and handedness adaptation.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
@ComponentV2
export struct ToolBarContainer {
  /**
   * List of toolbar configurations. A maximum of four toolbars is supported; any additional toolbars do not take
   * effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Require
  @Param
  toolbars: ToolBarConfigs[];
  /**
   * Container-level configuration, including docking offsets, safe area avoidance, and handedness adaptation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @Param
  containerConfigs?: ToolBarContainerConfigs;
  /**
   * Content displayed in the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  @BuilderParam
  content: Callback<void>;
}
