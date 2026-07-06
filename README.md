# @snowui-design-system/styles

SnowUI 的公开样式包，发布到 npm，同时同步到 GitHub 仓库 [SnowUI/home](https://github.com/SnowUI/home) 作为 CDN 源。

## 安装

```bash
pnpm add @snowui-design-system/styles
```

也可以直接使用 CDN：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SnowUI/home@main/snowui.css">
```

## 导入

```ts
import "@snowui-design-system/styles";
import "@snowui-design-system/styles/themes";
import "@snowui-design-system/styles/components";
import "@snowui-design-system/styles/utilities";
```

## 文件

| 文件 | 用途 |
| --- | --- |
| `snowui.css` | 推荐入口，整合基础变量、主题、组件覆盖和工具类 |
| `snowui-base.css` | 基础 Token |
| `snowui-themes.css` | SnowUI / iOS 主题 |
| `snowui-components.css` | 组件外部覆盖变量入口 |
| `snowui-utilities.css` | 工具类 |
| `snowui-extra.css` | 额外样式扩展 |

## 与资源包的关系

样式包只提供 CSS Token、主题和工具类；图标、头像、背景、插画等素材由 `@snowui-design-system/resource-base`、`resource-svelte`、`resource-react` 维护。资源包已支持多图标库切换，业务代码应优先使用稳定的 `usageName`，由 Provider 决定实际渲染 SnowUI、Phosphor、Material Symbols、Lucide 等图标库。

## 发布与同步

本目录对应 GitHub 仓库：

```txt
https://github.com/SnowUI/home
```

统一脚本位于：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh
```

发布本包并推送 GitHub：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh --target styles --version patch --message "chore: release styles" --yes
```

仅检查将执行的动作：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh --target styles --version patch --dry-run
```

## 维护约定

- npm 包名：`@snowui-design-system/styles`
- npm 可见性：公开
- 发布前确认 `package.json` 版本号已更新
- GitHub Pages / CDN 使用 `main` 分支内容
- README、CSS 入口、`package.json` 的 exports 需要同步维护
