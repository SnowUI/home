# SnowUI CSS 全量使用对照表（中文）

[View English Documentation](./SNOWUI_USAGE.md)

所有类名均可直接用于 JSX/HTML；数值后缀表示 16px 根字号基准下的名义 px 值（如 `p-12` = 12px）。

Padding、Gap 与圆角工具类使用固定 CSS px。没有显式响应式前缀时，它们的计算值不会随视口宽度或根字号变化。

## 响应式工具类（可选入口）

额外引入 `@snowui-design-system/styles/responsive` 或 `snowui-responsive.css` 后，可使用 mobile-first 前缀：`sm:` 640px、`md:` 768px、`lg:` 1024px、`xl:` 1280px、`2xl:` 1536px。

```html
<div class="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:p-24"></div>
```

第一阶段 allowlist：Display、Flexbox、`grid-cols-*`、`col-span-*`、Alignment、Gap、`p/px/py`、布局尺寸、Overflow/Whitespace。静态 Margin 可继续使用，但不生成响应式 Margin；颜色、边框、渐变、阴影、毛玻璃、opacity、cursor、resize/select、hover/focus、Position/Inset/Z-index、Typography 也不生成响应式矩阵。

---

## 圆角（Radius）

### 全局圆角 `rounded-*`
| 类名 | 圆角 |
| --- | --- |
| `rounded-0` | 0 |
| `rounded-4` | 4px |
| `rounded-8` | 8px |
| `rounded-12` | 12px |
| `rounded-16` | 16px |
| `rounded-20` | 20px |
| `rounded-24` | 24px |
| `rounded-28` | 28px |
| `rounded-32` | 32px |
| `rounded-40` | 40px |
| `rounded-48` | 48px |
| `rounded-80` | 80px |

### 边向圆角（取值：0/4/8/12/16/20/24/28/32/40/48/80）
| 上边 | 右边 | 下边 | 左边 |
| --- | --- | --- | --- |
| `rounded-t-0` → 0 | `rounded-r-0` → 0 | `rounded-b-0` → 0 | `rounded-l-0` → 0 |
| `rounded-t-4` → 4px | `rounded-r-4` → 4px | `rounded-b-4` → 4px | `rounded-l-4` → 4px |
| `rounded-t-8` → 8px | `rounded-r-8` → 8px | `rounded-b-8` → 8px | `rounded-l-8` → 8px |
| `rounded-t-12` → 12px | `rounded-r-12` → 12px | `rounded-b-12` → 12px | `rounded-l-12` → 12px |
| `rounded-t-16` → 16px | `rounded-r-16` → 16px | `rounded-b-16` → 16px | `rounded-l-16` → 16px |
| `rounded-t-20` → 20px | `rounded-r-20` → 20px | `rounded-b-20` → 20px | `rounded-l-20` → 20px |
| `rounded-t-24` → 24px | `rounded-r-24` → 24px | `rounded-b-24` → 24px | `rounded-l-24` → 24px |
| `rounded-t-28` → 28px | `rounded-r-28` → 28px | `rounded-b-28` → 28px | `rounded-l-28` → 28px |
| `rounded-t-32` → 32px | `rounded-r-32` → 32px | `rounded-b-32` → 32px | `rounded-l-32` → 32px |
| `rounded-t-40` → 40px | `rounded-r-40` → 40px | `rounded-b-40` → 40px | `rounded-l-40` → 40px |
| `rounded-t-48` → 48px | `rounded-r-48` → 48px | `rounded-b-48` → 48px | `rounded-l-48` → 48px |
| `rounded-t-80` → 80px | `rounded-r-80` → 80px | `rounded-b-80` → 80px | `rounded-l-80` → 80px |

### 单角圆角（同一取值集）
| 左上 | 右上 | 右下 | 左下 |
| --- | --- | --- | --- |
| `rounded-tl-0` | `rounded-tr-0` | `rounded-br-0` | `rounded-bl-0` |
| `rounded-tl-4` | `rounded-tr-4` | `rounded-br-4` | `rounded-bl-4` |
| `rounded-tl-8` | `rounded-tr-8` | `rounded-br-8` | `rounded-bl-8` |
| `rounded-tl-12` | `rounded-tr-12` | `rounded-br-12` | `rounded-bl-12` |
| `rounded-tl-16` | `rounded-tr-16` | `rounded-br-16` | `rounded-bl-16` |
| `rounded-tl-20` | `rounded-tr-20` | `rounded-br-20` | `rounded-bl-20` |
| `rounded-tl-24` | `rounded-tr-24` | `rounded-br-24` | `rounded-bl-24` |
| `rounded-tl-28` | `rounded-tr-28` | `rounded-br-28` | `rounded-bl-28` |
| `rounded-tl-32` | `rounded-tr-32` | `rounded-br-32` | `rounded-bl-32` |
| `rounded-tl-40` | `rounded-tr-40` | `rounded-br-40` | `rounded-bl-40` |
| `rounded-tl-48` | `rounded-tr-48` | `rounded-br-48` | `rounded-bl-48` |
| `rounded-tl-80` | `rounded-tr-80` | `rounded-br-80` | `rounded-bl-80` |

---

## 内边距 `p-*`

| 类名 | 数值 | 类名 | 数值 |
| --- | --- | --- | --- |
| `p-0` | 0 | `p-24` | 24px |
| `p-4` | 4px | `p-28` | 28px |
| `p-8` | 8px | `p-40` | 40px |
| `p-12` | 12px | `p-48` | 48px |
| `p-16` | 16px |  |  |
| `p-20` | 20px |  |  |

> 取值映射同样适用于 `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`。

## 外边距 `m-*`
后缀取值与前缀家族同 padding：`m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`。Margin 仍使用 rem，可能跟随根字号变化，不属于 padding / gap / radius 的稳定值契约。

## Gap
| 类名 | 数值 |
| --- | --- |
| `gap-0` | 0 |
| `gap-4` | 4px |
| `gap-8` | 8px |
| `gap-12` | 12px |
| `gap-16` | 16px |
| `gap-20` | 20px |
| `gap-24` | 24px |
| `gap-28` | 28px |
| `gap-40` | 40px |
| `gap-48` | 48px |

---

## 尺寸

### 宽高同时 `size-*`
| 类名 | 尺寸 |
| --- | --- |
| `size-16` | 16px |
| `size-20` | 20px |
| `size-24` | 24px |
| `size-28` | 28px |
| `size-32` | 32px |
| `size-40` | 40px |
| `size-48` | 48px |
| `size-56` | 56px |
| `size-64` | 64px |
| `size-72` | 72px |
| `size-80` | 80px |

### 单独宽/高
`w-*` 与 `h-*` 可用：16 / 20 / 24 / 28 / 32 / 40 / 48 / 56 / 64 / 72 / 80。

---

## 字体 & 行高

| 类名 | 字号 / 行高 |
| --- | --- |
| `text-12` | 12px / 16px |
| `text-14` | 14px / 20px |
| `text-16` | 16px / 24px |
| `text-18` | 18px / 28px |
| `text-24` | 24px / 32px |
| `text-32` | 32px / 40px |
| `text-48` | 48px / 58px |
| `text-64` | 64px / 78px |

### 段落专用
| 类名 | 下边距 |
| --- | --- |
| `text-12.paragraph` | 8px |
| `text-14.paragraph` | 10px |
| `text-16.paragraph` | 12px |
| `text-18.paragraph` | 14px |
| `text-24.paragraph` | 18px |
| `text-32.paragraph` | 24px |
| `text-48.paragraph` | 36px |
| `text-64.paragraph` | 48px |

### 字重
| 类名 | 值 |
| --- | --- |
| `font-regular` | 400 |
| `font-semibold` | 600 |

---

## 颜色（自动随主题）

### 黑白阶（背景 / 文字 / 描边）
| 色阶 | 背景类 | 文字类 | 描边类 |
| --- | --- | --- | --- |
| Black 100 | `bg-black-100` | `text-black-100` | `border-black-100` |
| Black 80 | `bg-black-80` | `text-black-80` | `border-black-80` |
| Black 40 | `bg-black-40` | `text-black-40` | `border-black-40` |
| Black 20 | `bg-black-20` | `text-black-20` | `border-black-20` |
| Black 10 | `bg-black-10` | `text-black-10` | `border-black-10` |
| Black 4 | `bg-black-4` | `text-black-4` | `border-black-4` |
| White 100 | `bg-white-100` | `text-white-100` | `border-white-100` |
| White 80 | `bg-white-80` | `text-white-80` | `border-white-80` |
| White 40 | `bg-white-40` | `text-white-40` | `border-white-40` |
| White 20 | `bg-white-20` | `text-white-20` | `border-white-20` |
| White 10 | `bg-white-10` | `text-white-10` | `border-white-10` |
| White 4 | `bg-white-4` | `text-white-4` | `border-white-4` |

### 静态黑白（不随主题）
| 色阶 | 背景类 | 文字类 | 描边类 |
| --- | --- | --- | --- |
| Static Black 100 | `bg-static-black-100` | `text-static-black-100` | `border-static-black-100` |
| Static Black 80 | `bg-static-black-80` | `text-static-black-80` | `border-static-black-80` |
| Static Black 40 | `bg-static-black-40` | `text-static-black-40` | `border-static-black-40` |
| Static Black 20 | `bg-static-black-20` | `text-static-black-20` | `border-static-black-20` |
| Static Black 10 | `bg-static-black-10` | `text-static-black-10` | `border-static-black-10` |
| Static Black 4 | `bg-static-black-4` | `text-static-black-4` | `border-static-black-4` |
| Static White 100 | `bg-static-white-100` | `text-static-white-100` | `border-static-white-100` |
| Static White 80 | `bg-static-white-80` | `text-static-white-80` | `border-static-white-80` |
| Static White 40 | `bg-static-white-40` | `text-static-white-40` | `border-static-white-40` |
| Static White 20 | `bg-static-white-20` | `text-static-white-20` | `border-static-white-20` |
| Static White 10 | `bg-static-white-10` | `text-static-white-10` | `border-static-white-10` |
| Static White 4 | `bg-static-white-4` | `text-static-white-4` | `border-static-white-4` |

### 背景层级 & 主色
| 类名 | 说明 |
| --- | --- |
| `bg-background-1/2/3/4/5/6` | 面板层级背景 |
| `bg-background` | 当前主题背景 |
| `bg/text/border-primary` | 主色 |
| `bg/text/border-foreground` | 前景色 |
| `bg/text/border-logo-1/2` | 品牌色 |

### 辅助色板（统一拥有 `bg- / text- / border-`）
`purple`, `indigo`, `blue`, `cyan`, `mint`, `green`, `yellow`, `orange`, `red`

---

## 渐变背景
| 类名 | 描述 |
| --- | --- |
| `bg-gradient-primary` | 主色玻璃渐变 |
| `bg-gradient-gray` | 灰色渐变 |
| `bg-gradient-black` | 黑色渐变 |
| `bg-gradient-purple` | 紫色渐变 |
| `bg-gradient-indigo` | 靛蓝渐变 |
| `bg-gradient-blue` | 蓝色渐变 |
| `bg-gradient-cyan` | 青色渐变 |
| `bg-gradient-mint` | 薄荷渐变 |
| `bg-gradient-green` | 绿色渐变 |
| `bg-gradient-yellow` | 黄色渐变 |
| `bg-gradient-orange` | 橙色渐变 |
| `bg-gradient-red` | 红色渐变 |

---

## 阴影 / 特效 / 模糊
| 类名 | 效果 |
| --- | --- |
| `shadow-glass-1` | 多层玻璃阴影 + 1px 描边 |
| `shadow-glass-2` | 更强玻璃阴影 |
| `shadow-glow` | 外发光 |
| `shadow-focus` | 聚焦描边 |
| `shadow-inner` | 内凹阴影 |
| `shadow-drop-1` | 轻投影 |
| `shadow-drop-2` | 强投影 |
| `shadow-image-hover` | 图像内阴影 hover 效果 |
| `backdrop-blur-40` | 背景模糊 20px |
| `backdrop-blur-100` | 背景模糊 50px |

---

## 基础层（自动生效）
- `:root` + `.theme-*`：SnowUI / iOS 明暗主题变量。
- `@layer base`：制定 `html / body / code` 字体、颜色、抗锯齿。
- Phosphor Duotone 图标背景层统一透明度 `0.08`。

**使用方法**：入口处引入 `snowui.css`，即可像 Tailwind 工具类一样使用上表所有类名。
