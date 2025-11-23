# 如何创建 SnowUI 组件

## 📋 完整流程

### 1. 选择组件源

SnowUI 基于 shadcn/ui，你可以从以下位置获取组件：

**shadcn/ui 组件**（推荐）：
```
/Users/yuan/Project/shadcn-ui/apps/v4/registry/new-york-v4/ui/
```

**Radix UI 原始组件**（如果需要更底层控制）：
```
/Users/yuan/Project/radix-ui/packages/react/
```

### 2. 复制组件文件

以创建 `Card` 组件为例：

```bash
# 从 shadcn/ui 复制
cp /Users/yuan/Project/shadcn-ui/apps/v4/registry/new-york-v4/ui/card.tsx \
   /Users/yuan/Project/snowui/components/src/ui/card.tsx
```

### 3. 修改导入路径

打开复制的文件，修改导入路径：

**修改前**：
```tsx
import { cn } from "@/lib/utils"
```

**修改后**：
```tsx
import { cn } from "../lib/utils"
```

**如果有 Radix UI 导入**，保持不变（使用 npm 包）：
```tsx
import * as DialogPrimitive from "@radix-ui/react-dialog"
```

### 4. 检查并适配设计系统

确保组件使用设计系统的 CSS 变量：

- ✅ 颜色：`bg-primary`, `text-foreground`, `border-border` 等
- ✅ 间距：`p-[var(--spacing-16)]`, `gap-[var(--spacing-8)]` 等
- ✅ 圆角：`rounded-[var(--corner-radius-8)]` 等
- ✅ 字体：使用设计系统的字体变量

### 5. 导出组件

在 `components/src/index.ts` 中添加导出：

```ts
export * from "./ui/button"
export * from "./ui/card"  // 新增
```

### 6. 添加类型定义（如果需要）

确保组件有完整的 TypeScript 类型：

```tsx
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outlined"
}
```

### 7. 在演示页面添加示例

编辑 `apps/react/src/pages/ComponentsShowcase.tsx`：

```tsx
import { Card } from '@snowui/components';

// 在组件中添加示例
<section className="mb-16">
  <h2 className="text-2xl font-semibold mb-6">Card</h2>
  <Card className="p-6">
    <h3>Card Title</h3>
    <p>Card content</p>
  </Card>
</section>
```

### 8. 在调试页面添加控制（可选）

编辑 `apps/react/src/pages/ComponentPlayground.tsx`，添加组件的控制项。

## 🎨 组件开发规范

### 命名规范

- **组件名**：PascalCase（`Button`, `Card`, `Dialog`）
- **文件名**：kebab-case（`button.tsx`, `card.tsx`, `dialog.tsx`）
- **Props 接口**：`ComponentNameProps`

### 必须包含

- ✅ `React.forwardRef` 支持
- ✅ `displayName` 设置
- ✅ 完整的 TypeScript 类型
- ✅ 使用 `cn()` 合并 className
- ✅ 支持所有原生 HTML 属性（通过扩展）

### 示例模板

```tsx
import * as React from "react"
import { cn } from "../lib/utils"

export interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement> {
  // 自定义 props
}

const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-classes", className)}
        {...props}
      />
    )
  }
)
ComponentName.displayName = "ComponentName"

export { ComponentName }
```

## 🔧 使用 class-variance-authority

对于有多个变体的组件：

```tsx
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva(
  "base-classes", // 基础类
  {
    variants: {
      variant: {
        default: "variant-default-classes",
        outlined: "variant-outlined-classes",
      },
      size: {
        sm: "size-sm-classes",
        md: "size-md-classes",
        lg: "size-lg-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
```

## 🎯 使用 asChild 模式

支持 `asChild` 的组件（使用 Radix UI Slot）：

```tsx
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn("button-classes", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
```

## 📦 添加 Radix UI 依赖

如果组件使用了 Radix UI，在 `components/package.json` 中添加：

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.5"
  }
}
```

然后运行：
```bash
pnpm install
```

## ✅ 检查清单

创建组件后，确保：

- [ ] 组件文件已创建在 `src/ui/`
- [ ] 导入路径已修改（`@/lib/utils` → `../lib/utils`）
- [ ] 组件已在 `src/index.ts` 中导出
- [ ] TypeScript 类型完整
- [ ] 使用了 `cn()` 合并类名
- [ ] 支持 `forwardRef`
- [ ] 设置了 `displayName`
- [ ] 在演示页面有示例
- [ ] 使用了设计系统的 CSS 变量
- [ ] 所有依赖已添加到 `package.json`

## 🚀 测试组件

1. **启动开发服务器**：
   ```bash
   cd apps/react
   pnpm dev
   # 或
   pnpm start
   ```
   应用将在 `http://localhost:3000` 启动

2. **查看演示页面**：访问 Components Showcase

3. **调试组件**：使用 Component Playground 测试不同 props

## 📚 参考资源

- **shadcn/ui 组件**：`/Users/yuan/Project/shadcn-ui/apps/v4/registry/new-york-v4/ui/`
- **设计系统变量**：`/Users/yuan/Project/snowui/design-system/src/snowui.css`
- **Radix UI 文档**：https://www.radix-ui.com
- **shadcn/ui 文档**：https://ui.shadcn.com

## 💡 提示

1. **优先使用 shadcn/ui 组件**：它们已经经过优化和测试
2. **保持设计系统一致性**：使用 CSS 变量而非硬编码值
3. **遵循命名规范**：保持代码库的一致性
4. **添加 JSDoc 注释**：帮助 LLM 和开发者理解组件
5. **测试所有变体**：确保组件在不同状态下正常工作

