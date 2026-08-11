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
import "@snowui-design-system/styles/responsive";
```

响应式工具类是可选模块，不包含在默认 `snowui.css` 中。采用 mobile-first 的 `min-width` 前缀：

```html
<section class="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:p-24">
  ...
</section>
```

标准断点为 `sm` 640px、`md` 768px、`lg` 1024px、`xl` 1280px、`2xl` 1536px。第一阶段仅为 Display、Flexbox、Grid columns/spans、Alignment、Gap、`p/px/py`、布局尺寸和 Overflow/Whitespace 生成前缀；Margin、颜色、边框、动效与交互类保持静态。

Padding、Gap 与圆角工具类使用固定 px；未显式添加响应式前缀时，它们不会因视口宽度或根字号变化而改变。响应式前缀只切换明确声明的目标值。

## 文件

| 文件 | 用途 |
| --- | --- |
| `snowui.css` | 推荐入口，整合页面基础、主题和工具类；不包含 Components override |
| `snowui-base.css` | 基础 Token |
| `snowui-themes.css` | SnowUI / iOS 主题 |
| `snowui-utilities.css` | 工具类 |
| `snowui-responsive.css` | 可选的 mobile-first 响应式工具类 |
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
- 修改响应式 allowlist 或静态工具类声明后，运行 `pnpm generate:responsive`；提交前运行 `pnpm check:responsive`，生成器会同时守卫可选入口以及 44,000 B raw / 5,250 B gzip 的体积上限
