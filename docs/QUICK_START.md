# SnowUI 组件库快速开始

本指南将帮助你快速开始使用 SnowUI 组件库。

---

## 📦 安装

### React 项目

```bash
npm install @snowui/react @snowui/core
# 或
pnpm add @snowui/react @snowui/core
# 或
yarn add @snowui/react @snowui/core
```

### 引入设计系统 CSS

在你的应用入口文件中引入 SnowUI 设计系统：

```tsx
// src/index.tsx 或 src/main.tsx
import '@snowui/design-system/src/snowui.css';
// 或从 CDN
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css">
```

---

## 🚀 基础使用

### 1. 导入组件

```tsx
import { Button } from '@snowui/react';
```

### 2. 使用组件

```tsx
function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click me
      </Button>
    </div>
  );
}
```

---

## 📝 完整示例

```tsx
import React, { useState } from 'react';
import { Button } from '@snowui/react';
import '@snowui/design-system/src/snowui.css';

function App() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // 模拟 API 调用
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    alert('Submitted!');
  };

  return (
    <div style={{ padding: 'var(--spacing-24)' }}>
      <h1>SnowUI 示例</h1>
      
      {/* 基础按钮 */}
      <Button variant="primary">Primary Button</Button>
      
      {/* 不同变体 */}
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      
      {/* 不同尺寸 */}
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      
      {/* 加载状态 */}
      <Button 
        variant="primary" 
        loading={loading}
        onClick={handleSubmit}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </Button>
      
      {/* 禁用状态 */}
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
}

export default App;
```

---

## 🎨 主题切换

SnowUI 支持多主题，通过切换 HTML 元素的类名来切换主题：

```tsx
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.className = `theme-snowui-${theme}`;
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <Button variant="primary">Themed Button</Button>
    </div>
  );
}
```

---

## 🔌 shadcn/ui 集成

### 1. 安装 shadcn/ui CLI

```bash
npx shadcn-ui@latest init
```

### 2. 配置 components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "snowui",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### 3. 使用组件

```bash
npx shadcn-ui@latest add button
```

---

## 📚 更多资源

- [组件架构文档](./COMPONENT_ARCHITECTURE.md) - 了解架构设计
- [LLM 使用指南](./LLM_COMPONENT_GUIDE.md) - LLM 友好的使用指南
- [设计系统文档](./AI_USAGE_GUIDE.md) - 设计系统详细说明

---

## 🐛 常见问题

### Q: 样式没有生效？

A: 确保已经引入了设计系统 CSS：
```tsx
import '@snowui/design-system/src/snowui.css';
```

### Q: TypeScript 类型错误？

A: 确保安装了 `@snowui/core` 包，它包含所有类型定义。

### Q: 如何自定义样式？

A: 使用 `className` prop 添加自定义类，或使用 CSS 变量覆盖设计系统 tokens。

---

## 🎯 下一步

1. 查看 [组件列表](./LLM_COMPONENT_GUIDE.md#组件列表)
2. 阅读 [最佳实践](./LLM_COMPONENT_GUIDE.md#最佳实践)
3. 探索 [设计系统 tokens](./AI_USAGE_GUIDE.md)

