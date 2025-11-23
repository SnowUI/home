# CSS 架构对比与 SnowUI 选择建议

## 🎯 当前状态

SnowUI 目前使用：
- **Tailwind CSS v4** - 工具类框架
- **CSS 变量设计系统** - `design-system/src/snowui.css`
- **混合模式** - Tailwind 类名 + CSS 变量（如 `gap-[var(--spacing-8)]`）

## 📊 CSS 架构对比

### 1. Tailwind CSS

**当前使用中**

**优势：**
- ✅ 生态成熟，文档完善
- ✅ 与 shadcn/ui 完美集成
- ✅ 支持任意值：`gap-[var(--spacing-8)]`
- ✅ JIT 模式，按需生成
- ✅ 插件系统丰富

**劣势：**
- ❌ Bundle 大小较大（~10KB gzipped）
- ❌ 类名较长，可读性一般
- ❌ 需要配置 content 路径

**适用场景：**
- 组件库（当前场景）
- 快速开发
- 需要与现有生态集成

### 2. UnoCSS

**推荐度：⭐⭐⭐⭐⭐**

**优势：**
- ✅ **性能极佳**：比 Tailwind 快 5-10 倍
- ✅ **Bundle 更小**：~6KB gzipped
- ✅ **按需生成**：只生成使用的样式
- ✅ **原子化 CSS**：更灵活的规则
- ✅ **Vite 集成**：原生支持，零配置
- ✅ **兼容 Tailwind**：可以无缝迁移

**劣势：**
- ⚠️ 生态相对较小（但增长快）
- ⚠️ 文档不如 Tailwind 完善

**代码示例：**
```tsx
// 完全兼容 Tailwind 语法
<div className="flex items-center gap-2">
  <button className="bg-primary text-white px-4 py-2 rounded-md">
    Button
  </button>
</div>

// 支持任意值
<div className="gap-[var(--spacing-8)] rounded-[var(--corner-radius-8)]">
  Content
</div>
```

**迁移成本：**
- 几乎为零（语法兼容）
- 只需替换依赖和配置

### 3. CSS Modules

**推荐度：⭐⭐⭐**

**优势：**
- ✅ 作用域隔离，无样式冲突
- ✅ TypeScript 支持好
- ✅ 零运行时开销
- ✅ 支持 CSS 变量

**劣势：**
- ❌ 需要为每个组件写 CSS
- ❌ 开发效率较低
- ❌ 不支持原子化

**代码示例：**
```tsx
// Button.module.css
.button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-8);
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
}

// Button.tsx
import styles from './Button.module.css';
<button className={styles.button}>Button</button>
```

### 4. Styled Components / Emotion

**推荐度：⭐⭐**

**优势：**
- ✅ CSS-in-JS，组件化
- ✅ 动态样式支持好
- ✅ TypeScript 支持

**劣势：**
- ❌ 运行时开销
- ❌ Bundle 较大
- ❌ SSR 需要额外配置
- ❌ 不适合组件库（用户需要安装）

**代码示例：**
```tsx
import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-8);
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  background: var(--primary);
`;
```

### 5. Vanilla Extract

**推荐度：⭐⭐⭐⭐**

**优势：**
- ✅ **零运行时**：编译时生成 CSS
- ✅ **类型安全**：完整的 TypeScript 支持
- ✅ **作用域隔离**：自动生成唯一类名
- ✅ **性能优秀**：无运行时开销

**劣势：**
- ❌ 学习曲线较陡
- ❌ 生态较小
- ❌ 需要构建工具支持

**代码示例：**
```tsx
// button.css.ts
import { style, styleVariants } from '@vanilla-extract/css';

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--spacing-8)',
  padding: 'var(--spacing-16)',
  borderRadius: 'var(--corner-radius-8)',
});

export const variants = styleVariants({
  default: {
    background: 'var(--primary)',
  },
  outline: {
    border: '1px solid var(--border)',
  },
});
```

### 6. Linaria

**推荐度：⭐⭐⭐**

**优势：**
- ✅ 零运行时 CSS-in-JS
- ✅ 支持 CSS 变量
- ✅ 作用域隔离

**劣势：**
- ❌ 生态较小
- ❌ 文档较少

### 7. Master CSS

**推荐度：⭐⭐⭐**

**优势：**
- ✅ 类似 Tailwind 的语法
- ✅ 运行时生成（可选）
- ✅ 支持 CSS 变量

**劣势：**
- ❌ 生态小
- ❌ 社区支持少

### 8. Panda CSS

**推荐度：⭐⭐⭐⭐**

**优势：**
- ✅ **类型安全**：完整的 TypeScript 支持
- ✅ **零运行时**：编译时生成
- ✅ **设计系统友好**：原生支持 tokens
- ✅ **类似 Tailwind 语法**

**劣势：**
- ⚠️ 相对较新，生态在增长
- ⚠️ 学习曲线中等

**代码示例：**
```tsx
// panda.config.ts
export default defineConfig({
  theme: {
    tokens: {
      spacing: {
        8: { value: 'var(--spacing-8)' },
        16: { value: 'var(--spacing-16)' },
      },
      radii: {
        8: { value: 'var(--corner-radius-8)' },
      },
    },
  },
});

// Button.tsx
import { css } from '../styled-system/css';

const button = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'spacing.8',
  padding: 'spacing.16',
  borderRadius: 'radii.8',
});
```

## 🎯 SnowUI 最适合的选择

### 推荐方案：**UnoCSS** ⭐⭐⭐⭐⭐

**理由：**

1. **完美兼容当前代码**
   - 语法与 Tailwind 100% 兼容
   - 无需修改组件代码
   - 只需替换依赖

2. **性能优势明显**
   - 构建速度：5-10 倍于 Tailwind
   - Bundle 大小：更小（~6KB vs ~10KB）
   - 开发体验：更快的 HMR

3. **设计系统集成**
   - 完美支持 CSS 变量：`gap-[var(--spacing-8)]`
   - 支持任意值语法
   - 可以配置预设 tokens

4. **Vite 原生支持**
   - 当前项目已迁移到 Vite
   - UnoCSS 是 Vite 官方推荐
   - 零配置即可使用

5. **迁移成本极低**
   ```bash
   # 只需替换依赖
   pnpm remove tailwindcss @tailwindcss/postcss autoprefixer
   pnpm add -D unocss
   ```

### 备选方案：**Panda CSS** ⭐⭐⭐⭐

**如果更看重类型安全：**

- 完整的 TypeScript 支持
- 设计系统 tokens 原生支持
- 编译时生成，零运行时

**但需要：**
- 修改组件代码（从 className 到 css()）
- 学习新的 API
- 迁移成本较高

## 📋 详细对比表

| 特性 | Tailwind | UnoCSS | Panda CSS | Vanilla Extract | CSS Modules |
|------|----------|--------|-----------|-----------------|-------------|
| **性能** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Bundle 大小** | ~10KB | ~6KB | ~8KB | ~5KB | ~3KB |
| **类型安全** | ⚠️ 部分 | ⚠️ 部分 | ✅ 完整 | ✅ 完整 | ⚠️ 部分 |
| **学习曲线** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| **生态** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **迁移成本** | - | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ |
| **设计系统支持** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Vite 集成** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## 🚀 迁移到 UnoCSS 的步骤

### 1. 安装依赖

```bash
# 移除 Tailwind
pnpm remove tailwindcss @tailwindcss/postcss autoprefixer

# 安装 UnoCSS
pnpm add -D unocss
```

### 2. 配置 Vite

```ts
// vite.config.ts
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    react(),
    UnoCSS(), // 添加 UnoCSS
  ],
})
```

### 3. 创建 UnoCSS 配置

```ts
// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // 默认预设（包含 Tailwind 兼容）
    presetAttributify(), // 属性化模式（可选）
  ],
  theme: {
    // 可以配置设计系统 tokens（可选）
    colors: {
      primary: 'var(--primary)',
    },
  },
  // 支持任意值
  rules: [],
})
```

### 4. 添加入口文件

```ts
// src/main.tsx 或 src/index.tsx
import 'virtual:uno.css'
```

### 5. 更新配置（可选）

```ts
// 可以配置设计系统 tokens
export default defineConfig({
  theme: {
    spacing: {
      4: 'var(--spacing-4)',
      8: 'var(--spacing-8)',
      // ...
    },
    borderRadius: {
      8: 'var(--corner-radius-8)',
      // ...
    },
  },
})
```

### 6. 删除 Tailwind 配置

```bash
# 删除这些文件
rm tailwind.config.js
rm postcss.config.js
```

## 💡 最终建议

### 短期（立即）

**保持 Tailwind CSS**，因为：
- 当前代码已经工作良好
- 生态成熟，问题少
- 迁移需要测试时间

### 中期（1-2 个月）

**迁移到 UnoCSS**，因为：
- 性能提升明显
- 迁移成本低
- 更好的开发体验

### 长期（考虑）

**评估 Panda CSS**，如果：
- 需要更强的类型安全
- 团队更偏好类型系统
- 愿意投入迁移成本

## 🎨 混合方案（推荐）

**最佳实践：UnoCSS + CSS 变量**

```tsx
// 使用 UnoCSS 的工具类
<div className="flex items-center gap-2">
  {/* 使用 CSS 变量（设计系统） */}
  <button 
    className="px-4 py-2 rounded-md"
    style={{
      gap: 'var(--spacing-8)',
      borderRadius: 'var(--corner-radius-8)',
      background: 'var(--primary)',
    }}
  >
    Button
  </button>
</div>

// 或者使用 UnoCSS 的任意值语法
<button className="gap-[var(--spacing-8)] rounded-[var(--corner-radius-8)] bg-[var(--primary)]">
  Button
</button>
```

## 📚 参考资源

- [UnoCSS 文档](https://unocss.dev/)
- [Panda CSS 文档](https://panda-css.com/)
- [Vanilla Extract 文档](https://vanilla-extract.style/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

## ✅ 总结

**对于 SnowUI 组件库，推荐：**

1. **首选：UnoCSS** - 性能最佳，迁移成本最低
2. **备选：Panda CSS** - 如果更看重类型安全
3. **当前：Tailwind CSS** - 可以继续使用，但建议迁移

**关键因素：**
- ✅ 设计系统集成（CSS 变量）
- ✅ 性能（构建速度和 bundle 大小）
- ✅ 迁移成本（代码兼容性）
- ✅ 开发体验（HMR 速度）

