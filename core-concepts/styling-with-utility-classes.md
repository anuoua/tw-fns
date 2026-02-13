# Styling with Utility Classes

## Overview

jstw 采用函数式 API 来组合工具类，每个样式属性都是独立的函数，支持 tree-shaking 和类型安全。

## 核心设计

### 函数式 API

```typescript
import {
  flex,
  p_4,
  bg_blue_500,
  merge,
  toInline,
  generateThemeCSS,
} from "jstw";

// 生成主题 CSS 变量（只需一次）
const themeCSS = generateThemeCSS();
document.head.insertAdjacentHTML("beforeend", `<style>${themeCSS}</style>`);

// 预定义样式（函数字面量）
const styles = merge(flex, p_4, bg_blue_500);

toInline(styles);
// "display: flex; padding: var(--spacing-4); background-color: var(--color-blue-500);"
```

### 带参数样式

```typescript
import { p, text, bg } from "jstw";

// 高阶函数返回样式函数
const styles = merge(
  p("14px"),
  text("#f00"),
  bg("linear-gradient(to right, #ff0000, #0000ff)"),
);
```

### 样式分类

按功能分类的样式函数，支持按需导入：

```typescript
// Layout
import { block, inline_block, flex, grid, hidden } from "jstw";

// Spacing
import { p_4, px_2, m_auto, mx_4 } from "jstw";

// Sizing
import { w_64, h_screen, max_w_screen } from "jstw";

// Typography
import { text_xl, font_bold, text_center } from "jstw";

// Colors
import { text_red_500, bg_blue_500, border_gray_200 } from "jstw";
```

## 设计优势

1. **极致轻量**：按需导入，tree-shaking 友好
2. **类型安全**：完整 TypeScript 支持
3. **Lazy 执行**：样式定义时不计算，输出时才执行
4. **可组合**：使用 `merge` 组合多个样式
5. **条件样式**：支持条件逻辑

## 与 Tailwind 的对比

| 特性         | Tailwind    | jstw            |
| ------------ | ----------- | --------------- |
| API          | 字符串类名  | 函数式 API      |
| 类型检查     | 无/社区方案 | 原生 TypeScript |
| Tree-shaking | 需要配置    | 原生支持        |
| 输出         | CSS 类      | 原生 CSS        |
| 使用位置     | HTML 模板   | JS/TS 代码      |

## 使用示例

### 卡片组件

```typescript
import {
  merge,
  flex,
  p_4,
  p_6,
  gap_x_4,
  max_w_sm,
  mx_auto,
  rounded_xl,
  bg_white,
  shadow_lg,
} from "jstw";
import { toCSS } from "jstw";

const cardStyles = merge(
  mx_auto,
  max_w_sm,
  flex,
  gap_x_4,
  rounded_xl,
  bg_white,
  p_6,
  shadow_lg,
);

toCSS(cardStyles, ".card");

// 输出:
// .card {
//   display: flex;
//   margin: auto;
//   max-width: var(--max-width-sm);
//   gap: var(--spacing-4);
//   border-radius: var(--radius-xl);
//   background-color: var(--color-white);
//   padding: var(--spacing-6);
//   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
// }
```

### 按钮组件

```typescript
import {
  merge,
  p_2,
  p_3,
  text_white,
  rounded_md,
  border,
  border_transparent,
  bg_blue_500,
  bg_blue_600,
  bg_blue_700,
  cursor_pointer,
  transition,
} from "jstw";
import { hover, active } from "jstw";

const buttonStyles = merge(
  p_3,
  text_white,
  rounded_md,
  border,
  border_transparent,
  bg_blue_500,
  cursor_pointer,
  transition,
  hover(bg_blue_600),
  active(bg_blue_700),
);

toInline(buttonStyles);

// 输出内联样式:
// padding: var(--spacing-3); color: var(--color-white); border-radius: var(--radius-md); border: 1px solid transparent; background-color: var(--color-blue-500); cursor: pointer; transition: all 0.15s ease-in-out;
// &:hover { background-color: var(--color-blue-600); }
// &:active { background-color: var(--color-blue-700); }
```

## CSS 变量系统

jstw 使用 CSS 变量实现主题系统，所有工具类都引用 CSS 变量而不是具体值。

### 生成主题 CSS 变量

`generateThemeCSS()` 接受两个可选参数：

```typescript
/**
 * 生成主题 CSS 变量
 * @param selector CSS 选择器，默认为 ":root"
 * @param theme 主题配置，默认为内置主题
 * @returns CSS 字符串
 */
function generateThemeCSS(selector: string = ":root", theme?: Theme): string;
```

在使用样式之前，需要先生成并注入主题 CSS 变量：

```typescript
import { generateThemeCSS, defaultTheme } from "jstw";

// 使用默认主题生成 CSS 变量
const themeCSS = generateThemeCSS();

// 使用自定义主题
const customThemeCSS = generateThemeCSS(":root", customTheme);

// 生成到特定选择器
const darkThemeCSS = generateThemeCSS(":root[data-theme='dark']", defaultTheme);
const blueThemeCSS = generateThemeCSS(".theme-blue", blueTheme);

// 注入到文档
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <style>${themeCSS}</style>
  <style>${darkThemeCSS}</style>
  <style>${blueThemeCSS}</style>
`,
);
```

### 指定主题选择器

`generateThemeCSS()` 接受一个可选的 `selector` 参数：

```typescript
import { generateThemeCSS } from "jstw";

// 默认：生成到 :root
const themeCSS = generateThemeCSS();

// 自定义选择器：生成到深色模式
const darkThemeCSS = generateThemeCSS(":root[data-theme='dark']");

// 自定义选择器：生成到特定主题类
const blueThemeCSS = generateThemeCSS(".theme-blue");

// 同时注入多个主题
document.head.insertAdjacentHTML(
  "beforeend",
  `
  <style>${themeCSS}</style>
  <style>${darkThemeCSS}</style>
  <style>${blueThemeCSS}</style>
`,
);
```

### 主题 CSS 变量示例

```css
/* 默认主题 */
:root {
  /* 颜色 */
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-700: #1d4ed8;
  --color-white: #ffffff;
  --color-gray-900: #111827;

  /* 间距 */
  --spacing-0: 0px;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;

  /* 圆角 */
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;

  /* 阴影 */
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* 过渡 */
  --transition-all: all 0.15s ease-in-out;
}
```

### 优势

- **运行时主题切换**：可以通过修改 CSS 变量值实现主题切换
- **一致性**：所有组件使用相同的变量，确保设计一致性
- **可维护性**：修改主题只需更改 CSS 变量值
- **灵活性**：可以覆盖特定组件的 CSS 变量

### 自定义主题

自定义主题需要在导入 jstw 时修改配置，而不是运行时修改：

```typescript
// theme/custom.ts
import { defaultTheme } from "jstw";

export const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    blue: {
      ...defaultTheme.colors.blue,
      500: "#1e40af", // 覆盖默认值
    },
  },
  spacing: {
    ...defaultTheme.spacing,
    4: "1.5rem", // 覆盖默认值
  },
};

export const theme = customTheme;
```

在应用入口处使用自定义主题：

```typescript
// app/index.ts
import { generateThemeCSS } from "jstw";
import { customTheme } from "./theme/custom";

// 使用自定义主题生成 CSS 变量
const themeCSS = generateThemeCSS(":root", customTheme);
document.head.insertAdjacentHTML("beforeend", `<style>${themeCSS}</style>`);
```

## 任意值

使用 `createStyleWithValue` 高阶函数支持任意值：

```typescript
import { p, w, h, bg } from "jstw";
import { merge } from "jstw";

const styles = merge(
  p("12px 24px"),
  w("calc(100% - 2rem)"),
  h("50vh"),
  bg("#316ff6"),
);
```

## 动态构造支持

jstw 相比 Tailwind 的一个优势是支持更灵活的动态值构造：

### 带参数的函数 - 支持动态构造

```typescript
// ✅ 正确 - p(), w(), bg() 等带参数函数可以动态构造
const styles = merge(p(`${padding}px`));
const styles = merge(w(`${width}%`));
const styles = merge(bg(`rgba(${r}, ${g}, ${b}, ${alpha})`));
```
