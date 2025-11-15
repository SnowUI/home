# SnowUI Design Resources AI Usage Guide

This document is designed to help AI assistants understand and use SnowUI design system assets and design system for web design.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Design System (design-system)](#design-system-design-system)
3. [Design Resources (resource)](#design-resources-resource)
4. [Quick Start](#quick-start)
5. [Usage Examples](#usage-examples)
6. [Best Practices](#best-practices)

---

## Project Overview

SnowUI consists of two core projects for web design:

### 1. `design-system/` - Design System
**Location**: `design-system/src/snowui.css` in this repository

Contains a complete design system CSS variables, including:
- Color system (theme colors, background colors, secondary colors)
- Spacing system (spacing)
- Corner radius system (corner-radius)
- Typography system (font-size, line-height)
- Shadows and effects (glass effects, gradients)
- Multi-theme support (SnowUI Light/Dark, iOS Light/Dark)

### 2. Design Resources - Design Assets
**Location**: Separate GitHub repository [resource-core](https://github.com/snowui/resource-core)

Contains a rich design asset library:
- **Icons**: 1500+ icons, supporting 6 weights (regular, thin, light, bold, fill, duotone)
- **Avatars**: 330+ avatar images
- **Backgrounds**: 144+ background images
- **Cursors**: 21+ cursor SVGs
- **Emoji**: 22+ emoji SVGs
- **Illustrations**: 180+ illustration images
- **Images**: 6+ sample images
- **Logos**: 124+ brand logo SVGs

**GitHub Repositories**:
- [resource-core](https://github.com/snowui/resource-core) - Core resource package (all assets)
- [resource-react](https://github.com/snowui/resource-react) - React components package
- [example](https://github.com/snowui/example) - Example website

---

## Design System (design-system)

### File Location
```
snowui/design-system/src/snowui.css
```

### Core Content

#### 1. CSS Variable System

The design system uses CSS variables (CSS Custom Properties) to define all design tokens.

**Color Variable Examples:**
```css
/* Theme colors (theme-dependent) */
--black-100: #000000FF;
--white-100: #FFFFFFFF;
--background-1: #FFFFFFFF;
--primary: var(--black-100);

/* Secondary colors */
--secondary-purple: #B899EBFF;
--secondary-blue: #7DBBFFFF;
--secondary-green: #71DD8CFF;
/* ... more colors */
```

**Spacing Variables:**
```css
--spacing-4: 0.25rem;   /* 4px */
--spacing-8: 0.5rem;    /* 8px */
--spacing-16: 1rem;     /* 16px */
--spacing-24: 1.5rem;   /* 24px */
/* ... more spacing */
```

**Corner Radius Variables:**
```css
--corner-radius-4: 0.25rem;   /* 4px */
--corner-radius-8: 0.5rem;    /* 8px */
--corner-radius-16: 1rem;     /* 16px */
/* ... more corner radius */
```

#### 2. Theme System

Supports 4 themes:
- `theme-snowui-light` (default)
- `theme-snowui-dark`
- `theme-ios-light`
- `theme-ios-dark`

**Usage:**
```html
<!-- Default SnowUI Light theme -->
<div class="container">
  <!-- Content -->
</div>

<!-- Use SnowUI Dark theme -->
<div class="theme-snowui-dark">
  <div class="container">
    <!-- Content -->
  </div>
</div>
```

#### 3. Utility Classes

The design system provides some practical utility classes:

**Font Utility Classes:**
```html
<div class="font-12">12px font</div>
<div class="font-14">14px font</div>
<div class="font-16">16px font</div>
<div class="font-24">24px font</div>
```

**Glass Effects:**
```html
<div class="glass-1">Light glass effect</div>
<div class="glass-2">Heavy glass effect</div>
```

**Gradient Backgrounds:**
```html
<div class="bg-gradient-primary">Primary gradient</div>
<div class="bg-gradient-blue">Blue gradient</div>
<div class="bg-gradient-purple">Purple gradient</div>
```

### Using in Web Design

#### Method 1: Directly Import CSS File

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css">
</head>
<body>
  <div style="background: var(--background-1); padding: var(--spacing-16);">
    <h1 style="color: var(--foreground);">Title</h1>
  </div>
</body>
</html>
```

#### Method 2: Use in React/Vue Projects

```tsx
// React example
import 'https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css';

function App() {
  return (
    <div style={{ 
      background: 'var(--background-1)',
      padding: 'var(--spacing-16)',
      borderRadius: 'var(--corner-radius-8)'
    }}>
      <h1 style={{ color: 'var(--foreground)' }}>Title</h1>
    </div>
  );
}
```

#### Method 3: Use with Tailwind CSS

Design system variables can be used directly in Tailwind:

```tsx
<div className="bg-[var(--background-1)] p-[var(--spacing-16)] rounded-[var(--corner-radius-8)]">
  <h1 className="text-[var(--foreground)]">Title</h1>
</div>
```

---

## Design Resources (resource)

### Project Structure

Design resources are located in the separate GitHub repository [resource-core](https://github.com/snowui/resource-core):

```
resource-core/
├── assets/            # All original asset files
│   ├── icons/        # Icons (6 weights)
│   ├── avatars/      # Avatars
│   ├── backgrounds/  # Backgrounds
│   ├── cursors/      # Cursors
│   ├── emoji/        # Emoji
│   ├── illustrations/# Illustrations
│   ├── images/     # Images
│   └── logos/        # Logos
└── src/              # Metadata files (icons.ts, assets.ts)
```

**Related Repositories**:
- [resource-core](https://github.com/snowui/resource-core) - Core resource package
- [resource-react](https://github.com/snowui/resource-react) - React components package

### Asset Types and Locations

#### 1. Icons
- **GitHub Repository**: [resource-core](https://github.com/snowui/resource-core)
- **Path**: `assets/icons/{weight}/` (in resource-core repository)
- **Weights**: regular, thin, light, bold, fill, duotone
- **Format**: SVG
- **Count**: 1500+ icons

#### 2. Avatars
- **GitHub Repository**: [resource-core](https://github.com/snowui/resource-core)
- **Path**: `assets/avatars/` (in resource-core repository)
- **Format**: JPG
- **Sizes**: Auto-generated multiple sizes (16×16 to 512×512)
- **Count**: 330+ avatars

#### 3. Backgrounds
- **GitHub Repository**: [resource-core](https://github.com/snowui/resource-core)
- **Path**: `assets/backgrounds/` (in resource-core repository)
- **Format**: JPG
- **Sizes**: Auto-generated multiple widths (320, 640, 1024, 1920)
- **Count**: 144+ backgrounds

#### 4. Other Assets
- **Cursors**: `assets/cursors/` (SVG) - [resource-core](https://github.com/snowui/resource-core)
- **Emoji**: `assets/emoji/` (SVG) - [resource-core](https://github.com/snowui/resource-core)
- **Illustrations**: `assets/illustrations/` (PNG/SVG) - [resource-core](https://github.com/snowui/resource-core)
- **Images**: `assets/images/` (PNG) - [resource-core](https://github.com/snowui/resource-core)
- **Logos**: `assets/logos/` (SVG) - [resource-core](https://github.com/snowui/resource-core)

### Usage Methods

#### Method 1: Direct Asset Files (Recommended for Web Design)

**In HTML** (requires cloning [resource-core](https://github.com/snowui/resource-core) repository):
```html
<!-- Use icon -->
<img src="./assets/icons/regular/heart-regular.svg" alt="Heart" width="24" height="24">

<!-- Use avatar -->
<img src="./assets/avatars/avatar-byewind-32.jpg" alt="Avatar" width="32" height="32">

<!-- Use background -->
<img src="./assets/backgrounds/gradient-01-1024.jpg" alt="Background">
```

**In CSS** (requires cloning [resource-core](https://github.com/snowui/resource-core) repository):
```css
.hero-section {
  background-image: url('./assets/backgrounds/gradient-01-1024.jpg');
  background-size: cover;
  background-position: center;
}
```

#### Method 2: Use React Components (if project uses React)

```tsx
import { Heart, AvatarByewind, Gradient01 } from '@snowui-design-system/resource-react';

function App() {
  return (
    <div>
      {/* Icon */}
      <Heart size={24} weight="bold" className="text-red-500" />
      
      {/* Avatar */}
      <AvatarByewind size={64} className="rounded-full" />
      
      {/* Background */}
      <Gradient01 width={1024} />
    </div>
  );
}
```

#### Method 3: View Available Assets List

Check metadata files to see all available assets:

```typescript
// Check resource/core/src/icons.ts for all icons
// Check resource/core/src/assets.ts for all assets
```

---

## Quick Start

### Step 1: Understand Project Structure

**This Repository (SnowUI/home)**:
```
snowui/
├── design-system/     # Design system CSS
│   └── src/
│       └── snowui.css
└── docs/              # Documentation
```

**Related Repositories**:
- [resource-core](https://github.com/snowui/resource-core) - All design assets
- [resource-react](https://github.com/snowui/resource-react) - React components package
- [example](https://github.com/snowui/example) - Example website

### Step 2: Import Design System

Import design system CSS in HTML or project:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css">
```

### Step 3: Use Design Variables

Use CSS variables to define styles:

```css
.card {
  background: var(--background-1);
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  box-shadow: var(--effect-glass-1);
  color: var(--foreground);
}
```

### Step 4: Use Design Assets

**Recommended: Use React Components**
```tsx
import { Heart } from '@snowui-design-system/resource-react';
<Heart size={24} />
```

**Or use asset files directly** (requires cloning [resource-core](https://github.com/snowui/resource-core) repository):
```html
<img src="./assets/icons/regular/star-regular.svg" alt="Star">
```

---

## Usage Examples

### Example 1: Create a Card Component

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css">
  <style>
    .card {
      background: var(--background-1);
      padding: var(--spacing-24);
      border-radius: var(--corner-radius-16);
      box-shadow: var(--effect-glass-1);
      max-width: 400px;
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: var(--spacing-12);
      margin-bottom: var(--spacing-16);
    }
    
    .card-title {
      font-size: var(--font-size-24);
      line-height: var(--line-height-24);
      color: var(--foreground);
      font-weight: var(--font-weight-semibold);
    }
    
    .card-content {
      color: var(--black-80);
      font-size: var(--font-size-16);
      line-height: var(--line-height-16);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <!-- If using React components: <Heart size={24} /> -->
      <!-- If cloned resource-core repository: -->
      <img src="./assets/icons/regular/star-regular.svg" 
           alt="Star" width="24" height="24">
      <h2 class="card-title">Title</h2>
    </div>
    <p class="card-content">
      This is card content. Created using SnowUI design system variables and assets.
    </p>
  </div>
</body>
</html>
```

### Example 2: Create a Hero Section with Background

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css">
  <style>
    .hero {
      position: relative;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-40);
      border-radius: var(--corner-radius-24);
      overflow: hidden;
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: var(--white-100);
    }
    
    .hero-title {
      font-size: var(--font-size-48);
      line-height: var(--line-height-48);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--spacing-16);
    }
    
    .hero-subtitle {
      font-size: var(--font-size-18);
      line-height: var(--line-height-18);
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="hero">
    <!-- If cloned resource-core repository: -->
    <img src="./assets/backgrounds/gradient-01-1024.jpg" 
         alt="Background" class="hero-background">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to SnowUI</h1>
      <p class="hero-subtitle">A complete design system and asset library</p>
    </div>
  </div>
</body>
</html>
```

### Example 3: Create a User Profile Card

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/snowui/home@main/design-system/src/snowui.css">
  <style>
    .profile-card {
      background: var(--background-1);
      padding: var(--spacing-24);
      border-radius: var(--corner-radius-16);
      box-shadow: var(--effect-glass-1);
      max-width: 300px;
    }
    
    .profile-header {
      display: flex;
      align-items: center;
      gap: var(--spacing-16);
      margin-bottom: var(--spacing-20);
    }
    
    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .profile-name {
      font-size: var(--font-size-18);
      line-height: var(--line-height-18);
      font-weight: var(--font-weight-semibold);
      color: var(--foreground);
      margin-bottom: var(--spacing-4);
    }
    
    .profile-role {
      font-size: var(--font-size-14);
      line-height: var(--line-height-14);
      color: var(--black-80);
    }
    
    .profile-stats {
      display: flex;
      gap: var(--spacing-24);
      padding-top: var(--spacing-20);
      border-top: 1px solid var(--black-10);
    }
    
    .stat {
      text-align: center;
    }
    
    .stat-value {
      font-size: var(--font-size-24);
      line-height: var(--line-height-24);
      font-weight: var(--font-weight-semibold);
      color: var(--foreground);
    }
    
    .stat-label {
      font-size: var(--font-size-12);
      line-height: var(--line-height-12);
      color: var(--black-80);
      margin-top: var(--spacing-4);
    }
  </style>
</head>
<body>
  <div class="profile-card">
    <div class="profile-header">
      <!-- If cloned resource-core repository: -->
      <img src="./assets/avatars/avatar-byewind-64.jpg" 
           alt="Avatar" class="avatar">
      <div>
        <div class="profile-name">Username</div>
        <div class="profile-role">Designer</div>
      </div>
    </div>
    <div class="profile-stats">
      <div class="stat">
        <div class="stat-value">1.2K</div>
        <div class="stat-label">Followers</div>
      </div>
      <div class="stat">
        <div class="stat-value">456</div>
        <div class="stat-label">Works</div>
      </div>
      <div class="stat">
        <div class="stat-value">89</div>
        <div class="stat-label">Likes</div>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Best Practices

### 1. Use Design System Variables

✅ **Recommended:**
```css
.card {
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  background: var(--background-1);
}
```

❌ **Not Recommended:**
```css
.card {
  padding: 16px;
  border-radius: 8px;
  background: #FFFFFF;
}
```

### 2. Asset Size Selection

- **Icons**: Usually use 16px, 20px, 24px, 32px
- **Avatars**: Choose appropriate size based on context (32px, 48px, 64px, 128px)
- **Backgrounds**: Choose based on container width (320px, 640px, 1024px, 1920px)

### 3. Theme Switching

If you need to support multiple themes, use theme classes:

```html
<div class="theme-snowui-dark">
  <!-- Content will automatically use dark theme -->
</div>
```

### 4. Responsive Design

Combine CSS variables with media queries:

```css
.container {
  padding: var(--spacing-16);
}

@media (min-width: 768px) {
  .container {
    padding: var(--spacing-24);
  }
}
```

### 5. Performance Optimization

- For icons, prioritize SVG (scalable, small file size)
- For avatars and backgrounds, use appropriate sizes (don't use oversized images)
- Consider using WebP format (if supported)

---

## Asset Search Guide

### How to Find Suitable Icons?

1. Check the `src/icons.ts` file in the [resource-core](https://github.com/snowui/resource-core) repository to see all available icons
2. Icon names use kebab-case (e.g., `four-leaf-clover`)
3. Icon files are located in the `assets/icons/{weight}/` directory (in resource-core repository)
4. Or use React components: `import { FourLeafClover } from '@snowui-design-system/resource-react'`

### How to Find Suitable Avatars?

1. Check the `src/assets.ts` file in the [resource-core](https://github.com/snowui/resource-core) repository, filter assets of type `avatars`
2. Avatar files are located in the `assets/avatars/` directory (in resource-core repository)
3. File name format: `avatar-{name}-{size}.jpg`
4. Or use React components: `import { AvatarByewind } from '@snowui-design-system/resource-react'`

### How to Find Suitable Backgrounds?

1. Check the `src/assets.ts` file in the [resource-core](https://github.com/snowui/resource-core) repository, filter assets of type `backgrounds`
2. Background files are located in the `assets/backgrounds/` directory (in resource-core repository)
3. File name format: `{name}-{width}.jpg`
4. Or use React components: `import { Gradient01 } from '@snowui-design-system/resource-react'`

---

## Frequently Asked Questions

### Q: How do I know what icons/assets are available?

A: Check the `src/icons.ts` and `src/assets.ts` files in the [resource-core](https://github.com/snowui/resource-core) repository. These files contain metadata for all available assets. Or visit the [online example website](https://snowui.github.io/example) to browse all assets.

### Q: Can design system variables be used in Tailwind?

A: Yes! Design system CSS variables can be used directly in Tailwind's arbitrary value syntax:
```tsx
<div className="bg-[var(--background-1)] p-[var(--spacing-16)]">
```

### Q: How do I switch themes?

A: Add theme classes to container elements:
```html
<div class="theme-snowui-dark">
  <!-- Content -->
</div>
```

### Q: Do asset files need processing?

A: No. Asset files in the [resource-core](https://github.com/snowui/resource-core) repository are already processed and can be used directly. If you cloned the repository and need to reprocess, you can run:
```bash
cd resource-core
npm run process
```

---

## Summary

Core steps for using SnowUI for web design:

1. **Import Design System**: Import `design-system/src/snowui.css` (this repository)
2. **Use Design Variables**: Use CSS variables to define styles (colors, spacing, corner radius, etc.)
3. **Use Design Assets**: 
   - Recommended: Use React components `@snowui-design-system/resource-react`
   - Or: Clone [resource-core](https://github.com/snowui/resource-core) repository and directly reference asset files
4. **Follow Design Standards**: Use variables and utility classes provided by the design system to maintain design consistency

By following these guidelines, AI assistants can efficiently use the SnowUI design system and assets to create beautiful, consistent web designs.
