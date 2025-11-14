# SnowUI 快速参考

## 🎨 设计系统变量速查

### 颜色
```css
/* 背景色 */
var(--background-1)      /* 主背景 */
var(--background-2)      /* 次背景 */

/* 文字颜色 */
var(--foreground)        /* 前景色（文字） */
var(--black-100)         /* 纯黑/纯白（根据主题） */
var(--black-80)          /* 80% 透明度 */
var(--black-40)          /* 40% 透明度 */

/* 主题色 */
var(--primary)           /* 主色 */

/* 次要颜色 */
var(--secondary-purple)  /* 紫色 */
var(--secondary-blue)    /* 蓝色 */
var(--secondary-green)   /* 绿色 */
var(--secondary-red)     /* 红色 */
```

### 间距
```css
var(--spacing-4)    /* 4px */
var(--spacing-8)    /* 8px */
var(--spacing-12)   /* 12px */
var(--spacing-16)   /* 16px */
var(--spacing-24)   /* 24px */
var(--spacing-40)   /* 40px */
```

### 圆角
```css
var(--corner-radius-4)   /* 4px */
var(--corner-radius-8)   /* 8px */
var(--corner-radius-12)  /* 12px */
var(--corner-radius-16)  /* 16px */
var(--corner-radius-24)  /* 24px */
```

### 字体
```css
/* 字体大小和行高 */
var(--font-size-12)      /* 12px */
var(--line-height-12)    /* 16px */

var(--font-size-14)      /* 14px */
var(--line-height-14)    /* 20px */

var(--font-size-16)      /* 16px */
var(--line-height-16)    /* 24px */

var(--font-size-18)      /* 18px */
var(--line-height-18)    /* 28px */

var(--font-size-24)      /* 24px */
var(--line-height-24)    /* 32px */

/* 字重 */
var(--font-weight-regular)   /* 400 */
var(--font-weight-semibold)  /* 600 */
```

### 阴影和效果
```css
var(--effect-glass-1)        /* 轻度玻璃效果 */
var(--effect-glass-2)        /* 重度玻璃效果 */
var(--effect-focus)          /* 焦点效果 */
var(--effect-glow)           /* 发光效果 */
```

### 渐变
```css
var(--gradient-primary)      /* 主色渐变 */
var(--gradient-blue)         /* 蓝色渐变 */
var(--gradient-purple)       /* 紫色渐变 */
var(--gradient-green)        /* 绿色渐变 */
```

## 📦 素材路径速查

### 图标
```
resource/core/assets/icons/{weight}/{name}-{weight}.svg

权重: regular, thin, light, bold, fill, duotone
示例: resource/core/assets/icons/regular/heart-regular.svg
```

### 头像
```
resource/core/assets/avatars/avatar-{name}-{size}.jpg

尺寸: 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512
示例: resource/core/assets/avatars/avatar-byewind-32.jpg
```

### 背景
```
resource/core/assets/backgrounds/{name}-{width}.jpg

宽度: 320, 640, 1024, 1920
示例: resource/core/assets/backgrounds/gradient-01-1024.jpg
```

### 其他素材
```
光标: resource/core/assets/cursors/cursors-{name}.svg
表情: resource/core/assets/emoji/{name}.svg
插画: resource/core/assets/illustrations/{name}-{width}.png
图片: resource/core/assets/images/image-{id}-{width}.png
Logo: resource/core/assets/logos/{name}.svg
```

## 🚀 快速开始模板

### HTML 模板
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./design-system/src/snowui.css">
  <style>
    body {
      background: var(--background-1);
      color: var(--foreground);
      padding: var(--spacing-16);
    }
    
    .card {
      background: var(--background-1);
      padding: var(--spacing-24);
      border-radius: var(--corner-radius-16);
      box-shadow: var(--effect-glass-1);
    }
  </style>
</head>
<body>
  <div class="card">
    <!-- 内容 -->
  </div>
</body>
</html>
```

### React 模板
```tsx
import './design-system/src/snowui.css';

function App() {
  return (
    <div style={{
      background: 'var(--background-1)',
      padding: 'var(--spacing-16)',
    }}>
      {/* 内容 */}
    </div>
  );
}
```

## 🎯 常用组合

### 卡片样式
```css
.card {
  background: var(--background-1);
  padding: var(--spacing-24);
  border-radius: var(--corner-radius-16);
  box-shadow: var(--effect-glass-1);
}
```

### 按钮样式
```css
.button {
  background: var(--primary);
  color: var(--white-100);
  padding: var(--spacing-12) var(--spacing-24);
  border-radius: var(--corner-radius-8);
  font-weight: var(--font-weight-semibold);
}
```

### 输入框样式
```css
.input {
  background: var(--background-2);
  border: 1px solid var(--black-10);
  padding: var(--spacing-12);
  border-radius: var(--corner-radius-8);
  color: var(--foreground);
}
```

## 📝 主题切换

```html
<!-- 默认主题 (SnowUI Light) -->
<div>内容</div>

<!-- 暗色主题 -->
<div class="theme-snowui-dark">内容</div>

<!-- iOS 主题 -->
<div class="theme-ios-light">内容</div>
<div class="theme-ios-dark">内容</div>
```

## 🔍 查找素材

查看以下文件了解所有可用素材：
- 图标: `resource/core/src/icons.ts`
- 素材: `resource/core/src/assets.ts`

