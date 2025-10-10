/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

/**
 * class of wallpaper extension ability.
 *
 * @syscap SystemCapability.MiscServices.Wallpaper
 * @systemapi Hide this for inner system use.
 * @StageModelOnly
 * @since 10 dynamic
 * @since 20 static
 */
declare class WallpaperExtensionAbility {
  /**
   * Called once to initialize the extension ability.
   *
   * @param { object } want - Indicates connection information about the wallpaper extension ability.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10 dynamic
   * @since 20 static
   */
  onCreate(want: object): void;

  /**
   * The onWallpaperChange callback is triggered when the user modifies the wallpaper settings.
   *
   * @param { int } wallpaperType - Indicates the wallpaper type.
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10 dynamic
   * @since 20 static
   */
  onWallpaperChange(wallpaperType: int): void;

  /**
   * Called once to destroy the extension ability.
   *
   * @syscap SystemCapability.MiscServices.Wallpaper
   * @systemapi Hide this for inner system use.
   * @StageModelOnly
   * @since 10 dynamic
   * @since 20 static
   */
  onDestroy(): void;
}

export default WallpaperExtensionAbility;
