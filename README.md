# SnowUI Styles

The SnowUI styles package provides shared CSS, themes, utilities, and responsive utilities.

## Install

Use the stylesheet from the repository's CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SnowUI/styles@main/snowui.css">
```

In a workspace with the package available, install it with:

```sh
pnpm add @snowui-design-system/styles
```

Import the styles needed by your application:

```ts
import '@snowui-design-system/styles';
import '@snowui-design-system/styles/themes';
import '@snowui-design-system/styles/utilities';
import '@snowui-design-system/styles/responsive';
```

Responsive utilities are optional and use mobile-first breakpoints. See [SNOWUI_USAGE.md](SNOWUI_USAGE.md) for usage details.

## Develop

Run `pnpm generate:responsive` after changing the responsive utility definitions.
