# AGENTS.md

## Repository Overview

**OpenHarmony interface_sdk-js** — JavaScript/TypeScript API 声明文件公共仓。存储 `.d.ts` / `.d.ets` 声明文件及配套的 API 工具链。

- **默认分支**: `master`
- **许可证**: Apache License 2.0

## Directory Structure

```
api/                          # API 声明文件（英文）
├── @ohos.×××.d.ts            # OpenHarmony 系统 API 声明
├── @system.×××.d.ts          # 已废弃（deprecated）的 API
├── @internal/component/ets/  # 声明式开发范式组件声明文件（140+ 个）
├── @internal/ets/            # ArkUI 全局组件
├── config/                   # 基于 JS 扩展的类 Web 范式（css/hml）
└── form/                     # JS 服务卡片
arkts/                        # ArkTS 语言层 API 声明
├── @arkts.lang.d.ets
├── @arkts.collections.d.ets
├── @arkts.math.Decimal.d.ets
├── @arkts.utils.d.ets
└── builtin/                 # 内建类型（dynamic / static）
kits/                         # Kit 聚合声明文件（@kit.×××.d.ts）
zh-cn/                        # API 声明文件中文翻译
build-tools/                  # API 相关工具链
docs/                         # 文档
```

## API File Types

| 后缀 | 含义 |
|------|------|
| `.d.ts` | TypeScript 声明文件 |
| `.d.ets` | ArkTS 声明文件 |
| `.static.d.ets` | ArkTS 静态类型声明文件 |

## API Design Knowledge Index

AI agents and tools must use this root `AGENTS.md` as the stable knowledge entry.
They must not assume or hardcode repository-internal paths; if a document moves,
update only the links in this index.

| Knowledge area | Required when | Entry |
|----------------|---------------|-------|
| API version rules and system/API version mapping | every API design or validation task | [AGENTS-version-rules.md](./docs/AGENTS-version-rules.md) |
| JSDoc / declaration-comment rules | every API design or validation task | [AGENTS-jsdoc-rules.md](./docs/AGENTS-jsdoc-rules.md) |
| ArkTS API metadata format and schema | generating, validating, or consuming ArkTS metadata | [AGENTS-api-metadata.md](./docs/AGENTS-api-metadata.md) |
| ArkTS static type API rules | `.static.d.ets`, ArkTS static/dynamic decisions, or static SDK concerns | [AGENTS-arkts-static-types.md](./docs/AGENTS-arkts-static-types.md) |
| Device support and behavior differences | device support, device removal, or per-device behavior | [AGENTS-device-models.md](./docs/AGENTS-device-models.md) |

The ArkTS metadata guide dynamically links to:

- Schema: `arkts-api-metadata.schema.json`
- Example: `arkts-api-metadata.example.yaml`

Consumers must resolve those artifacts through
[AGENTS-api-metadata.md](./docs/AGENTS-api-metadata.md), not by hardcoding their
paths.

Load only the knowledge areas required by the task, but the version,
declaration-comment, and applicable metadata-schema entries are mandatory for
API contract generation. A deterministic repository rule, such as a
system-release-to-API-version mapping, must be used directly and cited as the
evidence source; do not ask the developer to reconfirm a fact already resolved
by this knowledge index.

## Important Notes

- **中文翻译同步**: `zh-cn/` 目录结构需与 `api/`, `arkts/`, `kits/` 保持一致
- **Kit 文件**: `kits/@kit.×××.d.ts` 是聚合入口，通过 import 汇集各子系统 API
- **条件编译**: 修改 API 文件时注意 `/*** if arkts dynamic/static */` 块，确保两阶段都正确
