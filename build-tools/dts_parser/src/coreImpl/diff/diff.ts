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

import _ from 'lodash';
import ts from 'typescript';
import { StringConstant } from '../../utils/Constant';
import {
  ApiInfo,
  ApiType,
  BasicApiInfo,
  ContainerApiInfo,
  containerApiTypes,
} from '../../typedef/parser/ApiInfoDefination';
import { ApiDiffType, ApiStatusCode, BasicDiffInfo, DiffTypeInfo } from '../../typedef/diff/ApiInfoDiff';
import { ApiInfosMap, FileInfoMap, FilesMap, Parser } from '../parser/parser';
import { apiStatisticsType } from '../../typedef/statistics/ApiStatistics';
import { DiffProcessorHelper } from './DiffProcessor';
import { FunctionUtils } from '../../utils/FunctionUtils';
import { Comment } from '../../typedef/parser/Comment';
import { notJsDocApiTypes } from '../../typedef/parser/ApiInfoDefination';
import { StringUtils } from '../../utils/StringUtils';
import { CommentHelper } from '../parser/JsDocProcessor';

export class DiffHelper {
  /**
   * 根据解析后的新旧版本SDK结果，得到对比差异
   *
   * @param { FilesMap } oldSDKApiMap 旧版本SDK解析后的结果
   * @param { FilesMap } newSDKApiMap 新版本SDK解析后的结果
   * @returns { BasicDiffInfo[] } 差异结果集
   */
  static diffSDK(
    oldSDKApiMap: FilesMap,
    newSDKApiMap: FilesMap,
    isAllSheet: boolean,
    isCheck?: boolean
  ): BasicDiffInfo[] {
    const clonedOldSDKApiMap: FilesMap = _.cloneDeep(oldSDKApiMap);
    const clonedNewSDKApiMap: FilesMap = _.cloneDeep(newSDKApiMap);
    const diffInfos: BasicDiffInfo[] = [];
    const oldSDKApiLocations: Map<string, string[]> = DiffHelper.getApiLocations(clonedOldSDKApiMap, isCheck);
    const newSDKApiLocations: Map<string, string[]> = DiffHelper.getApiLocations(clonedNewSDKApiMap, isCheck);
    DiffHelper.diffKit(clonedOldSDKApiMap, clonedNewSDKApiMap, diffInfos);
    const oldFilePathSet: Set<string> = new Set(Array.from(clonedOldSDKApiMap.keys()));
    // 先以旧版本为基础进行对比
    for (const key of oldSDKApiLocations.keys()) {
      const apiLocation: string[] = oldSDKApiLocations.get(key) as string[];
      const oldApiInfos: ApiInfo[] = Parser.getApiInfo(apiLocation, clonedOldSDKApiMap, isAllSheet) as ApiInfo[];
      // 如果旧版本中的API在新版本中不存在，则为删除
      if (!newSDKApiLocations.has(key)) {
        oldApiInfos.forEach((oldApiInfo: ApiInfo) => {
          diffInfos.push(
            DiffProcessorHelper.wrapDiffInfo(
              oldApiInfo,
              undefined,
              new DiffTypeInfo(ApiStatusCode.DELETE, ApiDiffType.REDUCE, oldApiInfo.getDefinedText())
            )
          );
        });
        continue;
      }
      // 新旧版本均存在，则进行对比
      const newApiInfos: ApiInfo[] = Parser.getApiInfo(apiLocation, clonedNewSDKApiMap, isAllSheet) as ApiInfo[];
      DiffHelper.diffApis(oldApiInfos, newApiInfos, diffInfos, isAllSheet, isCheck);
      // 对比完则将新版本中的对应API进行删除
      newSDKApiLocations.delete(key);
    }
    // 对比完还剩下的新版本中的API即为新增API
    for (const key of newSDKApiLocations.keys()) {
      const locations: string[] = newSDKApiLocations.get(key) as string[];
      const newApiInfos: ApiInfo[] = Parser.getApiInfo(locations, clonedNewSDKApiMap, isAllSheet) as ApiInfo[];
      newApiInfos.forEach((newApiInfo: ApiInfo) => {
        let isNewFile: boolean = true;
        if (oldFilePathSet.has(newApiInfo.getFilePath())) {
          isNewFile = false;
        }
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            undefined,
            newApiInfo,
            new DiffTypeInfo(ApiStatusCode.NEW_API, ApiDiffType.ADD, undefined, newApiInfo.getDefinedText()),
            isNewFile
          )
        );
      });
    }
    return diffInfos;
  }

  static diffKit(clonedOldSDKApiMap: FilesMap, clonedNewSDKApiMap: FilesMap, diffInfos: BasicDiffInfo[]): void {
    for (const key of clonedOldSDKApiMap.keys()) {
      const oldSourceFileInfo: ApiInfo | undefined = DiffHelper.getSourceFileInfo(clonedOldSDKApiMap.get(key));
      oldSourceFileInfo?.setSyscap(DiffHelper.getSyscapField(oldSourceFileInfo));
      const oldKitInfo: string | undefined = oldSourceFileInfo?.getLastJsDocInfo()?.getKit();
      //文件在新版本中被删除
      if (!clonedNewSDKApiMap.get(key) && oldKitInfo) {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            oldSourceFileInfo,
            undefined,
            new DiffTypeInfo(ApiStatusCode.KIT_CHANGE, ApiDiffType.KIT_CHANGE, oldKitInfo, 'NA')
          )
        );
      } else if (clonedNewSDKApiMap.get(key)) {
        const newSourceFileInfo: ApiInfo | undefined = DiffHelper.getSourceFileInfo(clonedNewSDKApiMap.get(key));
        const newKitInfo: string | undefined = newSourceFileInfo?.getLastJsDocInfo()?.getKit();
        if (oldKitInfo !== newKitInfo) {
          diffInfos.push(
            DiffProcessorHelper.wrapDiffInfo(
              oldSourceFileInfo,
              newSourceFileInfo,
              new DiffTypeInfo(ApiStatusCode.KIT_CHANGE, ApiDiffType.KIT_CHANGE, oldKitInfo, newKitInfo)
            )
          );
        }
      }
    }

    for (const key of clonedNewSDKApiMap.keys()) {
      const newSourceFileInfo: ApiInfo | undefined = DiffHelper.getSourceFileInfo(clonedNewSDKApiMap.get(key));
      const newKitInfo: string | undefined = newSourceFileInfo?.getLastJsDocInfo()?.getKit();
      if (!clonedOldSDKApiMap.get(key) && newKitInfo) {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            undefined,
            newSourceFileInfo,
            new DiffTypeInfo(ApiStatusCode.KIT_CHANGE, ApiDiffType.KIT_CHANGE, 'NA', newKitInfo)
          )
        );
      }
    }
  }

  static getSourceFileInfo(fileMap: FileInfoMap | undefined): ApiInfo | undefined {
    if (!fileMap) {
      return undefined;
    }
    let sourceFileInfos: ApiInfo[] = [];
    for (const apiKey of fileMap.keys()) {
      if (apiKey === StringConstant.SELF) {
        sourceFileInfos = fileMap.get(apiKey) as ApiInfo[];
      }
    }
    return sourceFileInfos[0];
  }

  /**
   * 通过数组长度判断是否为同名函数
   *
   * @param apiInfos
   */
  static judgeIsSameNameFunction(apiInfos: BasicApiInfo[]): boolean {
    let isSameNameFunction: boolean = false;
    if (apiInfos.length > 1 && apiInfos[0].getApiType() === ApiType.METHOD) {
      isSameNameFunction = true;
    }
    return isSameNameFunction;
  }

  /**
   * 对比新旧版本API差异，类型为数组是由于同名函数的存在，因此统一为数组方便处理
   *
   * @param { ApiInfo[] } oldApiInfos 老版本API信息
   * @param { ApiInfo[] } newApiInfos 新版本API信息
   * @param { BasicDiffInfo[] } diffInfos api差异结果集
   */
  static diffApis(
    oldApiInfos: ApiInfo[],
    newApiInfos: ApiInfo[],
    diffInfos: BasicDiffInfo[],
    isAllSheet: boolean,
    isCheck?: boolean
  ): void {
    const diffSets: Map<string, ApiInfo>[] = DiffHelper.getDiffSet(oldApiInfos, newApiInfos);
    const oldReduceNewMap: Map<string, ApiInfo> = diffSets[0];
    const newReduceOldMap: Map<string, ApiInfo> = diffSets[1];
    if (oldReduceNewMap.size === 0) {
      newReduceOldMap.forEach((newApiInfo: ApiInfo) => {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            undefined,
            newApiInfo,
            new DiffTypeInfo(ApiStatusCode.NEW_API, ApiDiffType.ADD, undefined, newApiInfo.getDefinedText())
          )
        );
      });
      return;
    }
    if (newReduceOldMap.size === 0) {
      oldReduceNewMap.forEach((oldApiInfo: ApiInfo) => {
        diffInfos.push(
          DiffProcessorHelper.wrapDiffInfo(
            oldApiInfo,
            undefined,
            new DiffTypeInfo(ApiStatusCode.DELETE, ApiDiffType.REDUCE, oldApiInfo.getDefinedText(), undefined)
          )
        );
      });
      return;
    }

    DiffHelper.diffSameNumberFunction(oldApiInfos, newApiInfos, diffInfos, isCheck);
  }

  /**
   * 删除完全一样的API后，进行对比
   * @param { ApiInfo[] } oldApiInfos
   * @param { ApiInfo[] } newApiInfos
   * @param diffInfos
   * @param { boolean } isCheck 是否是api_check工具进行调用
   */
  static diffSameNumberFunction(
    oldApiInfos: ApiInfo[],
    newApiInfos: ApiInfo[],
    diffInfos: BasicDiffInfo[],
    isCheck?: boolean
  ): void {
    //长度为1说明新旧版本有变更的只有1个，可直接进行对比
    if (oldApiInfos.length === 1 && oldApiInfos.length === newApiInfos.length) {
      DiffProcessorHelper.JsDocDiffHelper.diffJsDocInfo(oldApiInfos[0], newApiInfos[0], diffInfos);
      DiffProcessorHelper.ApiDecoratorsDiffHelper.diffDecorator(oldApiInfos[0], newApiInfos[0], diffInfos);
      DiffProcessorHelper.ApiNodeDiffHelper.diffNodeInfo(oldApiInfos[0], newApiInfos[0], diffInfos, isCheck);
    } else {
      const newMethodInfoMap: Map<string, ApiInfo> = DiffHelper.setmethodInfoMap(newApiInfos);
      const oldMethodInfoMap: Map<string, ApiInfo> = DiffHelper.setmethodInfoMap(oldApiInfos);
      oldApiInfos.forEach((oldApiInfo: ApiInfo) => {
        const newApiInfo: ApiInfo | undefined = newMethodInfoMap.get(oldApiInfo.getDefinedText());
        if (newApiInfo) {
          DiffProcessorHelper.JsDocDiffHelper.diffJsDocInfo(oldApiInfo, newApiInfo, diffInfos);
          DiffProcessorHelper.ApiDecoratorsDiffHelper.diffDecorator(oldApiInfo, newApiInfo, diffInfos);
          newMethodInfoMap.delete(oldApiInfo.getDefinedText());
          oldMethodInfoMap.delete(oldApiInfo.getDefinedText());
        }
      });

      if (oldMethodInfoMap.size === 1 && newMethodInfoMap.size === 1) {
        const oldMethodInfo: ApiInfo = oldMethodInfoMap.entries().next().value[1];
        const newMethodInfo: ApiInfo = newMethodInfoMap.entries().next().value[1];
        DiffProcessorHelper.JsDocDiffHelper.diffJsDocInfo(oldMethodInfo, newMethodInfo, diffInfos);
        DiffProcessorHelper.ApiDecoratorsDiffHelper.diffDecorator(oldMethodInfo, newMethodInfo, diffInfos);
        DiffProcessorHelper.ApiNodeDiffHelper.diffNodeInfo(oldMethodInfo, newMethodInfo, diffInfos, isCheck);
      } else {
        newMethodInfoMap.forEach((apiInfo: ApiInfo, _) => {
          diffInfos.push(
            DiffProcessorHelper.wrapDiffInfo(
              undefined,
              apiInfo,
              new DiffTypeInfo(ApiStatusCode.NEW_API, ApiDiffType.ADD, undefined, apiInfo.getDefinedText()),
            )
          );
        });
        oldMethodInfoMap.forEach((apiInfo: ApiInfo, _) => {
          diffInfos.push(
            DiffProcessorHelper.wrapDiffInfo(
              apiInfo,
              undefined,
              new DiffTypeInfo(ApiStatusCode.DELETE, ApiDiffType.REDUCE, apiInfo.getDefinedText(), undefined),
            )
          );
        });
      }
    }
  }

  static judgeIsAllDeprecated(apiInfos: ApiInfo[]): boolean {
    let isAllDeprecated: boolean = true;
    apiInfos.forEach((apiInfo: ApiInfo) => {
      const deprecatedVersion = apiInfo.getLastJsDocInfo()?.getDeprecatedVersion();
      if (deprecatedVersion === '-1' || !deprecatedVersion) {
        isAllDeprecated = false;
      }
    });
    return isAllDeprecated;
  }

  static handleDeprecatedVersion(apiInfos: ApiInfo[]): void {
    let isAllDeprecated: boolean = true;
    apiInfos.forEach((apiInfo: ApiInfo) => {
      const deprecatedVersion = apiInfo.getLastJsDocInfo()?.getDeprecatedVersion();
      if (deprecatedVersion === '-1' || !deprecatedVersion) {
        isAllDeprecated = false;
      }
    });
    if (isAllDeprecated) {
      return;
    }
    apiInfos.forEach((apiInfo: ApiInfo) => {
      apiInfo.getLastJsDocInfo()?.setDeprecatedVersion('-1');
    });
  }

  /**
   * 拼接同名函数的API声明
   *
   * @param methodInfoMap
   * @returns
   */
  static joinApiText(methodInfoMap: Map<string, ApiInfo>): string {
    const apiTextArr: string[] = [];
    for (const apiText of methodInfoMap.keys()) {
      apiTextArr.push(apiText);
    }
    return apiTextArr.join(' #&# ');
  }

  /**
   * 生成map，key为API声明，value为API信息
   *
   * @param apiInfos
   * @returns
   */
  static setmethodInfoMap(apiInfos: ApiInfo[]): Map<string, ApiInfo> {
    const methodInfoMap: Map<string, ApiInfo> = new Map();
    apiInfos.forEach((apiInfo: ApiInfo) => {
      methodInfoMap.set(apiInfo.getDefinedText(), apiInfo);
    });
    return methodInfoMap;
  }

  /**
   * 删除新旧版本里所有信息一样的API
   *
   * @param oldApiInfos
   * @param newApiInfos
   * @returns
   */
  static getDiffSet(oldApiInfos: ApiInfo[], newApiInfos: ApiInfo[]): Map<string, ApiInfo>[] {
    const oldApiInfoMap: Map<string, ApiInfo> = new Map();
    const newApiInfoMap: Map<string, ApiInfo> = new Map();
    DiffHelper.setApiInfoMap(oldApiInfoMap, oldApiInfos);
    DiffHelper.setApiInfoMap(newApiInfoMap, newApiInfos);
    const oldReduceNewMap: Map<string, ApiInfo> = new Map();
    oldApiInfoMap.forEach((apiInfo: ApiInfo, key: string) => {
      if (!newApiInfoMap.has(key)) {
        oldReduceNewMap.set(key, apiInfo);
      }
    });
    const newReduceOldMap: Map<string, ApiInfo> = new Map();
    newApiInfoMap.forEach((apiInfo: ApiInfo, key: string) => {
      if (!oldApiInfoMap.has(key)) {
        newReduceOldMap.set(key, apiInfo);
      }
    });
    return [oldReduceNewMap, newReduceOldMap];
  }

  static setApiInfoMap(apiInfoMap: Map<string, ApiInfo>, apiInfos: ApiInfo[]): void {
    apiInfos.forEach((apiInfo: ApiInfo) => {
      const key = JSON.stringify(apiInfo);
      apiInfoMap.set(key, apiInfo);
    });
  }

  static getApiLocations(apiMap: FilesMap, isCheck?: boolean): Map<string, string[]> {
    const apiLocations: Map<string, string[]> = new Map();
    for (const filePath of apiMap.keys()) {
      const index: number = 0;
      const fileMap: FileInfoMap = apiMap.get(filePath) as FileInfoMap;
      DiffHelper.processFileApiMap(fileMap, apiLocations, index, isCheck);
    }
    return apiLocations;
  }

  static processFileApiMap(
    fileMap: FileInfoMap,
    apiLocations: Map<string, string[]>,
    index: number,
    isCheck?: boolean
  ): void {
    for (const apiKey of fileMap.keys()) {
      if (apiKey === StringConstant.SELF) {
        continue;
      }
      const apiInfoMap: ApiInfosMap = fileMap.get(apiKey) as ApiInfosMap;
      const apiInfos: BasicApiInfo[] = apiInfoMap.get(StringConstant.SELF) as BasicApiInfo[];
      apiInfos.forEach((apiInfo: BasicApiInfo) => {
        DiffHelper.processApiInfo(apiInfo, apiLocations, index, isCheck);
        index++;
      });
    }
  }

  /**
   * 删除最外层第一个API的jsdocText中，版权头和kit相关jsdoc
   *
   * @param apiInfo
   * @returns
   */
  static deleteUselessJsdoc(apiInfo: BasicApiInfo): string {
    const jsdocTextArr: string[] = apiInfo.getJsDocText().split('*/');
    const clonedJsdocTextArr: string[] = jsdocTextArr;
    if (clonedJsdocTextArr[1] && StringUtils.hasSubstring(clonedJsdocTextArr[1], CommentHelper.fileTag)) {
      jsdocTextArr.splice(1, 1);
    }

    if (clonedJsdocTextArr[0] && StringUtils.hasSubstring(clonedJsdocTextArr[0], CommentHelper.fileTag)) {
      jsdocTextArr.splice(0, 1);
    }

    if (clonedJsdocTextArr[0] && StringUtils.hasSubstring(clonedJsdocTextArr[0], CommentHelper.licenseKeyword)) {
      jsdocTextArr.splice(0, 1);
    }

    return jsdocTextArr.join('*/');
  }

  static processApiInfo(
    basicApiInfo: BasicApiInfo,
    apiLocations: Map<string, string[]>,
    index: number,
    isCheck?: boolean
  ): void {
    const apiNode: ts.Node | undefined = basicApiInfo.getNode();
    if (isCheck) {
      const jsDocText: string | undefined = apiNode?.getFullText().replace(apiNode.getText(), '');
      if (jsDocText) {
        basicApiInfo.setJsDocText(jsDocText);
      }
    }

    if (index === 0 && basicApiInfo.getParentApiType() === ApiType.SOURCE_FILE) {
      const jsDocText: string = DiffHelper.deleteUselessJsdoc(basicApiInfo);
      basicApiInfo.setJsDocText(jsDocText);
    }

    basicApiInfo.setSyscap(DiffHelper.getSyscapField(basicApiInfo));
    basicApiInfo.setParentApi(undefined);

    basicApiInfo.removeNode();
    if (!apiStatisticsType.has(basicApiInfo.getApiType())) {
      return;
    }
    if (basicApiInfo.getApiName() === 'constructor') {
      return;
    }
    const apiInfo: ApiInfo = basicApiInfo as ApiInfo;
    const locations: string[] = apiInfo.getHierarchicalRelations();
    apiLocations.set(locations.toString(), locations);
    if (!containerApiTypes.has(apiInfo.getApiType())) {
      return;
    }
    const containerApiInfo: ContainerApiInfo = apiInfo as ContainerApiInfo;
    containerApiInfo.getChildApis().forEach((childApiInfo: BasicApiInfo) => {
      DiffHelper.processApiInfo(childApiInfo, apiLocations, 1, isCheck);
    });
  }

  static getSyscapField(apiInfo: BasicApiInfo): string {
    if (apiInfo.getApiType() === ApiType.SOURCE_FILE) {
      const sourceFileContent: string = apiInfo.getNode()?.getFullText() as string;
      let syscap = '';
      if (/\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g.test(sourceFileContent)) {
        sourceFileContent.replace(
          /\@[S|s][Y|y][S|s][C|c][A|a][P|p]\s*((\w|\.|\/|\{|\@|\}|\s)+)/g,
          (sysCapInfo: string, args: []) => {
            syscap = sysCapInfo.replace(/\@[S|s][Y|y][S|s][C|c][A|a][P|p]/g, '').trim();
            return syscap;
          }
        );
      }
      return FunctionUtils.handleSyscap(syscap);
    }
    if (notJsDocApiTypes.has(apiInfo.getApiType())) {
      return '';
    }
    const clonedApiInfo: ApiInfo = apiInfo as ApiInfo;
    const latestJsDocInfo: Comment.JsDocInfo | undefined = clonedApiInfo.getLastJsDocInfo();
    if (!latestJsDocInfo) {
      return DiffHelper.searchSyscapFieldInParent(clonedApiInfo);
    }
    let syscap: string | undefined = latestJsDocInfo?.getSyscap();
    if (!syscap) {
      return DiffHelper.searchSyscapFieldInParent(clonedApiInfo);
    }
    if (syscap) {
      return FunctionUtils.handleSyscap(syscap);
    }
    return '';
  }

  static searchSyscapFieldInParent(apiInfo: ApiInfo): string {
    let curApiInfo: ApiInfo = apiInfo;
    let syscap: string = '';
    const node: ts.Node | undefined = curApiInfo.getNode();
    while (node && curApiInfo && !ts.isSourceFile(node)) {
      syscap = curApiInfo.getSyscap();
      if (syscap) {
        return syscap;
      }
      curApiInfo = curApiInfo.getParentApi() as ApiInfo;
    }
    return syscap;
  }
}
