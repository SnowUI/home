# Guide for Handing Off SnowUI Resources to Other AI Assistants

## 📋 Overview

This document explains how to hand off SnowUI's design resources (`snowui/resource`) and design system (`snowui/design-system`) to other AI assistants so they can use these resources for web design.

## 🎯 What to Provide to AI

### 1. Design System (`design-system/`)
- **Location**: `design-system/src/snowui.css` in this repository
- **GitHub**: [SnowUI/home](https://github.com/snowui/home) repository
- **Content**: Complete CSS design system with color, spacing, typography, shadows, and other design tokens
- **Purpose**: Provides consistent design standards and style variables

### 2. Design Resources
- **GitHub Repository**: [resource-core](https://github.com/snowui/resource-core)
- **Location**: `assets/` directory (in resource-core repository)
- **Content**: 
  - Icons (1500+)
  - Avatars (330+)
  - Backgrounds (144+)
  - Cursors, emoji, illustrations, images, logos, etc.
- **Purpose**: Provides rich design assets for web design
- **React Components**: [resource-react](https://github.com/snowui/resource-react) - Ready-to-use React components

### 3. Documentation and Guides
- **AI Usage Guide**: `docs/AI_USAGE_GUIDE.md` - Detailed usage instructions
- **Quick Reference**: `docs/QUICK_REFERENCE.md` - Quick lookup for design tokens and asset paths

## 📝 Steps to Hand Off to AI

### Method 1: Direct Project Path (Recommended)

If the AI assistant can access your project directory, simply tell it:

```
I have a design system and asset library:

Design System (this repository):
- Location: design-system/src/snowui.css
- GitHub: https://github.com/snowui/home

Design Resources (separate repository):
- GitHub: https://github.com/snowui/resource-core
- React Components: https://github.com/snowui/resource-react

Documentation:
- Usage Guide: https://snowui.github.io/home/docs/AI_USAGE_GUIDE.html
- Quick Reference: https://snowui.github.io/home/docs/QUICK_REFERENCE.html

Please read AI_USAGE_GUIDE.md first to understand how to use these resources, then use them to design web pages.
```

### Method 2: Provide Key File Contents

If the AI assistant cannot directly access the file system, you can:

1. **Copy Design System CSS file content**
   - Open `design-system/src/snowui.css` from this repository
   - Or from GitHub: https://github.com/snowui/home/blob/main/design-system/src/snowui.css
   - Provide the content to the AI

2. **Provide Asset List**
   - Check `src/icons.ts` and `src/assets.ts` in the [resource-core](https://github.com/snowui/resource-core) repository
   - Provide these metadata files to the AI so it knows what assets are available

3. **Provide Usage Guide**
   - Copy the content of `docs/AI_USAGE_GUIDE.md` to the AI
   - Or provide the link: https://snowui.github.io/home/docs/AI_USAGE_GUIDE.html

### Method 3: Create Independent Working Directory

You can create an independent directory containing necessary files:

```bash
# Create independent directory
mkdir snowui-for-ai
cd snowui-for-ai

# Clone design system repository
git clone https://github.com/snowui/home.git
cd home

# Clone asset repository
git clone https://github.com/snowui/resource-core.git

# Documentation is already in the docs/ directory of the home repository

# Create simplified asset index (optional)
# You can create a simple JSON file listing all available assets
```

Then provide this directory to the AI.

## 💡 Prompt Templates for AI

### Template 1: Complete Introduction

```
I have a design system and asset library, and I want you to use them to design web pages.

Design System:
- GitHub: https://github.com/snowui/home
- File: design-system/src/snowui.css

Asset Library:
- GitHub: https://github.com/snowui/resource-core
- React Components: https://github.com/snowui/resource-react

Please read https://snowui.github.io/home/docs/AI_USAGE_GUIDE.html to understand:
1. How to use the design system's CSS variables
2. How to reference and use design assets
3. Design standards and best practices

Then create web page designs based on my requirements using these resources.
```

### Template 2: Quick Start

```
Please design a web page using the following resources:

1. Design System: Import snowui/design-system/src/snowui.css
   - Use CSS variables to define styles (e.g., var(--background-1), var(--spacing-16))
   - Supports multiple themes (snowui-light, snowui-dark, ios-light, ios-dark)

2. Design Assets: Reference from snowui/resource/core/assets/
   - Icons: icons/{weight}/{name}-{weight}.svg
   - Avatars: avatars/avatar-{name}-{size}.jpg
   - Backgrounds: backgrounds/{name}-{width}.jpg

For detailed instructions, please refer to snowui/docs/AI_USAGE_GUIDE.md
```

### Template 3: Specific Task

```
Please create a [specific page type, e.g., login page/product showcase page/profile page] using the SnowUI design system.

Requirements:
1. Use design variables from design-system/src/snowui.css (this repository)
2. Select appropriate assets from [resource-core](https://github.com/snowui/resource-core), or use React components from [resource-react](https://github.com/snowui/resource-react)
3. Reference example code from the [example](https://github.com/snowui/example) repository
4. Ensure the design follows SnowUI design standards

Please check https://snowui.github.io/home/docs/AI_USAGE_GUIDE.html first to understand how to use these resources.
```

## ✅ Verify AI Understanding

After handing off to the AI, you can verify through the following methods:

1. **Ask about Design System Variables**
   - "Please create a card using SnowUI design system variables"
   - Check if it uses `var(--background-1)`, `var(--spacing-16)`, etc.

2. **Ask about Asset Usage**
   - "Please create a user card using SnowUI icons and avatars"
   - Check if it correctly references asset paths

3. **Ask about Theme Switching**
   - "Please create a page that supports dark theme"
   - Check if it uses theme classes (e.g., `theme-snowui-dark`)

## 📚 Related Documentation

- **[AI_USAGE_GUIDE.md](./AI_USAGE_GUIDE.md)** - Complete usage guide
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick reference

## 🎨 Example: Complete Handoff Instructions

```
Hello! I want you to use my design system and asset library to design web pages.

## Project Locations
- Design System: https://github.com/snowui/home (design-system/src/snowui.css)
- Design Assets: https://github.com/snowui/resource-core
- React Components: https://github.com/snowui/resource-react
- Usage Guide: https://snowui.github.io/home/docs/AI_USAGE_GUIDE.html

## Quick Start
1. First read https://snowui.github.io/home/docs/AI_USAGE_GUIDE.html to understand how to use
2. Check https://snowui.github.io/home/docs/QUICK_REFERENCE.html to quickly find design variables and asset paths
3. Reference https://snowui.github.io/example to view the example website

## Key Points
- Design system uses CSS variables (e.g., var(--background-1))
- Recommended: Use React components: @snowui-design-system/resource-react
- Or directly reference asset files (requires cloning resource-core repository)
- Supports multiple theme switching (by adding theme classes)

Now please help me design a [your requirement].
```

---

With the above methods, other AI assistants will be able to understand and use your design system and asset library!
