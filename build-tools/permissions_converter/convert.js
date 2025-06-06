/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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

const fs = require('fs');

const copyRight = `/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 */\n\n`;
 
 const label = `/**
 * @file Defines all permissions.
 * @kit AbilityKit
 */

 /**
 * Indicates permissions.
 *
 * @typedef Permissions
 * @syscap SystemCapability.Security.AccessToken
 * @since 9
 */
 /**
 * Indicates permissions.
 *
 * @typedef Permissions
 * @syscap SystemCapability.Security.AccessToken
 * @atomicservice
 * @since 11
 */\n`;

 const label_1_2 = `/**
 * @file Defines all permissions.
 * @kit AbilityKit
 */

 /**
 * Indicates permissions.
 *
 * @typedef Permissions
 * @syscap SystemCapability.Security.AccessToken
 * @atomicservice
 * @since 20
 */\n`;

const typeHead = 'export type Permissions =\n';
const typeTail = ';';
const tab = ' ';
const tabs = tab.repeat(2);
const tabzz = tab.repeat(3);
const commentHead = `${tabs}/**\n`;
const commentBody = `${tabzz}* `;
const commentTail = `${tabzz}*/\n`;
const sinceTag = '@since ';
const arkTS20Version = 20;
const deprecatedTag = '@deprecated ';
const orOperator = `${tabs}|${tab}`;

const getPermissions = downloadPath => {
  try {
    const content = fs.readFileSync(downloadPath, { encoding: 'utf8' });
    const configMap = JSON.parse(decodeURIComponent(content));
    return configMap.definePermissions.filter(permission => {
      if (permission.availableType) {
        return permission.availableType !== 'SERVICE';
      }
    });
  } catch (error) {
    console.error('Convert json file to object failed');
  }
  return undefined;
};

const getArkTsVersion = (permission, fileType) => {
  if (fileType === 'ts') {
    return permission.since;
  }
  if (permission.since <= 20) {
    if (permission.deprecated && permission.deprecated !== '') {
      const deprecatedVersion = permission.deprecated.replace(/[^\d]/g, '');
      if (parseInt(deprecatedVersion) <= 20) {
        return undefined;
      }
      return arkTS20Version;
    }
    return arkTS20Version;
  } else {
    return permission.since;
  }
}

const convertJsonToDTS = (permissions, outputFilePath) => {
  if (fs.existsSync(outputFilePath)) {
    fs.unlinkSync(outputFilePath);
  }
  const fileType = outputFilePath.substring(outputFilePath.lastIndexOf(".") + 1);
  fs.appendFileSync(outputFilePath, copyRight, 'utf8');
  if (fileType === 'ts') {
    fs.appendFileSync(outputFilePath, label, 'utf8');
  } else {
    fs.appendFileSync(outputFilePath, label_1_2, 'utf8');
  }
  fs.appendFileSync(outputFilePath, typeHead, 'utf8');

  permissions.forEach((permission, index) => {
    const arkTsSinceVersion = getArkTsVersion(permission, fileType);
    if (arkTsSinceVersion === undefined) {
      return;
    }
    fs.appendFileSync(outputFilePath, commentHead, 'utf8');
    const since = `${commentBody}${sinceTag}${arkTsSinceVersion}\n`;
    fs.appendFileSync(outputFilePath, since, 'utf8');
    if (permission.deprecated) {
      const deprecated = `${commentBody}${deprecatedTag}${permission.deprecated}\n`;
      fs.appendFileSync(outputFilePath, deprecated, 'utf8');
    }
    fs.appendFileSync(outputFilePath, commentTail, 'utf8');
    const permissionName = `${index === 0 ? tabs : orOperator}'${permission.name}'${
      index === permissions.length - 1 ? '' : '\n'
    }`;
    fs.appendFileSync(outputFilePath, permissionName, 'utf8');
  });
  fs.appendFileSync(outputFilePath, typeTail, 'utf8');
  console.log('Convert module.json definePermissions to permissions successfully, filename = ' + outputFilePath);
};

/**
 * Read config.json file and convert it to permission.d.ts
 *
 * @param {
 *   filePath: name of downloaded config.json file
 *   outputFileName: name of converted d.ts file name
 * } options
 */
const convert = options => {
  const permissions = getPermissions(options.filePath);
  if (permissions) {
    convertJsonToDTS(permissions, options.outputFilePath);
  } else {
    console.error('Config file does not have definePermissions property');
  }
};

const arguments = process.argv;
const options = {
  filePath: arguments[2],
  outputFilePath: arguments[3],
};
try {
  convert(options);
} catch (error) {
  console.error(`ERROR FOR CONVERTING PERMISSION: ${error}`);
}
