/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */

/**
 * The convertxml module provides utilities for converting XML text to Javascript object.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * The convertxml module provides utilities for converting XML text to Javascript object.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * The convertxml module provides utilities for converting XML text to Javascript object.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11 dynamiconly
 */
declare namespace xml {
  /**
   * The options for conversion.
   *
   * @interface ConvertOptions
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   */
  /**
   * The options for conversion.
   *
   * @interface ConvertOptions
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   */
  /**
   * The options for conversion.
   *
   * @interface ConvertOptions
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   */
  interface ConvertOptions {
    /**
     * Whether to trim whitespace characters that may exist before and after the text, default false.
     *
     * @type { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to trim whitespace characters that may exist before and after the text, default false.
     *
     * @type { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to trim whitespace characters that may exist before and after the text, default false.
     *
     * @type { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    trim: boolean;
    /**
     * Whether to ignore writing declaration directives of xml.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to ignore writing declaration directives of xml.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to ignore writing declaration directives of xml.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    ignoreDeclaration?: boolean;
    /**
     * Whether to ignore writing processing instruction of xml.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to ignore writing processing instruction of xml.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to ignore writing processing instruction of xml.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    ignoreInstruction?: boolean;
    /**
     * Whether to print attributes across multiple lines and indent them.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to print attributes across multiple lines and indent them.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to print attributes across multiple lines and indent them.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    ignoreAttributes?: boolean;
    /**
     * Whether to ignore writing comments of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to ignore writing comments of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to ignore writing comments of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    ignoreComment?: boolean;
    /**
     * Whether to ignore writing CDATA of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to ignore writing CDATA of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to ignore writing CDATA of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    ignoreCDATA?: boolean;
    /**
     * Whether to ignore writing Doctype of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to ignore writing Doctype of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to ignore writing Doctype of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    ignoreDoctype?: boolean;
    /**
     * Whether to ignore writing texts of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Whether to ignore writing texts of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to ignore writing texts of the elements.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    ignoreText?: boolean;
    /**
     * Name of the property key which will be used for the declaration.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the declaration.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the declaration.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    declarationKey: string;
    /**
     * Name of the property key which will be used for the processing instruction.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the processing instruction.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the processing instruction.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    instructionKey: string;
    /**
     * Name of the property key which will be used for the attributes.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the attributes.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the attributes.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    attributesKey: string;
    /**
     * Name of the property key which will be used for the text.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the text.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the text.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    textKey: string;
    /**
     * Name of the property key which will be used for the cdata.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the cdata.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the cdata.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    cdataKey: string;
    /**
     * Name of the property key which will be used for the doctype.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the doctype.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the doctype.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    doctypeKey: string;
    /**
     * Name of the property key which will be used for the comment.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the comment.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the comment.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    commentKey: string;
    /**
     * Name of the property key which will be used for the parent.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the parent.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the parent.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    parentKey: string;
    /**
     * Name of the property key which will be used for the type.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the type.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the type.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    typeKey: string;
    /**
     * Name of the property key which will be used for the name.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the name.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the name.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    nameKey: string;
    /**
     * Name of the property key which will be used for the elements.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Name of the property key which will be used for the elements.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the property key which will be used for the elements.
     *
     * @type { string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     */
    elementsKey: string;
  }

  /**
   * ConvertXML representation refers to extensible markup language.
   *
   * @syscap SystemCapability.Utils.Lang
   * @since 8
   * @name ConvertXML
   */
  /**
   * ConvertXML representation refers to extensible markup language.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @since 10
   * @name ConvertXML
   */
  /**
   * ConvertXML representation refers to extensible markup language.
   *
   * @syscap SystemCapability.Utils.Lang
   * @crossplatform
   * @atomicservice
   * @since 11 dynamiconly
   */
  class ConvertXML {
    /**
     * To convert XML text to JavaScript object.
     *
     * @param { string } xml - xml xml The xml text to be converted.
     * @param { ConvertOptions } options - options option Option Inputted by user to set.
     * @returns { Object } Returns a JavaScript object converting from XML text.
     * @syscap SystemCapability.Utils.Lang
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.convertxml.ConvertXML.convertToJSObject
     */
    convert(xml: string, options?: ConvertOptions): Object;

    /**
     * To convert XML text to JavaScript object.
     *
     * @param { string } xml - xml xml The xml text to be converted.
     * @param { ConvertOptions } [options] - options option Option Inputted by user to set.
     * @returns { Object } Returns a JavaScript object converting from XML text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * To convert XML text to JavaScript object.
     *
     * @param { string } xml - xml xml The xml text to be converted.
     * @param { ConvertOptions } [options] - options option Option Inputted by user to set.
     * @returns { Object } Returns a JavaScript object converting from XML text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * To convert XML text to JavaScript object.
     *
     * @param { string } xml - xml xml The xml text to be converted.
     * @param { ConvertOptions } [options] - options option Option Inputted by user to set.
     * @returns { Object } Returns a JavaScript object converting from XML text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * To convert XML text to JavaScript object.
     *
     * @param { string } xml - xml xml The xml text to be converted.
     * @param { ConvertOptions } [options] - options option Option Inputted by user to set.
     * @returns { Object } Returns a JavaScript object converting from XML text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 14
     * @useinstead ohos.convertxml.ConvertXML.fastConvertToJSObject
     */
    convertToJSObject(xml: string, options?: ConvertOptions): Object;

    /**
     * Converts an XML text into a JavaScript object.
     *
     * @param { string } xml - XML text to convert. If the XML text contains the ampersand (&), replace it with the
     * entity reference &amp;.
     * @param { ConvertOptions } [options] - Options for conversion. The default value is a ConvertOptions object,
     * which consists of the default values of the attributes in the object.
     * @returns { Object } Returns a JavaScript object converting from XML text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 10200002 - Invalid xml string.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 14 dynamiconly
     */
    fastConvertToJSObject(xml: string, options?: ConvertOptions): Object;
  }
}
export default xml;
