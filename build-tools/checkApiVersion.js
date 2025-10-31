/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

const ts = require('typescript');
const fs = require('fs');
const path = require('path');
const commander = require('commander');
let errStr = '';
const errVersionArr = [];

/**
 * 配置参数
 */
function main() {
  const program = new commander.Command();
  program
    .name('apiLevelCheck')
    .version('0.0.1');
  program
    .option('--path <string>', 'input path')
    .option('--versionNumber <string>', 'version number')
    .action((opts) => {
      if (!opts.path || !opts.versionNumber) {
        console.error('Error: Must provide --path and --versionNumber parameters');
        process.exit(1);
      }
      // 将相对路径解析为绝对路径
      inputDir = path.resolve(opts.path);
      let apiUtFiles = [];
      readFile(inputDir + '/api', apiUtFiles);
      readFile(inputDir + '/arkts', apiUtFiles);
      transform(inputDir, opts.versionNumber, apiUtFiles);
      /**
       * 异常信息实例：
       * 以下接口版本号不合规，请检查！
       * api/@ohos.xxx.d.ts#xxx#xxx#xxx
       */
      if (errVersionArr.length === 0) {
        console.log('');
      } else {
        errVersionArr.forEach(str => {
          errStr = errStr + '\n' + str + '\n';
        });
        errStr = '以下接口版本号不合规，请检查！' + '\n' + errStr;
        console.log(errStr);
      }
    });
  program.parse(process.argv);
}

/**
 * 读取目录下所有文件
 * @param {string} dir 文件目录
 * @param {Array} utFiles 所有文件
 */
function readFile(dir, utFiles) {
  if (!fs.existsSync(dir)) {
    return;
  }
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      if (element === 'build-tools') {
        return;
      }
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath.replace(inputDir, ''));
      }
    });
  } catch (e) {
    console.error('Error reading files: ' + e.message);
  }
}

function transform(dirPath, apiVersion, apiUtFiles) {
  apiUtFiles.forEach(url => {
    const apiBaseName = path.basename(url);
    if (/\.d\.ts/.test(apiBaseName) || /\.d\.ets/.test(apiBaseName)) {
      let content = fs.readFileSync(dirPath + url, 'utf-8');
      const fileName = processFileName(dirPath + url);
      ts.transpileModule(content, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2017,
          etsAnnotationsEnable: true
        },
        fileName: fileName,
        transformers: { before: [recursionAstCallback(apiVersion, url)] }
      });
    }
  });
}

/**
 * 统一处理文件名称，修改后缀等
 * @param {string} filePath 文件路径
 * @returns {string} filename 文件名称
 */
function processFileName(filePath) {
  return path
    .basename(filePath)
    .replace(/\.d\.ts$/g, '.ts')
    .replace(/\.d\.ets$/g, '.ets');
}

/**
 * 每个文件处理签回调函数第一个
 * @callback recursionAstCallback
 * @param {string} url 文件路径
 * @param {string} apiVersion 检查版本号
 */
function recursionAstCallback(apiVersion, url) {
  return (context) => {
    return (sourceFile) => {
      node = apiLevelCheck(context, sourceFile, apiVersion, url);
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

/**
 * 遍历处理tsnode节点
 * @param {context} 解下过后的内容
 * @param {node} 解下过后的节点
 * @returns ts.node
 */
function apiLevelCheck(context, node, apiVersion, url) {
  return ts.visitEachChild(node, processAllNodes, context);
  function processAllNodes(node) {
    if (node.jsDoc) {
      processAllNodesJSDoc(node.jsDoc);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  };
  function processAllNodesJSDoc(jsDocNode) {
    if (jsDocNode.length === 0) {
        return;
    }
    const latesJsDoc = jsDocNode[jsDocNode.length - 1];
    if (!latesJsDoc.tags) {
      return;
    }
    latesJsDoc.tags.forEach(tag => {
      checkVersion(tag);
    });
  }
  function checkVersion(tag) {
    if (tag.tagName.getText() === 'since') {
      const versionNumber = tag.getFullText().replace('@' + tag.tagName.getText(), '');
      if (versionNumber > Number(apiVersion)) {
        const errVersionStr = recursionParentNode(tag);
        errVersionArr.push(errVersionStr);
      }
    }
  }
  function recursionParentNode(tag) {
    let errVersionStr = '';
    let parent = tag.parent;
    while (parent) {
      if (parent.name) {
        errVersionStr = errVersionStr + '#' + parent.name.getText();
      } else if (parent.expression) {
        errVersionStr = errVersionStr + '#' + parent.expression.getText();
      }
      parent = parent.parent;
    }
    errVersionStr = url + errVersionStr;
    return errVersionStr;
  }
}

main();