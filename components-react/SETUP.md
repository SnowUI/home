# SnowUI Components 设置指南

## 快速开始

### 1. 安装依赖

在项目根目录运行：

```bash
pnpm install
```

这将安装所有工作区的依赖，包括：
- `@snowui/components` - 组件库
- `@snowui/react` - React 应用
- `@snowui/design-system` - 设计系统

### 2. 启动开发服务器

```bash
# 在项目根目录（启动所有应用）
pnpm dev

# 或单独启动 React 应用
cd apps/react
pnpm dev
# 或
pnpm start

# 或启动 Example 应用
cd example
pnpm dev
```

### 3. 访问演示页面

打开浏览器访问：
- **Components Showcase**: 查看所有组件的展示
- **Component Playground**: 调试单个组件

## 项目结构

```
snowui/
├── components/          # 组件库
│   ├── src/
│   │   ├── ui/         # 组件文件
│   │   ├── lib/        # 工具函数
│   │   └── index.ts    # 导出入口
│   └── package.json
├── apps/
│   └── react/          # React 演示应用
│       └── src/
│           ├── pages/  # 演示页面
│           └── App.tsx
└── design-system/      # 设计系统（CSS 变量）
```

## 使用组件

### 在 React 应用中使用

```tsx
import { Button } from '@snowui/components';

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
```

### 导入路径配置

确保 `tsconfig.json` 中配置了路径别名：

```json
{
  "compilerOptions": {
    "paths": {
      "@snowui/components": ["../../components/src"],
      "@snowui/components/*": ["../../components/src/*"]
    }
  }
}
```

## 添加新组件

1. 从 shadcn/ui 复制组件到 `components/src/ui/`
2. 修改导入路径（`@/lib/utils` → `../lib/utils`）
3. 在 `components/src/index.ts` 中导出
4. 在演示页面中添加示例

详细步骤请参考 `components/README.md`。

## 设计系统集成

所有组件都使用设计系统的 CSS 变量，定义在：
`design-system/src/snowui.css`

组件会自动继承这些变量，无需额外配置。

## 依赖说明

### 核心依赖

- `@radix-ui/react-*` - 基础交互组件（按需安装）
- `class-variance-authority` - 变体管理
- `clsx` + `tailwind-merge` - 类名合并

### 开发依赖

- `typescript` - 类型检查
- `react` + `react-dom` - React 支持

## 常见问题

### Q: 组件样式不生效？

A: 确保：
1. 已导入设计系统 CSS：`@import '../../../design-system/src/snowui.css'`
2. Tailwind CSS 已正确配置
3. 组件使用了正确的 CSS 变量

### Q: TypeScript 报错找不到模块？

A: 检查 `tsconfig.json` 中的路径别名配置，确保指向正确的路径。

### Q: 如何添加 Radix UI 组件？

A: 在 `components/package.json` 中添加依赖：
```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.5"
  }
}
```

然后运行 `pnpm install`。

## 下一步

- 查看 `components/README.md` 了解如何创建组件
- 查看演示页面了解组件用法
- 根据需要添加更多组件

