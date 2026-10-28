'use static'
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
 * Indicates how a dialog follows the handedness.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.1.0 static
 */
export declare enum HandednessFollowMode {
    /**
     * No adaptation. The dialog keeps the current layout. Default value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    NONE = 0,

    /**
     * The dialog follows the position of the component that triggers it
     * (the last interacted component).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    FOLLOW_ANCHOR = 1,

    /**
     * The dialog follows the grip hand (the hand holding the device,
     * distinguished from the operating hand interacting with the screen).
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.1.0 static
     */
    FOLLOW_GRIP_HAND = 2,
}
