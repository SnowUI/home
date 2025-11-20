# SnowUI 组件库架构设计

## 📋 概述

本文档描述如何开发 SnowUI 组件库，使其：
- ✅ **对 LLM 友好**：清晰的 API、完善的文档、语义化的命名
- ✅ **多平台支持**：Web、iOS、Mac、Android、Windows
- ✅ **shadcn/ui 兼容**：支持 shadcn/ui 的组件模式
- ✅ **主流框架兼容**：React、Vue、Svelte、原生 Web 等

---

## 🏗️ 架构设计

### 核心原则

1. **单一数据源（Single Source of Truth）**
   - 设计 tokens 统一管理（`design-system/`）
   - 组件逻辑与样式分离
   - 平台适配层独立

2. **分层架构**
   ```
   ┌─────────────────────────────────────┐
   │  设计系统层 (Design System)          │
   │  - Tokens (颜色、间距、字体等)        │
   │  - 设计规范文档                        │
   └─────────────────────────────────────┘
              ↓
   ┌─────────────────────────────────────┐
   │  核心组件层 (Core Components)         │
   │  - 平台无关的组件逻辑                 │
   │  - 组件接口定义                       │
   └─────────────────────────────────────┘
              ↓
   ┌─────────────────────────────────────┐
   │  平台适配层 (Platform Adapters)       │
   │  - React / Vue / Svelte / Web        │
   │  - iOS / Android / Windows / Mac     │
   └─────────────────────────────────────┘
   ```

3. **LLM 友好设计**
   - 语义化的组件和属性命名
   - 完整的 TypeScript 类型定义
   - 清晰的文档和示例
   - 一致的 API 模式

---

## 📁 推荐目录结构

```
snowui/
├── packages/                          # 组件库包
│   ├── core/                         # 核心组件逻辑（平台无关）
│   │   ├── src/
│   │   │   ├── components/           # 组件逻辑（无 UI 实现）
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.types.ts      # 类型定义
│   │   │   │   │   ├── button.logic.ts      # 业务逻辑
│   │   │   │   │   ├── button.state.ts      # 状态管理
│   │   │   │   │   └── button.utils.ts      # 工具函数
│   │   │   │   ├── input/
│   │   │   │   ├── card/
│   │   │   │   └── ...
│   │   │   ├── tokens/               # 设计 tokens（从 design-system 导入）
│   │   │   └── utils/                # 通用工具
│   │   └── package.json
│   │
│   ├── react/                        # React 实现
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── button/
│   │   │   │   │   ├── Button.tsx           # React 组件
│   │   │   │   │   ├── Button.stories.tsx   # Storybook
│   │   │   │   │   └── index.ts
│   │   │   │   └── ...
│   │   │   └── index.ts
│   │   ├── shadcn/                   # shadcn/ui 适配层
│   │   │   └── components.json       # shadcn/ui 配置
│   │   └── package.json
│   │
│   ├── vue/                          # Vue 实现
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button.vue
│   │   │   │   └── ...
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── svelte/                       # Svelte 实现
│   │   └── ...
│   │
│   ├── web/                          # 原生 Web 组件
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.css
│   │   │   │   │   └── button.js      # Web Components
│   │   │   │   └── ...
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   └── native/                       # 原生平台适配（可选）
│       ├── ios/                      # iOS (SwiftUI)
│       ├── android/                  # Android (Jetpack Compose)
│       ├── macos/                    # macOS (SwiftUI)
│       └── windows/                  # Windows (WinUI 3)
│
├── design-system/                    # 设计系统（已存在）
│   ├── SnowUI.tokens.json
│   └── src/
│       └── snowui.css
│
├── apps/                             # 测试应用
│   ├── react/                        # React 测试应用
│   ├── vue/                          # Vue 测试应用
│   └── web/                          # 原生 Web 测试
│
└── docs/                             # 文档
    ├── COMPONENT_ARCHITECTURE.md     # 本文档
    ├── LLM_GUIDE.md                  # LLM 使用指南
    └── components/                   # 组件文档
        ├── button.md
        └── ...
```

---

## 🎯 开发策略

### 阶段 1：核心架构搭建

#### 1.1 创建核心组件包 (`packages/core`)

**目标**：定义平台无关的组件接口和逻辑

**示例：Button 组件**

```typescript
// packages/core/src/components/button/button.types.ts
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

export interface ButtonState {
  isPressed: boolean;
  isHovered: boolean;
  isFocused: boolean;
}

// packages/core/src/components/button/button.logic.ts
export function getButtonClasses(props: ButtonProps): string {
  const classes = ['snowui-button'];
  
  if (props.variant) classes.push(`snowui-button--${props.variant}`);
  if (props.size) classes.push(`snowui-button--${props.size}`);
  if (props.disabled) classes.push('snowui-button--disabled');
  if (props.loading) classes.push('snowui-button--loading');
  
  return classes.join(' ');
}

// packages/core/src/components/button/button.utils.ts
export function handleButtonClick(
  props: ButtonProps,
  event: MouseEvent
): void {
  if (props.disabled || props.loading) {
    event.preventDefault();
    return;
  }
  props.onClick?.(event);
}
```

#### 1.2 设计系统集成

```typescript
// packages/core/src/tokens/index.ts
import tokens from '../../../design-system/SnowUI.tokens.json';

export const spacing = tokens.spacing;
export const colors = tokens.themes['snowui-light'];
export const radius = tokens.radius;
// ...
```

### 阶段 2：React 实现（优先）

#### 2.1 创建 React 组件包

```tsx
// packages/react/src/components/button/Button.tsx
import React from 'react';
import { ButtonProps, getButtonClasses, handleButtonClick } from '@snowui/core';
import './Button.css';

export const Button: React.FC<ButtonProps> = (props) => {
  const classes = getButtonClasses(props);
  
  return (
    <button
      className={classes}
      disabled={props.disabled || props.loading}
      onClick={(e) => handleButtonClick(props, e.nativeEvent)}
      aria-busy={props.loading}
    >
      {props.loading ? (
        <>
          <span className="snowui-button__spinner" aria-hidden="true" />
          <span className="snowui-button__text">{props.children}</span>
        </>
      ) : (
        props.children
      )}
    </button>
  );
};
```

```css
/* packages/react/src/components/button/Button.css */
.snowui-button {
  /* 使用设计系统 tokens */
  padding: var(--spacing-12) var(--spacing-24);
  border-radius: var(--corner-radius-8);
  background: var(--primary);
  color: var(--white-100);
  border: none;
  font-size: var(--font-size-16);
  line-height: var(--line-height-16);
  cursor: pointer;
  transition: all 0.2s;
}

.snowui-button--primary {
  background: var(--primary);
  color: var(--white-100);
}

.snowui-button--secondary {
  background: var(--background-2);
  color: var(--black-100);
}

.snowui-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### 2.2 shadcn/ui 兼容层

**关键**：shadcn/ui 使用组件复制模式，我们需要提供兼容的组件结构。

```json
// packages/react/shadcn/components.json
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

```tsx
// packages/react/shadcn/components/ui/button.tsx
// 这是 shadcn/ui 风格的组件导出
import * as React from "react"
import { Button as SnowUIButton, ButtonProps } from "@snowui/react"

export { Button }
export type { ButtonProps }

// 或者创建一个适配器
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <SnowUIButton
        ref={ref}
        variant={variant}
        size={size}
        className={cn("snowui-button", className)}
        {...props}
      />
    )
  }
)
```

### 阶段 3：LLM 友好设计

#### 3.1 语义化命名

```typescript
// ✅ 好的命名（LLM 友好）
interface ButtonProps {
  variant: 'primary' | 'secondary';  // 清晰的含义
  size: 'small' | 'medium' | 'large'; // 直观
  isLoading: boolean;                 // 布尔值用 is 前缀
  onClick: () => void;                 // 事件用 on 前缀
}

// ❌ 不好的命名
interface BtnProps {
  v: 'p' | 's';
  s: 's' | 'm' | 'l';
  ld: boolean;
  clk: () => void;
}
```

#### 3.2 完整的类型定义

```typescript
// packages/core/src/components/button/button.types.ts

/**
 * Button component props
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export interface ButtonProps {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  /**
   * Size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the button is in loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Button content
   */
  children?: React.ReactNode;
  
  /**
   * Click event handler
   */
  onClick?: (event: MouseEvent) => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
}
```

#### 3.3 文档生成

使用 JSDoc 和 TypeDoc 自动生成文档：

```json
// packages/react/package.json
{
  "scripts": {
    "docs:generate": "typedoc --out docs src",
    "docs:serve": "serve docs"
  }
}
```

### 阶段 4：多平台适配

#### 4.1 Web Components（原生 Web）

```typescript
// packages/web/src/components/button/button.ts
import { ButtonProps } from '@snowui/core';

export class SnowUIButton extends HTMLElement {
  private props: ButtonProps = {};
  
  connectedCallback() {
    this.render();
  }
  
  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'loading'];
  }
  
  attributeChangedCallback() {
    this.render();
  }
  
  render() {
    const classes = getButtonClasses(this.props);
    this.className = classes;
    this.innerHTML = `
      <button>
        ${this.props.loading ? '<span class="spinner"></span>' : ''}
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('snowui-button', SnowUIButton);
```

#### 4.2 Vue 适配

```vue
<!-- packages/vue/src/components/Button.vue -->
<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="snowui-button__spinner" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ButtonProps, getButtonClasses, handleButtonClick } from '@snowui/core';

const props = defineProps<ButtonProps>();

const buttonClasses = computed(() => getButtonClasses(props));

const handleClick = (event: MouseEvent) => {
  handleButtonClick(props, event);
};
</script>
```

### 阶段 5：原生平台适配（可选）

#### 5.1 iOS (SwiftUI)

```swift
// packages/native/ios/Sources/SnowUI/Button.swift
import SwiftUI

public struct SnowUIButton: View {
    public enum Variant {
        case primary, secondary, outline, ghost
    }
    
    public enum Size {
        case sm, md, lg
    }
    
    let variant: Variant
    let size: Size
    let disabled: Bool
    let loading: Bool
    let action: () -> Void
    let content: String
    
    public var body: some View {
        Button(action: action) {
            HStack {
                if loading {
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle())
                }
                Text(content)
            }
        }
        .buttonStyle(SnowUIButtonStyle(variant: variant, size: size))
        .disabled(disabled || loading)
    }
}
```

---

## 🔧 技术选型

### 构建工具

- **TypeScript**：类型安全
- **Vite**：快速构建（React/Vue/Web）
- **Rollup**：库打包
- **Turbo**：Monorepo 管理（已使用）

### 样式方案

- **CSS Variables**：使用设计系统 tokens
- **CSS Modules**：组件样式隔离
- **Tailwind CSS**：可选，用于 shadcn/ui 兼容

### 文档工具

- **Storybook**：组件开发与展示
- **TypeDoc**：API 文档生成
- **MDX**：Markdown + JSX 文档

### 测试工具

- **Vitest**：单元测试
- **Testing Library**：组件测试
- **Playwright**：E2E 测试

---

## 📝 开发规范

### 组件命名

- **组件名**：PascalCase（`Button`, `Input`, `Card`）
- **文件名**：与组件名一致（`Button.tsx`, `Input.tsx`）
- **CSS 类名**：BEM 风格（`snowui-button`, `snowui-button--primary`）

### 文件结构

```
components/
└── button/
    ├── Button.tsx           # 主组件
    ├── Button.css           # 样式
    ├── Button.test.tsx      # 测试
    ├── Button.stories.tsx   # Storybook
    ├── button.types.ts      # 类型（从 core 导入）
    └── index.ts             # 导出
```

### API 设计原则

1. **一致性**：所有组件遵循相同的 API 模式
2. **可组合性**：组件可以组合使用
3. **可访问性**：支持 ARIA 属性
4. **类型安全**：完整的 TypeScript 类型

---

## 🚀 实施步骤

### Phase 1: 基础架构（1-2 周）
- [ ] 创建 `packages/core` 包
- [ ] 定义核心组件接口（Button, Input, Card）
- [ ] 集成设计系统 tokens
- [ ] 设置构建工具链

### Phase 2: React 实现（2-3 周）
- [ ] 实现 React 组件（Button, Input, Card）
- [ ] 添加 Storybook
- [ ] 编写测试
- [ ] shadcn/ui 兼容层

### Phase 3: 文档与 LLM 优化（1 周）
- [ ] 完善 JSDoc 注释
- [ ] 生成 API 文档
- [ ] 编写 LLM 使用指南
- [ ] 创建组件示例

### Phase 4: 多平台扩展（按需）
- [ ] Vue 实现
- [ ] Web Components
- [ ] 其他平台（可选）

---

## 📚 参考资源

- [shadcn/ui 文档](https://ui.shadcn.com/)
- [Radix UI 设计模式](https://www.radix-ui.com/)
- [Web Components 规范](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Design Tokens 社区](https://design-tokens.github.io/community-group/)

---

## ❓ 常见问题

### Q: 如何确保组件对 LLM 友好？

A: 
1. 使用语义化的命名
2. 完整的 TypeScript 类型和 JSDoc
3. 提供清晰的示例代码
4. 保持 API 一致性

### Q: 如何支持 shadcn/ui？

A:
1. 提供 `components.json` 配置
2. 组件结构符合 shadcn/ui 模式
3. 支持 Tailwind CSS
4. 提供 `cn()` 工具函数

### Q: 如何实现多平台支持？

A:
1. 核心逻辑放在 `packages/core`
2. 各平台实现放在独立包中
3. 使用适配器模式连接核心和平台实现

---

## 🎯 下一步

1. 创建 `packages/core` 包结构
2. 实现第一个组件（Button）作为示例
3. 设置 React 实现和 Storybook
4. 编写详细的组件开发指南

