# Theme Variables

## Overview

jstw 的主题变量通过 TypeScript 配置实现，自动生成 CSS 变量作为设计令牌（design tokens）。

## 核心设计

### 主题配置

```typescript
// theme/index.ts
export const theme = {
  // 颜色
  colors: {
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
    gray: {
      // ... 11-step scale
    },
    // ... more colors
  },

  // 间距
  spacing: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    auto: "auto",
  },

  // 字体
  fontFamily: {
    sans: ["ui-sans-serif", "system-ui", "sans-serif"],
    serif: ["ui-serif", "Georgia", "serif"],
    mono: ["ui-monospace", "SFMono-Regular", "monospace"],
  },

  // 断点
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },

  // 圆角
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    xl2: "1rem",
    xl3: "1.5rem",
    full: "9999px",
  },

  // 阴影
  boxShadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    xl2: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
  },

  // 过渡
  transition: {
    all: "all 0.15s ease-in-out",
  },

  // 动画
  animation: {
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite",
  },

  // 关键帧
  keyframes: {
    spin: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
    ping: {
      "75%, 100%": { transform: "scale(2)", opacity: "0" },
    },
    pulse: {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.5" },
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
      },
      "50%": {
        transform: "translateY(0)",
        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
};
```

### 生成 CSS 变量

使用 `generateThemeCSS()` 函数将主题配置转换为 CSS 变量：

```typescript
import { generateThemeCSS, defaultTheme } from "jstw";

// 使用默认主题生成 CSS 变量
const themeCSS = generateThemeCSS();

// 使用自定义主题
const customThemeCSS = generateThemeCSS(":root", customTheme);

// 生成到自定义选择器
const darkThemeCSS = generateThemeCSS(":root[data-theme='dark']");
const blueThemeCSS = generateThemeCSS(".theme-blue", blueTheme);

// 输出示例
console.log(themeCSS);

/* 输出：
:root {
  --color-blue-50: #eff6ff;
  --color-blue-100: #dbeafe;
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  --spacing-0: 0px;
  --spacing-1: 0.25rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --transition-all: all 0.15s ease-in-out;
  --animation-spin: spin 1s linear infinite;
  --animation-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animation-bounce: bounce 1s infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

:root[data-theme='dark'] {
  --color-blue-500: #60a5fa;
  --color-gray-900: #f9fafb;
}

.theme-blue {
  --color-blue-500: #60a5fa;
  --color-blue-600: #3b82f6;
}
*/
```

### 注入主题 CSS 变量

```typescript
import { generateThemeCSS } from "jstw";

// 生成并注入到文档
const themeCSS = generateThemeCSS();
const darkThemeCSS = generateThemeCSS(":root[data-theme='dark']");
const blueThemeCSS = generateThemeCSS(".theme-blue", blueTheme);

const styleEl = document.createElement("style");
styleEl.textContent = themeCSS;
document.head.appendChild(styleEl);

// 注入多个主题
const darkStyleEl = document.createElement("style");
darkStyleEl.textContent = darkThemeCSS;
document.head.appendChild(darkStyleEl);

const blueStyleEl = document.createElement("style");
blueStyleEl.textContent = blueThemeCSS;
document.head.appendChild(blueStyleEl);
```

或在构建时生成：

```typescript
// scripts/generate-theme.ts
import { generateThemeCSS } from "jstw";
import { writeFileSync } from "fs";

const themeCSS = generateThemeCSS(":root");
const darkThemeCSS = generateThemeCSS(":root[data-theme='dark']");
const blueThemeCSS = generateThemeCSS(".theme-blue", blueTheme);

writeFileSync("./dist/theme.css", themeCSS);
writeFileSync("./dist/theme-dark.css", darkThemeCSS);
writeFileSync("./dist/theme-blue.css", blueThemeCSS);
```

## 动画系统

jstw 的动画系统通过 CSS 变量和 `@keyframes` 共同实现：

### 工作原理

```typescript
// 1. 在主题中定义关键帧和动画
export const theme = {
  keyframes: {
    "fade-in-scale": {
      "0%": { opacity: "0", transform: "scale(0.95)" },
      "100%": { opacity: "1", transform: "scale(1)" },
    },
  },
  animation: {
    "fade-in-scale": "fade-in-scale 0.3s ease-out",
  },
};

// 2. generateThemeCSS() 生成：
// :root {
//   --animation-fade-in-scale: fade-in-scale 0.3s ease-out;
// }
// @keyframes fade-in-scale {
//   0% { opacity: 0; transform: scale(0.95); }
//   100% { opacity: 1; transform: scale(1); }
// }

// 3. 使用动画
export const animate_fade_in_scale = createStyle(
  "animation",
  "var(--animation-fade-in-scale)",
);

// 4. 输出 CSS：
// .element {
//   animation: var(--animation-fade-in-scale);
// }
```

### 关键点

- **`--animation-*` 变量**：存储完整的动画值（`name duration easing...`）
- **`@keyframes`**：定义动画的关键帧，无法存储在 CSS 变量中
- **两者配合**：CSS 变量引用动画名称，`@keyframes` 提供动画定义

## 命名空间

### 颜色命名空间

```typescript
// --color-* 自动生成 CSS 变量
export const bg_blue_500 = createStyle(
  "backgroundColor",
  "var(--color-blue-500)",
);
export const text_blue_500 = createStyle("color", "var(--color-blue-500)");
export const border_blue_500 = createStyle(
  "borderColor",
  "var(--color-blue-500)",
);
```

### 间距命名空间

```typescript
// --spacing-* 自动生成 CSS 变量
export const p_4 = createStyle("padding", "var(--spacing-4)");
export const px_4 = createMultiStyle([
  { property: "padding-left", value: "var(--spacing-4)" },
  { property: "padding-right", value: "var(--spacing-4)" },
]);
export const m_auto = createStyle("margin", "auto");
export const gap_4 = createStyle("gap", "var(--spacing-4)");
```

### 字体命名空间

```typescript
// --font-* 自动生成 CSS 变量
export const font_sans = createStyle(
  "fontFamily",
  "var(--font-sans, ui-sans-serif, system-ui, sans-serif)",
);
```

### 断点命名空间

```typescript
// --breakpoint-* 用于响应式变体
export const sm = createResponsiveVariant("640px");
export const md = createResponsiveVariant("768px");
export const lg = createResponsiveVariant("1024px");
```

    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    auto: "auto",

},

// 字体
fontFamily: {
sans: ["ui-sans-serif", "system-ui", "sans-serif"],
serif: ["ui-serif", "Georgia", "serif"],
mono: ["ui-monospace", "SFMono-Regular", "monospace"],
},

// 断点
breakpoints: {
sm: "640px",
md: "768px",
lg: "1024px",
xl: "1280px",
xl2: "1536px",
},

// 圆角
borderRadius: {
none: "0px",
sm: "0.125rem",
DEFAULT: "0.25rem",
md: "0.375rem",
lg: "0.5rem",
xl: "0.75rem",
xl2: "1rem",
xl3: "1.5rem",
full: "9999px",
},

// 阴影
boxShadow: {
sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
xl2: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
none: "none",
},

// 动画
animation: {
spin: "spin 1s linear infinite",
ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
bounce: "bounce 1s infinite",
},

// 关键帧
keyframes: {
spin: {
from: { transform: "rotate(0deg)" },
to: { transform: "rotate(360deg)" },
},
ping: {
"75%, 100%": { transform: "scale(2)", opacity: "0" },
},
pulse: {
"0%, 100%": { opacity: "1" },
"50%": { opacity: "0.5" },
},
bounce: {
"0%, 100%": {
transform: "translateY(-25%)",
animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
},
"50%": {
transform: "translateY(0)",
animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
},
},
},
};

````

### 使用主题变量

```typescript
import { theme } from "./theme";

// 在映射表中使用
export const spacingMap = theme.spacing;
export const colorMap = theme.colors.blue;
export const breakpointMap = theme.breakpoints;
````

## 命名空间

### 颜色命名空间

```typescript
// --color-* 映射到 bg_*, text_*, border_* 等
export const bg_blue_500 = createMappedStyle(
  "backgroundColor",
  "500",
  theme.colors.blue,
);
export const text_blue_500 = createMappedStyle(
  "color",
  "500",
  theme.colors.blue,
);
export const border_blue_500 = createMappedStyle(
  "borderColor",
  "500",
  theme.colors.blue,
);
```

### 间距命名空间

```typescript
// --spacing-* 映射到 p_*, m_*, px_*, gap_* 等
export const p_4 = createMappedStyle("padding", "4", theme.spacing);
export const px_4 = createMultiStyle([
  { property: "padding-left", value: theme.spacing[4] },
  { property: "padding-right", value: theme.spacing[4] },
]);
export const m_auto = createStyle("margin", theme.spacing.auto);
export const gap_4 = createMappedStyle("gap", "4", theme.spacing);
```

### 字体命名空间

```typescript
// --font-* 映射到 font_sans, font_serif, font_mono
export const font_sans = createStyle(
  "fontFamily",
  theme.fontFamily.sans.join(", "),
);
export const font_serif = createStyle(
  "fontFamily",
  theme.fontFamily.serif.join(", "),
);
export const font_mono = createStyle(
  "fontFamily",
  theme.fontFamily.mono.join(", "),
);
```

### 断点命名空间

```typescript
// --breakpoint-* 用于响应式变体
export const sm = createResponsiveVariant(theme.breakpoints.sm);
export const md = createResponsiveVariant(theme.breakpoints.md);
export const lg = createResponsiveVariant(theme.breakpoints.lg);
```

## 扩展主题

### 添加新颜色

```typescript
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    mint: {
      500: "oklch(0.72 0.11 178)",
      600: "oklch(0.65 0.12 178)",
    },
    midnight: "#121063",
    tahiti: "#3ab7bf",
  },
};

// 使用新颜色（自动生成 CSS 变量）
export const bg_mint_500 = createStyle(
  "backgroundColor",
  "var(--color-mint-500)",
);
export const bg_midnight = createStyle(
  "backgroundColor",
  "var(--color-midnight)",
);
```

### 添加新断点

```typescript
export const theme = {
  ...defaultTheme,
  breakpoints: {
    ...defaultTheme.breakpoints,
    "xl3": "120rem",
  },
};

// 使用新断点
export const at_xl3 = createResponsiveVariant(theme.breakpoints["xl3"]);
```

### 添加新动画

```typescript
export const theme = {
  ...defaultTheme,
  keyframes: {
    ...defaultTheme.keyframes,
    "fade-in-scale": {
      "0%": { opacity: "0", transform: "scale(0.95)" },
      "100%": { opacity: "1", transform: "scale(1)" },
    },
  },
  animation: {
    ...defaultTheme.animation,
    "fade-in-scale": "fade-in-scale 0.3s ease-out",
  },
};

// generateThemeCSS() 会生成：
// :root {
//   --animation-fade-in-scale: fade-in-scale 0.3s ease-out;
// }
//
// @keyframes fade-in-scale {
//   0% { opacity: 0; transform: scale(0.95); }
//   100% { opacity: 1; transform: scale(1); }
// }

// 使用新动画
export const animate_fade_in_scale = createStyle(
  "animation",
  "var(--animation-fade-in-scale)",
);

// 输出 CSS：
// .element {
//   animation: var(--animation-fade-in-scale);
// }
```

**说明**：`--animation-fade-in-scale` 变量存储完整的动画值（`fade-in-scale 0.3s ease-out`），而不是关键帧定义。关键帧定义会作为 `@keyframes fade-in-scale` 单独输出。

## 覆盖默认值

### 覆盖颜色

```typescript
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    gray: {
      500: "#6b7280", // 自定义 gray-500
    },
  },
};
```

### 覆盖间距

```typescript
export const theme = {
  ...defaultTheme,
  spacing: {
    ...defaultTheme.spacing,
    4: "1.25rem", // 自定义 spacing-4
  },
};
```

## 重置主题

### 移除默认颜色

```typescript
export const theme = {
  ...defaultTheme,
  colors: {}, // 清空所有默认颜色
};
```

### 选择性移除

```typescript
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    lime: undefined, // 移除 lime 颜色
  },
};
```

## 跨项目共享

### 创建共享主题包

```typescript
// packages/design-system/theme.ts
export const sharedTheme = {
  colors: {
    brand: {
      500: "#3b82f6",
      600: "#2563eb",
    },
    // ... more design tokens
  },
};
```

### 在项目中使用

```typescript
import { sharedTheme } from "@myorg/design-system";
import { defaultTheme } from "jstw";

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    ...sharedTheme.colors,
  },
};
```

## 与 Tailwind 的对比

| 特性       | Tailwind             | jstw                 |
| ---------- | -------------------- | -------------------- |
| 定义方式   | `@theme` 指令        | TypeScript 配置      |
| 类型检查   | 无                   | 完整 TypeScript 支持 |
| 扩展方式   | CSS 变量             | 对象扩展             |
| 覆盖默认   | 重定义变量           | 对象合并             |
| 重置       | `--color-*: initial` | 删除属性             |
| 跨项目共享 | CSS 导入             | NPM 包               |

## 实现细节

### 主题类型定义

```typescript
type Theme = {
  colors: Record<string, Record<string, string>>;
  spacing: Record<string, string>;
  fontFamily: Record<string, string[]>;
  breakpoints: Record<string, string>;
  borderRadius: Record<string, string>;
  boxShadow: Record<string, string>;
  animation: Record<string, string>;
  keyframes: Record<string, Record<string, Record<string, string>>>;
};
```
