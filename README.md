# SnowUI Design System

<div align="center">

**A comprehensive design system with icons, avatars, backgrounds, and more**

[English](#english) | [中文](#中文)

</div>

---

## English

SnowUI is a complete design system project that provides design systems, design resource libraries, and multi-platform support.

### 🚀 Quick Start

#### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (comes with Node.js)

#### Installation

```bash
npm install
```

#### Run React Example App

```bash
cd apps/react
npm start
```

Or from the root directory:

```bash
npm run dev
```

### 📦 Project Structure

```
snowui/
├── resource/          # Design resource packages
│   ├── core/         # Core resources (source files)
│   ├── react/        # React package
│   ├── vue/          # Vue package (coming soon)
│   └── web/          # Web package (coming soon)
├── example/          # Example website
│   └── src/          # React example application
├── apps/             # Test applications
│   ├── react/        # React test app
│   ├── web/          # Web test app
│   └── vue/          # Vue test app
├── design-system/    # Design system files
├── scripts/          # Build scripts (auto-generate React components)
└── docs/             # Documentation files
```

### 🔗 Related Projects

- **[resource-core](https://github.com/snowui/resource-core)** - Core resource package with asset processing scripts
- **[resource-react](https://github.com/snowui/resource-react)** - React components package
- **[example](https://github.com/snowui/example)** - Example website and demo
- **[Live Demo](https://snowui.github.io/example)** - View the example website

### ✨ Key Features

- **Multi-weight Icons**: Support for regular, thin, light, bold, fill, and duotone weights
- **Smart Asset Sizing**: Automatic multi-size generation for bitmaps
  - **Avatars**: 16×16, 20×20, 24×24, 28×28, 32×32, 40×40, 48×48, 56×56, 64×64, 80×80, 128×128, 256×256, 512×512 (default: 32×32)
  - **Backgrounds**: Widths 320, 640, 1024, 1920 (default: 1024px, height auto)
  - **Images**: Widths 160, 320, 640, 1024 (default: 320px, height auto)
  - **Illustrations**: Widths 160, 320, 640, 1024 (default: 320px, height auto)
- **Automatic Size Matching**: Components automatically select the closest available size when a non-standard size is requested
- **TypeScript Support**: Full type definitions for all components
- **Tree-shaking**: Optimized bundle size with ES modules
- **SVG Optimization**: Automatic color normalization and compression
- **Bitmap Compression**: Automatic compression for PNG, JPG, and WebP files

### 📚 Documentation

- [Resource Package Documentation](./resource/README.md)
- [Core Package Documentation](./resource/core/README.md)
- [React Package Documentation](./resource/react/README.md)
- [Example Website Documentation](./example/README.md)
- **[AI Usage Guide](./docs/AI_USAGE_GUIDE.md)** - Complete guide for AI assistants to use SnowUI design system and resources
- **[Quick Reference](./docs/QUICK_REFERENCE.md)** - Quick reference for design tokens and asset paths
- **[Handoff to AI](./docs/HANDOFF_TO_AI.md)** - Guide for handing off SnowUI resources to other AI assistants
- **[Git Submodules Guide](./docs/GIT_SUBMODULES.md)** - Guide for managing Git submodules in this project
- **[Scripts Documentation](./scripts/README.md)** - Documentation for build scripts

### 🛠️ Development

```bash
# Install dependencies
npm install

# Process assets
cd resource/core
npm run process

# Generate platform packages
pnpm run generate

# Build all packages
pnpm run build
```

### 📄 License

MIT

---

## 中文

SnowUI 是一个完整的设计系统项目，提供设计系统、设计素材库以及多平台支持。

### 🚀 快速开始

#### 环境要求

- **Node.js**: v18.0.0 或更高版本
- **npm**: v8.0.0 或更高版本（Node.js 自带）

#### 安装依赖

```bash
npm install
```

#### 运行 React 示例应用

```bash
cd apps/react
npm start
```

或从根目录运行：

```bash
npm run dev
```

### 📦 项目结构

```
snowui/
├── resource/          # 设计资源包
│   ├── core/         # 核心资源（源文件）
│   ├── react/        # React 包
│   ├── vue/          # Vue 包（即将推出）
│   └── web/          # Web 包（即将推出）
├── example/          # 示例网站
│   └── src/          # React 示例应用
├── apps/             # 测试应用
│   ├── react/        # React 测试应用
│   ├── web/          # Web 测试应用
│   └── vue/          # Vue 测试应用
├── design-system/    # 设计系统文件
├── scripts/          # 构建脚本（自动生成 React 组件）
└── docs/             # 文档文件
```

### 🔗 相关项目

- **[resource-core](https://github.com/snowui/resource-core)** - 核心资源包，包含素材处理脚本
- **[resource-react](https://github.com/snowui/resource-react)** - React 组件包
- **[example](https://github.com/snowui/example)** - 示例网站和演示
- **[在线演示](https://snowui.github.io/example)** - 查看示例网站

### ✨ 核心特性

- **多权重图标**：支持 regular、thin、light、bold、fill 和 duotone 权重
- **智能素材尺寸**：位图自动生成多种尺寸
  - **头像**：16×16, 20×20, 24×24, 28×28, 32×32, 40×40, 48×48, 56×56, 64×64, 80×80, 128×128, 256×256, 512×512（默认：32×32）
  - **背景**：宽度 320, 640, 1024, 1920（默认：1024px，高度自适应）
  - **图片**：宽度 160, 320, 640, 1024（默认：320px，高度自适应）
  - **插画**：宽度 160, 320, 640, 1024（默认：320px，高度自适应）
- **自动尺寸匹配**：当请求非标准尺寸时，组件自动选择最接近的可用尺寸
- **TypeScript 支持**：所有组件都有完整的类型定义
- **Tree-shaking**：使用 ES 模块优化打包体积
- **SVG 优化**：自动颜色标准化和压缩
- **位图压缩**：自动压缩 PNG、JPG 和 WebP 文件

### 📚 文档

- [资源包文档](./resource/README.md)
- [核心包文档](./resource/core/README.md)
- [React 包文档](./resource/react/README.md)
- [示例网站文档](./example/README.md)
- **[AI 使用指南](./docs/AI_USAGE_GUIDE.md)** - AI 助手使用 SnowUI 设计系统和素材的完整指南
- **[快速参考](./docs/QUICK_REFERENCE.md)** - 设计令牌和素材路径快速参考
- **[交接给 AI](./docs/HANDOFF_TO_AI.md)** - 将 SnowUI 资源交给其他 AI 助手的指南
- **[Git 子模块管理](./docs/GIT_SUBMODULES.md)** - 本项目的 Git 子模块管理指南
- **[构建脚本文档](./scripts/README.md)** - 构建脚本使用说明

### 🛠️ 开发

```bash
# 安装依赖
npm install

# 处理素材
cd resource/core
npm run process

# 生成平台包
pnpm run generate

# 构建所有包
pnpm run build
```

### 📄 许可证

MIT
