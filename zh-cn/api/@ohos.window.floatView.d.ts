/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

import type BaseContext from './application/BaseContext';
import type { Callback } from './@ohos.base';
import type floatingBall from './@ohos.window.floatingBall';
import window from './@ohos.window';
/*** if arkts static */
import { LocalStorage } from '@ohos.arkui.stateManagement';
/*** endif */

/**
 * 闪控窗是悬浮在桌面/应用界面上的小型窗口，提供灵活的窗口管理能力。
 *
 * 本模块提供闪控窗能力，包括判断设备是否支持闪控窗功能、创建闪控窗控制器以启动、更新或停止闪控窗等。
 *
 * **适用场景：**
 *
 * 闪控窗适用于需要在独立小窗口中持续展示应用内容或提供快捷操作的场景。例如：
 *
 * - 股市盯盘应用：用户在浏览其他应用时，通过闪控窗实时查看股票行情变化，无需频繁切换应用。
 * - 手机直播应用：主播在直播过程中使用闪控窗展示自定义的互动面板或控制界面，方便实时操作和互动。
 *
 * **相关比对**：
 * [闪控球和闪控窗的对比](docroot://windowmanager/window-type-overview.md#闪控球和闪控窗的对比)
 * 、
 * [全局悬浮窗和闪控窗的对比](docroot://windowmanager/window-type-overview.md#全局悬浮窗和闪控窗的对比)
 *
 * > **说明：**
 * >
 * > - 针对系统能力SystemCapability.Window.SessionManager，请先使用
 * > [canIUse()](docroot://reference/common/js-apis-syscap.md#caniuse)接口判断当前设备是否支持此syscap及对应接口。
 * >
 * > - 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Window.SessionManager
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace floatView {
  /**
   * 判断当前设备是否支持闪控窗功能。
   *
   * @returns { boolean } 当前设备是否支持闪控窗功能。true表示支持，false则表示不支持。
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isFloatViewEnabled(): boolean;

  /**
   * 创建闪控窗控制器。使用Promise异步回调。
   *
   * @param { FloatViewConfiguration } config - 创建闪控窗控制器的参数。该参数及其context字段不能为null或者undefined，否则抛出401。其他参数异常情况抛出1300016。
   * @returns { Promise<FloatViewController> } Promise对象。返回当前创建的闪控窗控制器。
   * @throws { BusinessError } 801 - Capability not supported. Possible cause: Call the API on unsupported device.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     1. This window context is abnormal.
   *     2. System error, such as a null pointer, insufficient memory or a JS engine exception.
   * @throws { BusinessError } 1300016 - Parameter error.
   *     Possible cause: Invalid template type.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function create(config: FloatViewConfiguration): Promise<FloatViewController>;

  /**
   * 绑定闪控窗和闪控球。需要先创建[闪控窗控制器]{@link floatView.FloatViewController}和
   * [闪控球控制器]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController}，且均未启动。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > - 绑定成功后，调用[start()]{@link floatView.FloatViewController.start}或
   * > [startFloatingBall()]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController.startFloatingBall}均会同时创
   * > 建闪控窗窗口和闪控球窗口，并触发对应窗口已注册的状态回调。但同一时刻仅展示其中一个窗口，展示顺序取决于先调用哪个控制器的启动接口。
   * >
   * > - 绑定成功后，用户可通过点击操作在闪控窗窗口与闪控球之间进行切换。
   * >
   * > - 绑定成功后，调用任一控制器的停止接口（[stop()]{@link floatView.FloatViewController.stop}或
   * > [stopFloatingBall()]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController.stopFloatingBall}）会同时销毁标
   * > 准悬浮窗窗口和闪控球窗口，并触发对应窗口已注册的状态回调。
   *
   * @permission ohos.permission.USE_FLOAT_BALL and ohos.permission.FLOAT_VIEW
   * @param { FloatViewController } floatViewController - 闪控窗控制器，用于管理闪控窗的启动、停止和状态监听等操作。
   * @param { floatingBall.FloatingBallController } floatingBallController - 闪控球控制器，用于管理闪控球的启动、停止和状态监听等操作。
   * @param { floatingBall.FloatingBallParams } floatingBallParams - 闪控球参数。绑定时设置的参数会覆盖掉闪控球控制器启动时已保存的参数。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed. Possible cause:
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported on this device. Possible cause:
   *     Call api on unsupported device.
   * @throws { BusinessError } 1300019 - Wrong parameters for operating the floating ball. Possible cause:
   *     Invalid floating ball params.
   * @throws { BusinessError } 1300025 - The floating ball state does not support this operation. Possible cause:
   *     1. The floating ball has started but not stopped yet.
   *     2. The floating ball controller has been bound.
   * @throws { BusinessError } 1300031 - The floatView state does not support this operation. Possible cause:
   *     1. The float view has started but not stopped yet.
   *     2. The float view controller has been bound.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function bind(floatViewController: FloatViewController, floatingBallController: floatingBall.FloatingBallController,
    floatingBallParams: floatingBall.FloatingBallParams): Promise<void>;

  /**
   * 解绑闪控窗和闪控球。需要在[闪控窗控制器]{@link floatView.FloatViewController}和
   * [闪控球控制器]{@link @ohos.window.floatingBall:floatingBall.FloatingBallController}均停止后才可解绑。使用Promise异步回调。
   *
   * @param { FloatViewController } floatViewController - 闪控窗控制器，用于管理闪控窗的启动、停止和状态监听等操作。
   * @param { floatingBall.FloatingBallController } floatingBallController - 闪控球控制器，用于管理闪控球的启动、停止和状态监听等操作。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 801 - Capability not supported on this device. Possible cause:
   *     Call api on unsupported device.
   * @throws { BusinessError } 1300025 - The floating ball state does not support this operation. Possible cause:
   *     1. The floating ball has started but not stopped yet.
   *     2. The floatingBallController has not been bound.
   * @throws { BusinessError } 1300031 - The floatView state does not support this operation. Possible cause:
   *     1. The float view has started but not stopped yet.
   *     2. The floatViewController has not been bound.
   *     3. The floatViewController and the floatingBallController are not bound together.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function unbind(floatViewController: FloatViewController,
    floatingBallController: floatingBall.FloatingBallController): Promise<void>;

  /**
   * 根据传入的模板类型获取对应闪控窗窗口的限制，单位为px。
   *
   * @param { FloatViewTemplateType } templateType - 闪控窗模板类型。
   * @returns { FloatViewLimits } 返回闪控窗窗口的限制，包括最大尺寸、最小尺寸和宽高比的限制范围。
   * @throws { BusinessError } 801 - Capability not supported. Possible cause:
   *     Call the API on unsupported device.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     System error, such as a null pointer, insufficient memory or a JS engine exception.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
   *     Internal IPC error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid template type.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getFloatViewLimits(templateType: FloatViewTemplateType): FloatViewLimits;

  /**
   * 创建闪控窗控制器时需要提供的参数配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewConfiguration {
    /**
     * 表示上下文环境，用于创建闪控窗控制器时关联的应用主窗口。必须传入有效的UIAbilityContext实例。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    context: BaseContext;

    /**
     * 闪控窗的模板类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    templateType: FloatViewTemplateType;

    /**
     * 点击关闭按钮时是否需要用户确认。true表示点击关闭按钮时需要用户确认，否则不需要确认。默认值为false。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isConfirmOnClose?: boolean;
  }

  /**
   * 切换闪控窗模板并修改窗口尺寸时需要提供的参数配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface TemplateProperty {
    /**
     * 闪控窗的模板类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    templateType: FloatViewTemplateType;

    /**
     * 更新模板类型时需要提供的窗口尺寸。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    size: window.Size;
  }

  /**
   * 闪控窗控制器实例。用于启动、停止闪控窗以及注册回调等操作。
   *
   * 下列API示例中都需先使用[floatView.create()]{@link floatView.create}方法获取到闪控窗控制器实例（即floatViewController），再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewController {

    /**
     * 根据当前工程中指定的页面路径为闪控窗加载具体页面内容，通过LocalStorage传递状态属性至加载页面。使用Promise异步回调。
     * 
     * 建议在闪控窗启动前使用该接口，重复调用将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 本接口不支持加载跨包页面，若有需要请使用[setUIContextByName()]{@link floatView.FloatViewController.setUIContextByName}接口。
     *
     * @param { string } path - 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。若路劲无
     *     效或不满足上述要求，将抛出错误码1300016。
     * @param { LocalStorage } [storage] - 页面级UI状态存储单元，用于为加载到窗口的页面内容传递状态属性。默认值为空。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300016 - Parameter error. Possible causes: Invalid path.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setUIContext(path: string, storage?: LocalStorage): Promise<void>;

    /**
     * 根据指定路由页面名称为当前窗口加载
     * [命名路由](docroot://ui/arkts-routing.md#命名路由)页面，通过LocalStorage传递状态属性至加载页面，使用Promise异步回调。建议在闪控窗启动前使用该接口，重复调用将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     *
     * @param { string } name - 命名路由页面的名称，用于加载指定的命名路由页面内容。需与@Entyry装饰器中的routeName参数指定的名称一致。
     * @param { LocalStorage } [storage] - 页面级UI状态存储单元，用于为加载到窗口的页面内容传递状态属性。默认值为空。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300016 - Parameter error. Possible causes: Invalid name.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setUIContextByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * 设置闪控窗窗口大小。建议先调用[getFloatViewLimits]{@link floatView.getFloatViewLimits}接口获取推荐的宽高范围和宽高比范围，再根据推荐值调用本接口。窗口实际大小变化可通
     * 过[onRectChange]{@link floatView.FloatViewController.onRectChange(callback: Callback<FloatViewRectChangeInfo>)}接口监
     * 听。使用Promise异步回调。
     *
     * @param { window.Size } size - 表示窗口的大小，单位为px，宽度和高度必须大于0，超出有效范围抛出错误码1300016。建议大小满足
     * [getFloatViewLimits]{@link floatView.getFloatViewLimits}接口返回的限制。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300016 - Parameter error.
     *     Possible cause: The value of the size is less than or equal to 0.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setWindowSize(size: window.Size): Promise<void>;

    /**
     * 切换闪控窗的模板并改变其窗口尺寸。建议先调用[getFloatViewLimits]{@link floatView.getFloatViewLimits}接口获取目标模板类型推荐的宽高范围和宽高比范围，再根据推荐值调用本接
     * 口。窗口实际大小变化可通过
     * [onRectChange]{@link floatView.FloatViewController.onRectChange(callback: Callback<FloatViewRectChangeInfo>)}接口监听。使用Promise异步回调。
     *
     * @param { TemplateProperty } templateProperty - 表示需要切换的窗口模板类型及大小。size中的宽度和高度必须大于0，超出有效范围抛出错误码1300016。建议大小满足
     *     [getFloatViewLimits]{@link floatView.getFloatViewLimits}接口返回的限制。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid template type.
     *     2. The value of the size is less than or equal to 0.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    switchTemplate(templateProperty: TemplateProperty): Promise<void>;

    /**
     * 启动闪控窗窗口。接口返回不表示start流程结束，需要通过
     * [onStateChange]{@link floatView.FloatViewController.onStateChange(callback: Callback<FloatViewStateChangeInfo>)}接
     * 口监听到STARTED回调时判断启动成功。建议在调用[setUIContext()]{@link floatView.FloatViewController.setUIContext}或
     * [setUIContextByName()]{@link floatView.FloatViewController.setUIContextByName}后调用start()。使用Promise异步回调。
     *
     * @permission ohos.permission.FLOAT_VIEW
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed. Possible cause:
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The float view is starting or has already started.
     * @throws { BusinessError } 1300031 - The float view state does not support this operation. Possible cause:
     *     The float view is stopping.
     * @throws { BusinessError } 1300033 - Failed to start float view. Possible causes:
     *     1. Start multiple float views.
     *     2. The main window of context is not foreground.
     * @throws { BusinessError } 1300034 - This operation conflicts with other floating windows. Possible cause:
     *     App has already started floating ball or pip window.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    start(): Promise<void>;

    /**
     * 停止闪控窗窗口。接口返回不表示stop流程结束，需要通过
     * [onStateChange]{@link floatView.FloatViewController.onStateChange(callback: Callback<FloatViewStateChangeInfo>)}接
     * 口监听到STOPPED回调时判断停止成功。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The float view is stopping or has already stopped.
     * @throws { BusinessError } 1300031 - This operation is not supported on the float view in the current state.
     *     Possible cause: The float view window is not started.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stop(): Promise<void>;

    /**
     * 设置应用在前台时闪控窗窗口是否可见。使用Promise异步回调。
     *
     * 创建闪控窗后未调用此接口前，默认其在应用处于前台时为可见状态。
     *
     * @param { boolean } isVisible - 应用在前台时闪控窗是否可见，true表示可见，false表示不可见。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setFloatViewVisibilityInApp(isVisible: boolean): Promise<void>;

    /**
     * 恢复闪控窗的主窗口到前台显示。如果主窗口已处于前台时调用，将抬升主窗口层级。此接口要求闪控窗处于STARTED状态，且只能在用户点击后调用。当主窗口处于PAUSED生命周期或处于多任务状态时，调用接口将抛出错误码13
     * 00032。使用Promise异步回调。
     *
     * @param { Record<string, Object> } [wantParameters] - 恢复闪控窗的主窗口时会给主窗口传递的自定义参数，主窗口会在触发
     *     [onNewWant]{@link @ohos.app.ability.AbilityLifecycleCallback:AbilityLifecycleCallback#onNewWant?(ability: UIAbility)}
     *     回调时收到。默认值为空，代表不向主窗口传入任何自定义参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
     *     Internal IPC error.
     * @throws { BusinessError } 1300031 - This operation is not supported on the float view in the current state.
     *     Possible cause: The float view window is not started when restoring.
     * @throws { BusinessError } 1300032 - Failed to restore the main window. Possible cause:
     *     1. User has never clicked the float view window before restore.
     *     2. The float view window is not in the foreground.
     *     3. The main window is in PAUSED lifecycle state.
     *     4. The main window is in background during recent.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>;

    /**
     * 获取闪控窗窗口的属性。
     *
     * @returns { FloatViewProperties } 返回闪控窗窗口的属性。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300031 - This operation is not supported on the float view in the current state.
     *     Possible cause: The float view window has not started, has stopped, or is in an error state.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getWindowProperties(): FloatViewProperties;

    /**
     * 注册闪控窗状态变化的监听事件。不再使用时，取消监听以避免内存泄漏。
     *
     * @param { Callback<FloatViewStateChangeInfo> } callback - 回调函数。返回当前的闪控窗状态变化信息。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The callback has already registered.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onStateChange(callback: Callback<FloatViewStateChangeInfo>): void;

    /**
     * 取消闪控窗状态变化的监听事件。
     *
     * @param { Callback<FloatViewStateChangeInfo> } [callback] - 回调函数。返回当前的闪控窗状态变化信息。若传入参数，则停止该监听。若未传入参数，则停止所有闪控窗状态
     *     变化的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offStateChange(callback?: Callback<FloatViewStateChangeInfo>): void;

    /**
     * 注册闪控窗矩形区域（位置和大小）变化的监听事件。不再使用时，取消监听以避免内存泄漏。
     *
     * @param { Callback<FloatViewRectChangeInfo> } callback - 回调函数。返回当前的闪控窗矩形区域变化信息。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The callback has already registered.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onRectChange(callback: Callback<FloatViewRectChangeInfo>): void;

    /**
     * 取消闪控窗矩形区域变化的监听事件。
     *
     * @param { Callback<FloatViewRectChangeInfo> } [callback] - 回调函数。返回当前的闪控窗矩形区域变化信息。若传入参数，则停止该监听。若未传入参数，则停止所有闪控窗矩
     *     形区域变化的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offRectChange(callback?: Callback<FloatViewRectChangeInfo>): void;

    /**
     * 注册闪控窗限制变化的监听事件，当限制规格变化时触发回调（例如折叠展开导致屏幕宽度变化或切换模板），触发回调并返回当前窗口模板类型的限制信息。不再使用时，取消监听以避免内存泄漏。
     *
     * @param { Callback<FloatViewLimits> } callback - 回调函数。返回当前的闪控窗限制变化信息。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300030 - Repeated operations on the float view. Possible cause:
     *     The callback has already registered.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onLimitsChange(callback: Callback<FloatViewLimits>): void;

    /**
     * 取消闪控窗限制变化的监听事件。
     *
     * @param { Callback<FloatViewLimits> } [callback] - 回调函数。返回当前的闪控窗限制变化信息。若传入参数，则停止该监听。若未传入参数，则停止所有闪控窗限制变化的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offLimitsChange(callback?: Callback<FloatViewLimits>): void;
  }

  /**
   * 闪控窗模板类型的枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum FloatViewTemplateType {
    /**
     * 圆角矩形。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ROUNDED_RECTANGLE = 0,

    /**
     * 水平的条状矩形。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HORIZONTAL_BAR = 1
  }

  /**
   * 闪控窗窗口的属性。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewProperties {
    /**
     * 闪控窗的模板类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    templateType: FloatViewTemplateType;

    /**
     * 闪控窗窗口ID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowId: int;

    /**
     * 闪控窗所在屏幕ID。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId: int;

    /**
     * 闪控窗窗口矩形区域。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowRect: window.Rect;

    /**
     * 闪控窗窗口缩放比例。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowScale: double;

    /**
     * 闪控窗内容的避让区域。
     *
     * **注意：**
     *
     * 通过[setUIContext()]{@link floatView.FloatViewController.setUIContext}或
     * [setUIContextByName()]{@link floatView.FloatViewController.setUIContextByName}加载的页面中，位于避让区域的组件将不响应手势事件，添加需要手势响应事件
     * 的组件时，请注意避让这些区域。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    avoidArea: window.AvoidArea;

    /**
     * 闪控窗是否在侧边栏中。true为在侧边栏中，false为不在侧边栏中。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inSidebar: boolean;
  }

  /**
   * 闪控窗的宽高比限制范围。宽高比比值由窗口矩形区域的宽除以高获得。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface RatioLimit {
    /**
     * 闪控窗的宽高比最小值。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minRatio: double;

    /**
     * 闪控窗的宽高比最大值。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxRatio: double;
  }

  /**
   * 闪控窗窗口的限制。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewLimits {
    /**
     * 闪控窗的最小尺寸。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minSize: window.Size;

    /**
     * 闪控窗的最大尺寸。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxSize: window.Size;

    /**
     * 闪控窗的宽高比限制范围，数组中的每个元素包含minRatio（最小宽高比）和maxRatio（最大宽高比）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ratioLimits: Array<RatioLimit>;
  }

  /**
   * 闪控窗状态变化信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewStateChangeInfo {
    /**
     * 闪控窗的状态。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: FloatViewState;

    /**
     * 闪控窗停止的原因。该参数仅在状态为FloatViewState.STOPPED时有效，在其他状态下默认为空字符串。停止原因和对应含义如下：
     *
     * "APP_STOP"：应用主动停止
     *
     * "STOP_IN_SIDEBAR"：在侧边栏被关闭
     *
     * "TITLE_BAR_STOP_CLICK"：标题栏点击关闭按钮
     *
     * "DUMPSTER_STOP"：拖入垃圾桶停止
     *
     * "REPLACE_STOP"：被其他闪控窗挤占
     *
     * "FLOATING_BALL_STOP"：绑定状态下跟随闪控球停止
     *
     * "MAIN_WINDOW_DESTROY_STOP"：context关联的主窗被销毁后停止
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopReason: string;
  }

  /**
   * 闪控窗状态的枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum FloatViewState {
    /**
     * 闪控窗已启动并显示。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STARTED = 1,

    /**
     * 闪控窗已隐藏。上滑进入多任务界面时触发；或使用
     * [setFloatViewVisibilityInApp]{@link floatView.FloatViewController.setFloatViewVisibilityInApp}接口设置了应用在前台时隐藏闪控窗后，
     * 应用处于前台时触发。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HIDDEN = 2,

    /**
     * 闪控窗已停止。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 3,

    /**
     * 闪控窗在侧边栏中。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IN_SIDEBAR = 4,

    /**
     * 闪控窗切换为闪控球。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IN_FLOATING_BALL = 5,

    /**
     * 闪控窗发生异常。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ERROR = 6
  }

  /**
   * 闪控窗矩形区域变化信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewRectChangeInfo {
    /**
     * 闪控窗窗口矩形区域。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowRect: window.Rect;

    /**
     * 闪控窗窗口缩放比例。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowScale: double;

    /**
     * 闪控窗矩形区域变化的原因。原因和对应含义如下：
     *
     * "POSITION_CHANGE"：位置变化
     *
     * "SIZE_CHANGE"：大小变化
     *
     * "RECT_CHANGE"：位置大小同时变化
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reason: string;
  }

}

export default floatView;