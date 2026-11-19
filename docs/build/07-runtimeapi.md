# 07 runtimeapi（static，删 `@unpublished`）

> 对应 [00-总览](./00-总览.md)「环节 07」。
> 脚本链：`interface/sdk-js/copy_runtimeapi.py` → `interface/sdk-js/build-tools/delete_unpublished_plugin.js`；
> 校验：`arkcompiler/ets_frontend/ets2panda/bindings/diagnostics.py`。
> 本环节只作用于 static SDK，输入来自 [05-装配](./05-装配.md)，随后由 [08-清标签](./08-清标签.md) 处理。

## 1. 环节职责

| 项 | 内容 |
| -- | ---- |
| 只作用于 | **static SDK** |
| 归属领域 | sdk（`interface/sdk-js/copy_runtimeapi.py` 等，interface/sdk-js 仓）+ 语言（`arkcompiler/ets_frontend/ets2panda/bindings/diagnostics.py`，arkcompiler 仓） |
| 目标 | `action("copy_runtimeapi")`、`action("validate_delete_unpublished")`、`ohos_copy("ohos_ets_runtimeapi")` |
| 输入 | `out/<产品>/ohos_static`（static 装配目录） |
| 输出 | `out/<产品>/obj/interface/sdk-js/copy_runtimeapi`（删标签+API）+ `out/<产品>/obj/interface/sdk-js/copy_runtimeapi_runtimeapi`（保留原始） |
| 一句话 | 生成两份副本：一份给 `ets/static/*` 打包，一份给 ets-loader runtimeapi |

## 2. `copy_runtimeapi` 调用关系

```gn
action("copy_runtimeapi") {
  deps = [ ":build_static_sdk_interop", ":ohos_ets_static" ]
  script = "//interface/sdk-js/copy_runtimeapi.py"
  args = [
    "--static-sdk-path",  rebase_path(ohos_ets_static_path),          # out/<产品>/ohos_static
    "--output-path",      rebase_path(target_out_dir + "/copy_runtimeapi"),
    "--runtimeapi-path",  rebase_path(target_out_dir + "/copy_runtimeapi_runtimeapi"),
    "--node-js",          rebase_path(nodejs),
    "--unpublished-tool", rebase_path("//interface/sdk-js/build-tools/delete_unpublished_plugin.js"),
    "--sdk-path",         rebase_path(build_sdk_path),                # out/<产品>/ohos_ets
  ]
}
```

## 3. `copy_runtimeapi.py` 处理流程

脚本常量 `STATIC_SUBDIRS = ["api", "kits", "arkts"]`。

```mermaid
flowchart TD
    A[解析参数并转绝对路径] --> B{static-sdk-path 存在?}
    B -- 否 --> X[打印错误 sys.exit 1]
    B -- 是 --> S1[Step 1 删除并重建 output-path]
    S1 --> S1C[从 ohos_static 拷贝 api/kits/arkts 到 output-path]
    S1C --> O1[(copy_runtimeapi 原始副本<br/>保留 @unpublished)]

    S1C -.->|Step 2 已注释，不执行| S2[tag-only 原地处理 ohos_static]

    S1C --> S3[Step 3 删除并重建 runtimeapi-path]
    S3 --> S3C[从 ohos_static 拷贝 api/kits/arkts 到 runtimeapi-path]
    S3C --> O2[(copy_runtimeapi_runtimeapi<br/>保留 @unpublished)]

    O1 --> S4[Step 4 对 output-path 原地执行<br/>delete_unpublished_plugin.js --mode tag-and-api]
    S3C -->|前序完成| S4
    S4 --> O1F[(copy_runtimeapi<br/>已删 @unpublished 标签和 API)]
```

| 步骤 | 输入 | 输出 | 说明 |
| ---- | ---- | ---- | ---- |
| Step 1 | `out/<产品>/ohos_static` | `out/<产品>/obj/interface/sdk-js/copy_runtimeapi` | `rmtree` 后 `copytree`，保留原始标签 |
| Step 2 | `out/<产品>/ohos_static` | 原地 | `tag-only` 调用被注释，**当前不执行** |
| Step 3 | `out/<产品>/ohos_static` | `out/<产品>/obj/interface/sdk-js/copy_runtimeapi_runtimeapi` | 与 Step 1 相同的原始副本 |
| Step 4 | `out/<产品>/obj/interface/sdk-js/copy_runtimeapi` | 原地 | `delete_unpublished_plugin.js --mode tag-and-api` |

> 设计注释：必须在 tag-only 之前先拷贝原始 static SDK，否则标签被删后无法识别要删的 API。
> 当前 tag-only 未启用，Step 3 直接拷贝未处理的 static SDK。

子进程环境：Node 全部转绝对路径；Linux 下若
`out/<产品>/ohos_ets/build-tools/ets2panda/lib` 存在则加入 `LD_LIBRARY_PATH`；
只检查 `returncode != 0` 并打印，不中断 Python 主流程。

## 4. `delete_unpublished_plugin.js` 处理

```mermaid
flowchart TD
    A[通过 --sdk-path 加载 libarkts/es2panda] --> B[递归收集 --input 文件<br/>--subdirs api,kits,arkts 只对第一层生效]
    B --> C{声明文件且文本含 @unpublished?}
    C -- 否 --> D[原样拷贝到输出]
    C -- 是 --> E{模式}
    E -- tag-only --> F[只删除 @unpublished 所在行]
    E -- tag-and-api --> G[删除整个 JSDoc 注释块 + API 声明]
    F --> H[写输出]
    G --> H
    H --> I[输出清理: 删悬空 import/export<br/>删空文件, kits 空文件保留<br/>.static.d.ets 归一化为 .d.ets]
```

两种模式：

| 模式 | 行为 |
| ---- | ---- |
| `tag-only` | 只删 `@unpublished` 所在行，保留 JSDoc 其余内容和 API 声明 |
| `tag-and-api` | 删除整个 JSDoc 注释块 + API 声明 |

`tag-and-api` 额外：记录被删顶层导出名以清理悬空 import/export、修复枚举尾逗号、
连续空行压缩（3+ → 2）。

## 5. 校验与 runtimeapi 输出

### 5.1 `validate_delete_unpublished`

```gn
action("validate_delete_unpublished") {
  deps = [ ":copy_runtimeapi" ]
  external_deps = [ "ets_frontend:ohos_ets_bindings", ohos_ets_koala_wrapper_deps, ohos_ets_ui_plugins_deps ]
  script = "//arkcompiler/ets_frontend/ets2panda/bindings/diagnostics.py"
  args = [ "--build-tools", ..., "--node", ..., "--sdk-path", target_out_dir + "/copy_runtimeapi",
           "--init-ast-cache", "--stamp", target_out_dir + "/validate_delete_unpublished.stamp" ]
  outputs = [ target_out_dir + "/validate_delete_unpublished.stamp" ]
}
```

用 ets2panda 解析删 `@unpublished` 后的声明，初始化 AST cache，输出 `.stamp` 成功标记。

### 5.2 `ohos_ets_runtimeapi`

| 项 | 内容 |
| -- | ---- |
| 源 | `out/<产品>/obj/interface/sdk-js/copy_runtimeapi_runtimeapi`（保留 `@unpublished` API） |
| 安装 | `ets/static/build-tools/ets-loader/runtimeapi` |
| 用途 | 供 ets-loader 运行时使用，不暴露给应用编译期 |

## 6. 产物关系

```mermaid
flowchart TD
    I06[06 interop static<br/>build_static_sdk_interop] -. order-only .-> C
    S[ohos_static] -->|Step 1| C[copy_runtimeapi]
    S -->|Step 3| R[copy_runtimeapi_runtimeapi]
    C -->|tag-and-api| C2[copy_runtimeapi 已删 @unpublished]
    C2 --> A[ohos_build_static_sdk_api]
    C2 --> B[ohos_build_static_sdk_arkts]
    C2 --> D[ohos_build_static_sdk_kits]
    C2 --> V[validate_delete_unpublished]
    R --> E[ohos_ets_runtimeapi]
    A --> Q[08 清标签<br/>ohos_build_static_sdk_*]
    B --> Q
    D --> Q
```

| 目录 | `@unpublished` 标签 | `@unpublished` API | 用途 |
| ---- | ------------------- | ------------------ | ---- |
| `out/<产品>/ohos_static` | 保留 | 保留 | 内部中转 |
| `out/<产品>/obj/interface/sdk-js/copy_runtimeapi` | 删除 | 删除 | `ets/static/{api,arkts,kits}` |
| `out/<产品>/obj/interface/sdk-js/copy_runtimeapi_runtimeapi` | 保留 | 保留 | `ets/static/build-tools/ets-loader/runtimeapi` |

## 7. 关键细节

- 本环节在 ninja 中 **order-only 依赖 [06-interop](./06-interop.md) 的 `build_static_sdk_interop`**：
  `copy_runtimeapi` 的 deps 含 `build_static_sdk_interop.stamp`（保证 static 工具链先就绪），
  但**数据上不消费** interop 产物，输入只有 `ohos_static` / `ohos_ets`；
- 同一份 static SDK 拷贝两次（Step 1、Step 3），Step 2 未执行；
- Step 4 原地处理（`--input` 与 `--output` 都是 `out/<产品>/obj/interface/sdk-js/copy_runtimeapi`）；
- `kits/` 下空文件保留，其余空文件删除；
- `LD_LIBRARY_PATH` 只在 Linux 生效；
- 处理顺序：先 `copy_runtimeapi` 删 `@unpublished`（本环节 07），
  再由 [08-清标签](./08-清标签.md) 的 `ohos_build_static_sdk_*` 删 `@noninterop`。

## 8. 相关文件

| 文件 | 作用 |
| ---- | ---- |
| `interface/sdk-js/copy_runtimeapi.py` | 拷贝 static SDK 并调度 `@unpublished` 处理 |
| `interface/sdk-js/build-tools/delete_unpublished_plugin.js` | `@unpublished` 标签/API 删除 |
| `interface/sdk-js/BUILD.gn` | `copy_runtimeapi`、`validate_delete_unpublished`、`ohos_ets_runtimeapi` |
| `arkcompiler/ets_frontend/ets2panda/bindings/diagnostics.py` | 声明校验 |
