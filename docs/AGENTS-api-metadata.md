# ArkTS API 元数据格式

> 本文档定义 ArkTS API 元数据的机器可读格式。schema 与示例由本知识入口提供：
> [schema](./api-metadata/arkts-api-metadata.schema.json)、
> [example](./api-metadata/arkts-api-metadata.example.yaml)。
>
> 该格式属于 interface_sdk-js 仓 API 知识库的一部分，用于描述 API 的语言结构、
> JSDoc 契约、设备能力、开放级别和确认状态，供 spec 生成、`.d.ts`/`.d.ets`
> 生成和后续一致性校验复用。

## 1. 设计目标

ArkTS API 元数据不是把所有声明压缩到一个 flat 对象，而是按语言实体类型建模：

- 每个 API 使用 `kind` 标识类型。
- 公共字段统一定义。
- 类型专属字段只在对应分支中出现。
- `declaration` 保留原始声明文本，作为人工核对和兜底比较依据。
- 参数、返回值、错误码、设备差异等语义信息结构化，支持机器校验。
- 双语文本使用 `en` / `zh` 成对维护，与 JSDoc 中文归档证据对应。

## 2. 文件与版本

| 文件 | 作用 |
|------|------|
| `docs/api-metadata/arkts-api-metadata.schema.json` | JSON Schema 2020-12 格式定义 |
| `docs/api-metadata/arkts-api-metadata.example.yaml` | 覆盖 ArkTS 主要 API 类型的样例 |
| `docs/AGENTS-api-metadata.md` | 本说明文档 |

当前版本：

```text
schemaVersion: 1.0.0
```

修改不兼容字段时必须递增主版本；新增可选字段可以递增次版本。

## 3. 顶层结构

```yaml
schemaVersion: "1.0.0"
language: arkts
source:
  repository: interface_sdk-js
  branch: feature/proposal-12345
  commit: "<sha>"
  path: api/@ohos.sample.d.ts
file:
  path: interface_sdk-js/api/@ohos.sample.d.ts
  kit: SampleKit
  packageName: sample
  license: Apache-2.0
  imports: []
  exports: []
apis:
  - kind: method
    id: sample.processor.run
    parentId: sample.processor
    name: run
    qualifiedName: sample.Processor.run
    declaration: run(options?: Options): Promise<void>
    filePath: interface_sdk-js/api/@ohos.sample.d.ts
    startLine: 42
    endLine: 58
    accessLevel: public
    since: "26.0.0"
    syscap: SystemCapability.Sample.Full
    permissions: []
    platform:
      crossplatform:
        enabled: true
        since: "12"
        until: "18"
      atomicservice:
        enabled: true
        since: "11"
      form:
        enabled: false
    applicationModel: stage-only
    description:
      en:
        function: ...
        scenario: ...
        effect: ...
      zh:
        function: ...
        scenario: ...
        effect: ...
    parameters: []
    returnType:
      text: Promise<void>
```

- `source` 描述元数据对应的声明来源。
- `file` 描述文件级事实，包括 Kit、包名、License、import/export。
- 每个 API 的发布属性显式填写，不存在公共字段继承，避免覆盖/合并歧义。
- `apis` 是 API 实体数组，每个条目是一个 discriminated union。

## 4. 公共字段

| 字段 | 必填 | 说明 |
|------|------|------|
| `kind` | 是 | API 实体类型 |
| `id` | 是 | 元数据内部稳定 ID |
| `parentId` | 否 | 父容器 ID，顶层可为 `null` |
| `name` | 是 | API 原始名称 |
| `qualifiedName` | 是 | 完整限定名 |
| `declaration` | 是 | 原始声明文本 |
| `filePath` | 是 | 声明文件路径 |
| `startLine` / `endLine` | 是 | 声明位置 |
| `changeKind` | 否 | `added` / `modified` / `removed` / `deprecated` |
| `isExported` | 否 | 是否对外导出 |
| `accessLevel` | 是 | `public` / `system` / `inner` |
| `kit` | 否 | 所属 Kit |
| `since` | 是 | `@since` 版本 |
| `syscap` | 是 | `@syscap` |
| `permissions` | 是 | 所需权限，可为空数组 |
| `platform` | 是 | 跨平台、元服务、卡片支持；每项包含 `enabled`、`since`、可选 `until` |
| `applicationModel` | 是 | FA / Stage 模型 |
| `deprecated` / `useInstead` | 否 | 废弃信息 |
| `annotations` | 否 | 装饰器或注解 |
| `description` | 是 | 双语 API 描述，三要素必填 |
| `deviceSupport` | 否 | 支持设备列表 |
| `deviceDifferences` | 否 | 设备行为差异 |
| `specRefs` | 否 | 关联 AC / BR / SC |
| `confirmation` | 否 | 事实性字段确认记录 |
| `attributionParts` | 否 | 归属部件 |
| `tagType` / `parentArkTs` | 否 | ArkTS 动静态标记 |

`description` 使用结构化三要素/五要素：

```yaml
description:
  en:
    function: ...
    scenario: ...
    effect: ...
    similarAPIs: ...
    defaultBehavior: ...
    constraints: ...
    activation: ...
    notes: ...
  zh:
    function: ...
    scenario: ...
    effect: ...
    similarAPIs: ...
    defaultBehavior: ...
    constraints: ...
    activation: ...
    notes: ...
```

其中 `function` / `scenario` / `effect` 为必填；五要素字段为可选，但一旦出现在
JSDoc 或 spec 中，就应同步进入元数据，避免生成时丢失。不适用的五要素字段也应显式填写
`N/A`，避免生成阶段通过猜测补齐。

`platform` 的结构如下：

```yaml
platform:
  crossplatform:
    enabled: true
    since: "12"
    until: "18"
  atomicservice:
    enabled: true
    since: "11"
  form:
    enabled: false
```

规则：

- 每个能力必须显式填写 `enabled`。
- `enabled=true` 时必须填写 `since`。
- `until` 表示终止支持版本，例如 `[since 12 - 18]` 应写为
  `since: "12"`、`until: "18"`。
- `enabled=false` 时不得填写 `since` / `until`。

## 5. API 类型

| `kind` | 专属核心字段 | 不适用字段 |
|--------|--------------|------------|
| `namespace` | `members`, `modulePath` | 参数、返回值 |
| `class` | `typeParameters`, `extends`, `implements`, `members`, `constructors`, `staticMembers` | 返回值 |
| `interface` | `typeParameters`, `extends`, `members`, `callSignatures`, `constructSignatures`, `indexSignatures` | `implements` |
| `struct` | `implements`, `decorators`, `members`, `lifecycleHooks` | 参数、返回值 |
| `method` | `typeParameters`, `parameters`, `returnType`, `overloadGroup`, `errorCodes`, `concurrency`, `isStatic` | 成员列表 |
| `function` | `typeParameters`, `parameters`, `returnType`, `overloadGroup`, `errorCodes`, `concurrency` | 父类 |
| `constructor` | `parameters`, `overloadGroup`, `errorCodes` | `returnType` |
| `property` | `propertyType`, `isOptional`, `isReadonly`, `isStatic`, `defaultValue`, `accessors` | 参数、错误码 |
| `const` | `constType`, `value`, `initializer`, `isUniqueSymbol` | 可选性 |
| `enum` | `underlyingType`, `isFlags`, `members` | 参数、返回值 |
| `enumMember` | `value`, `initializer`, `valueType`, `ownerEnum` | 参数、返回值 |
| `typeAlias` | `typeParameters`, `typeExpression`, `aliasKind`, `unionMembers` | 参数、返回值 |
| `accessor` | `accessorKind`, `propertyType`, `setterParameter`, `pairedAccessor`, `errorCodes` | 普通返回值字段 |
| `callSignature` | `typeParameters`, `parameters`, `returnType`, `errorCodes` | 所属类 |
| `constructSignature` | `typeParameters`, `parameters`, `newType`, `errorCodes` | 普通返回值字段 |
| `indexSignature` | `keyName`, `keyType`, `valueType`, `isReadonly` | 参数、错误码 |
| `annotation` | `members`, `retention`, `targets` | 参数、返回值 |
| `decorator` | `decoratorForm`, `targetTypes`, `decoratorType`, factory 形态的 `parameters` / `returnType` | 普通成员列表 |

## 6. 与现有解析器字段的对应

oh-api-definition 的解析结果偏 flat，ArkTS 元数据按下表迁移：

| 解析器输出 | 元数据字段 |
|------------|------------|
| `apiType` | `kind`，并恢复更细的语义类型 |
| `className` | `parentId` / `parentQualifiedName` 概念 |
| `methodName` | `name` |
| `methodText` | `declaration`，同时拆出结构化字段 |
| `version` | `since` |
| `isSystemApi` | `accessLevel` |
| `sysCap` | `syscap` |
| `permission` | `permissions` |
| `note` / `notesCn` | `description.en` / `description.zh` |
| `annotations` | `annotations` |
| `tagType` / `parentArkTs` | `tagType` / `parentArkTs` |
| `interfaceLevel` | `accessLevel` 或平台开放级别 |
| `attributionParts` | `attributionParts` |
| `concurrentSafe` / `staticConcurrentSafe` | method/function `concurrency` |
| `deviceModels` | `deviceSupport` |
| `deviceModelDiff` | `deviceDifferences` |

当前格式不包含 `associationList`。本格式是正向 SDD 契约，不从存量 `.d.ts` 逆向重建元数据。ArkTS 动静态能力由每个 API 的 `tagType` /
`parentArkTs` 表达；若未来需要生成动静态分离声明，应先设计显式关联结构，再同步
schema 与本文档。

解析器把 `property`、`const`、`declare const` 统一输出为 `field`。本格式拆为
`property`、`const`、`indexSignature`，避免用同一结构承载不同语义。解析器把
function、method、constructor 输出为 `method`，本格式拆为 `function`、`method`、
`constructor`。

## 7. 生成与校验边界

- 生成 `.d.ts` / `.d.ets` 时必须逐字段消费本元数据。
- 不生成计算属性；需要键约束时应改为标准 `interface`。
- 不生成对象型 `typeAlias`；有成员的类型一律使用 `interface`。
- 不生成 `/*** if arkts dynamic ***/` / `/*** if arkts static ***/` 条件编译块。
- 不生成数字、字符串或计算属性名。
- ArkTS 注解声明使用 `kind: annotation`，不得降级为 `interface`。
- ArkTS 装饰器使用 `kind: decorator`，不得降级为 `const` 或 `function`。
- 元数据中的 `declaration` 不能替代结构化字段，仅作为兜底比对和人工核对。
- `since`、权限、平台支持、设备差异等事实性字段必须保留 `confirmation`。
- 生成器不得用既有声明文件填补元数据缺口；缺口应回溯到 spec 阶段补充确认。
- 校验器应先检查 schema，再比较元数据与声明文件/JSDoc。
- 语法和类型正确性仍由本仓工具链与 CI 负责，元数据校验不替代编译检查。

## 8. 最小校验规则

1. `schemaVersion` 必须为当前支持版本。
2. `apis[].id` 必须唯一。
3. `parentId` 引用的 ID 必须存在，且父级必须是容器类型。
4. `declaration` 非空且不得是占位符。
5. method / function / callSignature 必须有 `parameters` 与 `returnType`。
6. constructor 必须有 `parameters`，不得有普通 `returnType`。
7. property / const / indexSignature 必须有对应类型字段。
8. enum / enumMember 的成员和值必须一致。
9. 若 `deprecated=true`，建议填写 `useInstead`。
10. 双语描述必须同时存在，且英文/中文三要素一一对应。
11. `platform.*.enabled=true` 时必须填写 `since`；填写 `until` 时必须满足
    `since <= until`。
12. annotation 必须有 `members`；retention 或 targets 一旦出现必须为合法枚举。
13. decorator 的 factory 形态必须有 `parameters` 和 `returnType`。
14. property 名称必须匹配 `^[A-Za-z_$][A-Za-z0-9_$]*$`。
15. `typeAlias.aliasKind` 不得为 `object`；对象形态应改为 `interface`。
16. 不得出现计算属性、数字属性名、字符串属性名或条件编译块。
