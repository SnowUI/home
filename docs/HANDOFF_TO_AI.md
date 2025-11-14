# 将 SnowUI 资源交给其他 AI 的指南

## 📋 概述

本文档说明如何将 SnowUI 的设计素材（`snowui/resource`）和设计系统（`snowui/design-system`）交给其他 AI 助手，让它们能够使用这些资源进行网页设计。

## 🎯 需要交给 AI 的内容

### 1. 设计系统 (`snowui/design-system`)
- **位置**: `snowui/design-system/src/snowui.css`
- **内容**: 完整的 CSS 设计系统，包含颜色、间距、字体、阴影等设计令牌
- **用途**: 提供一致的设计规范和样式变量

### 2. 设计素材 (`snowui/resource`)
- **位置**: `snowui/resource/core/assets/`
- **内容**: 
  - 图标（1500+）
  - 头像（330+）
  - 背景（144+）
  - 光标、表情、插画、图片、Logo 等
- **用途**: 提供丰富的设计素材供网页设计使用

### 3. 文档和指南
- **AI 使用指南**: `docs/AI_USAGE_GUIDE.md` - 详细的使用说明
- **快速参考**: `docs/QUICK_REFERENCE.md` - 快速查阅设计令牌和素材路径

## 📝 交给 AI 的步骤

### 方法 1: 直接提供项目路径（推荐）

如果 AI 助手可以访问你的项目目录，直接告诉它：

```
我有一套设计系统和素材库，位于：
- 设计系统: snowui/design-system/src/snowui.css
- 设计素材: snowui/resource/core/assets/
- 使用指南: snowui/docs/AI_USAGE_GUIDE.md
- 快速参考: snowui/docs/QUICK_REFERENCE.md

请先阅读 docs/AI_USAGE_GUIDE.md 了解如何使用这些资源，然后使用它们来设计网页。
```

### 方法 2: 提供关键文件内容

如果 AI 助手无法直接访问文件系统，你可以：

1. **复制设计系统 CSS 文件内容**
   - 打开 `snowui/design-system/src/snowui.css`
   - 将内容提供给 AI

2. **提供素材列表**
   - 查看 `snowui/resource/core/src/icons.ts` 和 `snowui/resource/core/src/assets.ts`
   - 将这些元数据提供给 AI，让 AI 知道有哪些可用素材

3. **提供使用指南**
   - 复制 `docs/AI_USAGE_GUIDE.md` 的内容给 AI

### 方法 3: 创建独立的工作目录

你可以创建一个包含必要文件的独立目录：

```bash
# 创建独立目录
mkdir snowui-for-ai
cd snowui-for-ai

# 复制设计系统
cp -r ../snowui/design-system .

# 复制素材（只复制必要的）
cp -r ../snowui/resource/core/assets .

# 复制文档
cp -r ../snowui/docs .

# 创建简化的素材索引（可选）
# 可以创建一个简单的 JSON 文件列出所有可用素材
```

然后将这个目录提供给 AI。

## 💡 给 AI 的提示词模板

### 模板 1: 完整介绍

```
我有一个设计系统和素材库，想让你使用它们来设计网页。

设计系统位置: snowui/design-system/src/snowui.css
素材库位置: snowui/resource/core/assets/

请先阅读 snowui/docs/AI_USAGE_GUIDE.md 了解：
1. 如何使用设计系统的 CSS 变量
2. 如何引用和使用设计素材
3. 设计规范和最佳实践

然后根据我的需求，使用这些资源创建网页设计。
```

### 模板 2: 快速开始

```
请使用以下资源设计网页：

1. 设计系统: 引入 snowui/design-system/src/snowui.css
   - 使用 CSS 变量定义样式（如 var(--background-1), var(--spacing-16)）
   - 支持多主题（snowui-light, snowui-dark, ios-light, ios-dark）

2. 设计素材: 从 snowui/resource/core/assets/ 引用
   - 图标: icons/{weight}/{name}-{weight}.svg
   - 头像: avatars/avatar-{name}-{size}.jpg
   - 背景: backgrounds/{name}-{width}.jpg

详细说明请参考 snowui/docs/AI_USAGE_GUIDE.md
```

### 模板 3: 具体任务

```
请使用 SnowUI 设计系统创建一个 [具体页面类型，如：登录页面/产品展示页/个人资料页]。

要求：
1. 使用 snowui/design-system/src/snowui.css 中的设计变量
2. 从 snowui/resource/core/assets/ 选择合适的素材
3. 参考 snowui/example/ 目录中的示例代码
4. 确保设计符合 SnowUI 设计规范

请先查看 snowui/docs/AI_USAGE_GUIDE.md 了解如何使用这些资源。
```

## ✅ 验证 AI 是否正确理解

在交给 AI 后，可以通过以下方式验证：

1. **询问设计系统变量**
   - "请使用 SnowUI 设计系统的变量创建一个卡片"
   - 检查是否使用了 `var(--background-1)`, `var(--spacing-16)` 等

2. **询问素材使用**
   - "请使用 SnowUI 的图标和头像创建一个用户卡片"
   - 检查是否正确引用了素材路径

3. **询问主题切换**
   - "请创建一个支持暗色主题的页面"
   - 检查是否使用了主题类（如 `theme-snowui-dark`）

## 📚 相关文档

- **[AI_USAGE_GUIDE.md](./AI_USAGE_GUIDE.md)** - 完整的使用指南
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - 快速参考

## 🎨 示例：完整的交接说明

```
你好！我想让你使用我的设计系统和素材库来设计网页。

## 项目位置
- 设计系统: snowui/design-system/src/snowui.css
- 设计素材: snowui/resource/core/assets/
- 使用指南: snowui/AI_USAGE_GUIDE.md

## 快速开始
1. 先阅读 snowui/AI_USAGE_GUIDE.md 了解如何使用
2. 查看 snowui/QUICK_REFERENCE.md 快速查找设计变量和素材路径
3. 参考 snowui/example-template.html 查看示例代码

## 核心要点
- 设计系统使用 CSS 变量（如 var(--background-1)）
- 素材直接引用文件路径（如 ./resource/core/assets/icons/regular/heart-regular.svg）
- 支持多主题切换（通过添加主题类）

现在请帮我设计一个 [你的需求]。
```

---

通过以上方式，其他 AI 助手就能够理解并使用你的设计系统和素材库了！

