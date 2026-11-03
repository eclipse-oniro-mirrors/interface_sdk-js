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
 * @file Print Extension Ability
 * @kit BasicServicesKit
 */

import type PrintExtensionContext from './application/PrintExtensionContext';
import type Want from './@ohos.app.ability.Want';
import type print from './@ohos.print';

/**
 * This module provides the APIs for calling the print extension ability. **PrintExtensionAbility** runs based on the
 * lifecycle callback mechanism. The system invokes the corresponding callback methods to connect to the print
 * extension, discover printers, connect to or disconnect from printers, query printer capabilities, and start or cancel
 * print jobs. You need to implement the print extension logic in each callback.
 *
 * @syscap SystemCapability.Print.PrintFramework
 * @systemapi Hide this for inner system use. [since 10 - 13]
 * @publicapi [since 14]
 * @stagemodelonly
 * @since 10 dynamic
 * @since 23 static
 */
declare class PrintExtensionAbility {

  /**
   * Context of the print extension ability.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  context: PrintExtensionContext;

  /**
   * Define an API called when the system connects to the print extension ability for the first time. You need complete
   * the initialization of the print extension ability in this callback, such as initializing necessary resources and
   * states.
   *
   * @param { Want } want - Want information passed in when the print extension is created, including the information
   *     specified by the caller (such as **action** and **uri**), used to initialize the print extension ability.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Defines an API called when printer discovery starts. You need to implement the printer discovery logic in this
   * callback, and report the discovered printer information to the system through
   * [addPrinterToDiscovery]{@link ./@ohos.print:print.addPrinterToDiscovery}.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onStartDiscoverPrinter(): void;

  /**
   * Defines an API called when printer discovery stops. You need to stop the printer discovery process and release
   * related resources in this callback.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onStopDiscoverPrinter(): void;

  /**
   * Defines an API called when the device connects to the specified printer. You need to implement the logic for
   * connecting to the specified printer (identified by **printerId**) in this callback.
   *
   * @param { int } printerId - ID of the discovered printer, which should be a valid printer ID reported during the
   *     printer discovery process.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onConnectPrinter(printerId: int): void;

  /**
   * Defines an API called when the device disconnects from the specified printer. You need to implement the logic for
   * disconnecting from the printer and release related resources in this callback.
   *
   * @param { int } printerId - ID of the connected printer, which should be a valid printer ID reported during the
   *     printer discovery process.
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDisconnectPrinter(printerId: int): void;

  /**
   * Defines an API called when the print job starts. You need to process the print operation based on the job
   * information in **jobInfo**, such as parsing the print job parameters and executing the corresponding print process.
   *
   * @param { print.PrintJob } jobInfo - Information about the print job, including detailed configuration and status
   *     such as the job ID, printer ID, and document information, used to specify the print job to start.
   * @throws { BusinessError } 202 - not system application [since 10 - 23]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  public onStartPrintJob(jobInfo: print.PrintJob): void;

  /**
   * Defines an API called when the started print job is canceled. You need to implement the logic for canceling the
   * print job in this callback, stop the ongoing print operation, and clear related resources.
   *
   * @param { print.PrintJob } jobInfo - Information about the print job, including detailed configuration and status
   *     such as the job ID, printer ID, and document information. The print job has been started by calling
   *     **onStartPrintJob**, and this parameter can be used to locate the target print job to be cancelled.
   * @throws { BusinessError } 202 - not system application [since 10 - 23]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  public onCancelPrintJob(jobInfo: print.PrintJob): void;

  /**
   * Defines an API called when the capabilities supported by the printer (such as color mode, duplex mode, and paper
   * size) are requested. For example, this callback is triggered when the system needs to obtain the capability
   * information supported by a printer after the user selects the printer in the print settings page. In this callback,
   * you need to query and return **print.PrinterCapability** of the corresponding printer based on **printerId**.
   *
   * @param { int } printerId - Printer ID, which is a valid printer ID reported during the printer discovery process.
   * @returns { print.PrinterCapability } Capability supported by the printer, such as the color mode, duplex mode, and
   *     paper size.
   * @throws { BusinessError } 202 - not system application [since 10 - 23]
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use. [since 10 - 23]
   * @publicapi [since 24]
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  public onRequestPrinterCapability(printerId: int): print.PrinterCapability;

  /**
   * Defines a method called when the system print service requests a preview. You need to inherit the
   * **PrintExtensionAbility** class and implement this method to return the preview result to the system print service.
   *
   * @param {  print.PrintJob } jobInfo - Information about the print job.
   * @returns { string } Preview result.
   * @throws { BusinessError } 202 - not system application
   * @syscap SystemCapability.Print.PrintFramework
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  onRequestPreview(jobInfo: print.PrintJob): string;

  /**
   * Defines an API called when the print extension ability ends. In this callback, you need to release related
   * resources and complete the necessary clearance work.
   *
   * @syscap SystemCapability.Print.PrintFramework
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  onDestroy(): void;
}

export default PrintExtensionAbility;
