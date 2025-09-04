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
const path = require('path');
const fs = require('fs');
const ts = require('typescript');
const commander = require('commander');

let sourceFile = null;
let etsType = 'ets';
let componentEtsFiles = [];
const componentEtsDeleteFiles = [];
const etsDeleteFiles = [];
const referencesMap = new Map();
const referencesModuleMap = new Map();
const kitFileNeedDeleteMap = new Map();
const ARKTS_FLAG = 'use static';
const COMPILER_OPTIONS = {
  target: ts.ScriptTarget.ES2017,
  etsAnnotationsEnable: true
};
/**
 * @enum {string} references地址的切换类型
 */
const REFERENCE_TYPE = {
  TOLOCAL: 'toLocal',
  TORIGHTSDK: 'toRightSDK',
  TOSDK: 'toSDK',
};
const PATT = {
  GET_REFERENCE: /\/\/\/\s*<reference.*>/g,
  GET_REFERENCEURL: /\/\/\/\s*<reference\s*path=("|')(.*)("|')\s*\/>/g,
  REFERENCEURL_LOCAL: /(.\/)?(\S*)@internal\/component\/ets\/(\S*)/g,
  REFERENCEURL_RIGHTSDK: /(..\/)(\S*)build-tools\/ets-loader\/declarations\/(\S*)/g,
  REFERENCEURL_SDK: /(..\/)(\S*)component\/(\S*)/g,
};
const METHOD_KIND = [
  ts.SyntaxKind.MethodDeclaration,
  ts.SyntaxKind.FunctionDeclaration,
  ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.Constructor
];

function start() {
  const program = new commander.Command();
  program
    .name('deleteSystemApi')
    .version('0.0.1');
  program
    .option('--input <string>', 'path name')
    .option('--output <string>', 'output path')
    .option('--type <string>', 'ets type')
    .action((opts) => {
      outputPath = opts.output;
      inputDir = opts.input;
      etsType = opts.type;
      collectDeclaration(opts.input);
    });
  program.parse(process.argv);
}

function collectDeclaration(inputDir) {
  // 入口
  try {
    const arktsPath = path.resolve(inputDir, '../arkts');
    const kitPath = path.resolve(inputDir, '../kits');
    const utFiles = [];
    collectComponentEtsFiles();
    readFile(inputDir, utFiles); // 读取文件
    readFile(arktsPath, utFiles); // 读取文件
    tsTransform(sortApiList(utFiles), deleteSystemApi);
    tsTransformKitFile(kitPath);
  } catch (error) {
    console.error('DELETE_SYSTEM_PLUGIN ERROR: ', error);
  }
}

function collectComponentEtsFiles() {
  const ComponentDir = path.resolve(inputDir, '@internal', 'component', 'ets');
  readFile(ComponentDir, componentEtsFiles); // 读取文件
  const arkuiComponentDir = path.resolve(inputDir, 'arkui', 'component');
  readFile(arkuiComponentDir, componentEtsFiles); // 读取文件
  componentEtsFiles = componentEtsFiles.map(item => {
    return getPureName(item);
  });
}

function getPureName(name) {
  return path
    .basename(name)
    .replace('.static.ets', '')
    .replace('.static.d.ets', '')
    .replace('.d.ts', '')
    .replace('.d.ets', '')
    .replace(/_/g, '')
    .toLowerCase();
}

/**
 * 解析url目录下方的kit文件，删除对应systemapi
 * @param { string } kitPath kit文件路径
 */
function tsTransformKitFile(kitPath) {
  kitFileNeedDeleteMap.delete('');
  if (kitFileNeedDeleteMap.length === 0) {
    return;
  }
  const kitFiles = [];
  readFile(kitPath, kitFiles); // 读取文件
  kitFiles.forEach((kitFile) => {
    const kitName = processFileNameWithoutExt(kitFile).replace('@kit.', '');
    const content = fs.readFileSync(kitFile, 'utf-8');
    const fileName = processFileName(kitFile);
    let sourceFile = ts.createSourceFile(fileName, content, ts.ScriptTarget.ES2017, true);
    const sourceInfo = getKitNewSourceFile(sourceFile, kitName);
    if (isEmptyFile(sourceInfo.sourceFile)) {
      return;
    }
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    let result = printer.printNode(ts.EmitHint.Unspecified, sourceInfo.sourceFile, sourceFile);
    if (sourceInfo.copyrightMessage !== '') {
      result = sourceInfo.copyrightMessage + result;
    }
    writeFile(kitFile, result);
  });
}

/**
 * 处理kit中需要删除的节点，在其他文件被systemapi修饰的api
 * @param { ts.SourceFile } sourceFile
 * @param { string } kitName
 * @returns 删除完的节点，全部删除为空字符串
 */
function getKitNewSourceFile(sourceFile, kitName) {
  const newStatements = [];
  const needDeleteExportName = new Set();
  let copyrightMessage = '';
  // 初始化ts工厂
  const factory = ts.factory;
  sourceFile.statements.forEach((statement, index) => {
    if (ts.isImportDeclaration(statement)) {
      const newStatement = processKitImportDeclaration(statement, needDeleteExportName);
      if (newStatement) {
        newStatements.push(newStatement);
      } else if (index === 0) {
        copyrightMessage = sourceFile.getFullText().replace(sourceFile.getText(), '');
      }
    } else if (ts.isExportDeclaration(statement)) {
      const newStatement = processKitExportDeclaration(statement, needDeleteExportName);
      if (newStatement) {
        newStatements.push(newStatement);
      }
    }
  });
  sourceFile = factory.updateSourceFile(sourceFile, newStatements);
  return { sourceFile, copyrightMessage };
}

function addImportToNeedDeleteExportName(importClause, needDeleteExportName) {
  if (importClause.name) {
    needDeleteExportName.add(importClause.name.escapedText.toString());
  }
  const namedBindings = importClause.namedBindings;
  if (namedBindings !== undefined && ts.isNamedImports(namedBindings)) {
    const elements = namedBindings.elements;
    elements.forEach((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      needDeleteExportName.add(element.name.escapedText.toString());
    });
  }
}

/**
 * 根据节点和需要删除的节点数据生成新节点
 * @param { ts.ImportDeclaration } statement 需要处理的import节点
 * @param { Map} needDeleteExportName 需要删除的导出节点
 * @returns { ts.ImportDeclaration | undefined } 返回新的import节点，全部删除为undefined
 */
function processKitImportDeclaration(statement, needDeleteExportName) {
  // 初始化ts工厂
  const factory = ts.factory;
  const importClause = statement.importClause;
  if (!ts.isImportClause(importClause)) {
    return statement;
  }
  const importPath = statement.moduleSpecifier.text.toString();
  if (kitFileNeedDeleteMap === undefined || !kitFileNeedDeleteMap.has(importPath)) {
    const hasFilePath = hasFileByImportPath(inputDir, importPath);
    if (hasFilePath && !etsDeleteFiles.includes(importPath)) {
      return statement;
    }
    addImportToNeedDeleteExportName(importClause, needDeleteExportName);
    return undefined;
  }
  const currImportInfo = kitFileNeedDeleteMap.get(importPath);
  let defaultName = '';
  let importNodeNamedBindings = [];
  if (importClause.name) {
    if (currImportInfo.default === importClause.name.escapedText.toString()) {
      //import buffer from "../@ohos.buffer";
      needDeleteExportName.add(currImportInfo.default);
    } else {
      defaultName = importClause.name.escapedText.toString();
    }
  }
  const namedBindings = importClause.namedBindings;
  if (namedBindings !== undefined && ts.isNamedImports(namedBindings)) {
    const elements = namedBindings.elements;
    elements.forEach((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      if (!currImportInfo.exportName.has(exportName)) {
        importNodeNamedBindings.push(factory.createImportSpecifier(false, element.propertyName, element.name));
      } else {
        needDeleteExportName.add(element.name.escapedText.toString());
      }
    });
  }
  if (defaultName !== '' || importNodeNamedBindings.length !== 0) {
    const newImportNode = factory.createImportDeclaration(
      undefined,
      factory.createImportClause(
        false,
        defaultName === '' ? undefined : factory.createIdentifier(defaultName),
        importNodeNamedBindings.length === 0 ? undefined : factory.createNamedImports(importNodeNamedBindings)
      ),
      statement.moduleSpecifier
    );
    return newImportNode;
  }
  return undefined;
}

/**
 * 处理Kit的export节点
 * @param { ts.ExportDeclaration } statement 需要处理的export节点
 * @param { Map} needDeleteExportName 需要删除的导出节点
 * @returns { ts.ExportDeclaration | undefined } 返回新的import节点，全部删除为undefined
 */
function processKitExportDeclaration(statement, needDeleteExportName) {
  const moduleSpecifier = statement.moduleSpecifier;
  const exportClause = statement.exportClause;
  // 初始化ts工厂
  const factory = ts.factory;
  // export * from '' export {xx} from ''
  if (moduleSpecifier) {
    const importPath = moduleSpecifier.text.toString();
    if (kitFileNeedDeleteMap === undefined || !kitFileNeedDeleteMap.has(importPath)) {
      const hasFilePath = hasFileByImportPath(inputDir, importPath);
      if (hasFilePath && !etsDeleteFiles.includes(importPath)) {
        return statement;
      }
      return undefined;
    }
    const currNeedDeleteInfo = kitFileNeedDeleteMap.get(importPath);
    currNeedDeleteInfo.exportName.forEach(item => {
      needDeleteExportName.add(item);
    });
  }
  if (ts.isNamedExports(exportClause)) {
    // export {}
    const exportSpecifiers = exportClause.elements.filter((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      return !needDeleteExportName.has(exportName);
    });
    if (exportSpecifiers && exportSpecifiers.length !== 0) {
      statement.exportClause = factory.updateNamedExports(statement.exportClause, exportSpecifiers);
      return statement;
    }
  } else if (ts.isNamespaceExport(exportClause)) {
    return statement;
  }
  return undefined;
}

/**
 * 判断文件路径对应的文件是否存在
 * @param {string} apiDir 引用接口所在目录
 * @param {string} importPath kit文件import
 * @returns {boolean} importPath是否存在
 */
function hasFileByImportPath(apiDir, importPath) {
  let fileDir = path.resolve(apiDir);
  if (importPath.startsWith('@arkts')) {
    fileDir = path.resolve(inputDir, '../arkts');
  }
  return isExistImportFile(fileDir, importPath) ||
    isExistArkUIFile(path.resolve(inputDir, 'arkui', 'component'), importPath);
}


/**
 * Arkui import路径特殊处理
 * @param {string} resolvedPath 引用接口所在目录
 * @param {string} importPath kit文件import
 * @returns {boolean} importPath是否存在
 */
function isExistArkUIFile(resolvedPath, importPath) {
  // TODO arkui 特殊处理import
  if (importPath.startsWith('@ohos.arkui.')) {
    resolvedPath = path.resolve(inputDir);
  }
  if (importPath.startsWith('arkui.component.') || importPath.startsWith('arkui.stateManagement.')) {
    resolvedPath = path.resolve(inputDir);
    importPath = importPath.replace(/\./g, '/');
  }
  const filePath = path.resolve(resolvedPath, importPath);
  if (
    filePath.includes(path.resolve(inputDir, '@internal', 'component', 'ets')) ||
    filePath.includes(path.resolve(inputDir, 'arkui', 'component'))
  ) {
    const fileName = getPureName(filePath);
    return componentEtsFiles.includes(fileName);
  }
  return isExistImportFile(resolvedPath, importPath);
}

function isExistImportFile(fileDir, importPath) {
  return ['.d.ts', '.d.ets', '.static.d.ets'].some(ext => {
    return fs.existsSync(path.resolve(fileDir, `${importPath}${ext}`));
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

function processFileNameWithoutExt(filePath) {
  return path
    .basename(filePath)
    .replace(/\.static\.ets$/g, '')
    .replace(/\.d\.ts$/g, '')
    .replace(/\.d\.ets$/g, '')
    .replace(/\.ts$/g, '')
    .replace(/\.ets$/g, '');
}

/**
 * 遍历所有文件进行处理
 * @param {Array} utFiles 所有文件
 * @param {deleteSystemApi} callback 回调函数
 */
function tsTransform(utFiles, callback) {
  utFiles.forEach((url) => {
    if (!fs.existsSync(url)) {
      return;
    }
    const apiBaseName = path.basename(url);
    let content = fs.readFileSync(url, 'utf-8'); // 文件内容
    let isTransformer = /\.d\.ts/.test(apiBaseName) || /\.d\.ets/.test(apiBaseName);
    if (/\.json/.test(url) || apiBaseName === 'index-full.d.ts') {
      isTransformer = false;
    }
    if (etsType === 'ets2') {
      if (!/\@systemapi/.test(content) && apiBaseName !== '@ohos.arkui.component.d.ets') {
        isTransformer = false;
      }
    }

    if (!isTransformer) {
      writeFile(url, content);
      return;
    }
    // dts文件处理
    const fileName = processFileName(url);
    let references = content.match(PATT.GET_REFERENCE);
    if (references) {
      referencesMap.set(url, { references: references });
      for (let index = 0; index < references.length; index++) {
        const item = references[index];
        content = content.replace(item, '');
      }
    }
    ts.transpileModule(content, {
      compilerOptions: COMPILER_OPTIONS,
      fileName: fileName,
      transformers: { before: [callback(url)] },
    });
  });
}

/**
 * 切换references或者references中path的格式
 * @param {string} references references或者references中的path
 * @param {REFERENCE_TYPE} reverse 切换类型
 * @returns {string}
 */
function referencesToOthers(references, type) {
  let referencesurl;
  let hasFullpatt = references.match(PATT.GET_REFERENCEURL);
  let isFullReferenceurl = hasFullpatt && hasFullpatt.length > 0;
  if (isFullReferenceurl) {
    referencesurl = RegExp.$2;
  } else {
    referencesurl = references;
  }
  let currentType = '';
  if (referencesurl.match(PATT.REFERENCEURL_LOCAL)) {
    currentType = REFERENCE_TYPE.TOLOCAL;
  } else if (referencesurl.match(PATT.REFERENCEURL_RIGHTSDK)) {
    currentType = REFERENCE_TYPE.TORIGHTSDK;
  } else if (referencesurl.match(PATT.REFERENCEURL_SDK)) {
    currentType = REFERENCE_TYPE.TOSDK;
  }
  if (currentType === '' || currentType === type) {
    return references;
  }
  let starturl = '';
  let fileName = '';
  switch (currentType) {
    case REFERENCE_TYPE.TOLOCAL:
      starturl = RegExp.$2;
      fileName = RegExp.$3;
      break;
    case REFERENCE_TYPE.TORIGHTSDK:
      starturl = RegExp.$2;
      fileName = RegExp.$3;
      break;
    case REFERENCE_TYPE.TOSDK:
      starturl = RegExp.$2;
      fileName = RegExp.$3;
      break;
    default:
      break;
  }
  let finallyurl;
  switch (type) {
    case REFERENCE_TYPE.TOLOCAL:
      finallyurl = `${starturl === '' ? './' : ''}${starturl}@internal/component/ets/${fileName}`;
      break;
    case REFERENCE_TYPE.TORIGHTSDK:
      finallyurl = `../${starturl}build-tools/ets-loader/declarations/${fileName}`;
      break;
    case REFERENCE_TYPE.TOSDK:
      finallyurl = `../${starturl}component/${fileName}`;
      break;
    default:
      break;
  }
  if (isFullReferenceurl) {
    finallyurl = `/// <reference path="${finallyurl}"/>`;
  }
  return finallyurl;
}

/**
 * 读取目录下所有文件
 * @param {string} dir 文件目录
 * @param {Array} utFiles 所有文件
 */
function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    console.log('ETS ERROR: ' + e);
  }
}

/**
 * 修改特殊文件的执行时序
 * @param {string[]} params 
 * @returns {string[]}
 */
function sortApiList(apiFiles) {
  const newApiFiles = [];
  const specFileName = '@ohos.arkui.component.d.ets';
  let specApiFilePath = '';
  apiFiles.forEach(filePath => {
    if (filePath.endsWith(specFileName)) {
      specApiFilePath = filePath;
    } else {
      newApiFiles.push(filePath);
    }
  });
  if (specApiFilePath !== '') {
    newApiFiles.push(specApiFilePath);
  }
  return newApiFiles;
}

function writeFile(url, data, option) {
  const urlPath = url.replace(/\.static\.d\.ets$/, '.d.ets');
  const urlDirName = path.dirname(inputDir);
  const relativePath = path.relative(urlDirName, urlPath);
  const newFilePath = path.resolve(outputPath, relativePath);
  fs.mkdir(path.dirname(newFilePath), { recursive: true }, (err) => {
    if (err) {
      console.log(`ERROR FOR CREATE PATH ${err}`);
    } else {
      if (data === '') {
        fs.rmSync(newFilePath, { force: true });
        return;
      }
      fs.writeFileSync(newFilePath, data, option, (err) => {
        if (err) {
          console.log(`ERROR FOR CREATE FILE ${err}`);
        }
      });
    }
  });
}

const globalModules = new Map();

/**
 * 遍历处理overload节点
 * @param  context 解析过后的内容
 * @param  node 解析过后的节点
 * @returns ts.node
 */
function visitEachChild(context, node) {
  return ts.visitEachChild(node, processAllNodes, context); // 遍历所有子节点
  function processAllNodes(node) {
    if (ts.isOverloadDeclaration(node)) {
      node = processInterfaceDeclaration(node);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  }
  function processInterfaceDeclaration(overloadNode) {
    // 获取方法类型兄弟节点列表
    const parentNode = overloadNode.parent;
    const brotherNodes = [];
    const brotherFuntionNames = new Set([]);
    if (ts.isSourceFile(parentNode) || ts.isModuleBlock(parentNode)) {
      brotherNodes.push(...parentNode.statements);
    } else if (ts.isInterfaceDeclaration(parentNode) || ts.isClassDeclaration(parentNode)) {
      brotherNodes.push(...parentNode.members);
    }
    if (brotherNodes.length === 0) {
      return undefined;
    }
    brotherNodes.forEach(brotherNode => {
      if (METHOD_KIND.includes(brotherNode.kind) && brotherNode.name && ts.isIdentifier(brotherNode.name) &&
        !brotherFuntionNames.has(brotherNode.name.escapedText.toString())) {
        brotherFuntionNames.add(brotherNode.name.escapedText.toString());
      }
    });

    // 更新overload节点
    const overloadChildren = overloadNode.members;
    if (overloadChildren.length === 0) {
      return undefined;
    }
    const newChildren = [];
    overloadChildren.forEach(overloadChild => {
      if (overloadChild.name && ts.isIdentifier(overloadChild.name) &&
        brotherFuntionNames.has(overloadChild.name.escapedText.toString())) {
        newChildren.push(overloadChild);
      }
    });
    if (newChildren.length === 0) {
      return undefined;
    }
    return ts.factory.updateOverloadDeclaration(overloadNode, overloadNode.modifier, overloadNode.name, newChildren);
  }
}

/**
 * 每个文件处理前回调函数第二个
 * @param {string} url 文件路径
 * @param {string} copyrightMessage 版权头注释
 * @param {string} fileAndKitComment 文件kit注释
 * @param {boolean} firstNodeIsStatic 第一个节点是否为use static
 * @returns {Function}
 */
function formatImportDeclaration(url, copyrightMessage = '', fileAndKitComment = '', firstNodeIsStatic = false) {
  const allIdentifierSet = new Set([]);
  return (context) => {
    return (node) => {
      sourceFile = node;
      collectAllIdentifier(context, node, allIdentifierSet); // 获取所有标识符
      formatValue = formatAllNodes(url, node, allIdentifierSet); // 获取所有节点
      node = visitEachChild(context, formatValue.node);
      const referencesMessage = formatValue.referencesMessage;
      if (isEmptyFile(node)) {
        return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
      }
      const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
      let result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
      result = collectCopyrightMessage(result, copyrightMessage, fileAndKitComment, firstNodeIsStatic);
      copyrightMessage = node.getFullText().replace(node.getText(), '');
      if (referencesMessage) { // 将references写入文件
        result = result.substring(0, copyrightMessage.length) + '\n' + referencesMessage +
          result.substring(copyrightMessage.length);
      }
      result = removeSystemapiDoc(result);
      writeFile(url, result);
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

function collectAllIdentifier(context, node, allIdentifierSet) {
  if (!ts.isSourceFile(node) || !node.statements) {
    return;
  }
  node.statements.forEach((stat) => {
    if (stat.illegalDecorators) {
      collectillegalNodes(ts.getAllDecorators(stat), allIdentifierSet);
    }
    if (!ts.isImportDeclaration(stat)) {
      ts.visitEachChild(stat, collectAllNodes(context, allIdentifierSet), context);
    }
  });
}

function collectAllNodes(context, allIdentifierSet) {
  return (node) => {
    if (ts.isIdentifier(node)) {
      allIdentifierSet.add(node.escapedText.toString());
    }
    return ts.visitEachChild(node, collectAllNodes(context, allIdentifierSet), context);
  };
}

function collectillegalNodes(decorator, allIdentifierSet) {
  decorator.forEach(decorator => {
    allIdentifierSet.add(decorator.expression.escapedText.toString());
  });
}

/**
 * 给result添加被systemapi裁剪掉的版权头信息和kit标签
 * @param {string} result 文件内容
 * @param {string} copyrightMessage 版权头注释
 * @param {string} fileAndKitComment 文件kit注释
 * @param {boolean} firstNodeIsStatic 第一个节点是否为use static
 * @returns 
 */
function collectCopyrightMessage(result, copyrightMessage, fileAndKitComment, firstNodeIsStatic) {
  const newFileAndKitComment = getFileAndKitComment(result);
  const newCopyrightMessage = getCopyrightComment(result);
  let commentIndex = 0;
  if (firstNodeIsStatic) {
    const indexStatic = result.match(/use static.*\n/);
    if (indexStatic) {
      commentIndex = indexStatic.index + indexStatic[0].length;
    }
  }
  if (newFileAndKitComment === '') {
    result =
      result.substring(0, commentIndex) +
      fileAndKitComment +
      '\n\n' +
      result.substring(commentIndex);
  }
  if (newCopyrightMessage === '') {
    // 多段注释中间需要换行
    result =
      result.substring(0, commentIndex) +
      copyrightMessage +
      '\n\n' +
      result.substring(commentIndex);
  }
  return result;
}

function formatAllNodes(url, node, allIdentifierSet) {
  let referencesMessage = '';
  let currReferencesModule = formatAllNodesReferences(url);
  if (!ts.isSourceFile(node) || !node.statements) {
    return { node, referencesMessage };
  }
  const newStatements = [];
  node.statements.forEach((statement) => {
    if (ts.isImportDeclaration(statement)) {
      const importInfo = formatAllNodesImportDeclaration(
        node,
        statement,
        url,
        currReferencesModule,
        allIdentifierSet
      );
      if (importInfo) {
        newStatements.push(statement);
      }
    } else if (ts.isStructDeclaration(statement)) {
      statement = ts.factory.updateStructDeclaration(
        statement,
        statement.modifiers,
        statement.name,
        statement.typeParameters,
        statement.heritageClauses,
        statement.members.slice(1)
      );
      newStatements.push(statement);
    } else {
      newStatements.push(statement);
    }
  });
  currReferencesModule.forEach((item) => {
    if (item.isUsed) {
      referencesMessage += item.reference + '\n';
    }
  });
  node = ts.factory.updateSourceFile(node, newStatements);
  return { node, referencesMessage };
}

function hasCopyright(node) {
  return /http\:\/\/www\.apache\.org\/licenses\/LICENSE\-2\.0/g.test(node.getFullText().replace(node.getText(), ''));
}

/**
 * 处理References节点
 * @param {ts.node} node 当前节点
 * @param {string} url 文件路径
 * @returns {Array} currReferencesModule 返回该文件的references数据
 */
function formatAllNodesReferences(url) {
  globalModules.clear();
  let currReferences = [];
  let currReferencesModule = [];
  if (referencesMap.has(url)) {
    currReferences = referencesMap.get(url);
    currReferencesModule = currReferences.references.map((element, index) => {
      element.match(PATT.GET_REFERENCEURL);
      let referencePath = RegExp.$2;
      referencePath = referencesToOthers(referencePath, REFERENCE_TYPE.TOLOCAL);
      let fullReferencePath = path.resolve(path.dirname(url), referencePath);
      let module = referencesModuleMap.get(fullReferencePath);
      for (const key in module) {
        if (Object.hasOwnProperty.call(module, key)) {
          globalModules.set(key, index);
        }
      }
      return { modules: module, fullReferencePath: fullReferencePath, reference: element, isUsed: false };
    });
  }
  return currReferencesModule;
}

/**
 * 处理Import节点 去除未使用、不存在、References中没有对应模块的导入
 * @param {ts.node} node 当前节点
 * @param {ts.ImportDeclaration} statement 导入节点
 * @param {string} url 文件路径
 * @param {Array} currReferencesModule 该文件的所有Identifier关键字
 * @param {Set<string>} allIdentifierSet 该文件的所有Identifier关键字
 * @returns {ts.ImportDeclaration|undefined} statement 处理完成的导入节点、copyrightMessage
 */
function formatAllNodesImportDeclaration(node, statement, url, currReferencesModule, allIdentifierSet) {
  const clauseSet = collectClauseSet(statement);
  const importSpecifier = statement.moduleSpecifier.getText().replace(/[\'\"]/g, '');
  const fileDir = path.dirname(url);
  let hasImportSpecifierFile = hasFileByImportPath(fileDir, importSpecifier);
  let hasImportSpecifierInModules = globalModules.has(importSpecifier);
  if (!hasImportSpecifierFile && !hasImportSpecifierInModules) {
    //路径不存在 或者 无reference使用
    return undefined;
  }
  let currModule = [];
  if (hasImportSpecifierInModules) {
    let index = globalModules.get(importSpecifier);
    currModule = currReferencesModule[index].modules[importSpecifier];
  }
  let { exsitClauseSet, hasExsitStatus, hasNonExsitStatus } =
    collectNeedDeleteFlag(clauseSet, allIdentifierSet, hasImportSpecifierInModules, currModule);
  if (!hasExsitStatus) {
    // 不存在需要使用的标识符
    return undefined;
  }
  if (hasImportSpecifierInModules) {
    let index = globalModules.get(importSpecifier);
    currReferencesModule[index].isUsed = true;
  }
  if (!hasNonExsitStatus) {
    // 不存在需要删除的标识符
    return statement;
  }
  // 有需要删除的标识符
  return updataImportNode(statement, exsitClauseSet);
}

/**
 * 保留import节点中exsitClauseSet使用到的模块
 *
 * @param {ts.ImportDeclaration} statement 
 * @param {Set<string>} exsitClauseSet 
 * @returns 
 */
function updataImportNode(statement, exsitClauseSet) {
  const newSpecifiers = [];
  statement.importClause.namedBindings.elements.forEach((element) => {
    if (exsitClauseSet.has(element.name.escapedText.toString())) {
      newSpecifiers.push(element);
    }
  });
  statement.importClause.namedBindings = ts.factory.updateNamedImports(
    statement.importClause.namedBindings,
    newSpecifiers
  );
  return statement;
}

/**
 * 判断当前import的模块是否需要删除
 *
 * @param {Set<string>} clauseSet 当前模块集合
 * @param {Set<string>} allIdentifierSet 当前文件使用到的Identifer名称
 * @param {boolean} hasImportSpecifierInModules reference特殊路径是否存在
 * @param {Array<any>} currModule reference模块信息
 * @returns 
 */
function collectNeedDeleteFlag(clauseSet, allIdentifierSet, hasImportSpecifierInModules, currModule) {
  let exsitClauseSet = new Set([]); // 当前import使用到的模块
  let hasExsitStatus = false; // 存在需要使用的模块
  let hasNonExsitStatus = false; //存在不需要使用的模块
  for (const clause of clauseSet) {
    let flag = allIdentifierSet.has(clause);
    if (hasImportSpecifierInModules) {
      flag = allIdentifierSet.has(clause) && currModule.includes(clause);
    }
    if (flag) {
      // 标识符使用到了当前import中的引用
      exsitClauseSet.add(clause);
      hasExsitStatus = true;
    } else {
      hasNonExsitStatus = true;
    }
  }
  return {
    exsitClauseSet,
    hasExsitStatus,
    hasNonExsitStatus
  };
}

/**
 * 收集import节点的导入模块
 * 
 * @param {ts.ImportDeclaration} statement 导入节点
 * @returns {Set<string>} clauseSet
 */
function collectClauseSet(statement) {
  // 是import节点 import {AsyncCallback} from './@ohos.base';
  const clauseSet = new Set([]);
  if (!statement.importClause || !ts.isImportClause(statement.importClause)) {
    return clauseSet;
  }
  // 标识符
  const clauseNode = statement.importClause;
  if (!clauseNode.namedBindings && clauseNode.name && ts.isIdentifier(clauseNode.name)) {
    // 没有大括号的标识符
    clauseSet.add(clauseNode.name.escapedText.toString());
  } else if (
    clauseNode.namedBindings &&
    clauseNode.namedBindings.name &&
    ts.isIdentifier(clauseNode.namedBindings.name)
  ) {
    // 没有标识符 *号
    clauseSet.add(clauseNode.namedBindings.name.escapedText.toString());
  } else if (clauseNode.namedBindings && clauseNode.namedBindings.elements) {
    // 有花括号的标识符
    clauseNode.namedBindings.elements.forEach((ele) => {
      if (ele.name && ts.isIdentifier(ele.name)) {
        clauseSet.add(ele.name.escapedText.toString());
      }
    });
  }
  return clauseSet;
}

/**
 * 
 * 防止@file和@kit段注释丢失
 * @param {string} fileFullText 
 * @returns {string}
 * 
 */
function getFileAndKitComment(fileFullText) {
  let fileAndKitComment = '';
  let pattern = /\/\*\*\s*\*\s*@file[\s\S]*?@kit[\s\S]*?\*\//;
  let comment = fileFullText.match(pattern);
  if (comment) {
    fileAndKitComment = comment[0];
  }
  return fileAndKitComment;
}

/**
 * 
 * 防止版权头段注释丢失
 * @param {string} fileFullText 
 * @returns {string}
 * 
 */
function getCopyrightComment(fileFullText) {
  let copyrightComment = '';
  let pattern = /\/\*\s*\r?\n\s*\*\s*Copyright[\s\S]*?\*\//g;
  let comment = fileFullText.match(pattern);
  if (comment) {
    copyrightComment = comment[0];
  }
  return copyrightComment;
}

/**
 * 处理最终结果中的systemapi
 * @param {string} result 
 */
function removeSystemapiDoc(result) {
  result.split;
  return result.replace(/\/\*\*[\s\S]*?\*\//g, (substring, p1) => {
    return /@systemapi/g.test(substring) ? '' : substring;
  });
}

/**
 * 每个文件处理前回调函数第一个
 * @callback deleteSystemApi
 * @param {string} url 文件路径
 * @returns {Function}
 */
function deleteSystemApi(url) {
  return (context) => {
    return (node) => {
      const fullText = String(node.getFullText());
      //获取文件头部的注释信息--这里可能会涉及到@file和@kit段注释丢失
      const fileAndKitComment = getFileAndKitComment(fullText);
      const copyrightMessage = getCopyrightComment(fullText);
      let kitName = '';
      if (fullText.match(/\@kit (.*)\r?\n/g)) {
        kitName = RegExp.$1.replace(/\s/g, '');
      }
      sourceFile = node;
      const deleteNode = processSourceFile(node, url); // 处理最外层节点
      node = processVisitEachChild(context, deleteNode.node);
      if (!isEmptyFile(node)) {
        const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
        const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
        if (referencesMap.has(url)) {
          resolveReferences(url);
        }
        const fileName = processFileName(url);
        ts.transpileModule(result, {
          compilerOptions: COMPILER_OPTIONS,
          fileName: fileName,
          transformers: { before: [formatImportDeclaration(url, copyrightMessage, fileAndKitComment, deleteNode.firstNodeIsStatic)] },
        });
      }
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

exports.deleteSystemApi = deleteSystemApi;

/**
 * 遍历每个文件下的所有节点，然后删除节点
 * @param node
 * @returns
 */

/**
 * 处理最外层的节点看是否删除
 * @param {ts.Node} node 解析过后的节点
 * @param {string} url 当前文件kitName
 * @returns
 */
function processSourceFile(node, url) {
  let firstNodeIsStatic = false;
  const newStatements = [];
  const newStatementsWithoutExport = [];
  const deleteSystemApiSet = new Set();
  let needDeleteExport = {
    fileName: '',
    default: '',
    exportName: new Set(),
  };
  firstNodeIsStatic = addNewStatements(node, newStatements, deleteSystemApiSet, needDeleteExport);
  newStatements.forEach((statement) => {
    const names = getExportIdentifierName(statement);
    if (ts.isExportDeclaration(statement) && statement.moduleSpecifier && statement.moduleSpecifier.text.startsWith('./arkui/component/')) {
      const importPath = statement.moduleSpecifier.text.replace('./arkui/component/', '');
      const isDeleteSystemFile = componentEtsDeleteFiles.includes(getPureName(importPath));
      const hasEtsFile = componentEtsFiles.includes(getPureName(importPath));
      const existFile = isExistImportFile(path.dirname(url), statement.moduleSpecifier.text.toString());
      if (isDeleteSystemFile || !hasEtsFile && !existFile) {
        return;
      }
    }
    if (names.length === 0) {
      newStatementsWithoutExport.push(statement);
      return;
    }
    if (names.length === 1 && !deleteSystemApiSet.has(names[0])) {
      //exports.name = test;
      //export default test1
      //export {test1}
      newStatementsWithoutExport.push(statement);
      return;
    }
    processExportNode(statement, node, needDeleteExport, names, deleteSystemApiSet, newStatementsWithoutExport);
  });
  if (needDeleteExport.fileName !== '') {
    kitFileNeedDeleteMap.set(needDeleteExport.fileName, needDeleteExport);
  }
  return {
    node: ts.factory.updateSourceFile(node, newStatementsWithoutExport, node.isDeclarationFile, node.referencedFiles),
    firstNodeIsStatic,
  };
}

function processExportNode(statement, node, needDeleteExport, names, deleteSystemApiSet, newStatementsWithoutExport) {
  //删除export节点信息
  if (ts.isExportAssignment(statement)) {
    //export default abilityAccessCtrl;
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = statement.expression.escapedText.toString();
  } else if (ts.isExportDeclaration(statement)) {
    //export {test1 as test,testa as test2}
    let needExport = false;
    const newSpecifiers = [];
    names.forEach((name, index) => {
      const exportSpecifier = statement.exportClause.elements[index];
      if (!deleteSystemApiSet.has(name)) {
        //未被删除的节点
        newSpecifiers.push(exportSpecifier);
        needExport = true;
      } else {
        //被删除的节点
        needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
        needDeleteExport.exportName.add(exportSpecifier.name.escapedText.toString());
      }
    });
    if (needExport) {
      statement.exportClause = ts.factory.updateNamedExports(statement.exportClause, newSpecifiers);
      newStatementsWithoutExport.push(statement);
    }
  }
}

function addNewStatements(node, newStatements, deleteSystemApiSet, needDeleteExport) {
  let firstNodeIsStatic = false;
  node.statements.forEach((statement, index) => {
    if (index === 0 && isStaticFlag(statement)) {
      firstNodeIsStatic = true;
    }
    if (!isSystemapi(statement)) {
      newStatements.push(statement);
      return;
    }
    if (ts.isVariableStatement(statement)) {
      const variableName = variableStatementGetEscapedText(statement);
      deleteSystemApiSet.add(variableName);
      needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
      needDeleteExport.exportName.add(variableName);
    } else if (
      ts.isModuleDeclaration(statement) ||
      ts.isInterfaceDeclaration(statement) ||
      ts.isClassDeclaration(statement) ||
      ts.isEnumDeclaration(statement) ||
      ts.isStructDeclaration(statement) ||
      ts.isTypeAliasDeclaration(statement) ||
      ts.isAnnotationDeclaration(statement)
    ) {
      if (statement && statement.name && statement.name.escapedText) {
        deleteSystemApiSet.add(statement.name.escapedText.toString());
      }
      setDeleteExport(statement, node, needDeleteExport, deleteSystemApiSet);
    } else if (ts.isExportAssignment(statement) || ts.isExportDeclaration(statement)) {
      setDeleteExport(statement, node, needDeleteExport, deleteSystemApiSet);
    }
  });

  return firstNodeIsStatic;
}

function setDeleteExport(statement, node, needDeleteExport, deleteSystemApiSet) {
  if (ts.isExportAssignment(statement) && deleteSystemApiSet.has(statement.expression.escapedText.toString())) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = statement.expression.escapedText.toString();
  } else if (ts.isExportDeclaration(statement)) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    statement.exportClause.elements.forEach((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      if (deleteSystemApiSet.has(exportName)) {
        needDeleteExport.exportName.add(element.name.escapedText.toString());
      }
    });
  }
  //export namespace test {}
  const modifiers = statement.modifiers;
  if (modifiers === undefined) {
    return;
  }
  const exportFlag = modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
  const defaultFlag = modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword);
  if (exportFlag && defaultFlag) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = statement.name.escapedText.toString();
  } else if (exportFlag) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.exportName.add(statement.name.escapedText.toString());
  }
}

/**
 * 获取export节点的名字，只获取第一个关键词
 * @param {ts.node} statement
 * @returns {Array<string>}
 */
function getExportIdentifierName(statement) {
  const names = [];
  if (ts.isExpressionStatement(statement)) {
    //exports.name = test;
    if (ts.isBinaryExpression(statement.expression)) {
      names.push(statement.expression.right.escapedText.toString());
    }
  } else if (ts.isExportAssignment(statement)) {
    //export default test1
    names.push(statement.expression.escapedText.toString());
  } else if (ts.isExportDeclaration(statement)) {
    //export {test1} 、export {test1 as test} 、export * from './featureability'
    const exportClause = statement.exportClause;
    if (exportClause) {
      const specifiers = exportClause.elements;
      specifiers.forEach((specifier) => {
        if (ts.isExportSpecifier(specifier)) {
          const name = specifier.propertyName ? specifier.propertyName : specifier.name;
          names.push(name.escapedText.toString());
        }
      });
    }
  }
  return names;
}

/**
 * 遍历处理tsnode节点
 * @param  context 解析过后的内容
 * @param  node 解析过后的节点
 * @returns ts.node
 */
function processVisitEachChild(context, node) {
  return ts.visitEachChild(node, processAllNodes, context); // 遍历所有子节点
  function processAllNodes(node) {
    if (ts.isInterfaceDeclaration(node)) {
      node = processInterfaceDeclaration(node);
    } else if (ts.isClassDeclaration(node)) {
      node = processClassDeclaration(node);
    } else if (ts.isModuleDeclaration(node) && node.body && ts.isModuleBlock(node.body)) {
      const newStatements = [];
      node.body.statements.forEach((statement) => {
        if (!isSystemapi(statement)) {
          newStatements.push(statement);
        }
      });
      const newModuleBody = ts.factory.updateModuleBlock(node.body, newStatements);
      node = ts.factory.updateModuleDeclaration(
        node,
        node.modifiers,
        node.name,
        newModuleBody
      );
    } else if (ts.isEnumDeclaration(node)) {
      node = processEnumDeclaration(node);
    } else if (ts.isStructDeclaration(node)) {
      node = processStructDeclaration(node);
    } else if (ts.isAnnotationDeclaration(node)) {
      node = processAnnotationDeclaration(node);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  }
}

/**
 * 处理@interface子节点 
 */
function processAnnotationDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isSystemapi(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateAnnotationDeclaration(
    node,
    node.modifiers,
    node.name,
    newMembers
  );
  return node;
}

/**
 * 处理interface子节点 
 */
function processInterfaceDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isSystemapi(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateInterfaceDeclaration(
    node,
    node.modifiers,
    node.name,
    node.typeParameters,
    node.heritageClauses,
    newMembers
  );
  return node;
}

/**
 * 处理class子节点 
 */
function processClassDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isSystemapi(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateClassDeclaration(
    node,
    node.modifiers,
    node.name,
    node.typeParameters,
    node.heritageClauses,
    newMembers
  );
  return node;
}

/**
 * 处理enum子节点 
 */
function processEnumDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isSystemapi(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateEnumDeclaration(
    node,
    node.modifiers,
    node.name,
    newMembers
  );
  return node;
}

/**
 * 处理struct子节点 
 */
function processStructDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member, index) => {
    if (index >= 1 && !isSystemapi(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateStructDeclaration(
    node,
    node.modifiers,
    node.name,
    node.typeParameters,
    node.heritageClauses,
    newMembers
  );
  return node;
}

/**
 * 解析reference
 * @param {string} url reference文件地址
 */
function resolveReferences(url) {
  const obj = referencesMap.get(url);
  let references = obj.references;
  if (!references || references.length === 0) {
    return;
  }
  for (let index = 0; index < references.length; index++) {
    const element = references[index];
    element.match(PATT.GET_REFERENCEURL);
    let referencePath = RegExp.$2;
    referencePath = referencesToOthers(referencePath, REFERENCE_TYPE.TOLOCAL);
    let fullReferencePath = path.resolve(path.dirname(url), referencePath);
    if (fs.existsSync(fullReferencePath) && !referencesModuleMap.has(fullReferencePath)) {
      const content = fs.readFileSync(fullReferencePath, 'utf-8'); //文件内容
      const fileName = processFileName(fullReferencePath);
      ts.transpileModule(content, {
        compilerOptions: COMPILER_OPTIONS,
        fileName: fileName,
        transformers: { before: [resolveCallback(fullReferencePath)] },
      });
    }
  }
}
function resolveCallback(url) {
  return (context) => {
    const allReferencesIdentifierSet = new Set([]);
    let allModule = {};
    return (node) => {
      const referenceSourceFile = node;
      node.statements.forEach((statement) => {
        if (
          ts.isModuleDeclaration(statement) &&
          statement.name &&
          ts.isStringLiteral(statement.name) &&
          statement.body &&
          ts.isModuleBlock(statement.body) &&
          !isSystemapi(statement)
        ) {
          ts.visitEachChild(statement, collectAllReferencesIdentifier, context);
          dealExternalStatements(referenceSourceFile);
          allModule[statement.name.text.toString()] = [...allReferencesIdentifierSet];
          allReferencesIdentifierSet.clear();
        }
      });
      referencesModuleMap.set(url, allModule);
      allModule = {};
      return node;
    };
    function dealExternalStatements(node) {
      node.statements.forEach((statement) => {
        let name = '';
        if (isSystemapi(statement)) {
          if (ts.isVariableStatement(statement)) {
            name = variableStatementGetEscapedText(statement);
          } else if (
            ts.isInterfaceDeclaration(statement) ||
            ts.isClassDeclaration(statement) ||
            ts.isEnumDeclaration(statement)
          ) {
            if (statement && statement.name && statement.name.escapedText) {
              name = statement.name.escapedText.toString();
            }
          }
          allReferencesIdentifierSet.delete(name);
        }
      });
    }
    function collectAllReferencesIdentifier(node) {
      if (isSystemapi(node)) {
        return node;
      }
      if (ts.isIdentifier(node)) {
        allReferencesIdentifierSet.add(node.escapedText.toString());
      }
      return ts.visitEachChild(node, collectAllReferencesIdentifier, context);
    }
  };
}

function variableStatementGetEscapedText(statement) {
  let name = '';
  if (
    statement &&
    statement.declarationList &&
    statement.declarationList.declarations &&
    statement.declarationList.declarations.length > 0 &&
    statement.declarationList.declarations[0].name &&
    statement.declarationList.declarations[0].name.escapedText
  ) {
    name = statement.declarationList.declarations[0].name.escapedText.toString();
  }
  return name;
}

function isSystemapi(node) {
  const notesContent = node.getFullText().replace(node.getText(), '').replace(/[\s]/g, '');
  const notesArr = notesContent.split(/\/\*\*/);
  const notesStr = notesArr[notesArr.length - 1];
  if (notesStr.length !== 0) {
    return /@systemapi/g.test(notesStr);
  }
  return false;
}

/**
 * 判断是否为use static标记
 * @param { ts.Node } node 
 * @returns { boolean }
 */
function isStaticFlag(node) {
  return ts.isExpressionStatement(node) &&
    node.expression &&
    ts.isStringLiteral(node.expression) &&
    node.expression.text &&
    node.expression.text === ARKTS_FLAG;
}

function isEmptyFile(node) {
  let isEmpty = true;
  if (ts.isSourceFile(node) && node.statements) {
    for (let i = 0; i < node.statements.length; i++) {
      const statement = node.statements[i];
      if (ts.isImportDeclaration(statement) || isStaticFlag(statement)) {
        continue;
      }
      isEmpty = false;
      break;
    }
  }
  const fileName = node.fileName.replace('.ts', '').replace('.static.ets', '').replace('.ets', '');
  const componentFileName = getPureName(fileName);
  if (isEmpty && componentEtsFiles.includes(componentFileName)) {
    componentEtsDeleteFiles.push(componentFileName);
  }
  if (isEmpty) {
    etsDeleteFiles.push(fileName);
  }
  return isEmpty;
}

let outputPath = '';
let inputDir = '';
start();
