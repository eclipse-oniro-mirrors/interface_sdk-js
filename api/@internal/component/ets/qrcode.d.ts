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

/*** if arkts 1.2 */
import { CommonMethod } from './common'
import { ResourceColor, ResourceStr } from './units'
import { Resource } from '../../global/resource'
/*** endif */

/**
 * Provides an interface for generating QR codes.
 *
 * @interface QRCodeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for generating QR codes.
 *
 * @interface QRCodeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for generating QR codes.
 *
 * @interface QRCodeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for generating QR codes.
 *
 * @interface QRCodeInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 * @noninterop
 */
interface QRCodeInterface {
  /**
   * Called when a QR code is set.
   *
   * @param { string } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when a QR code is set.
   *
   * @param { string } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when a QR code is set.
   *
   * @param { string } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when a QR code is set.
   *
   * @param { string } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11
   */
  /**
   * Called when a QR code is set.
   *
   * @param { ResourceStr } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  (value: ResourceStr): QRCodeAttribute;
}

/**
 * Defines the qrcode attribute functions.
 *
 * @extends CommonMethod<QRCodeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the qrcode attribute functions.
 *
 * @extends CommonMethod<QRCodeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the qrcode attribute functions.
 *
 * @extends CommonMethod<QRCodeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the qrcode attribute functions.
 *
 * @extends CommonMethod<QRCodeAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 * @noninterop
 */
declare class QRCodeAttribute extends CommonMethod<QRCodeAttribute> {
  /**
   * Called when the QR code color is set.
   *
   * @param { ResourceColor } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the QR code color is set.
   *
   * @param { ResourceColor } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when the QR code color is set.
   *
   * @param { ResourceColor } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when the QR code color is set.
   *
   * @param { ResourceColor } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  color(value: ResourceColor): QRCodeAttribute;

  /**
   * Called when setting the QR code background color.
   *
   * @param { ResourceColor } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when setting the QR code background color.
   *
   * @param { ResourceColor } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @form
   * @since 9
   */
  /**
   * Called when setting the QR code background color.
   *
   * @param { ResourceColor } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @since 10
   */
  /**
   * Called when setting the QR code background color.
   *
   * @param { ResourceColor } value
   * @returns { QRCodeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @form
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  backgroundColor(value: ResourceColor): QRCodeAttribute;

  /**
   * Set the opacity of the QR code content color.
   * @param { number | Resource } value - indicates the opacity of the QR code content color. The value is between 0 and 1, with a default value of 1.
   * @returns { QRCodeAttribute } the attribute of the QR code
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  /**
   * Set the opacity of the QR code content color.
   * @param { number | Resource } value - indicates the opacity of the QR code content color. The value is between 0 and 1, with a default value of 1.
   * @returns { QRCodeAttribute } the attribute of the QR code
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  contentOpacity(value: number | Resource): QRCodeAttribute;
}

/**
 * Defines QRCode Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines QRCode Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines QRCode Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines QRCode Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const QRCode: QRCodeInterface;

/**
 * Defines QRCode Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines QRCode Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines QRCode Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines QRCode Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @noninterop
 */
declare const QRCodeInstance: QRCodeAttribute;
