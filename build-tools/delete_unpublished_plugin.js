/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fs = require('fs');
const path = require('path');
const commander = require('commander');

let arkts = null;
let arktsGlobal = null;
let inputDir = '';
let outputPath = '';
let mode = '';
let sdkPath = '';
let subdirs = [];
const deletedExportsByFile = new Map();

const CONFIG_PATH = path.resolve(__dirname, 'package_tools/src/dependence/arktsconfig.json');
const ES2PANDA_LIB_PATH = '/build-tools/koala-wrapper/build/lib/es2panda';
const ETS_PANDA_LIB_PATH = '/build-tools/ets2panda/lib';
const ES_FILE_EXTENSION = 'ets';

/**
 * 程序入口：解析命令行参数并启动 @unpublished 处理流程
 * @returns {void}
 */
function start() {
  const program = new commander.Command();
  program
    .name('deleteUnpublished')
    .version('0.0.1');
  program
    .option('--input <string>', 'input directory path')
    .option('--output <string>', 'output directory path')
    .option('--mode <string>', 'processing mode: tag-only | tag-and-api')
    .option('--sdk-path <string>', 'SDK build tools path for libarkts resolution')
    .option('--subdirs <string>', 'comma-separated subdirectory names to process (e.g. api,kits,arkts)')
    .action((opts) => {
      if (!opts.input || !opts.output || !opts.mode) {
        console.error('ERROR: --input, --output, and --mode are required');
        process.exit(1);
      }
      if (opts.mode !== 'tag-only' && opts.mode !== 'tag-and-api') {
        console.error('ERROR: --mode must be "tag-only" or "tag-and-api"');
        process.exit(1);
      }
      inputDir = opts.input;
      outputPath = opts.output;
      mode = opts.mode;
      sdkPath = opts.sdkPath || path.resolve(__dirname, '..');
      subdirs = opts.subdirs ? opts.subdirs.split(',').map(s => s.trim()).filter(Boolean) : [];
      if (!fs.existsSync(inputDir)) {
        console.error(`ERROR: input directory does not exist: ${inputDir}`);
        process.exit(1);
      }
      processFiles();
    });
  program.parse(process.argv);
}

/**
 * 初始化 libarkts 全局配置，加载 @koalaui/libarkts 原生模块
 * @returns {void}
 */
function configGlobal() {
  const req = require(sdkPath + ES2PANDA_LIB_PATH);
  arkts = req.arkts;
  arktsGlobal = req.arktsGlobal;
}

/**
 * 主处理流程：初始化 libarkts 环境，遍历所有文件并执行 @unpublished 处理
 * @returns {void}
 */
function processFiles() {
  try {
    configGlobal();

    const allFiles = [];
    collectAllFiles(inputDir, allFiles);

    if (allFiles.length === 0) {
      console.log(`[delete_unpublished] no files found in ${inputDir}`);
      return;
    }

    const ets2pandaCmd = [
      '_',
      '--extension', ES_FILE_EXTENSION,
      '--arktsconfig', CONFIG_PATH,
      '--simultaneous',
      '--debug-info',
      inputDir,
    ];

    arktsGlobal.filePath = inputDir;
    arktsGlobal.config = arkts.Config.create(ets2pandaCmd).peer;
    arktsGlobal.compilerContext = arkts.Context.createContextGenerateAbcForExternalSourceFiles(allFiles);
    arkts.proceedToState(arkts.Es2pandaContextState.ES2PANDA_STATE_PARSED, arktsGlobal.compilerContext.peer);

    const contextPtr = arkts.arktsGlobal.compilerContext?.peer;
    let program = arkts.getOrUpdateGlobalContext(contextPtr).program;

    const visited = new Set();
    const queue = [program];
    let index = 0;
    while (queue.length > 0) {
      const currProgram = queue.shift();
      index++;
      if (visited.has(currProgram.peer)) {
        continue;
      }
      if (index !== 1) {
        traverseProgram(currProgram.astNode, currProgram.absName);
      }
      visited.add(currProgram.peer);
      for (const externalSource of currProgram.externalSources) {
        visitNextProgramInQueue(queue, visited, externalSource);
      }
    }

    cleanupOutputFiles();
  } catch (error) {
    console.error('DELETE_UNPUBLISHED_PLUGIN ERROR: ', error);
    process.exit(3);
  }
}

/**
 * 递归收集目录下所有文件路径
 * @param {string} dir - 要扫描的目录路径
 * @param {string[]} fileArray - 用于存储文件路径的数组
 * @returns {void}
 */
function collectAllFiles(dir, fileArray) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        if (dir === inputDir && subdirs.length > 0 && !subdirs.includes(element)) {
          return;
        }
        collectAllFiles(filePath, fileArray);
      } else {
        fileArray.push(filePath);
      }
    });
  } catch (e) {
    console.warn(`[delete_unpublished] cannot read dir: ${dir}`, e.message);
  }
}

/**
 * 将外部源文件关联的 Program 节点加入遍历队列
 * @param {arkts.Program[]} queue - 待处理的 Program 队列
 * @param {Set} visited - 已访问的 Program peer 集合，用于去重
 * @param {arkts.ExternalSource} externalSource - 外部源文件对象
 * @returns {void}
 */
function visitNextProgramInQueue(queue, visited, externalSource) {
  const nextProgramArr = externalSource.programs ?? [];
  for (const nextProgram of nextProgramArr) {
    if (!visited.has(nextProgram.peer)) {
      queue.push(nextProgram);
    }
  }
}

/**
 * 遍历单个文件的 AST，根据模式执行 @unpublished 处理并写入输出
 * @param {arkts.AstNode} node - 文件 AST 根节点（EtsScript）
 * @param {string} filePath - 文件绝对路径
 * @returns {void}
 */
function traverseProgram(node, filePath) {
  const ext = path.extname(filePath);
  if (ext !== '.d.ts' && ext !== '.d.ets' && ext !== '.ets') {
    copyFileToOutput(filePath);
    return;
  }
  let fileContent = fs.readFileSync(filePath, 'utf-8');

  if (!/@unpublished/g.test(fileContent)) {
    copyFileToOutput(filePath);
    return;
  }

  const nodePositionArr = [];
  const copyrightComment = getCopyrightComment(fileContent);
  const fileAndKitComment = getFileAndKitComment(fileContent);

  if (mode === 'tag-only') {
    fileContent = processTagOnlyMode(node, filePath, fileContent);
  } else if (mode === 'tag-and-api') {
    processTagAndApiMode(node, filePath, fileContent, nodePositionArr);

    nodePositionArr.sort((a, b) => {
      if (a.startLine !== b.startLine) { return b.startLine - a.startLine; }
      if (a.startCol !== b.startCol) { return b.startCol - a.startCol; }
      return b.endLine - a.endLine;
    });

    nodePositionArr.forEach((item) => {
      fileContent = replaceTextByPosition(fileContent, item.startLine, item.startCol, item.endLine, item.endCol);
    });
  }

  fileContent = fixEnumTrailingCommas(fileContent);
  fileContent = collapseBlankLines(fileContent);

  fileContent = ensureCopyrightAndKitComment(fileContent, copyrightComment, fileAndKitComment);

  writeFile(filePath, fileContent);
}

/**
 * Tag-only 模式处理：仅删除 @unpublished 标签所在行，保留其余 JSDoc 内容和 API 声明
 * @param {arkts.AstNode} node - 文件 AST 根节点
 * @param {string} filePath - 文件绝对路径
 * @param {string} fileContent - 文件原始文本内容
 * @param {Array<{startLine: number, startCol: number, endLine: number, endCol: number}>} nodePositionArr - 待删除位置数组
 * @returns {void}
 */
function processTagOnlyMode(node, filePath, fileContent) {
  const lines = fileContent.split(/\r?\n/);
  const deleteLineNumbers = new Set();

  collectTagOnlyDeletionLines(node, lines, deleteLineNumbers);

  const sortedLines = [...deleteLineNumbers].sort((a, b) => b - a);
  for (const lineIndex of sortedLines) {
    lines.splice(lineIndex, 1);
  }

  return lines.join('\n');
}

/**
 * 从单个声明节点中提取 @unpublished 标签所在行号
 * @param {arkts.AstNode} node - AST 节点
 * @param {string[]} lines - 文件按行拆分的数组
 * @param {Set<number>} deleteLineNumbers - 待删除行号集合
 * @returns {void}
 */
function collectUnpublishedTagOnlyLines(node, lines, deleteLineNumbers) {
  const jsdocStr = arkts.getJsdocStringFromDeclaration(node);
  if (!jsdocStr || jsdocStr === 'Empty Jsdoc' || !/@unpublished/g.test(jsdocStr)) {
    return;
  }
  const stmtStartLine = node.startPosition.line() + 1;
  const commentStartLine = findCommentStartLine(lines, stmtStartLine);
  if (commentStartLine === -1) {
    return;
  }
  const commentEndLine = stmtStartLine - 1;
  for (let i = commentStartLine - 1; i < commentEndLine; i++) {
    if (/@unpublished/g.test(lines[i])) {
      deleteLineNumbers.add(i);
    }
  }
}

/**
 * 获取 AST 节点的直接子声明节点列表
 * @param {arkts.AstNode} node - AST 节点
 * @returns {arkts.AstNode[]} 子声明节点列表
 */
function getChildNodes(node) {
  if (arkts.isTSInterfaceDeclaration(node) && node.body?.body) {
    return node.body.body;
  }
  if (arkts.isClassDeclaration(node) && node.definition?.body) {
    return node.definition.body;
  }
  if (arkts.isEtsScript(node) && node.statements) {
    return node.statements;
  }
  if (arkts.isTSEnumDeclaration(node) && node.members) {
    return node.members;
  }
  if (arkts.isStructDeclaration(node) && node.definition?.body) {
    return node.definition.body;
  }
  if (arkts.isAnnotationDeclaration(node) && node.properties) {
    return node.properties;
  }
  return [];
}

/**
 * 递归收集所有含 @unpublished 标签的节点中 @unpublished 所在行号
 * @param {arkts.AstNode} node - AST 节点
 * @param {string[]} lines - 文件按行拆分的数组
 * @param {Set<number>} deleteLineNumbers - 待删除行号集合
 * @returns {void}
 */
function collectTagOnlyDeletionLines(node, lines, deleteLineNumbers) {
  collectUnpublishedTagOnlyLines(node, lines, deleteLineNumbers);

  if (arkts.isFunctionDeclaration(node)) {
    return;
  }

  const children = getChildNodes(node);
  children.forEach((child) => collectTagOnlyDeletionLines(child, lines, deleteLineNumbers));
}

/**
 * 从声明语句起始行向上查找 JSDoc 注释块的起始行号
 * 跳过装饰器行（@开头的行）和空行，直到找到 /** 为止
 * @param {string[]} lines - 文件按行拆分的数组
 * @param {number} statementStartLine - 声明语句所在行号（1-based）
 * @returns {number} JSDoc 注释起始行号（1-based），未找到返回 -1
 */
function findCommentStartLine(lines, statementStartLine) {
  for (let i = statementStartLine - 2; i >= 0; i--) {
    const trimmed = lines[i].trim();
    if (trimmed === '/**') {
      return i + 1;
    }
    if (trimmed !== '' && trimmed !== '*' && trimmed !== '*/' && !trimmed.startsWith('*') && !trimmed.startsWith('@')) {
      break;
    }
  }
  return -1;
}

/**
 * Tag-and-api 模式处理：删除 @unpublished 所在的 JSDoc 注释块 + API 声明
 * @param {arkts.AstNode} node - 文件 AST 根节点
 * @param {string} filePath - 文件绝对路径
 * @param {string} fileContent - 文件原始文本内容
 * @param {Array<{startLine: number, startCol: number, endLine: number, endCol: number}>} nodePositionArr - 待删除位置数组
 * @returns {void}
 */
function processTagAndApiMode(node, filePath, fileContent, nodePositionArr) {
  processNestedDeclarations(node, nodePositionArr, fileContent, filePath);
}

/**
 * 收集单个节点中 @unpublished 标记的位置信息
 * 优先通过 arkts.getJsdocStringFromDeclaration 获取 JSDoc，
 * 若返回为空则回退到源文本扫描检测 @unpublished
 * @param {arkts.AstNode} node - AST 节点
 * @param {Array<{startLine: number, startCol: number, endLine: number, endCol: number}>} nodePositionArr - 待删除位置数组
 * @param {string} fileContent - 文件原始文本内容
 * @param {string} filePath - 当前文件路径
 * @returns {void}
 */
function collectUnpublishedNodePosition(node, nodePositionArr, fileContent, filePath) {
  const jsdocStr = arkts.getJsdocStringFromDeclaration(node);
  const hasUnpublished = !!jsdocStr && jsdocStr !== 'Empty Jsdoc' && /@unpublished/g.test(jsdocStr);
  if (!hasUnpublished) {
    return false;
  }
  const stmtStartLine = node.startPosition.line() + 1;
  const stmtEndLine = node.endPosition.line() + 1;
  const stmtStartCol = node.startPosition.col() + 1;
  const stmtEndCol = node.endPosition.col() + 1;

  const commentStartLine = findCommentStartLine(fileContent.split(/\r?\n/), stmtStartLine);
  if (commentStartLine !== -1) {
    nodePositionArr.push({
      startLine: commentStartLine,
      startCol: 1,
      endLine: stmtEndLine,
      endCol: stmtEndCol,
    });
  } else {
    nodePositionArr.push({
      startLine: stmtStartLine,
      startCol: stmtStartCol,
      endLine: stmtEndLine,
      endCol: stmtEndCol,
    });
  }
  collectDeletedExportName(node, fileContent, filePath);
  return true;
}

/**
 * 从被删除的声明节点中提取导出名并记录到 deletedExportsByFile
 * 仅记录顶层 export 声明的名称，用于后续清理悬空 import
 * 当声明带装饰器（如 @Retention、@Component）时，AST 节点的 startPosition 指向装饰器行，
 * 需要向下扫描直到找到实际的声明行
 * @param {arkts.AstNode} node - AST 节点
 * @param {string} fileContent - 文件原始文本内容
 * @param {string} filePath - 当前文件路径
 * @returns {void}
 */
function collectDeletedExportName(node, fileContent, filePath) {
  const lines = fileContent.split(/\r?\n/);
  const startLine = node.startPosition.line();
  if (startLine < 0 || startLine >= lines.length) { return; }
  // 当声明带装饰器（如@Retention）时，startPosition指向装饰器行而非export声明行，
  // 需要从startLine向下搜索到endLine，找到真正包含声明关键字的行
  const endLine = node.endPosition.line();
  const declRegex = /(?:export\s+)?(?:declare\s+)?(?:@interface|enum|const|let|var|class|interface|enum|struct|type|function|namespace|default)\s+(\w+)/;
  for (let i = startLine; i <= endLine && i < lines.length; i++) {
    const match = lines[i].match(declRegex);
    if (match) {
      const fileName = path.basename(filePath);
      if (!deletedExportsByFile.has(fileName)) {
        deletedExportsByFile.set(fileName, new Set());
      }
      deletedExportsByFile.get(fileName).add(match[1]);
      return;
    }
  }
}

/**
 * 使用 visitEachChild 遍历嵌套声明（interface/class/enum/struct/annotation 内部成员）
 * @param {arkts.AstNode} node - AST 节点
 * @param {Array<{startLine: number, startCol: number, endLine: number, endCol: number}>} nodePositionArr - 待删除位置数组
 * @param {string} fileContent - 文件原始文本内容
 * @param {string} filePath - 当前文件路径
 * @returns {void}
 */
function processNestedDeclarations(node, nodePositionArr, fileContent, filePath) {
  arkts.visitEachChild(node, (child) => processAllNodesForTagAndApi(child, nodePositionArr, fileContent, filePath));
}

/**
 * 递归处理所有 AST 节点，收集带 @unpublished 标签的节点位置
 * @param {arkts.AstNode} node - 当前 AST 节点
 * @param {Array<{startLine: number, startCol: number, endLine: number, endCol: number}>} nodePositionArr - 待删除位置数组
 * @param {string} fileContent - 文件原始文本内容
 * @returns {arkts.AstNode} 原始节点（不做修改）
 */
function processAllNodesForTagAndApi(node, nodePositionArr, fileContent, filePath) {
  const wasDeleted = collectUnpublishedNodePosition(node, nodePositionArr, fileContent, filePath);

  if (wasDeleted) {
    return node;
  }

  if (arkts.isFunctionDeclaration(node)) {
    return node;
  }

  const children = getChildNodes(node);
  if (children.length > 0) {
    children.forEach((child) => processAllNodesForTagAndApi(child, nodePositionArr, fileContent, filePath));
  } else {
    arkts.visitEachChild(node, (child) => processAllNodesForTagAndApi(child, nodePositionArr, fileContent, filePath));
  }
  return node;
}

/**
 * 根据行列位置替换文本内容（从底部向顶部替换以保持位置有效性）
 * @param {string} originalText - 原始文本
 * @param {number} startLine - 起始行号（1-based）
 * @param {number} startCol - 起始列号（1-based）
 * @param {number} endLine - 结束行号（1-based）
 * @param {number} endCol - 结束列号（1-based）
 * @returns {string} 替换后的文本
 */
function replaceTextByPosition(originalText, startLine, startCol, endLine, endCol) {
  const lines = originalText.split('\n');
  if (startLine < 1 || endLine < 1 || startLine > lines.length || endLine > lines.length) {
    return originalText;
  }
  if (startLine === endLine) {
    const line = lines[startLine - 1];
    lines[startLine - 1] = line.substring(0, startCol - 1) + line.substring(endCol - 1);
  } else {
    const before = lines[startLine - 1].substring(0, startCol - 1);
    const after = lines[endLine - 1].substring(endCol - 1);
    lines.splice(startLine - 1, endLine - startLine + 1, before + after);
  }
  return lines.join('\n');
}

/**
 * 修复枚举中因删除成员导致的尾逗号问题
 * 删除未发布枚举成员后，前一个成员可能残留尾逗号，需要清理
 * @param {string} text - 源文件文本
 * @returns {string} 修复后的文本
 */
function fixEnumTrailingCommas(text) {
  return text.replace(/,(\s*})/g, '$1');
}

/**
 * 清理删除操作后产生的连续空行（3个及以上连续换行压缩为2个）
 * @param {string} text - 源文件文本
 * @returns {string} 清理后的文本
 */
function collapseBlankLines(text) {
  return text.replace(/\n{3,}/g, '\n\n');
}

/**
 * 从文本中提取版权头注释
 * @param {string} text - 源文件文本
 * @returns {string} 版权头注释文本，未找到返回空字符串
 */
function getCopyrightComment(text) {
  const match = text.match(/\/\*\s*\r?\n\s*\*\s*Copyright[\s\S]*?\*\//);
  return match ? match[0] : '';
}

/**
 * 从文本中提取 @file/@kit 注释块
 * @param {string} text - 源文件文本
 * @returns {string} @file/@kit 注释文本，未找到返回空字符串
 */
function getFileAndKitComment(text) {
  // 逐个提取 /** ... */ 注释块，返回第一个同时包含 @file 和 @kit 的块
  const blockRegex = /\/\*\*[\s\S]*?\*\//g;
  let block;
  while ((block = blockRegex.exec(text)) !== null) {
    if (/@file/.test(block[0]) && /@kit/.test(block[0])) {
      return block[0];
    }
  }
  return '';
}

/**
 * 确保输出文本中保留版权头和 @file/@kit 注释，若被删除则重新插入
 * @param {string} result - 处理后的文本
 * @param {string} copyrightMessage - 原始版权头
 * @param {string} fileAndKitComment - 原始 @file/@kit 注释
 * @returns {string} 补全版权头和 @file/@kit 注释后的文本
 */
function ensureCopyrightAndKitComment(result, copyrightMessage, fileAndKitComment) {
  const newFileAndKitComment = getFileAndKitComment(result);
  const newCopyrightMessage = getCopyrightComment(result);

  if (newFileAndKitComment === '' && fileAndKitComment !== '') {
    const insertPos = findInsertPosition(result);
    result = result.substring(0, insertPos) + fileAndKitComment + '\n\n' + result.substring(insertPos);
  }
  if (newCopyrightMessage === '' && copyrightMessage !== '') {
    const insertPos = findInsertPosition(result);
    result = result.substring(0, insertPos) + copyrightMessage + '\n\n' + result.substring(insertPos);
  }
  return result;
}

/**
 * 查找版权头/@file 注释的插入位置（在 "use static" 行之后）
 * @param {string} text - 源文件文本
 * @returns {number} 插入位置的字符偏移量
 */
function findInsertPosition(text) {
  const match = text.match(/use static.*\n/);
  if (match) {
    return match.index + match[0].length;
  }
  return 0;
}

/**
 * 将文件原样拷贝到输出目录
 * @param {string} url - 源文件绝对路径
 * @returns {void}
 */
function copyFileToOutput(url) {
  const content = fs.readFileSync(url, 'utf-8');
  writeFile(url, content);
}

/**
 * 将处理后的内容写入输出目录，保持相对路径结构
 * @param {string} url - 源文件绝对路径，用于计算相对路径
 * @param {string} data - 要写入的内容，空值时删除输出文件
 * @returns {void}
 */
function writeFile(url, data) {
  const relativePath = path.relative(inputDir, url);
  const newFilePath = path.resolve(outputPath, relativePath).replace(/\.static\.d\.ets$/, '.d.ets');
  const dirPath = path.dirname(newFilePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  if (data === '' || data === undefined || data === null) {
    if (fs.existsSync(newFilePath)) {
      fs.rmSync(newFilePath, { force: true });
    }
    return;
  }
  fs.writeFileSync(newFilePath, data);
}

/**
 * 第二遍清理：移除悬空 import 并删除仅含 import 的空文件（kits 目录除外）
 * @returns {void}
 */
function cleanupOutputFiles() {
  const allOutputFiles = [];
  collectAllFiles(outputPath, allOutputFiles);

  for (const filePath of allOutputFiles) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    content = removeDanglingImports(content, filePath);

    if (isEmptyFile(content, filePath)) {
      fs.rmSync(filePath, { force: true });
      continue;
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
    }
  }
}

/**
 * 解析 { A, B as C } 中的名称列表，返回原始名数组（去掉 as 别名）
 * @param {string} namesStr - 大括号内的名称字符串
 * @returns {string[]} 原始名数组
 */
function parseExportNames(namesStr) {
  return namesStr.split(',').map(s => s.trim().split(/\s+as\s+/)[0].trim());
}

/**
 * 从 import/export 的模块说明符中提取文件名（basename），用于查找 deletedExportsByFile
 * 支持以下路径形式：
 *   - 相对路径 './@ohos.multimodalInput.mouseEvent' → basename '@ohos.multimodalInput.mouseEvent'
 *   - @ohos.* 绝对路径 '@ohos.arkui.component' → 直接作为文件名（@ohos.* 本身全局唯一）
 *   - arkui.* 路径 'arkui.BuilderNode' → 取最后一段 'BuilderNode' 作为文件名
 *   - @kit.* 路径 → 无法解析，返回 null
 * @param {string} moduleSpecifier - 模块路径字符串
 * @returns {string|null} 文件名，无法解析时返回 null
 */
function resolveModuleFileName(moduleSpecifier) {
  if (moduleSpecifier.startsWith('@kit.')) {
    // @kit.* 是 kit 再导出文件，无法对应到具体声明文件，保守保留
    return null;
  }
  let base;
  if (moduleSpecifier.startsWith('.')) {
    // 相对路径：取 basename
    base = path.basename(moduleSpecifier);
  } else if (moduleSpecifier.startsWith('@ohos.')) {
    // @ohos.* 路径本身就是全局唯一的文件名前缀
    base = moduleSpecifier;
  } else {
    // arkui.* 等用点号分隔目录层级的路径，取最后一段作为文件名
    base = moduleSpecifier.split('.').pop();
  }
  const candidates = [
    base,
    base + '.d.ets',
    base + '.d.ts',
    base + '.ets',
    base + '.ts',
  ];
  for (const candidate of candidates) {
    if (deletedExportsByFile.has(candidate)) {
      return candidate;
    }
  }
  return null;
}

/**
 * 获取指定来源文件被删除的导出名集合
 * @param {string} fileName - 文件名（basename）
 * @returns {Set<string>} 被删除的导出名集合
 */
function getDeletedExportsForFile(fileName) {
  return deletedExportsByFile.get(fileName) || new Set();
}

/**
 * 构建当前文件内「本地名 → {来源文件, 来源导出名}」映射，用于清理本地再导出
 * export { ... } 中引用了已删除声明的名称。仅记录来源可解析（@kit.* 除外）的导入。
 * @param {string} content - 文件内容
 * @returns {Map<string, {sourceFile: string, sourceName: string}>} 本地名 → 来源信息映射
 */
function buildNameToSourceMap(content) {
  const map = new Map();
  const addNamed = (namesStr, sourceFile) => {
    for (const part of namesStr.split(',')) {
      const trimmed = part.trim();
      if (!trimmed) { continue; }
      const asMatch = trimmed.match(/^(\w+)\s+as\s+(\w+)$/);
      if (asMatch) {
        map.set(asMatch[2], { sourceFile, sourceName: asMatch[1] });
      } else if (/^\w+$/.test(trimmed)) {
        map.set(trimmed, { sourceFile, sourceName: trimmed });
      }
    }
  };
  let m;
  const namedRe = /^[ \t]*import\s+(?:(\w+)\s*,\s*)?\{([\s\S]*?)\}\s*from\s*['"]([^'"]+)['"]\s*;?[ \t]*\r?$/gm;
  while ((m = namedRe.exec(content)) !== null) {
    const sourceFile = resolveModuleFileName(m[3]);
    if (sourceFile === null) { continue; }
    if (m[1]) { map.set(m[1], { sourceFile, sourceName: m[1] }); }
    addNamed(m[2], sourceFile);
  }
  const defaultRe = /^[ \t]*import\s+(\w+)\s+from\s*['"]([^'"]+)['"]\s*;?[ \t]*\r?$/gm;
  while ((m = defaultRe.exec(content)) !== null) {
    const sourceFile = resolveModuleFileName(m[2]);
    if (sourceFile === null) { continue; }
    map.set(m[1], { sourceFile, sourceName: m[1] });
  }
  return map;
}

/**
 * 判断本地再导出（export { X }）中的名称是否应被删除：
 *   - 名称在当前文件自己的被删集合中（本地声明被删），或
 *   - 名称来自某个来源文件，且该来源文件删除了对应导出名（kit 再导出场景）
 * @param {string} name - 导出名（本地绑定名）
 * @param {Set<string>} currentDeletedSet - 当前文件被删除的导出名集合
 * @param {Map<string, {sourceFile: string, sourceName: string}>} nameToSource - 本地名 → 来源映射
 * @returns {boolean} 是否应删除
 */
function isLocalExportNameDeleted(name, currentDeletedSet, nameToSource) {
  if (currentDeletedSet.has(name)) { return true; }
  const src = nameToSource.get(name);
  if (src) {
    return getDeletedExportsForFile(src.sourceFile).has(src.sourceName);
  }
  return false;
}

/**
 * 移除引用已删除导出名的 import/export 语句
 * 采用全文正则（多行感知）逐块处理，支持多行 import { ... } / import X, { ... } /
 * export { ... } / export { ... } from '...'；仅当导出名在对应来源文件中被删除时才移除，
 * 避免跨文件同名误删。kit 文件的本地 export { ... } 通过本文件 import 建立的
 * 名称→来源映射，按来源被删集合清理。
 * @param {string} content - 文件内容
 * @param {string} filePath - 当前文件路径
 * @returns {string} 清理后的内容
 */
function removeDanglingImports(content, filePath) {
  const currentFileName = path.basename(filePath);
  const currentDeletedSet = getDeletedExportsForFile(currentFileName);
  const nameToSource = buildNameToSourceMap(content);

  // import [default,] { named } from 'module'（多行感知）
  content = content.replace(
    /^([ \t]*import\s+)(?:(\w+)\s*,\s*)?(\{[\s\S]*?\})\s*from\s*['"]([^'"]+)['"]\s*;?[ \t]*\r?$/gm,
    (whole, lead, defaultName, brace, modSpec) => {
      const sourceFileName = resolveModuleFileName(modSpec);
      if (sourceFileName === null) { return whole; }
      const deletedSet = getDeletedExportsForFile(sourceFileName);
      const names = parseExportNames(brace.slice(1, -1));
      const keptNamed = names.filter(n => !deletedSet.has(n));
      const keptDefault = defaultName && !deletedSet.has(defaultName) ? defaultName : null;
      if (!keptDefault && keptNamed.length === 0) { return ''; }
      if (keptDefault && keptNamed.length === names.length) { return whole; }
      let body;
      if (keptDefault && keptNamed.length > 0) {
        body = `${keptDefault}, { ${keptNamed.join(', ')} }`;
      } else if (keptDefault) {
        body = keptDefault;
      } else {
        body = `{ ${keptNamed.join(', ')} }`;
      }
      return `${lead}${body} from '${modSpec}';`;
    }
  );

  // import default from 'module'（无大括号）
  content = content.replace(
    /^([ \t]*import\s+)(\w+)\s+from\s*['"]([^'"]+)['"]\s*;?[ \t]*\r?$/gm,
    (whole, lead, name, modSpec) => {
      const sourceFileName = resolveModuleFileName(modSpec);
      if (sourceFileName === null) { return whole; }
      const deletedSet = getDeletedExportsForFile(sourceFileName);
      return deletedSet.has(name) ? '' : whole;
    }
  );

  // export { named } from 'module'（多行感知再导出）
  content = content.replace(
    /^([ \t]*export\s+)(\{[\s\S]*?\})\s*from\s*['"]([^'"]+)['"]\s*;?[ \t]*\r?$/gm,
    (whole, lead, brace, modSpec) => {
      const sourceFileName = resolveModuleFileName(modSpec);
      if (sourceFileName === null) { return whole; }
      const deletedSet = getDeletedExportsForFile(sourceFileName);
      const names = parseExportNames(brace.slice(1, -1));
      const kept = names.filter(n => !deletedSet.has(n));
      if (kept.length === 0) { return ''; }
      if (kept.length === names.length) { return whole; }
      return `${lead}{ ${kept.join(', ')} } from '${modSpec}';`;
    }
  );

  // export { named }（多行感知本地再导出，按来源被删集合清理）
  content = content.replace(
    /^([ \t]*export\s+)(\{[\s\S]*?\})[ \t]*;?[ \t]*\r?$/gm,
    (whole, lead, brace) => {
      const names = parseExportNames(brace.slice(1, -1));
      const kept = names.filter(n => !isLocalExportNameDeleted(n, currentDeletedSet, nameToSource));
      if (kept.length === 0) { return ''; }
      if (kept.length === names.length) { return whole; }
      return `${lead}{ ${kept.join(', ')} };`;
    }
  );

  return content;
}

/**
 * 判断文件是否为空（仅含 import、版权头、@file/@kit 注释、'use static'）
 * kits 目录下的文件不算空
 * @param {string} content - 文件内容
 * @param {string} filePath - 文件路径
 * @returns {boolean} 是否为空文件
 */
function isEmptyFile(content, filePath) {
  if (filePath.includes(path.sep + 'kits' + path.sep)) {
    return false;
  }
  let text = content;
  const copyright = getCopyrightComment(text);
  if (copyright) { text = text.replace(copyright, ''); }
  const fileKit = getFileAndKitComment(text);
  if (fileKit) { text = text.replace(fileKit, ''); }
  text = text.replace(/'use static'\s*;?/g, '');
  text = text.replace(/^\s*import\s+.*$/gm, '');
  text = text.trim();

  return text.length === 0;
}

start();
