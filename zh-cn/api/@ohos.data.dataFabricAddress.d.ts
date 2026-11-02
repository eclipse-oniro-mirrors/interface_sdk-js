/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 地址数据捐赠模块提供了订阅和取消订阅地址数据的能力。
 * @kit ArkData
 */
import type { Callback } from './@ohos.base';
/**
 * 地址数据捐赠模块提供了订阅和取消订阅地址数据的能力。
 *
 * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace dataFabricAddress {
  /**
   * 业务场景类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum BusinessScenario {
    /**
     * 通勤导航业务场景。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SCENARIO_NAVIGATION_COMMUTE = 0,
    /**
     * 其他业务场景。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    OTHERS = 1
  }

  /**
   * 参考点的操作类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum ActionType {
    /**
     * 订阅操作类型。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SUBSCRIPTION = 0,
    /**
     * 更新操作类型。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    UPDATE = 1
  }

  /**
   * 参考点标签类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum LabelName {
    /**
     * 家标签。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    HOME = 'HOME',
    /**
     * 公司标签。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    COMPANY = 'COMPANY'
  }

  /**
   * 坐标系名称枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum CoordinateSystemName {
    /**
     * WGS84坐标系。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    WGS84 = 'WGS84',
    /**
     * GCJ02坐标系。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    GCJ02 = 'GCJ02'
  }

  /**
   * 数据处理结果状态码的枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum StatusCode {
    /**
     * 成功状态码。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SUCCESS = 0,
    /**
     * 失败状态码。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    FAILURE = 1
  }

  /**
   * 一个参考点的坐标。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface LocationPoint {
    /**
     * 坐标点的纬度，取值范围为-90度到90度。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    latitude: double;
    /**
     * 坐标点的经度，取值范围为-180度到180度。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    longitude: double;
  }

  /**
   * 一个参考点的相关信息。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface LocationInfo {
    /**
     * 参考点的标签信息。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    label: LabelName;
    /**
     * 参考点所属的坐标系。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    coordinateSystemName: CoordinateSystemName;
    /**
     * 参考点的坐标。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    locationPoint: LocationPoint;
  }

  /**
   * 参考点的相关信息。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface ReferenceLocationInfo {
    /**
     * 参考点的操作类型。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    actionType: ActionType;
    /**
     * 参考点的位置信息数组。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    points: LocationInfo[];
  }

  /**
   * 数据处理结果。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface DataProcessingResponse {
    /**
     * 数据处理结果的状态码。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    code: StatusCode;
    /**
     * 数据处理结果。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    result: string;
  }

  /**
   * 订阅和取消订阅接口参数。
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface DataFabricAddressParams {
    /**
     * 业务场景类型。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    scenarioType: BusinessScenario;
    /**
     * 参考坐标的位置信息。
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    locationInfo: ReferenceLocationInfo;
  }

  /**
   * 订阅地址数据捐赠接口。调用该接口前，需要确保定位服务可用并打开定位开关。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION and
   *     ohos.permission.LOCATION_IN_BACKGROUND
   * @param { DataFabricAddressParams } inputParams - 接口的配置参数。
   * @param { Callback<DataProcessingResponse> } callback - 数据处理结果的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     <br> limited device capabilities.
   * @throws { BusinessError } 36900001 - Internal error in the API.
   * @throws { BusinessError } 36900002 - Subscription failed.
   * @throws { BusinessError } 36900004 - Operation not supported.
   * @throws { BusinessError } 36900005 - Invalid parameter.
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function onDataFabricAddress(inputParams: DataFabricAddressParams,
    callback: Callback<DataProcessingResponse>): void;

  /**
   * 取消订阅地址数据捐赠接口。该接口应在成功调用onDataFabricAddress订阅后调用；在未成功订阅的情况下调用，将返回错误码36900004。
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION and
   *     ohos.permission.LOCATION_IN_BACKGROUND
   * @param { DataFabricAddressParams } inputParams - 接口的配置参数。
   * @param { Callback<DataProcessingResponse> } [callback] - 数据处理结果的回调函数。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work correctly due to
   *     <br> limited device capabilities.
   * @throws { BusinessError } 36900001 - Internal error in the API.
   * @throws { BusinessError } 36900003 - Unsubscription failed.
   * @throws { BusinessError } 36900004 - Operation not supported.
   * @throws { BusinessError } 36900005 - Invalid parameter.
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  function offDataFabricAddress(inputParams: DataFabricAddressParams,
    callback?: Callback<DataProcessingResponse>): void;
}
export default dataFabricAddress;
