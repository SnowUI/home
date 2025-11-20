# SnowUI 组件库 LLM 使用指南

本文档帮助 LLM（如 ChatGPT、Claude 等）理解和使用 SnowUI 组件库。

---

## 🎯 核心设计原则

### 1. 语义化命名

所有组件和属性都使用清晰、语义化的名称：

```typescript
// ✅ 好的命名
<Button variant="primary" size="large" onClick={handleClick} />

// ❌ 避免的命名
<Btn v="p" s="l" clk={handleClick} />
```

### 2. 一致的 API 模式

所有组件遵循相同的 API 模式：

```typescript
interface ComponentProps {
  // 视觉变体
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  // 尺寸
  size?: 'sm' | 'md' | 'lg';
  
  // 状态
  disabled?: boolean;
  loading?: boolean;
  
  // 内容
  children?: React.ReactNode;
  
  // 事件
  onClick?: (event: MouseEvent) => void;
  
  // 样式
  className?: string;
}
```

### 3. 完整的类型定义

每个组件都有完整的 TypeScript 类型和 JSDoc 注释：

```typescript
/**
 * Button component - A clickable button element
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => alert('Clicked!')}>
 *   Click me
 * </Button>
 * ```
 */
export interface ButtonProps {
  /**
   * Visual style variant
   * - `primary`: Main action button (default)
   * - `secondary`: Secondary action button
   * - `outline`: Outlined button
   * - `ghost`: Minimal button with no background
   * 
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  // ... 其他属性
}
```

---

## 📦 组件使用模式

### 基础使用

```tsx
import { Button } from '@snowui/react';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
```

### 组合使用

```tsx
import { Button, Card, Input } from '@snowui/react';

function LoginForm() {
  return (
    <Card>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button variant="primary">Login</Button>
    </Card>
  );
}
```

### 状态管理

```tsx
import { Button } from '@snowui/react';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    await fetchData();
    setLoading(false);
  };
  
  return (
    <Button loading={loading} onClick={handleClick}>
      Submit
    </Button>
  );
}
```

---

## 🎨 样式系统

### 使用设计系统 Tokens

所有样式都基于设计系统 tokens：

```tsx
// ✅ 推荐：使用 CSS 变量
<div style={{
  padding: 'var(--spacing-16)',
  borderRadius: 'var(--corner-radius-8)',
  background: 'var(--background-1)'
}}>
  Content
</div>

// ✅ 或者使用 Tailwind（如果配置了）
<div className="p-[var(--spacing-16)] rounded-[var(--corner-radius-8)] bg-[var(--background-1)]">
  Content
</div>
```

### 主题切换

```tsx
// 在 HTML 根元素上切换主题类
document.documentElement.className = 'theme-snowui-dark';

// 或在 React 中
useEffect(() => {
  document.documentElement.className = `theme-snowui-${theme}`;
}, [theme]);
```

---

## 🔌 shadcn/ui 兼容

### 安装方式

```bash
# 使用 shadcn/ui CLI
npx shadcn-ui@latest add button

# 或手动复制组件
```

### 组件结构

SnowUI 组件兼容 shadcn/ui 的结构：

```tsx
// packages/react/shadcn/components/ui/button.tsx
import { Button as SnowUIButton, ButtonProps } from '@snowui/react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <SnowUIButton
        ref={ref}
        className={cn("snowui-button", className)}
        {...props}
      />
    );
  }
);
```

### 使用方式

```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary">Click me</Button>
```

---

## 🌐 多平台使用

### React

```tsx
import { Button } from '@snowui/react';
```

### Vue

```vue
<template>
  <SnowUIButton variant="primary" @click="handleClick">
    Click me
  </SnowUIButton>
</template>

<script setup>
import { SnowUIButton } from '@snowui/vue';
</script>
```

### Web Components

```html
<snowui-button variant="primary" size="md">
  Click me
</snowui-button>

<script>
  import '@snowui/web';
</script>
```

---

## 📝 组件开发指南（给 LLM）

### 创建新组件

1. **在 `packages/core` 中定义接口**

```typescript
// packages/core/src/components/card/card.types.ts
export interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}
```

2. **实现核心逻辑**

```typescript
// packages/core/src/components/card/card.logic.ts
export function getCardClasses(props: CardProps): string {
  const classes = ['snowui-card'];
  if (props.variant) classes.push(`snowui-card--${props.variant}`);
  if (props.padding) classes.push(`snowui-card--padding-${props.padding}`);
  return classes.join(' ');
}
```

3. **在 React 中实现**

```tsx
// packages/react/src/components/card/Card.tsx
import { CardProps, getCardClasses } from '@snowui/core';
import './Card.css';

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const classes = getCardClasses(props);
  return <div className={classes}>{children}</div>;
};
```

4. **添加样式**

```css
/* packages/react/src/components/card/Card.css */
.snowui-card {
  background: var(--background-1);
  border-radius: var(--corner-radius-12);
  box-shadow: var(--effect-glass-1);
}

.snowui-card--outlined {
  border: 1px solid var(--black-20);
}

.snowui-card--padding-md {
  padding: var(--spacing-16);
}
```

5. **导出组件**

```typescript
// packages/react/src/components/card/index.ts
export { Card } from './Card';
export type { CardProps } from '@snowui/core';

// packages/react/src/index.ts
export { Card } from './components/card';
export type { CardProps } from '@snowui/core';
```

---

## 🧪 测试模式

### 单元测试

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@snowui/react';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('handles click event', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

## 📚 组件列表

### 基础组件

- `Button` - 按钮
- `Input` - 输入框
- `Card` - 卡片
- `Badge` - 徽章
- `Avatar` - 头像

### 布局组件

- `Container` - 容器
- `Stack` - 堆叠布局
- `Grid` - 网格布局
- `Divider` - 分隔线

### 反馈组件

- `Alert` - 提示
- `Toast` - 通知
- `Modal` - 模态框
- `Progress` - 进度条

### 导航组件

- `Tabs` - 标签页
- `Breadcrumb` - 面包屑
- `Pagination` - 分页

---

## 🔍 查找组件

### 按功能查找

- **需要按钮？** → `Button`
- **需要输入？** → `Input`
- **需要卡片容器？** → `Card`
- **需要提示信息？** → `Alert`

### 按设计模式查找

- **需要主要操作？** → `Button variant="primary"`
- **需要次要操作？** → `Button variant="secondary"`
- **需要警告信息？** → `Alert variant="warning"`

---

## 💡 最佳实践

### 1. 始终使用设计系统 tokens

```tsx
// ✅ 好
<div style={{ padding: 'var(--spacing-16)' }}>

// ❌ 不好
<div style={{ padding: '16px' }}>
```

### 2. 使用语义化的 variant

```tsx
// ✅ 好
<Button variant="primary">Submit</Button>

// ❌ 不好
<Button color="blue" size="big">Submit</Button>
```

### 3. 保持组件组合性

```tsx
// ✅ 好：组件可以组合
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### 4. 提供可访问性支持

```tsx
// ✅ 好：包含 ARIA 属性
<Button aria-label="Submit form" aria-busy={loading}>
  Submit
</Button>
```

---

## 🚨 常见错误

### ❌ 错误 1：直接使用硬编码值

```tsx
// ❌ 不好
<div style={{ padding: '16px', borderRadius: '8px' }}>

// ✅ 好
<div style={{ 
  padding: 'var(--spacing-16)', 
  borderRadius: 'var(--corner-radius-8)' 
}}>
```

### ❌ 错误 2：忽略类型定义

```tsx
// ❌ 不好
<Button variant="blue" size="big">

// ✅ 好
<Button variant="primary" size="lg">
```

### ❌ 错误 3：不处理加载状态

```tsx
// ❌ 不好
<Button onClick={asyncFunction}>Submit</Button>

// ✅ 好
<Button loading={isLoading} onClick={asyncFunction}>
  Submit
</Button>
```

---

## 📖 更多资源

- [组件架构文档](./COMPONENT_ARCHITECTURE.md)
- [设计系统文档](./AI_USAGE_GUIDE.md)
- [Storybook 文档](http://localhost:6006)（开发时）

---

## 🤖 给 LLM 的提示

当使用 SnowUI 组件库时：

1. **优先使用组件**：不要重新实现已有的组件
2. **遵循设计系统**：使用 tokens 而不是硬编码值
3. **保持一致性**：使用相同的 variant 和 size 模式
4. **考虑可访问性**：添加必要的 ARIA 属性
5. **查看文档**：每个组件都有完整的类型定义和示例

