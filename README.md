# SnowUI Design System

<div align="center">

**A comprehensive design system with icons, avatars, backgrounds, and more**

[English](#english) | [中文](#中文)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Example-blue?style=for-the-badge)](https://snowui.github.io/example)
[![NPM](https://img.shields.io/badge/NPM-Package-green?style=for-the-badge)](https://www.npmjs.com/org/snowui-design-system)

</div>

---

## English

SnowUI is a complete design system ecosystem that provides design systems, design resource libraries, and multi-platform support. It's designed to help developers and AI assistants create beautiful, consistent web interfaces.

### 🎯 What is SnowUI?

SnowUI consists of two core components:

1. **Design System** (`design-system/`) - A comprehensive CSS design system with design tokens, themes, and utility classes
2. **Design Resources** - A rich library of design assets including 1500+ icons, 330+ avatars, backgrounds, illustrations, and more

### ✨ Key Features

- **🎨 Complete Design System**: CSS variables for colors, spacing, typography, shadows, and effects
- **🎭 Multi-Theme Support**: SnowUI Light/Dark and iOS Light/Dark themes (4 themes total)
- **📦 1500+ Icons**: 6 weight variants (regular, thin, light, bold, fill, duotone)
- **🖼️ Rich Assets**: 330+ avatars, 144+ backgrounds, 180+ illustrations, 124+ logos, 21+ cursors, 22+ emoji
- **📱 Smart Sizing**: Automatic multi-size generation and matching for bitmaps
- **⚡ TypeScript Support**: Full type definitions for all components
- **🌳 Tree-shaking**: Optimized bundle size with ES modules
- **🔧 Multi-Platform**: React components available (Vue, Svelte, Web coming soon)

### 📦 Project Structure

This repository (`SnowUI/home`) contains:

```
snowui/
├── design-system/          # Design system CSS with design tokens
│   └── src/
│       └── snowui.css     # Main design system file
└── docs/                  # Documentation for AI assistants
    ├── AI_USAGE_GUIDE.md  # Complete guide for AI assistants
    ├── QUICK_REFERENCE.md # Quick reference for design tokens
    └── HANDOFF_TO_AI.md   # Guide for handing off to other AI
```

**Related Repositories** (separate GitHub repositories):

- **[resource-base](https://github.com/SnowUI/resource-base)** - Core resource package with all design assets
- **[resource-react](https://github.com/snowui/resource-react)** - React components package
- **[example](https://github.com/snowui/example)** - Example website and demo
- **[Live Demo](https://snowui.github.io/example)** - View the example website

### 🚀 Quick Start

#### For Developers

**Install React Components:**
```bash
npm install @snowui-design-system/resource-react
```

**Use in Your Project:**
```tsx
import { Heart, AvatarByewind, Gradient01 } from '@snowui-design-system/resource-react';

function App() {
  return (
    <div>
      <Heart size={24} weight="bold" />
      <AvatarByewind size={64} />
      <Gradient01 width={1024} />
    </div>
  );
}
```

**Use Design System CSS:**

**Option 1: From jsDelivr CDN - Recommended**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SnowUI/home@main/snowui.css">
```

**Option 2: Download and use locally**
1. Download `snowui.css` from [GitHub](https://github.com/SnowUI/home/blob/main/snowui.css)
2. Place it in your project
3. Reference it:
```html
<link rel="stylesheet" href="./path/to/snowui.css">
```

```css
.card {
  background: var(--background-1);
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  box-shadow: var(--effect-glass-1);
}
```

#### For AI Assistants

> **📖 Important**: If you're an AI assistant helping with web design, start by reading the [AI Usage Guide](./docs/AI_USAGE_GUIDE.md) for complete instructions.

**Quick Access:**
- **Design System**: `snowui.css` - Complete CSS design tokens
- **Assets**: Available in [resource-base](https://github.com/SnowUI/resource-base) repository
- **Documentation**: 
  - [AI Usage Guide](./docs/AI_USAGE_GUIDE.md) ⭐ - Complete guide for AI assistants
  - [Quick Reference](./docs/QUICK_REFERENCE.md) - Quick reference for design tokens and asset paths

**Key Information:**
- Design tokens: `snowui.css`
- Icons: 1500+ icons in 6 weights (regular, thin, light, bold, fill, duotone)
- Avatars: 330+ avatars with sizes 16×16 to 512×512
- Backgrounds: 144+ backgrounds with widths 320, 640, 1024, 1920
- See [resource-base](https://github.com/SnowUI/resource-base) for all assets

**Basic Usage Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./snowui.css">
  <style>
    .card {
      background: var(--background-1);
      padding: var(--spacing-24);
      border-radius: var(--corner-radius-16);
      box-shadow: var(--effect-glass-1);
    }
  </style>
</head>
<body>
  <div class="card">
    <h1 style="color: var(--foreground);">Title</h1>
  </div>
</body>
</html>
```

### 📚 Documentation

#### For AI Assistants

> **Start here if you're an AI assistant**: These documents are specifically designed for AI assistants to understand and use SnowUI.

- **[AI Usage Guide](./docs/AI_USAGE_GUIDE.md)** ⭐ - Complete guide for AI assistants to use SnowUI design system and resources
  - How to use design system CSS variables
  - How to reference and use design assets
  - Code examples and best practices
  - Complete usage instructions

- **[Quick Reference](./docs/QUICK_REFERENCE.md)** - Quick reference for design tokens and asset paths
  - Design system variables cheat sheet
  - Asset path patterns
  - Common code templates

- **[Handoff to AI](./docs/HANDOFF_TO_AI.md)** - Guide for handing off SnowUI resources to other AI assistants
  - How to provide SnowUI resources to other AI
  - Prompt templates
  - Verification methods

#### For Developers

- **[Resource Base](https://github.com/SnowUI/resource-base)** - Core resource package with all design assets
- **[Resource React](https://github.com/snowui/resource-react)** - React components package
- **[Example Website](https://snowui.github.io/example)** - Live demo and showcase
- **[Example Repository](https://github.com/snowui/example)** - Example website source code

### 🎨 Design System Overview

The design system is located in `snowui.css` and provides:

#### Design Tokens

**Colors:**
- Theme colors: `--background-1`, `--foreground`, `--primary`
- Secondary colors: `--secondary-purple`, `--secondary-blue`, `--secondary-green`, `--secondary-red`, etc.
- Static colors: `--static-black-100`, `--static-white-100` (theme-independent)

**Spacing:**
- `--spacing-4` (4px), `--spacing-8` (8px), `--spacing-12` (12px), `--spacing-16` (16px), `--spacing-24` (24px), `--spacing-40` (40px), `--spacing-48` (48px)

**Typography:**
- Font sizes: `--font-size-12` to `--font-size-64`
- Line heights: `--line-height-12` to `--line-height-64`
- Font weights: `--font-weight-regular` (400), `--font-weight-semibold` (600)

**Corner Radius:**
- `--corner-radius-4` (4px) to `--corner-radius-80` (80px)

**Effects:**
- Glass effects: `--effect-glass-1`, `--effect-glass-2`
- Shadows: `--effect-focus`, `--effect-glow`
- Gradients: `--gradient-primary`, `--gradient-blue`, `--gradient-purple`, etc.

**Themes:**
- `theme-snowui-light` (default)
- `theme-snowui-dark`
- `theme-ios-light`
- `theme-ios-dark`

See [Quick Reference](./docs/QUICK_REFERENCE.md) for complete token list.

#### Utility Classes

**Font Classes:**
```html
<div class="font-12">12px font</div>
<div class="font-14">14px font</div>
<div class="font-16">16px font</div>
<div class="font-24">24px font</div>
```

**Glass Effects:**
```html
<div class="glass-1">Light glass effect</div>
<div class="glass-2">Heavy glass effect</div>
```

**Gradient Backgrounds:**
```html
<div class="bg-gradient-primary">Primary gradient</div>
<div class="bg-gradient-blue">Blue gradient</div>
<div class="bg-gradient-purple">Purple gradient</div>
```

### 📦 Asset Library

All design assets are available in the [resource-base](https://github.com/SnowUI/resource-base) repository:

#### Icons (1500+)
- **Weights**: regular, thin, light, bold, fill, duotone
- **Format**: SVG
- **Usage**: Use React components from [resource-react](https://github.com/snowui/resource-react) or direct SVG files

#### Avatars (330+)
- **Sizes**: 16×16, 20×20, 24×24, 28×28, 32×32, 40×40, 48×48, 56×56, 64×64, 80×80, 128×128, 256×256, 512×512
- **Default**: 32×32
- **Format**: JPG
- **Usage**: Use React components or direct image files

#### Backgrounds (144+)
- **Widths**: 320, 640, 1024, 1920
- **Default**: 1024px (height auto)
- **Format**: JPG
- **Usage**: Use React components or direct image files

#### Other Assets
- **Cursors**: 21+ SVG cursors
- **Emoji**: 22+ emoji SVG
- **Illustrations**: 180+ illustrations (PNG/SVG)
- **Images**: Sample images (PNG)
- **Logos**: 124+ brand logos (SVG)

For detailed asset information, see [resource-base](https://github.com/SnowUI/resource-base) repository.

### 🔗 Related Projects

- **[resource-base](https://github.com/SnowUI/resource-base)** - Core resource package (npm: `@snowui-design-system/resource-core`)
  - All design assets (icons, avatars, backgrounds, etc.)
  - Asset processing scripts
  - Metadata files

- **[resource-react](https://github.com/snowui/resource-react)** - React components package (npm: `@snowui-design-system/resource-react`)
  - React components for all assets
  - TypeScript support
  - Tree-shaking optimized

- **[example](https://github.com/snowui/example)** - Example website and demo
  - Live demo: [https://snowui.github.io/example](https://snowui.github.io/example)
  - Showcases all assets
  - Usage examples

### 🛠️ Development

#### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (comes with Node.js)

#### Using Design System

**In HTML:**
```html
<link rel="stylesheet" href="snowui.css">
```

**In React/Vue/Other:**
```tsx
import './snowui.css';
```

**With Tailwind CSS:**
```tsx
<div className="bg-[var(--background-1)] p-[var(--spacing-16)] rounded-[var(--corner-radius-8)]">
  <h1 className="text-[var(--foreground)]">Title</h1>
</div>
```

### 📊 Asset Sizing

#### Avatars (Square Sizes)
Generated sizes: 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512  
Default: 32×32

#### Backgrounds (Fixed Width, Auto Height)
Generated widths: 320, 640, 1024, 1920  
Default: 1024px

#### Images (Fixed Width, Auto Height)
Generated widths: 160, 320, 640, 1024  
Default: 320px

#### Illustrations (Fixed Width, Auto Height)
Generated widths: 160, 320, 640, 1024  
Default: 320px

### 🎯 Use Cases

- **Web Development**: Use React components or direct asset files
- **AI-Assisted Design**: Provide design system and assets to AI for web design
- **Design Systems**: Build consistent UIs with design tokens
- **Prototyping**: Quick access to icons, avatars, and backgrounds

### 📄 License

MIT

---

## 中文

SnowUI 是一个完整的设计系统生态系统，提供设计系统、设计素材库以及多平台支持。旨在帮助开发者和 AI 助手创建美观、一致的 Web 界面。

### 🎯 什么是 SnowUI？

SnowUI 包含两个核心组件：

1. **设计系统** (`design-system/`) - 包含设计令牌、主题和工具类的完整 CSS 设计系统
2. **设计素材** - 丰富的设计素材库，包括 1500+ 图标、330+ 头像、背景、插画等

### ✨ 核心特性

- **🎨 完整设计系统**：颜色、间距、字体、阴影和效果的 CSS 变量
- **🎭 多主题支持**：SnowUI Light/Dark 和 iOS Light/Dark 主题（共 4 种主题）
- **📦 1500+ 图标**：6 种权重变体（regular, thin, light, bold, fill, duotone）
- **🖼️ 丰富素材**：330+ 头像、144+ 背景、180+ 插画、124+ Logo、21+ 光标、22+ 表情
- **📱 智能尺寸**：位图自动多尺寸生成和匹配
- **⚡ TypeScript 支持**：所有组件都有完整的类型定义
- **🌳 Tree-shaking**：使用 ES 模块优化打包体积
- **🔧 多平台**：React 组件已可用（Vue、Svelte、Web 即将推出）

### 📦 项目结构

本仓库 (`SnowUI/home`) 包含：

```
snowui/
├── design-system/          # 设计系统 CSS 和设计令牌
│   └── src/
│       └── snowui.css     # 主设计系统文件
└── docs/                  # AI 助手文档
    ├── AI_USAGE_GUIDE.md  # AI 助手完整指南
    ├── QUICK_REFERENCE.md # 设计令牌快速参考
    └── HANDOFF_TO_AI.md   # 交接给其他 AI 的指南
```

**相关仓库**（独立的 GitHub 仓库）：

- **[resource-base](https://github.com/SnowUI/resource-base)** - 核心资源包，包含所有设计素材
- **[resource-react](https://github.com/snowui/resource-react)** - React 组件包
- **[example](https://github.com/snowui/example)** - 示例网站和演示
- **[在线演示](https://snowui.github.io/example)** - 查看示例网站

### 🚀 快速开始

#### 开发者使用

**安装 React 组件：**
```bash
npm install @snowui-design-system/resource-react
```

**在项目中使用：**
```tsx
import { Heart, AvatarByewind, Gradient01 } from '@snowui-design-system/resource-react';

function App() {
  return (
    <div>
      <Heart size={24} weight="bold" />
      <AvatarByewind size={64} />
      <Gradient01 width={1024} />
    </div>
  );
}
```

**使用设计系统 CSS：**
```html
<link rel="stylesheet" href="path/to/snowui.css">
```

```css
.card {
  background: var(--background-1);
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  box-shadow: var(--effect-glass-1);
}
```

#### AI 助手使用

> **📖 重要提示**：如果你是帮助网页设计的 AI 助手，请先阅读 [AI 使用指南](./docs/AI_USAGE_GUIDE.md) 获取完整说明。

**快速访问：**
- **设计系统**：`snowui.css` - 完整的 CSS 设计令牌
- **素材**：在 [resource-base](https://github.com/SnowUI/resource-base) 仓库中
- **文档**：
  - [AI 使用指南](./docs/AI_USAGE_GUIDE.md) ⭐ - AI 助手完整指南
  - [快速参考](./docs/QUICK_REFERENCE.md) - 设计令牌和素材路径快速参考

**关键信息：**
- 设计令牌：`snowui.css`
- 图标：1500+ 图标，6 种权重（regular, thin, light, bold, fill, duotone）
- 头像：330+ 头像，尺寸从 16×16 到 512×512
- 背景：144+ 背景，宽度 320, 640, 1024, 1920
- 查看 [resource-base](https://github.com/SnowUI/resource-base) 获取所有素材

**基本使用示例：**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./snowui.css">
  <style>
    .card {
      background: var(--background-1);
      padding: var(--spacing-24);
      border-radius: var(--corner-radius-16);
      box-shadow: var(--effect-glass-1);
    }
  </style>
</head>
<body>
  <div class="card">
    <h1 style="color: var(--foreground);">标题</h1>
  </div>
</body>
</html>
```

### 📚 文档

#### AI 助手文档

> **如果你是 AI 助手，从这里开始**：这些文档专门为 AI 助手设计，帮助理解和使用 SnowUI。

- **[AI 使用指南](./docs/AI_USAGE_GUIDE.md)** ⭐ - AI 助手使用 SnowUI 设计系统和素材的完整指南
  - 如何使用设计系统 CSS 变量
  - 如何引用和使用设计素材
  - 代码示例和最佳实践
  - 完整使用说明

- **[快速参考](./docs/QUICK_REFERENCE.md)** - 设计令牌和素材路径快速参考
  - 设计系统变量速查表
  - 素材路径模式
  - 常用代码模板

- **[交接给 AI](./docs/HANDOFF_TO_AI.md)** - 将 SnowUI 资源交给其他 AI 助手的指南
  - 如何向其他 AI 提供 SnowUI 资源
  - 提示词模板
  - 验证方法

#### 开发者文档

- **[Resource Base](https://github.com/SnowUI/resource-base)** - 核心资源包，包含所有设计素材
- **[Resource React](https://github.com/snowui/resource-react)** - React 组件包
- **[示例网站](https://snowui.github.io/example)** - 在线演示和展示
- **[示例仓库](https://github.com/snowui/example)** - 示例网站源代码

### 🎨 设计系统概览

设计系统位于 `snowui.css`，提供：

#### 设计令牌

**颜色：**
- 主题颜色：`--background-1`、`--foreground`、`--primary`
- 次要颜色：`--secondary-purple`、`--secondary-blue`、`--secondary-green`、`--secondary-red` 等
- 静态颜色：`--static-black-100`、`--static-white-100`（不随主题变化）

**间距：**
- `--spacing-4` (4px)、`--spacing-8` (8px)、`--spacing-12` (12px)、`--spacing-16` (16px)、`--spacing-24` (24px)、`--spacing-40` (40px)、`--spacing-48` (48px)

**字体：**
- 字体大小：`--font-size-12` 到 `--font-size-64`
- 行高：`--line-height-12` 到 `--line-height-64`
- 字重：`--font-weight-regular` (400)、`--font-weight-semibold` (600)

**圆角：**
- `--corner-radius-4` (4px) 到 `--corner-radius-80` (80px)

**效果：**
- 玻璃效果：`--effect-glass-1`、`--effect-glass-2`
- 阴影：`--effect-focus`、`--effect-glow`
- 渐变：`--gradient-primary`、`--gradient-blue`、`--gradient-purple` 等

**主题：**
- `theme-snowui-light`（默认）
- `theme-snowui-dark`
- `theme-ios-light`
- `theme-ios-dark`

查看 [快速参考](./docs/QUICK_REFERENCE.md) 获取完整令牌列表。

#### 工具类

**字体类：**
```html
<div class="font-12">12px 字体</div>
<div class="font-14">14px 字体</div>
<div class="font-16">16px 字体</div>
<div class="font-24">24px 字体</div>
```

**玻璃效果：**
```html
<div class="glass-1">轻度玻璃效果</div>
<div class="glass-2">重度玻璃效果</div>
```

**渐变背景：**
```html
<div class="bg-gradient-primary">主色渐变</div>
<div class="bg-gradient-blue">蓝色渐变</div>
<div class="bg-gradient-purple">紫色渐变</div>
```

### 📦 素材库

所有设计素材都在 [resource-base](https://github.com/SnowUI/resource-base) 仓库中：

#### 图标（1500+）
- **权重**：regular, thin, light, bold, fill, duotone
- **格式**：SVG
- **用法**：使用 [resource-react](https://github.com/snowui/resource-react) 的 React 组件或直接使用 SVG 文件

#### 头像（330+）
- **尺寸**：16×16, 20×20, 24×24, 28×28, 32×32, 40×40, 48×48, 56×56, 64×64, 80×80, 128×128, 256×256, 512×512
- **默认**：32×32
- **格式**：JPG
- **用法**：使用 React 组件或直接使用图片文件

#### 背景（144+）
- **宽度**：320, 640, 1024, 1920
- **默认**：1024px（高度自适应）
- **格式**：JPG
- **用法**：使用 React 组件或直接使用图片文件

#### 其他素材
- **光标**：21+ SVG 光标
- **表情**：22+ 表情 SVG
- **插画**：180+ 插画（PNG/SVG）
- **图片**：示例图片（PNG）
- **Logo**：124+ 品牌 Logo（SVG）

详细素材信息，请查看 [resource-base](https://github.com/SnowUI/resource-base) 仓库。

### 🔗 相关项目

- **[resource-base](https://github.com/SnowUI/resource-base)** - 核心资源包（npm: `@snowui-design-system/resource-core`）
  - 所有设计素材（图标、头像、背景等）
  - 素材处理脚本
  - 元数据文件

- **[resource-react](https://github.com/snowui/resource-react)** - React 组件包（npm: `@snowui-design-system/resource-react`）
  - 所有素材的 React 组件
  - TypeScript 支持
  - Tree-shaking 优化

- **[example](https://github.com/snowui/example)** - 示例网站和演示
  - 在线演示：[https://snowui.github.io/example](https://snowui.github.io/example)
  - 展示所有素材
  - 使用示例

### 🛠️ 开发

#### 环境要求

- **Node.js**：v18.0.0 或更高版本
- **npm**：v8.0.0 或更高版本（Node.js 自带）

#### 使用设计系统

**在 HTML 中：**
```html
<link rel="stylesheet" href="snowui.css">
```

**在 React/Vue/其他框架中：**
```tsx
import './snowui.css';
```

**与 Tailwind CSS 结合：**
```tsx
<div className="bg-[var(--background-1)] p-[var(--spacing-16)] rounded-[var(--corner-radius-8)]">
  <h1 className="text-[var(--foreground)]">标题</h1>
</div>
```

### 📊 素材尺寸

#### 头像（正方形尺寸）
生成的尺寸：16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512  
默认：32×32

#### 背景（固定宽度，高度自适应）
生成的宽度：320, 640, 1024, 1920  
默认：1024px

#### 图片（固定宽度，高度自适应）
生成的宽度：160, 320, 640, 1024  
默认：320px

#### 插画（固定宽度，高度自适应）
生成的宽度：160, 320, 640, 1024  
默认：320px

### 🎯 使用场景

- **Web 开发**：使用 React 组件或直接使用素材文件
- **AI 辅助设计**：向 AI 提供设计系统和素材进行网页设计
- **设计系统**：使用设计令牌构建一致的 UI
- **原型设计**：快速访问图标、头像和背景

### 📄 许可证

MIT

---

<div align="center">

**Made with ❤️ by SnowUI Team**

[Documentation](./docs/AI_USAGE_GUIDE.md) • [Quick Reference](./docs/QUICK_REFERENCE.md) • [Live Demo](https://snowui.github.io/example)

</div>
