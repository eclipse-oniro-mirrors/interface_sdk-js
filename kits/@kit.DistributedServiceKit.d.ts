/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import cooperate from '@ohos.cooperate';
import distributedDeviceManager from '@ohos.distributedDeviceManager';
import deviceManager from '@ohos.distributedHardware.deviceManager';
import hardwareManager from '@ohos.distributedHardware.hardwareManager';
import abilityConnectionManager from '@ohos.distributedsched.abilityConnectionManager';
import linkEnhance from '@ohos.distributedsched.linkEnhance';
import DistributedExtensionAbility from '@ohos.application.DistributedExtensionAbility';
import DistributedExtensionContext from '@ohos.application.DistributedExtensionContext';
import proxyChannelManager from '@ohos.distributedsched.proxyChannelManager';

export { 
  cooperate, deviceManager, distributedDeviceManager, hardwareManager, abilityConnectionManager, linkEnhance,
  DistributedExtensionAbility, DistributedExtensionContext, proxyChannelManager
};
