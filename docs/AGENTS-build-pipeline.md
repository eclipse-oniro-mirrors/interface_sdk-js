# SDK 构建流水线知识索引

> 本文档供 AI 在修改 SDK 构建脚本、排查打包产物时使用。AI 通过读取 interface 仓库根目录的 AGENTS.md 发现并加载本文件。

SDK 构建流水线文档树（GN 生成期 → 接口源文件拆分 → 装配 → 打包安装）的入口索引，
由根 [AGENTS.md](../AGENTS.md) 的「API Design Knowledge Index」注册。本索引是
`docs/build-pipeline/` 下文档的稳定入口：文档若移动，只改本索引与本索引的上游链接。

## 适用范围与修改限制

本索引及 `docs/build-pipeline/` 文档树**只用于 SDK 接口处理**任务：对
`interface/sdk-js` 的接口声明做裁剪、拆分、转换、装配、打包等环节定位。其他任务
（API 设计、版本规则、元数据等）请走根 [AGENTS.md](../AGENTS.md) 的其他知识域。

依据本索引定位修改点时，**只能修改 sdk 领域负责的环节**；其他领域环节仅可阅读
参考，不得越权修改：

- **可修改（sdk）**：`00-overview`、`12` 两份阅读文档，以及各环节 `00-overview`
  （`01.0`、`02.0`）；环节 `01.1`、`02.1~02.5`、`02.7`、`03`、`04`、`06`、
  `07.1`、`08`、`09`。
- **只读参考（不得修改）**：
  - 编译构建（build 仓）：`01.2`、`01.3`、`10`
  - 安全领域（负责人：陈念）：`01.4`、`02.6`
  - 语言工具链：`07.2`（与 07.1 同篇）
  - 无 sdk 归属：`05`、`11`

归属有疑义的环节先确认归属再动，不跨领域修改脚本与文档。

## 阅读索引

| 知识域 | 何时读 | 入口 |
|--------|--------|------|
| 全链路总览 | 初次了解 SDK 打包流程，或按环节定位脚本 | [00-overview](./build-pipeline/00-overview.md) |
| 入口清单与流程视角 | 从 23 条入口反查所属流程、理解依赖关系 | [12-entry-flow-map](./build-pipeline/12-entry-flow-map.md) |
| 环节 01 GN 生成期 | GN 生成期 `exec_script` 四个脚本（总览） | [01-00gn-generation-overview](./build-pipeline/01-00gn-generation-overview.md) |
| 01.1 文件裁剪 | `parse_description.py`：按 public/arkts 开关裁剪条目、改写 `install_dir` | [01-01file-trim](./build-pipeline/01-01file-trim.md) |
| 01.2 生成模块清单 | `parse_sdk_description.py`：展开占位符、生成 GN 变量与安装路径表 | [01-02module-list](./build-pipeline/01-02module-list.md) |
| 01.3 打包 BUILD 渲染 | `generate_all_types_sdk.py`：Jinja2 渲染打包目标 `BUILD.gn` | [01-03build-render](./build-pipeline/01-03build-render.md) |
| 01.4 权限转换 | `convert_permissions.py` → `convert.js`：public SDK 权限声明（安全领域） | [01-04permission-convert](./build-pipeline/01-04permission-convert.md) |
| 环节 02 接口源文件拆分 | `ohos_base_split` 调度 7 个 Node 工具（总览） | [02-00interface-split-overview](./build-pipeline/02-00interface-split-overview.md) |
| 02.1 拆分源接口 | `handleApiFiles.js`：按类型/`@arkts` 标签拆分源接口 | [02-01split-api](./build-pipeline/02-01split-api.md) |
| 02.2 API 版本校验 | `checkApiVersion.js`：`@since` 格式与版本上限校验 | [02-02api-version-check](./build-pipeline/02-02api-version-check.md) |
| 02.3 删除系统 API | `delete_systemapi_plugin.js`：删 `@systemapi`、`@publicapi` 转 public | [02-03delete-system-api](./build-pipeline/02-03delete-system-api.md) |
| 02.4 删除 Notification 模块 | `delete_notification_plugin.js`：仅 public 删模块并清理引用 | [02-04delete-notification](./build-pipeline/02-04delete-notification.md) |
| 02.5 修正 API 注解 | `adjust_api_annotation.js`：修正 `[since x-y]` 区间 | [02-05api-annotation-fix](./build-pipeline/02-05api-annotation-fix.md) |
| 02.6 生成权限声明 | `convert.js`：dynamic/static 各生成权限联合类型（安全领域） | [02-06permission-declaration](./build-pipeline/02-06permission-declaration.md) |
| 02.7 数值类型转换 | `intToNumber.js`：仅 dynamic `int/long/double` → `number` | [02-07numeric-conversion](./build-pipeline/02-07numeric-conversion.md) |
| 环节 03 目录级过滤 | `remove_internal.py`：排除 `remove_list` 特殊目录后拷贝 | [03-directory-filter](./build-pipeline/03-directory-filter.md) |
| 环节 04 内部目录与独立模块 | `process_internal.py`：按 `remove_list.json` 文件级过滤拷贝 | [04-internal-dirs-modules](./build-pipeline/04-internal-dirs-modules.md) |
| 环节 05 装配 | `ohos_copy` 纯拷贝合成待打包目录 | [05-assembly](./build-pipeline/05-assembly.md) |
| 环节 06 interop | 互操作声明与胶水代码（declgen / ets2panda driver） | [06-interop](./build-pipeline/06-interop.md) |
| 环节 07 runtimeapi | `copy_runtimeapi.py`：static 删 `@unpublished`（校验属语言工具链） | [07-runtimeapi](./build-pipeline/07-runtimeapi.md) |
| 环节 08 清标签 | `delete_arkui_label.py`：删 `@noninterop` 标签行 | [08-label-cleanup](./build-pipeline/08-label-cleanup.md) |
| 环节 09 插件 | `build_api_check_plugin.py`：npm 构建 api-check / api-transform | [09-plugins](./build-pipeline/09-plugins.md) |
| 环节 10 SDK 打包安装 | `copy_sdk_modules.py` 等：按安装路径表拷贝+zip+校验+NOTICE | [10-sdk-packaging-install](./build-pipeline/10-sdk-packaging-install.md) |
| 环节 11 部件化对外接口 | `bundle.json` 的 `inner_kits`：跨部件依赖契约（非安装清单） | [11-cross-part-interfaces](./build-pipeline/11-cross-part-interfaces.md) |

## 使用约定

- 环节顺序即 01~12（`12` 是阅读视角补充，不占流水线编号）；每个环节先读其
  `00-overview` 定位脚本，再进分篇看流程。
- **归属领域**按维护方划分：`build` 仓 → `编译构建`、`interface/sdk-js` 仓 →
  `sdk`、语言工具链 → `语言`；各环节的修改权限以「适用范围与修改限制」为准。
- 路径占位 `out/<产品>/...` 为构建产物；不手改生成物，修改应回到源仓
  （`interface/sdk-js` / `build`）。
