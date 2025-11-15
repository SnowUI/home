# SnowUI Quick Reference

## 🎨 Design System Variables Cheat Sheet

### Colors
```css
/* Background colors */
var(--background-1)      /* Primary background */
var(--background-2)      /* Secondary background */

/* Text colors */
var(--foreground)        /* Foreground (text) */
var(--black-100)         /* Pure black/white (theme-dependent) */
var(--black-80)          /* 80% opacity */
var(--black-40)          /* 40% opacity */

/* Theme colors */
var(--primary)           /* Primary color */

/* Secondary colors */
var(--secondary-purple)  /* Purple */
var(--secondary-blue)    /* Blue */
var(--secondary-green)   /* Green */
var(--secondary-red)     /* Red */
```

### Spacing
```css
var(--spacing-4)    /* 4px */
var(--spacing-8)    /* 8px */
var(--spacing-12)   /* 12px */
var(--spacing-16)   /* 16px */
var(--spacing-24)   /* 24px */
var(--spacing-40)   /* 40px */
```

### Corner Radius
```css
var(--corner-radius-4)   /* 4px */
var(--corner-radius-8)   /* 8px */
var(--corner-radius-12)  /* 12px */
var(--corner-radius-16)  /* 16px */
var(--corner-radius-24)  /* 24px */
```

### Typography
```css
/* Font sizes and line heights */
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

/* Font weights */
var(--font-weight-regular)   /* 400 */
var(--font-weight-semibold)  /* 600 */
```

### Shadows and Effects
```css
var(--effect-glass-1)        /* Light glass effect */
var(--effect-glass-2)        /* Heavy glass effect */
var(--effect-focus)          /* Focus effect */
var(--effect-glow)           /* Glow effect */
```

### Gradients
```css
var(--gradient-primary)      /* Primary gradient */
var(--gradient-blue)         /* Blue gradient */
var(--gradient-purple)       /* Purple gradient */
var(--gradient-green)        /* Green gradient */
```

## 📦 Asset Paths Cheat Sheet

**Note**: All assets are located in the separate GitHub repository [resource-core](https://github.com/snowui/resource-core)

### Using React Components (Recommended)

```tsx
import { Heart, AvatarByewind, Gradient01 } from '@snowui-design-system/resource-react';
```

**GitHub**: [resource-react](https://github.com/snowui/resource-react)

### Direct Asset Files (requires cloning resource-core repository)

#### Icons
```
assets/icons/{weight}/{name}-{weight}.svg

Weights: regular, thin, light, bold, fill, duotone
Example: assets/icons/regular/heart-regular.svg
```

#### Avatars
```
assets/avatars/avatar-{name}-{size}.jpg

Sizes: 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 128, 256, 512
Example: assets/avatars/avatar-byewind-32.jpg
```

#### Backgrounds
```
assets/backgrounds/{name}-{width}.jpg

Widths: 320, 640, 1024, 1920
Example: assets/backgrounds/gradient-01-1024.jpg
```

#### Other Assets
```
Cursors: assets/cursors/cursors-{name}.svg
Emoji: assets/emoji/{name}.svg
Illustrations: assets/illustrations/{name}-{width}.png
Images: assets/images/image-{id}-{width}.png
Logos: assets/logos/{name}.svg
```

**GitHub Repository**: [resource-core](https://github.com/snowui/resource-core)

## 🚀 Quick Start Templates

### HTML Template
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css">
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
    <!-- Content -->
  </div>
</body>
</html>
```

### React Template
```tsx
import 'https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css';

function App() {
  return (
    <div style={{
      background: 'var(--background-1)',
      padding: 'var(--spacing-16)',
    }}>
      {/* Content */}
    </div>
  );
}
```

## 🎯 Common Combinations

### Card Style
```css
.card {
  background: var(--background-1);
  padding: var(--spacing-24);
  border-radius: var(--corner-radius-16);
  box-shadow: var(--effect-glass-1);
}
```

### Button Style
```css
.button {
  background: var(--primary);
  color: var(--white-100);
  padding: var(--spacing-12) var(--spacing-24);
  border-radius: var(--corner-radius-8);
  font-weight: var(--font-weight-semibold);
}
```

### Input Style
```css
.input {
  background: var(--background-2);
  border: 1px solid var(--black-10);
  padding: var(--spacing-12);
  border-radius: var(--corner-radius-8);
  color: var(--foreground);
}
```

## 📝 Theme Switching

```html
<!-- Default theme (SnowUI Light) -->
<div>Content</div>

<!-- Dark theme -->
<div class="theme-snowui-dark">Content</div>

<!-- iOS themes -->
<div class="theme-ios-light">Content</div>
<div class="theme-ios-dark">Content</div>
```

## 🔍 Finding Assets

Check the following files in the [resource-core](https://github.com/snowui/resource-core) repository to see all available assets:
- Icons: `src/icons.ts`
- Assets: `src/assets.ts`

Or visit the [online example website](https://snowui.github.io/example) to browse all assets.
