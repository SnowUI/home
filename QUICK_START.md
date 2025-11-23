# SnowUI 快速开始指南

## 🚀 快速开始

### 1. 安装依赖

```bash
# 在项目根目录
pnpm install
```

### 2. 启动开发服务器

```bash
# 启动所有应用（如果配置了 turbo）
pnpm dev

# 或单独启动 React 应用
cd apps/react
pnpm dev
# 或
pnpm start
```

### 3. 访问应用

- **React 应用**: 打开浏览器访问 `http://localhost:3000`
- **Example 应用**: 打开浏览器访问 `http://localhost:3001`

## 📁 项目结构

```
snowui/
├── components/          # 组件库（基于 shadcn/ui）
│   ├── src/
│   │   ├── ui/         # 组件文件
│   │   ├── lib/        # 工具函数
│   │   └── index.ts    # 导出入口
│   └── README.md       # 组件创建指南
├── apps/
│   └── react/          # React 演示应用
│       └── src/
│           ├── pages/
│           │   ├── ComponentsShowcase.tsx  # 组件展示页
│           │   └── ComponentPlayground.tsx # 组件调试页
│           └── App.tsx
└── design-system/      # 设计系统（CSS 变量）
    └── src/
        └── snowui.css
```

## 🎨 使用组件

### 在 React 应用中使用

```tsx
import { Button } from '@snowui/components';

function MyComponent() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
```

## 📝 创建新组件

### 步骤 1: 从 shadcn/ui 复制组件

```bash
# 找到 shadcn/ui 组件
# 位置: /Users/yuan/Project/shadcn-ui/apps/v4/registry/new-york-v4/ui/

# 复制到 components/src/ui/
cp /Users/yuan/Project/shadcn-ui/apps/v4/registry/new-york-v4/ui/card.tsx \
   /Users/yuan/Project/snowui/components/src/ui/card.tsx
```

### 步骤 2: 修改导入路径

在组件文件中，将：
```tsx
import { cn } from "@/lib/utils"
```

改为：
```tsx
import { cn } from "../lib/utils"
```

### 步骤 3: 导出组件

在 `components/src/index.ts` 中添加：
```ts
export * from "./ui/card"
```

### 步骤 4: 添加演示

在 `apps/react/src/pages/ComponentsShowcase.tsx` 中添加组件示例。

## 📚 文档

- **组件创建指南**: `components/README.md`
- **设置说明**: `components/SETUP.md`
- **设计系统**: `design-system/src/snowui.css`

## 🔧 依赖说明

### 核心依赖

组件库使用以下核心依赖：

- `@radix-ui/react-*` - 基础交互组件（按需安装）
- `class-variance-authority` - 变体管理
- `clsx` + `tailwind-merge` - 类名合并

### 添加 Radix UI 组件

如果需要使用 Radix UI 组件，在 `components/package.json` 中添加：

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.5"
  }
}
```

然后运行 `pnpm install`。

## 🎯 下一步

1. 查看 `components/README.md` 了解详细的组件创建流程
2. 访问演示页面查看组件效果
3. 使用 Component Playground 调试组件
4. 根据需要添加更多组件

## ❓ 常见问题

### Q: 组件样式不生效？

确保：
1. 已导入设计系统 CSS（在 `apps/react/src/index.css` 中）
2. Tailwind CSS 已正确配置
3. 组件使用了设计系统的 CSS 变量

### Q: TypeScript 找不到模块？

检查 `apps/react/tsconfig.json` 中的路径别名配置。

### Q: 如何添加新的组件变体？

使用 `class-variance-authority` 的 `cva` 函数，参考 `button.tsx` 的实现。

## 📖 更多信息

- shadcn/ui 文档: https://ui.shadcn.com
- Radix UI 文档: https://www.radix-ui.com
- 设计系统变量: 查看 `design-system/src/snowui.css`

