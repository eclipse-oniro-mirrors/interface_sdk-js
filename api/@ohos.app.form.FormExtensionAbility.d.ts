/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit FormKit
 */

import formBindingData from './@ohos.app.form.formBindingData';
/*** if arkts 1.1 */
import formInfo from './@ohos.app.form.formInfo';
/*** endif */
import FormExtensionContext from './application/FormExtensionContext';
import Want from './@ohos.app.ability.Want';
/*** if arkts 1.1 */
import { Configuration } from './@ohos.app.ability.Configuration';
/*** endif */

/**
 * Called when this ability breaks the last link, notifying the provider that the provider process is about to stop.
 *
 * @typedef { function }
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
type OnStopFn = () => void;

/**
 * class of form extension.
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @since 9
 */
/**
 * class of form extension.
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class FormExtensionAbility {
  /**
   * Indicates form extension context.
   *
   * @type { FormExtensionContext }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Indicates form extension context.
   *
   * @type { FormExtensionContext }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  context: FormExtensionContext;

  /**
   * Called to return a {@link formBindingData#FormBindingData} object.
   *
   * @param { Want } want - Indicates the detailed information for creating a {@link formBindingData#FormBindingData}.
   *                        The {@code Want} object must include the form ID, form name, and grid style of the form.
   *                        Such form information must be managed as persistent data for further form
   *                        acquisition, update, and deletion.
   * @returns { formBindingData.FormBindingData } Returns the created {@link formBindingData#FormBindingData} object.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called to return a {@link formBindingData#FormBindingData} object.
   *
   * @param { Want } want - Indicates the detailed information for creating a {@link formBindingData#FormBindingData}.
   *                        The {@code Want} object must include the form ID, form name, and grid style of the form.
   *                        Such form information must be managed as persistent data for further form
   *                        acquisition, update, and deletion.
   * @returns { formBindingData.FormBindingData } Returns the created {@link formBindingData#FormBindingData} object.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onAddForm(want: Want): formBindingData.FormBindingData;

  /**
   * Called when the form provider is notified that a temporary form is successfully converted to a normal form.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called when the form provider is notified that a temporary form is successfully converted to a normal form.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onCastToNormalForm(formId: string): void;

  /**
   * Called to notify the form provider to update a specified form.
   *
   * @param { string } formId - Indicates the ID of the form to update.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called to notify the form provider to update a specified form.
   *
   * @param { string } formId - Indicates the ID of the form to update.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  /**
   * Called to notify the form provider to update a specified form.
   *
   * @param { string } formId - Indicates the ID of the form to update.
   * @param { Record<string, Object> } [wantParams] - Indicates the detailed information for updating the form.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onUpdateForm(formId: string, wantParams?: Record<string, Object>): void;

  /**
   * Called when the form provider receives form events from the system.
   *
   * @param { object } newStatus - Indicates the form events occurred. The key in the {@code Map}
   *                               object indicates the form ID, and the value indicates the event
   *                               type, which can be either
   *                               {@link formInfo#VisibilityType#FORM_VISIBLE} or
   *                               {@link formInfo#VisibilityType#FORM_INVISIBLE}.
   *                               {@link formInfo#VisibilityType#FORM_VISIBLE} means that the form becomes visible,
   *                               {@link formInfo#VisibilityType#FORM_INVISIBLE} means that the form becomes
   *                               invisible.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called when the form provider receives form events from the system.
   *
   * @param { Record<string, int> } newStatus - Indicates the form events occurred. The key in the {@code Map}
   *                                               object indicates the form ID, and the value indicates the event
   *                                               type, which can be either
   *                                               {@link formInfo#VisibilityType#FORM_VISIBLE} or
   *                                               {@link formInfo#VisibilityType#FORM_INVISIBLE}.
   *                                               {@link formInfo#VisibilityType#FORM_VISIBLE}
   *                                               means that the form becomes visible,
   *                                               {@link formInfo#VisibilityType#FORM_INVISIBLE} means that the form
   *                                               becomes invisible.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onChangeFormVisibility(newStatus: Record<string, int>): void;

  /**
   * Called when a specified message event defined by the form provider is triggered. This method is valid only for
   * JS forms.
   *
   * @param { string } formId - Indicates the ID of the form on which the message event is triggered, which is
   *                            provided by the client to the form provider.
   * @param { string } message - Indicates the value of the {@code params} field of the message event. This parameter
   *                             is used to identify the specific component on which the event is triggered.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called when a specified message event defined by the form provider is triggered. This method is valid only for
   * JS forms.
   *
   * @param { string } formId - Indicates the ID of the form on which the message event is triggered, which is
   *                            provided by the client to the form provider.
   * @param { string } message - Indicates the value of the {@code params} field of the message event. This parameter
   *                             is used to identify the specific component on which the event is triggered.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onFormEvent(formId: string, message: string): void;

  /**
   * Called to notify the form provider that a specified form has been destroyed. Override this method if
   * you want your application, as the form provider, to be notified of form deletion.
   *
   * @param { string } formId - Indicates the ID of the destroyed form.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called to notify the form provider that a specified form has been destroyed. Override this method if
   * you want your application, as the form provider, to be notified of form deletion.
   *
   * @param { string } formId - Indicates the ID of the destroyed form.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onRemoveForm(formId: string): void;

  /**
   * Called when the system configuration is updated.
   *
   * @param { Configuration } newConfig - Indicates the system configuration, such as language and color mode.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called when the system configuration is updated.
   *
   * @param { Configuration } newConfig - Indicates the system configuration, such as language and color mode.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  onConfigurationUpdate(newConfig: Configuration): void;

  /**
   * Called to return a {@link FormState} object.
   * <p>You must override this callback if you want this ability to return the actual form state. Otherwise,
   * this method returns {@link FormState#DEFAULT} by default.</p>
   *
   * @param { Want } want - Indicates the description of the form for which the {@link formInfo#FormState}
   *                        is obtained. The description covers the bundle name, ability name, module name,
   *                        form name, and form dimensions.
   * @returns { formInfo.FormState } Returns the {@link formInfo#FormState} object.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called to return a {@link FormState} object.
   * <p>You must override this callback if you want this ability to return the actual form state. Otherwise,
   * this method returns {@link FormState#DEFAULT} by default.</p>
   *
   * @param { Want } want - Indicates the description of the form for which the {@link formInfo#FormState}
   *                        is obtained. The description covers the bundle name, ability name, module name,
   *                        form name, and form dimensions.
   * @returns { formInfo.FormState } Returns the {@link formInfo#FormState} object.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 11
   */
  onAcquireFormState?(want: Want): formInfo.FormState;

  /**
   * Called when the system shares the form.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @returns { object } Returns the wantParams object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  /**
   * Called when the system shares the form.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @returns { Record<string, Object> } Returns the wantParams object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  onShareForm?(formId: string): Record<string, Object>;

  /**
   * Called when the system acquire the form data.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @returns { object } Returns the wantParams object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  /**
   * Called when the system acquire the form data.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @returns { Record<string, Object> } Returns the wantParams object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 11
   */
  onAcquireFormData?(formId: string): Record<string, Object>;

  /**
   * Called when this ability breaks the last link, notifying the provider that the provider process is about to stop.
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 12
   */
  onStop?(): void;

  /**
   * Called when this ability breaks the last link, notifying the provider that the provider process is about to stop.
   *
   * @type { ?OnStopFn }
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  onStop?: OnStopFn;

  /**
   * Called to notify the form provider that the form location of the form has been changed.
   *
   * @param { string } formId - Indicates the ID of the form.
   * @param { formInfo.FormLocation } newFormLocation - Indicates the new form location of the form.
   *
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 20
   */
  onFormLocationChanged(formId: string, newFormLocation: formInfo.FormLocation): void;
}
export default FormExtensionAbility;
