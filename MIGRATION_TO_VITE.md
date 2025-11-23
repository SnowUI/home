# 迁移到 Vite 完成

## 📋 迁移概述

SnowUI 项目已从 Create React App (CRA) 迁移到 Vite，以获得更好的开发体验和构建性能。

## ✅ 已迁移的项目

1. **`apps/react`** - React 演示应用
   - 端口：3000
   - 配置文件：`vite.config.ts`
   - 入口：`index.html`（根目录）

2. **`example`** - 示例网站
   - 端口：3001
   - 配置文件：`vite.config.ts`
   - GitHub Pages 支持：`base: '/example/'`，输出到 `docs/`

## 🔧 主要变更

### 构建工具
- ❌ 移除：`react-scripts`, `@craco/craco`
- ✅ 添加：`vite`, `@vitejs/plugin-react`

### 配置文件
- ❌ 删除：`craco.config.js`
- ✅ 新增：`vite.config.ts`, `tsconfig.node.json`, `src/vite-env.d.ts`
- ✅ 更新：`index.html` 移到根目录

### 环境变量
- ❌ 旧：`process.env.NODE_ENV`, `process.env.PUBLIC_URL`
- ✅ 新：`import.meta.env.DEV`, `import.meta.BASE_URL`

### 脚本命令
```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "start": "vite"
}
```

## 📚 更新的文档

以下文档已更新以反映 Vite 迁移：

1. **`QUICK_START.md`** - 更新启动命令和端口信息
2. **`example/README.md`** - 更新技术栈和开发命令
3. **`components/SETUP.md`** - 更新开发服务器启动说明
4. **`components/COMPONENT_GUIDE.md`** - 更新测试组件步骤
5. **`example/GITHUB_PAGES_SETUP.md`** - 更新构建和配置说明

## 🚀 使用方法

### 开发

```bash
# 启动所有应用
pnpm dev

# 或单独启动
cd apps/react
pnpm dev  # 端口 3000

cd example
pnpm dev  # 端口 3001
```

### 构建

```bash
# React 应用
cd apps/react
pnpm build

# Example 应用（GitHub Pages）
cd example
pnpm build  # 输出到 docs/
```

### 预览

```bash
pnpm preview  # 预览生产构建
```

## 🎯 优势

1. **更快的开发服务器** - Vite 使用原生 ES 模块，启动速度更快
2. **更好的 TypeScript 支持** - 原生支持 `import type` 语法
3. **更简单的配置** - 无需复杂的 Webpack 配置
4. **更快的 HMR** - 热模块替换速度更快
5. **更好的构建性能** - 使用 Rollup 进行生产构建

## 📝 注意事项

1. **环境变量**：使用 `import.meta.env.*` 替代 `process.env.*`
2. **BASE_URL**：使用 `import.meta.BASE_URL` 获取基础路径
3. **路径别名**：在 `vite.config.ts` 中配置，而不是 `tsconfig.json`
4. **静态资源**：放在 `public/` 目录，直接通过 `/` 访问

## 🔗 相关资源

- [Vite 文档](https://vitejs.dev/)
- [Vite React 插件](https://github.com/vitejs/vite-plugin-react)
- [迁移指南](https://vitejs.dev/guide/migration.html)

## 📅 迁移日期

2024年11月

