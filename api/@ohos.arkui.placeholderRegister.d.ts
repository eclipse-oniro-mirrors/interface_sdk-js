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

/**
 * Describes the placeholder to display for an item of a scrollable component while the real item
 * is being created across frames.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export interface PlaceholderOptions {
  /**
   * ID of the registered placeholder builder. The registry is obtained per UI instance through
   * [getPlaceholderRegister()]{@link @ohos.arkui.UIContext#getPlaceholderRegister},
   * and the builder is registered through its **register** method.
   * If **id** is omitted, empty, or not registered, the system default placeholder is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  id?: string;

  /**
   * Suggested layout size of the placeholder. The real item is re-laid out under the normal layout
   * constraints of the item once it has been created, so a suggested size closer to the real size
   * reduces the visual jump at replacement.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  size?: SizeOptions;
}

/**
 * Provides the placeholder description for an item of a scrollable component.
 *
 * <br>**NOTE**<br>
 * The provider is invoked synchronously during scrolling on the UI thread and must be a pure
 * calculation. Returning **undefined** means the item does not need a placeholder.
 *
 * @param { number } index - Index of the item that is about to be created.
 * @returns { PlaceholderOptions | undefined } Placeholder description of the item, or **undefined**
 *     if the item does not need a placeholder.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export type PlaceholderProvider = (index: number) => PlaceholderOptions | undefined;

/**
 * Provides the methods for registering, unregistering, and querying scroll placeholder builders.
 * Each UI instance holds its own registry: builders registered in one instance are not visible to
 * another. Do not create instances of this class; use
 * [getPlaceholderRegister()]{@link @ohos.arkui.UIContext#getPlaceholderRegister}
 * to obtain the registry of the current UI instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export class PlaceholderRegister {
  /**
   * Registers a placeholder builder under the given ID for scrollable components.
   *
   * The builder must be a global, parameterless **@Builder({ isPlaceholder: true })** function
   * that performs read-only static rendering: it must not access reactive state, register gestures,
   * or register business callbacks. To pass the builder, wrap it with **wrapBuilder**.
   *
   * Registering the same ID again atomically publishes a new template version; placeholder tasks
   * already dispatched are validated against the template generation before being mounted.
   *
   * The framework validates the restricted-builder mark carried in the compile product at
   * registration. A builder that is not marked with **@Builder({ isPlaceholder: true })**
   * at compile time (including builders passed in through dynamic means that bypass compile-time
   * type checks) is rejected: the ID is not registered, and a **scrollPlaceholder** provider hit
   * on it uses the system default placeholder.
   *
   * @param { string } id - ID of the placeholder template. A **scrollPlaceholder** provider refers to
   *     the template by this ID.
   * @param { WrappedBuilder<[]> } builder - Global parameterless placeholder builder wrapped
   *     through **wrapBuilder**; a bare builder function is not accepted.
   * @throws { BusinessError } 100031 - Registration rejected: the builder is not marked with
   *     **@Builder({ isPlaceholder: true })**. The ID is not registered.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  register(id: string, builder: WrappedBuilder<[]>): void;

  /**
   * Unregisters the placeholder builder registered under the given ID for this UI instance.
   *
   * Once a template is unregistered, its ID can no longer be matched: a **scrollPlaceholder**
   * provider hit on this ID uses the system default placeholder, and placeholder tasks already
   * dispatched for the template are not mounted. Unregistering an ID that is not registered is a
   * silent no-op.
   *
   * @param { string } id - ID of the placeholder template to unregister.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  unregister(id: string): void;

  /**
   * Checks whether a placeholder builder has been registered under the given ID for this UI instance.
   *
   * This is a read-only query: it does not change the registration state and does not affect
   * subsequent placeholder behavior. A template remains registered regardless of whether the
   * framework currently retains prebuilt placeholder instances for it.
   *
   * @param { string } id - ID of the placeholder template to query.
   * @returns { boolean } **true** if the ID has been registered in this UI instance; **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  isRegistered(id: string): boolean;
}
