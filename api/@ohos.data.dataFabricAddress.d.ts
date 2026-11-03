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
 * @file This module provides the capability of subscribing to and unsubscribing from address data fabric.
 * @kit ArkData
 */
import type { Callback } from './@ohos.base';
/**
 * This module provides the capability of subscribing to and unsubscribing from address data fabric.
 *
 * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
 * @systemapi
 * @stagemodelonly
 * @since 26.1.0 dynamic&static
 */
declare namespace dataFabricAddress {
  /**
   * Enum for business scenario types.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum BusinessScenario {  
    /**
     * Indicates the type of commuting navigation business scenario.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SCENARIO_NAVIGATION_COMMUTE = 0,
    /**
     * Indicates other business scenario types.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    OTHERS = 1
  }

  /**
   * Enum for the type of location point action.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum ActionType {
    /**
     * Indicates the type of location point for the subscription action.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SUBSCRIPTION = 0,
    /**
     * Indicates the type of position point for the update action.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    UPDATE = 1
  }

  /**
   * Enum for reference point label.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum LabelName {  
    /**
     * Indicates home label.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    HOME = 'HOME',
    /**
     * Indicates company label.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    COMPANY = 'COMPANY'
  }
  
  /**
   * Enum for coordinate system name.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum CoordinateSystemName {
    /**
     * Indicates the WGS84 coordinate system.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    WGS84 = 'WGS84',
    /**
     * Indicates the GCJ02 coordinate system.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    GCJ02 = 'GCJ02'
  }

  /**
   * Enum for the data processing result status code.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum StatusCode {  
    /**
     * Indicates the success status code.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SUCCESS = 0,
    /**
     * Indicates the failure status code.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    FAILURE = 1
  }

  /**
   * Indicates the coordinates of a point.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface LocationPoint {
    /**
     * Indicates the latitude of a coordinate point. The value ranges from -90 to 90 degrees.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    latitude: double;
    /**
     * Indicates the longitude of a coordinate point. The value ranges from -180 to 180 degrees.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    longitude: double;
  }

  /**
   * Indicates the information about a coordinate point.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface LocationInfo {
    /**
     * Indicates the label information of a coordinate point.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    label: LabelName;
    /**
     * Indicates the coordinate system to which a coordinate point belongs.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    coordinateSystemName: CoordinateSystemName;
    /**
     * Indicates the coordinates of a point.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    locationPoint: LocationPoint;
  }

  /**
   * Indicates the location information of the reference coordinates.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface ReferenceLocationInfo {
    /**
     * Indicates the action type of a location point.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    actionType: ActionType;
    /**
     * Indicates the location information of the reference point.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    points: LocationInfo[];
  }
  
  /**
   * Indicates the data processing result.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface DataProcessingResponse {
    /**
     * Indicates the status code of the data processing result.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    code: StatusCode;
    /**
     * Indicates the result of data processing.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    result: string;
  }
  
  /**
   * Indicates the subscription and unsubscription interface parameters.
   *
   * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export interface DataFabricAddressParams {
    /**
     * Indicates the business scenario type.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    scenarioType: BusinessScenario;
    /**
     * Indicates the location information of the reference coordinates.
     *
     * @syscap SystemCapability.DistributedDataManager.DataFabric.Address
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    locationInfo: ReferenceLocationInfo;
  }

  /**
   * Subscribes to address data fabric interface.
   * Before calling this method, ensure that the location service is enabled and the location switch is turned on.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION and 
   *     ohos.permission.LOCATION_IN_BACKGROUND
   * @param { DataFabricAddressParams } inputParams - Configuration parameters of the interface.
   * @param { Callback<DataProcessingResponse> } callback - Callback of data processing result.
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
   * Unsubscribes from address data fabric interface.
   * This method should be called after successfully subscribing with onDataFabricAddress. Calling this method without
   *     <br> a successful subscription will result in error 36900004.
   *
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION and
   *     ohos.permission.LOCATION_IN_BACKGROUND
   * @param { DataFabricAddressParams } inputParams - Configuration parameters of the interface.
   * @param { Callback<DataProcessingResponse> } [callback] - Callback of data processing result.
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
