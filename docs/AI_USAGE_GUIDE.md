# SnowUI 设计资源 AI 使用指南

本文档旨在帮助 AI 助手理解和使用 SnowUI 设计系统的素材和设计系统进行网页设计。

## 📋 目录

1. [项目概述](#项目概述)
2. [设计系统 (design-system)](#设计系统-design-system)
3. [设计素材 (resource)](#设计素材-resource)
4. [快速开始](#快速开始)
5. [使用示例](#使用示例)
6. [最佳实践](#最佳实践)

---

## 项目概述

SnowUI 包含两个核心项目，用于网页设计：

### 1. `design-system/` - 设计系统
**位置**：本仓库中的 `design-system/src/snowui.css`

包含完整的设计系统 CSS 变量，包括：
- 颜色系统（主题色、背景色、次要色）
- 间距系统（spacing）
- 圆角系统（corner-radius）
- 字体系统（font-size, line-height）
- 阴影和效果（glass effects, gradients）
- 多主题支持（SnowUI Light/Dark, iOS Light/Dark）

### 2. Design Resources - 设计素材
**位置**：独立的 GitHub 仓库 [resource-core](https://github.com/snowui/resource-core)

包含丰富的设计素材库：
- **图标** (Icons): 1500+ 图标，支持 6 种权重（regular, thin, light, bold, fill, duotone）
- **头像** (Avatars): 330+ 头像图片
- **背景** (Backgrounds): 144+ 背景图片
- **光标** (Cursors): 21+ 光标 SVG
- **表情** (Emoji): 22+ 表情 SVG
- **插画** (Illustrations): 180+ 插画图片
- **图片** (Images): 6+ 示例图片
- **Logo** (Logos): 124+ 品牌 Logo SVG

**GitHub 仓库**：
- [resource-core](https://github.com/snowui/resource-core) - 核心资源包（所有素材）
- [resource-react](https://github.com/snowui/resource-react) - React 组件包
- [example](https://github.com/snowui/example) - 示例网站

---

## 设计系统 (design-system)

### 文件位置
```
snowui/design-system/src/snowui.css
```

### 核心内容

#### 1. CSS 变量系统

设计系统使用 CSS 变量（CSS Custom Properties）定义所有设计令牌。

**颜色变量示例：**
```css
/* 主题颜色（随主题变化） */
--black-100: #000000FF;
--white-100: #FFFFFFFF;
--background-1: #FFFFFFFF;
--primary: var(--black-100);

/* 次要颜色 */
--secondary-purple: #B899EBFF;
--secondary-blue: #7DBBFFFF;
--secondary-green: #71DD8CFF;
/* ... 更多颜色 */
```

**间距变量：**
```css
--spacing-4: 0.25rem;   /* 4px */
--spacing-8: 0.5rem;    /* 8px */
--spacing-16: 1rem;     /* 16px */
--spacing-24: 1.5rem;   /* 24px */
/* ... 更多间距 */
```

**圆角变量：**
```css
--corner-radius-4: 0.25rem;   /* 4px */
--corner-radius-8: 0.5rem;    /* 8px */
--corner-radius-16: 1rem;     /* 16px */
/* ... 更多圆角 */
```

#### 2. 主题系统

支持 4 种主题：
- `theme-snowui-light` (默认)
- `theme-snowui-dark`
- `theme-ios-light`
- `theme-ios-dark`

**使用方法：**
```html
<!-- 默认使用 SnowUI Light 主题 -->
<div class="container">
  <!-- 内容 -->
</div>

<!-- 使用 SnowUI Dark 主题 -->
<div class="theme-snowui-dark">
  <div class="container">
    <!-- 内容 -->
  </div>
</div>
```

#### 3. 工具类

设计系统提供了一些实用的工具类：

**字体工具类：**
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

### 在网页设计中使用

#### 方法 1: 直接引入 CSS 文件

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./design-system/src/snowui.css">
</head>
<body>
  <div style="background: var(--background-1); padding: var(--spacing-16);">
    <h1 style="color: var(--foreground);">标题</h1>
  </div>
</body>
</html>
```

#### 方法 2: 在 React/Vue 项目中使用

```tsx
// React 示例
import '../design-system/src/snowui.css';

function App() {
  return (
    <div style={{ 
      background: 'var(--background-1)',
      padding: 'var(--spacing-16)',
      borderRadius: 'var(--corner-radius-8)'
    }}>
      <h1 style={{ color: 'var(--foreground)' }}>标题</h1>
    </div>
  );
}
```

#### 方法 3: 与 Tailwind CSS 结合使用

设计系统的变量可以直接在 Tailwind 中使用：

```tsx
<div className="bg-[var(--background-1)] p-[var(--spacing-16)] rounded-[var(--corner-radius-8)]">
  <h1 className="text-[var(--foreground)]">标题</h1>
</div>
```

---

## 设计素材 (resource)

### 项目结构

设计素材位于独立的 GitHub 仓库 [resource-core](https://github.com/snowui/resource-core)：

```
resource-core/
├── assets/            # 所有原始素材文件
│   ├── icons/        # 图标（6 种权重）
│   ├── avatars/      # 头像
│   ├── backgrounds/  # 背景
│   ├── cursors/      # 光标
│   ├── emoji/        # 表情
│   ├── illustrations/# 插画
│   ├── images/       # 图片
│   └── logos/        # Logo
└── src/              # 元数据文件（icons.ts, assets.ts）
```

**相关仓库**：
- [resource-core](https://github.com/snowui/resource-core) - 核心资源包
- [resource-react](https://github.com/snowui/resource-react) - React 组件包

### 素材类型和位置

#### 1. 图标 (Icons)
- **GitHub 仓库**: [resource-core](https://github.com/snowui/resource-core)
- **路径**: `assets/icons/{weight}/`（在 resource-core 仓库中）
- **权重**: regular, thin, light, bold, fill, duotone
- **格式**: SVG
- **数量**: 1500+ 图标

#### 2. 头像 (Avatars)
- **GitHub 仓库**: [resource-core](https://github.com/snowui/resource-core)
- **路径**: `assets/avatars/`（在 resource-core 仓库中）
- **格式**: JPG
- **尺寸**: 自动生成多种尺寸（16×16 到 512×512）
- **数量**: 330+ 头像

#### 3. 背景 (Backgrounds)
- **GitHub 仓库**: [resource-core](https://github.com/snowui/resource-core)
- **路径**: `assets/backgrounds/`（在 resource-core 仓库中）
- **格式**: JPG
- **尺寸**: 自动生成多种宽度（320, 640, 1024, 1920）
- **数量**: 144+ 背景

#### 4. 其他素材
- **光标**: `assets/cursors/` (SVG) - [resource-core](https://github.com/snowui/resource-core)
- **表情**: `assets/emoji/` (SVG) - [resource-core](https://github.com/snowui/resource-core)
- **插画**: `assets/illustrations/` (PNG/SVG) - [resource-core](https://github.com/snowui/resource-core)
- **图片**: `assets/images/` (PNG) - [resource-core](https://github.com/snowui/resource-core)
- **Logo**: `assets/logos/` (SVG) - [resource-core](https://github.com/snowui/resource-core)

### 使用方式

#### 方式 1: 直接使用资源文件（推荐用于网页设计）

**在 HTML 中使用**（需要克隆 [resource-core](https://github.com/snowui/resource-core) 仓库）：
```html
<!-- 使用图标 -->
<img src="./assets/icons/regular/heart-regular.svg" alt="Heart" width="24" height="24">

<!-- 使用头像 -->
<img src="./assets/avatars/avatar-byewind-32.jpg" alt="Avatar" width="32" height="32">

<!-- 使用背景 -->
<img src="./assets/backgrounds/gradient-01-1024.jpg" alt="Background">
```

**在 CSS 中使用**（需要克隆 [resource-core](https://github.com/snowui/resource-core) 仓库）：
```css
.hero-section {
  background-image: url('./assets/backgrounds/gradient-01-1024.jpg');
  background-size: cover;
  background-position: center;
}
```

#### 方式 2: 使用 React 组件（如果项目使用 React）

```tsx
import { Heart, AvatarByewind, Gradient01 } from '@snowui-design-system/resource-react';

function App() {
  return (
    <div>
      {/* 图标 */}
      <Heart size={24} weight="bold" className="text-red-500" />
      
      {/* 头像 */}
      <AvatarByewind size={64} className="rounded-full" />
      
      {/* 背景 */}
      <Gradient01 width={1024} />
    </div>
  );
}
```

#### 方式 3: 查看可用素材列表

查看元数据文件了解所有可用素材：

```typescript
// 查看 resource/core/src/icons.ts 了解所有图标
// 查看 resource/core/src/assets.ts 了解所有素材
```

---

## 快速开始

### 步骤 1: 了解项目结构

**本仓库 (SnowUI/home)**：
```
snowui/
├── design-system/     # 设计系统 CSS
│   └── src/
│       └── snowui.css
└── docs/              # 文档
```

**相关仓库**：
- [resource-core](https://github.com/snowui/resource-core) - 所有设计素材
- [resource-react](https://github.com/snowui/resource-react) - React 组件包
- [example](https://github.com/snowui/example) - 示例网站

### 步骤 2: 引入设计系统

在 HTML 或项目中引入设计系统 CSS：

```html
<link rel="stylesheet" href="./design-system/src/snowui.css">
```

### 步骤 3: 使用设计变量

使用 CSS 变量定义样式：

```css
.card {
  background: var(--background-1);
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  box-shadow: var(--effect-glass-1);
  color: var(--foreground);
}
```

### 步骤 4: 使用设计素材

**推荐方式：使用 React 组件**
```tsx
import { Heart } from '@snowui-design-system/resource-react';
<Heart size={24} />
```

**或直接使用素材文件**（需要克隆 [resource-core](https://github.com/snowui/resource-core) 仓库）：
```html
<img src="./assets/icons/regular/star-regular.svg" alt="Star">
```

---

## 使用示例

### 示例 1: 创建一个卡片组件

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./design-system/src/snowui.css">
  <style>
    .card {
      background: var(--background-1);
      padding: var(--spacing-24);
      border-radius: var(--corner-radius-16);
      box-shadow: var(--effect-glass-1);
      max-width: 400px;
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: var(--spacing-12);
      margin-bottom: var(--spacing-16);
    }
    
    .card-title {
      font-size: var(--font-size-24);
      line-height: var(--line-height-24);
      color: var(--foreground);
      font-weight: var(--font-weight-semibold);
    }
    
    .card-content {
      color: var(--black-80);
      font-size: var(--font-size-16);
      line-height: var(--line-height-16);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <!-- 如果使用 React 组件: <Heart size={24} /> -->
      <!-- 如果克隆了 resource-core 仓库: -->
      <img src="./assets/icons/regular/star-regular.svg" 
           alt="Star" width="24" height="24">
      <h2 class="card-title">标题</h2>
    </div>
    <p class="card-content">
      这是卡片内容。使用 SnowUI 设计系统的变量和素材创建。
    </p>
  </div>
</body>
</html>
```

### 示例 2: 创建一个带背景的英雄区域

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./design-system/src/snowui.css">
  <style>
    .hero {
      position: relative;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-40);
      border-radius: var(--corner-radius-24);
      overflow: hidden;
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: var(--white-100);
    }
    
    .hero-title {
      font-size: var(--font-size-48);
      line-height: var(--line-height-48);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-16);
    }
    
    .hero-subtitle {
      font-size: var(--font-size-18);
      line-height: var(--line-height-18);
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="hero">
    <!-- 如果克隆了 resource-core 仓库: -->
    <img src="./assets/backgrounds/gradient-01-1024.jpg" 
         alt="Background" class="hero-background">
    <div class="hero-content">
      <h1 class="hero-title">欢迎使用 SnowUI</h1>
      <p class="hero-subtitle">一个完整的设计系统和素材库</p>
    </div>
  </div>
</body>
</html>
```

### 示例 3: 创建一个用户资料卡片

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./design-system/src/snowui.css">
  <style>
    .profile-card {
      background: var(--background-1);
      padding: var(--spacing-24);
      border-radius: var(--corner-radius-16);
      box-shadow: var(--effect-glass-1);
      max-width: 300px;
    }
    
    .profile-header {
      display: flex;
      align-items: center;
      gap: var(--spacing-16);
      margin-bottom: var(--spacing-20);
    }
    
    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .profile-name {
      font-size: var(--font-size-18);
      line-height: var(--line-height-18);
      font-weight: var(--font-weight-semibold);
      color: var(--foreground);
      margin-bottom: var(--spacing-4);
    }
    
    .profile-role {
      font-size: var(--font-size-14);
      line-height: var(--line-height-14);
      color: var(--black-60);
    }
    
    .profile-stats {
      display: flex;
      gap: var(--spacing-24);
      padding-top: var(--spacing-20);
      border-top: 1px solid var(--black-10);
    }
    
    .stat {
      text-align: center;
    }
    
    .stat-value {
      font-size: var(--font-size-24);
      line-height: var(--line-height-24);
      font-weight: var(--font-weight-semibold);
      color: var(--foreground);
    }
    
    .stat-label {
      font-size: var(--font-size-12);
      line-height: var(--line-height-12);
      color: var(--black-60);
      margin-top: var(--spacing-4);
    }
  </style>
</head>
<body>
  <div class="profile-card">
    <div class="profile-header">
      <!-- 如果克隆了 resource-core 仓库: -->
      <img src="./assets/avatars/avatar-byewind-64.jpg" 
           alt="Avatar" class="avatar">
      <div>
        <div class="profile-name">用户名</div>
        <div class="profile-role">设计师</div>
      </div>
    </div>
    <div class="profile-stats">
      <div class="stat">
        <div class="stat-value">1.2K</div>
        <div class="stat-label">关注者</div>
      </div>
      <div class="stat">
        <div class="stat-value">456</div>
        <div class="stat-label">作品</div>
      </div>
      <div class="stat">
        <div class="stat-value">89</div>
        <div class="stat-label">点赞</div>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## 最佳实践

### 1. 使用设计系统变量

✅ **推荐：**
```css
.card {
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  background: var(--background-1);
}
```

❌ **不推荐：**
```css
.card {
  padding: 16px;
  border-radius: 8px;
  background: #FFFFFF;
}
```

### 2. 素材尺寸选择

- **图标**: 通常使用 16px, 20px, 24px, 32px
- **头像**: 根据上下文选择合适尺寸（32px, 48px, 64px, 128px）
- **背景**: 根据容器宽度选择（320px, 640px, 1024px, 1920px）

### 3. 主题切换

如果需要支持多主题，使用主题类：

```html
<div class="theme-snowui-dark">
  <!-- 内容会自动使用暗色主题 -->
</div>
```

### 4. 响应式设计

结合 CSS 变量和媒体查询：

```css
.container {
  padding: var(--spacing-16);
}

@media (min-width: 768px) {
  .container {
    padding: var(--spacing-24);
  }
}
```

### 5. 性能优化

- 对于图标，优先使用 SVG（可缩放、文件小）
- 对于头像和背景，使用合适的尺寸（不要使用过大的图片）
- 考虑使用 WebP 格式（如果支持）

---

## 素材查找指南

### 如何找到合适的图标？

1. 查看 [resource-core](https://github.com/snowui/resource-core) 仓库中的 `src/icons.ts` 文件，了解所有可用图标
2. 图标命名采用 kebab-case（如：`four-leaf-clover`）
3. 图标文件位于 `assets/icons/{weight}/` 目录（在 resource-core 仓库中）
4. 或使用 React 组件：`import { FourLeafClover } from '@snowui-design-system/resource-react'`

### 如何找到合适的头像？

1. 查看 [resource-core](https://github.com/snowui/resource-core) 仓库中的 `src/assets.ts` 文件，筛选类型为 `avatars` 的素材
2. 头像文件位于 `assets/avatars/` 目录（在 resource-core 仓库中）
3. 文件名格式：`avatar-{name}-{size}.jpg`
4. 或使用 React 组件：`import { AvatarByewind } from '@snowui-design-system/resource-react'`

### 如何找到合适的背景？

1. 查看 [resource-core](https://github.com/snowui/resource-core) 仓库中的 `src/assets.ts` 文件，筛选类型为 `backgrounds` 的素材
2. 背景文件位于 `assets/backgrounds/` 目录（在 resource-core 仓库中）
3. 文件名格式：`{name}-{width}.jpg`
4. 或使用 React 组件：`import { Gradient01 } from '@snowui-design-system/resource-react'`

---

## 常见问题

### Q: 如何知道有哪些可用的图标/素材？

A: 查看 [resource-core](https://github.com/snowui/resource-core) 仓库中的 `src/icons.ts` 和 `src/assets.ts` 文件，这些文件包含了所有可用素材的元数据。或者查看 [在线示例网站](https://snowui.github.io/example) 浏览所有素材。

### Q: 设计系统的变量可以在 Tailwind 中使用吗？

A: 可以！设计系统的 CSS 变量可以直接在 Tailwind 的任意值语法中使用：
```tsx
<div className="bg-[var(--background-1)] p-[var(--spacing-16)]">
```

### Q: 如何切换主题？

A: 在容器元素上添加主题类：
```html
<div class="theme-snowui-dark">
  <!-- 内容 -->
</div>
```

### Q: 素材文件需要处理吗？

A: 不需要。[resource-core](https://github.com/snowui/resource-core) 仓库中的素材文件已经处理过，可以直接使用。如果克隆了仓库并需要重新处理，可以运行：
```bash
cd resource-core
npm run process
```

---

## 总结

使用 SnowUI 进行网页设计的核心步骤：

1. **引入设计系统**: 引入 `design-system/src/snowui.css`（本仓库）
2. **使用设计变量**: 使用 CSS 变量定义样式（颜色、间距、圆角等）
3. **使用设计素材**: 
   - 推荐：使用 React 组件 `@snowui-design-system/resource-react`
   - 或：克隆 [resource-core](https://github.com/snowui/resource-core) 仓库后直接引用素材文件
4. **遵循设计规范**: 使用设计系统提供的变量和工具类，保持设计一致性

通过遵循这些指南，AI 助手可以高效地使用 SnowUI 设计系统和素材创建美观、一致的网页设计。

