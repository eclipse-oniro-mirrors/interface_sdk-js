/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type Want from './@ohos.application.Want';
import type print from './@ohos.print';

/**
 * class of print extensionAbility.
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @systemapi Hide this for inner system use.
 * @StageModelOnly
 * @since 10
 */
export default class PrintExtensionAbility {

  /**
   * Called once to initialize the extensionAbility.
   * @param { Want } want - call print page want params.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onCreate(want: Want): void;

  /**
   * Called once to start to discover the printers connected with the device.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onStartDiscoverPrinter(): void;

  /**
   * Called once to stop discovering the printer.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onStopDiscoverPrinter(): void;

  /**
   * Called once to connect to the specific printer.
   * @param { number } printerId - connect the printerId.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onConnectPrinter(printerId: number): void;

  /**
   * Called once to disconnect to the specific printer.
   * @param { number } printerId - connect the printerId.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onDisconnectPrinter(printerId: number): void;

  /**
   * Called once to start print job.
   * @param { print.PrintJob } jobInfo - Indicates the information of print job.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onStartPrintJob(jobInfo: print.PrintJob): void;

  /**
   * Called once to remove the print job has been started.
   * @param { print.PrintJob } jobInfo - Indicates the information of print job.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onCancelPrintJob(jobInfo: print.PrintJob): void;

  /**
   * Called once to request the capability of the printer.
   * @param { number } printerId - Indicates the information of printer.
   * @returns { print.PrinterCapability } printer capability.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onRequestPrinterCapability(printerId: number): print.PrinterCapability;

  /**
   * Called once to request preview and send result to Print SA.
   * @param {  print.PrintJob } jobInfo - Indicates the information of job.
   * @returns { string} preview result.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onRequestPreview(jobInfo: print.PrintJob): string;

  /**
   * Called once to finalize the extensionAbility.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10
   */
  onDestroy(): void;
}
