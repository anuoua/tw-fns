# Colors

## Overview

jstw 提供丰富的调色板，每种颜色包含 11 个色阶（50-950），通过 CSS 变量实现，支持自定义、透明度调整和深色模式。

## 核心设计

### CSS 变量系统

所有颜色工具类都使用 CSS 变量，需要先生成主题 CSS：

```typescript
import { generateThemeCSS } from "jstw";

// 生成并注入主题 CSS 变量（默认使用 :root）
const themeCSS = generateThemeCSS();
document.head.insertAdjacentHTML("beforeend", `<style>${themeCSS}</style>`);

// 生成深色模式主题（使用自定义选择器）
const darkThemeCSS = generateThemeCSS(":root[data-theme='dark']");
document.head.insertAdjacentHTML("beforeend", `<style>${darkThemeCSS}</style>`);

// 生成的 CSS 变量示例：
// :root {
//   --color-blue-50: #eff6ff;
//   --color-blue-500: #3b82f6;
//   --color-blue-600: #2563eb;
//   --color-blue-700: #1d4ed8;
//   --color-white: #ffffff;
//   --color-gray-900: #111827;
// }
//
// :root[data-theme='dark'] {
//   --color-blue-500: #60a5fa;
//   --color-gray-900: #f9fafb;
// }
```

### 11 级色阶

每个颜色从最浅（50）到最深（950）共 11 个级别：

```typescript
// 默认颜色调色板
const colors = {
  slate: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  gray: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  zinc: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  neutral: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  stone: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  red: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  orange: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  amber: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  yellow: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  lime: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  green: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  emerald: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  teal: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  cyan: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  sky: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  blue: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  indigo: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  violet: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  purple: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  fuchsia: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  pink: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
  rose: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 },
};
```

### 颜色工具类

```typescript
import {
  bg_white,
  bg_gray_100,
  bg_blue_500,
  bg_sky_500,
  text_white,
  text_gray_900,
  text_blue_600,
  border_white,
  border_gray_200,
  border_blue_500,
  outline_white,
  outline_gray_400,
  shadow_sky_500,
} from "jstw";
import { merge } from "jstw";

const styles = merge(bg_blue_500, text_white, border_white, shadow_sky_500);
```

## 透明度

### 语法

使用 `alpha()` 函数或直接使用 RGBA 值调整透明度：

```typescript
import { bg_sky_500, alpha } from "jstw";

// 使用 alpha 函数
const styles = alpha(bg_sky_500, 50); // 50% 不透明度

// 或直接使用 RGBA 值
const styles = bg("rgba(14, 165, 233, 0.5)");
```

### 实现透明度

```typescript
// core/utils/alpha.ts
export function alpha(color: string, opacity: number): string {
  // 将 HEX/OKLCH 颜色转换为 rgba
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  }

  // 处理 OKLCH 格式
  if (color.includes("oklch")) {
    return color.replace(")", ` / ${opacity / 100})`);
  }

  return color;
}

// 使用
export function createColorWithOpacity(
  property: string,
  color: string,
  opacity: number,
): StyleFn {
  return () => ({
    property,
    value: alpha(color, opacity),
  });
}
```

### 预定义透明度

```typescript
// 预定义透明度变体
export const bg_sky_500_50 = createStyle(
  "backgroundColor",
  "var(--color-sky-500-50)",
);
export const text_blue_600_75 = createStyle(
  "color",
  "var(--color-blue-600-75)",
);
```

## 深色模式颜色

```typescript
import { dark } from "jstw";
import { bg_white, bg_gray_800, text_gray_900, text_white } from "jstw";

const styles = merge(
  bg_white, // var(--color-white)
  dark(bg_gray_800), // var(--color-gray-800) 在深色模式下
  text_gray_900, // var(--color-gray-900)
  dark(text_white), // var(--color-white) 在深色模式下
);
```

## 自定义颜色

### 添加单个颜色

```typescript
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    avocado: {
      100: "oklch(0.99 0 0)",
      500: "oklch(0.72 0.11 178)",
    },
    midnight: "#121063",
    tahiti: "#3ab7bf",
  },
};

// 使用自定义颜色（自动生成 CSS 变量）
export const bg_avocado_500 = createStyle(
  "backgroundColor",
  "var(--color-avocado-500)",
);
export const bg_midnight = createStyle(
  "backgroundColor",
  "var(--color-midnight)",
);
```

````

### 覆盖默认颜色

```typescript
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    gray: {
      ...defaultTheme.colors.gray,
      500: "#6b7280", // 覆盖 gray-500
    },
  },
};
````

### 移除颜色

```typescript
export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    lime: undefined, // 移除 lime 颜色
  },
};
```

## 颜色工具函数

### 获取颜色值

```typescript
export function getColor(colorName: string, shade: string): string {
  const color = theme.colors[colorName];
  if (!color) {
    throw new Error(`Color ${colorName} not found in theme`);
  }
  const shadeValue = color[shade];
  if (!shadeValue) {
    throw new Error(`Shade ${shade} not found for color ${colorName}`);
  }
  return shadeValue;
}
```

### 混合颜色

```typescript
export function blendColors(
  color1: string,
  color2: string,
  ratio: number,
): string {
  // 实现颜色混合逻辑
  // ...
}
```

### 调整亮度

```typescript
export function adjustBrightness(color: string, amount: number): string {
  // 实现亮度调整
  // ...
}
```

## 使用示例

### 按钮

```typescript
import { merge, p_3, rounded_md, cursor_pointer, transition } from "jstw";
import { bg_blue_500, bg_blue_600, bg_blue_700, text_white } from "jstw";
import { hover, active } from "jstw";

const buttonStyles = merge(
  bg_blue_500,
  hover(bg_blue_600),
  active(bg_blue_700),
  text_white,
  p_3,
  rounded_md,
  cursor_pointer,
  transition,
);
```

### 卡片

```typescript
import { merge, rounded_xl, p_6, shadow_lg } from "jstw";
import {
  bg_white,
  border_black,
  outline_black,
  bg_gray_800,
  shadow_none,
} from "jstw";
import { dark } from "jstw";
import { outline, outline_offset_negative_1 } from "jstw";

const cardStyles = merge(
  bg_white,
  dark(bg_gray_800),
  dark(shadow_none),
  dark(outline_offset_negative_1),
  rounded_xl,
  p_6,
  shadow_lg,
  outline,
  outline_black,
  dark(outline_white),
);
```

### 渐变

```typescript
import { bg } from "jstw";

const gradientStyles = bg("linear-gradient(to right, #ff0000, #0000ff)");
```

## 设计最佳实践

### 使用语义化颜色

```typescript
// 定义语义化颜色
export const theme = {
  colors: {
    ...defaultTheme.colors,
    primary: {
      light: "#60a5fa",
      DEFAULT: "#3b82f6",
      dark: "#1d4ed8",
    },
    success: "#22c55e",
    warning: "#eab308",
    error: "#ef4444",
  },
};

// 使用语义化颜色
const styles = merge(
  bg_primary, // 默认值
  hover(bg_primary_dark),
);
```

### 确保对比度

```typescript
// 使用 WCAG 标准的对比度
const textColors = {
  light: "#111827", // 对比度 > 4.5:1 在白色背景上
  dark: "#f9fafb", // 对比度 > 4.5:1 在深色背景上
};

const styles = merge(bg_white, text_light, dark(bg_gray_900), dark(text_dark));
```

### 避免硬编码颜色

```typescript
// ❌ 错误
const styles = bg("#3b82f6");

// ✅ 正确
const styles = bg_blue_500;
```

## 与 Tailwind 的对比

| 功能       | Tailwind                  | jstw                    |
| ---------- | ------------------------- | ----------------------- |
| 颜色语法   | `bg-blue-500`             | `bg_blue_500`           |
| 透明度     | `bg-sky-500/50`           | `alpha(bg_sky_500, 50)` |
| 深色模式   | `dark:bg-gray-800`        | `dark(bg_gray_800)`     |
| 自定义颜色 | `@theme` CSS 变量         | TypeScript 配置         |
| 覆盖默认   | 重定义变量                | 对象合并                |
| 移除颜色   | `--color-lime-*: initial` | `lime: undefined`       |

## 实现细节

### 颜色工具类生成

```typescript
// utils/generate-color-utilities.ts
export function generateColorUtilities(
  property: string,
  colors: Record<string, Record<string, string>>,
): Record<string, StyleFn> {
  const utilities: Record<string, StyleFn> = {};

  Object.entries(colors).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      const utilityName = `${property}_${colorName}_${shade}`;
      // 使用 CSS 变量
      utilities[utilityName] = createStyle(
        property,
        `var(--color-${colorName}-${shade})`,
      );
    });
  });

  return utilities;
}

// 使用
const bgUtilities = generateColorUtilities("bg", theme.colors);
const textUtilities = generateColorUtilities("text", theme.colors);
```

### 导出所有颜色

```typescript
// colors/index.ts
export * from "./background";
export * from "./text";
export * from "./border";
export * from "./outline";
export * from "./shadow";
```
