# SnowUI CSS Reference (English)

[查看中文文档](./SNOWUI_USAGE.zh.md)

All classes can be used directly in JSX/HTML. Numeric suffixes denote their nominal px value at the 16px root baseline (e.g. `p-12` = 12px).

Padding, gap, and radius utilities use fixed CSS px. Without an explicit responsive prefix, their computed values remain unchanged across viewport widths and root font-size changes.

## Responsive utilities (optional entry)

Import `@snowui-design-system/styles/responsive` or `snowui-responsive.css` to enable mobile-first prefixes: `sm:` 640px, `md:` 768px, `lg:` 1024px, `xl:` 1280px, and `2xl:` 1536px.

```html
<div class="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:p-24"></div>
```

Phase-one allowlist: Display, Flexbox, `grid-cols-*`, `col-span-*`, Alignment, Gap, `p/px/py`, layout sizing, and Overflow/Whitespace. Static Margin remains available but has no responsive matrix. Colors, borders, gradients, shadows, blur, opacity, cursor, resize/select, hover/focus, Position/Inset/Z-index, and Typography also remain static-only.

---

## Radius Utilities

### Global `rounded-*`
| Class | Radius |
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

### Edge radius (value set: 0/4/8/12/16/20/24/28/32/40/48/80)
| Top | Right | Bottom | Left |
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

### Single corner
Same value set for:
- `rounded-tl-*`
- `rounded-tr-*`
- `rounded-br-*`
- `rounded-bl-*`

---

## Padding `p-*`

| Class | Value | Class | Value |
| --- | --- | --- | --- |
| `p-0` | 0 | `p-24` | 24px |
| `p-4` | 4px | `p-28` | 28px |
| `p-8` | 8px | `p-40` | 40px |
| `p-12` | 12px | `p-48` | 48px |
| `p-16` | 16px |  |  |
| `p-20` | 20px |  |  |

Applies to `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*` with identical value mapping.

## Margin `m-*`
Same suffix set and prefixes as padding: `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`. Margin remains rem-based and may follow the root font size; it is not part of the stable padding/gap/radius contract.

## Gap
| Class | Value |
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

## Size utilities

### Combined width & height `size-*`
| Class | Size |
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

### Individual width / height
Available for `w-*` and `h-*`: 16 / 20 / 24 / 28 / 32 / 40 / 48 / 56 / 64 / 72 / 80.

---

## Typography

| Class | Font size / line height |
| --- | --- |
| `text-12` | 12px / 16px |
| `text-14` | 14px / 20px |
| `text-16` | 16px / 24px |
| `text-18` | 18px / 28px |
| `text-24` | 24px / 32px |
| `text-32` | 32px / 40px |
| `text-48` | 48px / 58px |
| `text-64` | 64px / 78px |

### Paragraph helpers
| Class | Bottom margin |
| --- | --- |
| `text-12.paragraph` | 8px |
| `text-14.paragraph` | 10px |
| `text-16.paragraph` | 12px |
| `text-18.paragraph` | 14px |
| `text-24.paragraph` | 18px |
| `text-32.paragraph` | 24px |
| `text-48.paragraph` | 36px |
| `text-64.paragraph` | 48px |

### Font weight
| Class | Weight |
| --- | --- |
| `font-regular` | 400 |
| `font-semibold` | 600 |

---

## Theme-aware colors

### Black / White scales
| Color | Background | Text | Border |
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

### Static (theme-independent)
| Color | Background | Text | Border |
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

### Background levels & primary colors
| Class | Description |
| --- | --- |
| `bg-background-1/2/3/4/5/6` | Layered panels |
| `bg-background` | Active theme background |
| `bg/text/border-primary` | Primary color |
| `bg/text/border-foreground` | Foreground color |
| `bg/text/border-logo-1/2` | Brand colors |

### Secondary palette (`bg- / text- / border-`)
`purple`, `indigo`, `blue`, `cyan`, `mint`, `green`, `yellow`, `orange`, `red`

---

## Gradients
| Class | Description |
| --- | --- |
| `bg-gradient-primary` | Glass primary gradient |
| `bg-gradient-gray` | Gray gradient |
| `bg-gradient-black` | Black gradient |
| `bg-gradient-purple` | Purple gradient |
| `bg-gradient-indigo` | Indigo gradient |
| `bg-gradient-blue` | Blue gradient |
| `bg-gradient-cyan` | Cyan gradient |
| `bg-gradient-mint` | Mint gradient |
| `bg-gradient-green` | Green gradient |
| `bg-gradient-yellow` | Yellow gradient |
| `bg-gradient-orange` | Orange gradient |
| `bg-gradient-red` | Red gradient |

---

## Shadows / Effects / Blur
| Class | Effect |
| --- | --- |
| `shadow-glass-1` | Multi-layer glass shadow with 1px border |
| `shadow-glass-2` | Stronger glass shadow |
| `shadow-glow` | Outer glow |
| `shadow-focus` | Focus ring |
| `shadow-inner` | Inner shadow |
| `shadow-drop-1` | Soft drop shadow |
| `shadow-drop-2` | Strong drop shadow |
| `shadow-image-hover` | Inset image hover shadow |
| `backdrop-blur-40` | Blur 20px |
| `backdrop-blur-100` | Blur 50px |

---

## Base layer (auto applied)
- `:root` + `.theme-*` provide theme variables (SnowUI / iOS light & dark).
- `@layer base` sets `html`, `body`, `code` fonts, smoothing, and default colors.
- Phosphor Duotone icons have background opacity forced to `0.08`.

**Usage**: import `snowui.css` once, then apply any classes above just like Tailwind utilities.
