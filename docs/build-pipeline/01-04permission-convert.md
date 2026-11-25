# 01.4 权限转换（build/ohos/sdk/convert_permissions.py）

> 对应 [01-00gn-generation-overview](./01-00gn-generation-overview.md)「环节 01 · 步骤 01.4」。
> 01.2 在解析 SDK 描述文件前，经 `convert_permissions.py` 调用
> `interface/sdk-js/build-tools/permissions_converter/convert.js` 生成权限声明；
> 转换工具的处理细节见 [02-06permission-declaration](./02-06permission-declaration.md)。

## 1. 脚本定位

| 项        | 内容                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| 脚本路径  | `build/ohos/sdk/convert_permissions.py`                                                                          |
| 归属领域  | 安全领域（负责人：陈念；Python 在 build 仓，Node 工具 `convert.js` 在 interface/sdk-js 仓）                                |
| Node 工具 | `interface/sdk-js/build-tools/permissions_converter/convert.js`                                                  |
| 触发条件  | 01.2 的 `parse_sdk_description.py` 在解析描述文件前调用一次                                                        |
| 一句话    | 经 `convert_permissions.py` 调度 Node 工具 `convert.js`，把系统权限定义 `permission_definitions.json` 转成 public SDK 的 `export type Permissions` 声明（`permissions.d.ts`） |

## 2. 调用链

```text
parse_sdk_description.py（01.2，解析描述文件前）
        └── build/ohos/sdk/convert_permissions.py
                └── node interface/sdk-js/build-tools/permissions_converter/convert.js
                        base/security/access_token/services/accesstokenmanager/permission_definitions.json
                        → out/sdk-public/public_interface/sdk-js/build-tools/api/permissions.d.ts
                        → 复制回 api/：out/sdk-public/public_interface/sdk-js/api/permissions.d.ts
```

同一转换工具在环节 02 还会由 `parse_interface_sdk.py` 对 dynamic / static 两棵接口树
各调用一次（输出 `permissions.d.ts` / `.d.ets`）。权限过滤、版本计算、输出结构等
与环节 02 完全一致，详见 [02-06permission-declaration](./02-06permission-declaration.md)。
