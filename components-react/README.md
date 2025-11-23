# SnowUI Components

基于 shadcn/ui 的组件库，支持多平台、多框架。

## 项目结构

```
components/
├── src/
│   ├── ui/              # 组件目录
│   │   └── button.tsx   # 示例：Button 组件
│   ├── lib/             # 工具函数
│   │   └── utils.ts     # cn() 等工具函数
│   └── index.ts         # 导出入口
├── package.json
└── tsconfig.json
```

## 如何创建新组件

### 1. 选择基础组件

SnowUI 基于 shadcn/ui，你可以从以下来源获取组件：

- **shadcn/ui 官方组件**：`/Users/yuan/Project/shadcn-ui/apps/v4/registry/new-york-v4/ui/`
- **Radix UI 原始组件**：`/Users/yuan/Project/radix-ui/packages/react/`

### 2. 创建组件文件

在 `src/ui/` 目录下创建组件文件，例如 `card.tsx`：

```tsx
import * as React from "react"
import { cn } from "../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
```

### 3. 更新导出文件

在 `src/index.ts` 中添加导出：

```ts
export * from "./ui/button"
export * from "./ui/card"  // 新增
```

### 4. 适配设计系统

确保组件使用设计系统的 CSS 变量：

- **颜色**：使用 `bg-primary`, `text-foreground` 等变量
- **间距**：使用 `gap-[var(--spacing-8)]` 等变量
- **圆角**：使用 `rounded-[var(--corner-radius-8)]` 等变量

设计系统文件：`/Users/yuan/Project/snowui/design-system/src/snowui.css`

### 5. 添加类型定义

为组件添加完整的 TypeScript 类型：

```tsx
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // 自定义 props
  variant?: "default" | "outlined"
}
```

### 6. 使用 class-variance-authority

对于有多个变体的组件，使用 `cva`：

```tsx
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "rounded-lg border bg-card",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        outlined: "border-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}
```

## 组件开发规范

### 1. 命名规范

- **组件名**：PascalCase，如 `Button`, `Card`, `Dialog`
- **文件名**：kebab-case，如 `button.tsx`, `card.tsx`, `dialog.tsx`
- **Props 接口**：`ComponentNameProps`

### 2. 必须包含

- ✅ `forwardRef` 支持
- ✅ `displayName` 设置
- ✅ TypeScript 类型定义
- ✅ 使用 `cn()` 合并 className
- ✅ 支持所有原生 HTML 属性

### 3. 可访问性

- 使用语义化 HTML
- 支持键盘导航
- 添加适当的 ARIA 属性
- 支持焦点管理

### 4. 设计系统集成

- 使用 CSS 变量而非硬编码值
- 支持暗色模式（使用 `dark:` 前缀）
- 遵循设计系统的间距和圆角规范

## 示例：从 shadcn/ui 复制组件

1. **找到组件文件**：
   ```
   /Users/yuan/Project/shadcn-ui/apps/v4/registry/new-york-v4/ui/button.tsx
   ```

2. **复制到项目**：
   ```
   /Users/yuan/Project/snowui/components/src/ui/button.tsx
   ```

3. **修改导入路径**：
   ```tsx
   // 修改前
   import { cn } from "@/lib/utils"
   
   // 修改后
   import { cn } from "../lib/utils"
   ```

4. **检查 Radix UI 依赖**：
   如果组件使用了 Radix UI，确保在 `package.json` 中添加依赖：
   ```json
   {
     "dependencies": {
       "@radix-ui/react-dialog": "^1.1.5"
     }
   }
   ```

5. **适配设计系统**：
   检查组件中的 Tailwind 类是否使用了设计系统的变量，如果没有，进行适配。

## 测试组件

1. **在演示页面测试**：
   编辑 `apps/react/src/pages/ComponentsShowcase.tsx`，添加组件示例。

2. **在调试页面测试**：
   编辑 `apps/react/src/pages/ComponentPlayground.tsx`，添加组件控制项。

## 依赖管理

### 必需的依赖

- `clsx` - 条件类名
- `tailwind-merge` - 合并 Tailwind 类
- `class-variance-authority` - 变体管理
- `@radix-ui/react-*` - 基础交互组件（按需添加）

### 安装新依赖

在 `components/` 目录下运行：

```bash
pnpm add <package-name>
```

## 多框架支持

当前版本专注于 React，未来将支持：

- Vue 3
- Svelte
- 原生 Web Components

## 文档要求

每个组件应该：

1. 有清晰的 JSDoc 注释
2. 在演示页面有示例
3. 在 README 中有使用说明（可选）

## 常见问题

### Q: 如何添加新的变体？

A: 在 `cva` 的 `variants` 对象中添加新变体，并在 `defaultVariants` 中设置默认值。

### Q: 如何支持 asChild？

A: 使用 `@radix-ui/react-slot` 的 `Slot` 组件：

```tsx
import { Slot } from "@radix-ui/react-slot"

const Comp = asChild ? Slot : "button"
```

### Q: 如何适配设计系统？

A: 将硬编码的值替换为 CSS 变量，例如：
- `p-4` → `p-[var(--spacing-16)]`
- `rounded-md` → `rounded-[var(--corner-radius-8)]`

## 下一步

- [ ] 添加更多基础组件
- [ ] 创建组件文档生成工具
- [ ] 支持 Vue 和 Svelte
- [ ] 添加单元测试
- [ ] 创建 Storybook

