# Functions and Directives

## Overview

jstw 使用 TypeScript 函数和配置对象来扩展框架能力，而不是 CSS 指令。所有功能都通过类型安全的 JavaScript/TypeScript 代码实现。

## 核心设计

### 导入与使用

```typescript
// 统一导出
import {
  // 工具类
  p_4,
  bg_blue_500,
  text_white,
  rounded_md,
  // 变体
  hover,
  focus,
  active,
  sm,
  md,
  lg,
  dark,
  // 工具函数
  merge,
  toCSS,
  toInline,
  // 创建函数
  createStyle,
  createStyleWithValue,
  createMappedStyle,
} from "jstw";

// 使用
const styles = merge(p_4, bg_blue_500, hover(bg_blue_700));
```

## 函数

### 创建工具类

```typescript
import {
  createStyle,
  createStyleWithValue,
  createMultiStyle,
  createMappedStyle,
} from "jstw";

// 简单工具类
export const flex = createStyle("display", "flex");
export const block = createStyle("display", "block");
export const hidden = createStyle("display", "none");

// 带值的工具类
export const p = createStyleWithValue("padding");
export const m = createStyleWithValue("margin");
export const bg = createStyleWithValue("backgroundColor");
export const text = createStyleWithValue("color");

// 多值工具类 - 使用 CSS 变量
export const px_4 = createMultiStyle([
  { property: "padding-left", value: "var(--spacing-4)" },
  { property: "padding-right", value: "var(--spacing-4)" },
]);

// 映射值工具类 - 自动生成 CSS 变量引用
export const p_4 = createMappedStyle("padding", "4", "spacing");
export const bg_blue_500 = createMappedStyle(
  "backgroundColor",
  "500",
  "blue",
  "color",
);
```

### 创建变体

```typescript
import { createVariantStyleFn } from "jstw";

// 响应式变体
export function sm(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "media",
    value: "sm",
    selector: "@media (min-width: 640px)",
  });
}

// 伪类变体
export function hover(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "pseudo",
    value: "hover",
    selector: "&:hover",
  });
}

// 容器查询变体
export function at_sm(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "container",
    value: "sm",
    selector: "@container (min-width: 640px)",
  });
}

// Group 变体
export function group_hover(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "group",
    value: "hover",
    selector: ".group:hover &",
  });
}

// Peer 变体
export function peer_invalid(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "peer",
    value: "invalid",
    selector: ".peer:invalid &",
  });
}

// 属性选择器变体
export function aria_checked(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "attribute",
    value: "aria-checked",
    selector: '&[aria-checked="true"]',
  });
}

// 特性查询变体
export function dark(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "feature",
    value: "dark",
    selector: "@media (prefers-color-scheme: dark)",
  });
}
```

### 自定义变体

```typescript
// 命名 group 变体
export function group_hover(groupName: string, style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "group",
    value: `hover-${groupName}`,
    groupName,
    selector: `.group-${groupName}:hover &`,
  });
}

// 命名 peer 变体
export function peer_checked(peerName: string, style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "peer",
    value: `checked-${peerName}`,
    peerName,
    selector: `.peer-${peerName}:checked &`,
  });
}

// 容器查询带名称
export function at_sm(containerName: string, style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "container",
    value: `sm-${containerName}`,
    containerName,
    selector: `@container ${containerName} (min-width: 640px)`,
  });
}

// 自定义选择器
export function customVariant(
  selector: string,
  style: StyleFn,
): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "custom",
    value: selector,
    selector,
  });
}
```

## 工具函数

### merge

```typescript
import { merge } from "jstw";

// 合并多个样式
const styles = merge(p_4, bg_blue_500, hover(bg_blue_700));

// 条件合并
const isActive = true;
const styles = merge(p_4, isActive ? bg_blue_500 : bg_gray_200);

// 过滤 null/undefined
const styles = merge(p_4, shouldShow ? bg_blue_500 : null);
```

### toCSS

```typescript
import { toCSS } from "jstw";

const styles = merge(p_4, bg_blue_500);

// 生成 CSS
const css = toCSS(styles, ".button");

// 输出:
// .button {
//   padding: var(--spacing-4);
//   background-color: var(--color-blue-500);
// }
```

### toInline

```typescript
import { toInline } from "jstw";

const styles = merge(p_4, bg_blue_500);

// 生成内联样式
const inlineStyle = toInline(styles);

// 输出:
// "padding: var(--spacing-4); background-color: var(--color-blue-500);"
```

### generateThemeCSS

```typescript
import { generateThemeCSS } from "jstw";

// 使用默认主题生成 CSS 变量
const themeCSS = generateThemeCSS();

// 使用自定义主题
const customThemeCSS = generateThemeCSS(":root", customTheme);

// 生成到自定义选择器
const darkThemeCSS = generateThemeCSS(":root[data-theme='dark']");
const blueThemeCSS = generateThemeCSS(".theme-blue", blueTheme);

// 输出:
// :root {
//   --color-blue-500: #3b82f6;
//   --color-blue-600: #2563eb;
//   --color-blue-700: #1d4ed8;
//   --color-white: #ffffff;
//   --color-gray-900: #111827;
//   --spacing-0: 0px;
//   --spacing-1: 0.25rem;
//   --spacing-4: 1rem;
//   --spacing-6: 1.5rem;
//   --radius-md: 0.375rem;
//   --radius-lg: 0.5rem;
//   --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
//   --transition-all: all 0.15s ease-in-out;
//   --animation-spin: spin 1s linear infinite;
// }
//
// @keyframes spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
//
// :root[data-theme='dark'] {
//   --color-blue-500: #60a5fa;
//   --color-gray-900: #f9fafb;
// }
//
// @keyframes spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }

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

## 辅助函数

### alpha

```typescript
// 调整颜色透明度
export function alpha(color: string, opacity: number): string {
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  }
  // ... 其他格式处理
  return color;
}

// 使用
export const bg_blue_500_50 = createColorWithOpacity(
  "backgroundColor",
  "#3b82f6",
  50,
);
```

### spacing

```typescript
// 从主题获取间距
export function spacing(value: number | string): string {
  if (typeof value === "number") {
    return theme.spacing[value] || `${value}px`;
  }
  return value;
}

// 使用
export const p_custom = createStyle("padding", spacing(8));
```

### 动画系统

动画通过 CSS 变量和 `@keyframes` 实现：

```typescript
// 主题配置
export const theme = {
  animation: {
    spin: "spin 1s linear infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },
  keyframes: {
    spin: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
    pulse: {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.5" },
    },
  },
};

// generateThemeCSS() 会生成：
// :root {
//   --animation-spin: spin 1s linear infinite;
//   --animation-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }
// @keyframes spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// @keyframes pulse {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0.5; }
// }

// 使用动画
export const animate_spin = createStyle("animation", "var(--animation-spin)");
export const animate_pulse = createStyle("animation", "var(--animation-pulse)");

// 输出：
// .element {
//   animation: var(--animation-spin);
// }
```

**重要**：`--animation-*` 变量存储的是完整的动画值（包括动画名称、持续时间、缓动函数等），而 `@keyframes` 定义了动画的关键帧。

## 配置

### 主题配置

```typescript
// theme/index.ts
export const theme = {
  colors: {
    blue: {
      50: "#eff6ff",
      500: "#3b82f6",
      900: "#1e3a8a",
    },
  },
  spacing: {
    0: "0px",
    4: "1rem",
    8: "2rem",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
  },
  borderRadius: {
    md: "0.375rem",
    lg: "0.5rem",
  },
  fontFamily: {
    sans: ["ui-sans-serif", "system-ui", "sans-serif"],
  },
  boxShadow: {
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
};

// 导出
export default theme;
```

### 配置类型

```typescript
// core/types.ts
export type Theme = {
  colors: Record<string, Record<string, string>>;
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
  borderRadius: Record<string, string>;
  fontFamily: Record<string, string[]>;
  boxShadow: Record<string, string>;
  animation: Record<string, string>;
  keyframes: Record<string, Record<string, Record<string, string>>>;
};
```

## 实现示例

### 完整的按钮样式生成

```typescript
import {
  merge,
  createStyle,
  createStyleWithValue,
  createMultiStyle,
  createVariantStyleFn,
  theme,
} from "jstw";

// 基础工具类 - 使用 CSS 变量引用
export const bg_blue_500 = createStyle(
  "backgroundColor",
  "var(--color-blue-500)",
);
export const bg_blue_600 = createStyle(
  "backgroundColor",
  "var(--color-blue-600)",
);
export const bg_blue_700 = createStyle(
  "backgroundColor",
  "var(--color-blue-700)",
);
export const text_white = createStyle("color", "var(--color-white)");
export const p_3 = createStyle("padding", "var(--spacing-3)");
export const rounded_md = createStyle("borderRadius", "var(--radius-md)");
export const cursor_pointer = createStyle("cursor", "pointer");
export const transition = createStyle("transition", "var(--transition-all)");

// 变体
export const hover = (style: StyleFn): VariantStyleFn => {
  return createVariantStyleFn(style, {
    type: "pseudo",
    value: "hover",
    selector: "&:hover",
  });
};

export const active = (style: StyleFn): VariantStyleFn => {
  return createVariantStyleFn(style, {
    type: "pseudo",
    value: "active",
    selector: "&:active",
  });
};

// 按钮样式
export const buttonStyles = merge(
  bg_blue_500,
  hover(bg_blue_600),
  active(bg_blue_700),
  text_white,
  p_3,
  rounded_md,
  cursor_pointer,
  transition,
);

// 导出 CSS
import { toCSS, generateThemeCSS } from "jstw";

// 生成主题 CSS 变量（只需一次，默认使用 :root）
const themeCSS = generateThemeCSS();

// 生成深色模式主题变量
const darkThemeCSS = generateThemeCSS(":root[data-theme='dark']");

// 生成组件 CSS
const buttonCSS = toCSS(buttonStyles, ".btn");

// 输出:
// :root {
//   --color-blue-500: #3b82f6;
//   --color-blue-600: #2563eb;
//   --color-blue-700: #1d4ed8;
//   --color-white: #ffffff;
//   --spacing-3: 0.75rem;
//   --radius-md: 0.375rem;
//   --transition-all: all 0.15s ease-in-out;
// }
//
// @keyframes spin {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
//
// :root[data-theme='dark'] {
//   --color-blue-500: #60a5fa;
//   --color-blue-600: #3b82f6;
//   --color-blue-700: #2563eb;
// }
//
// .btn {
//   background-color: var(--color-blue-500);
//   color: var(--color-white);
//   padding: var(--spacing-3);
//   border-radius: var(--radius-md);
//   cursor: pointer;
//   transition: var(--transition-all);
// }
// .btn:hover {
//   background-color: var(--color-blue-600);
// }
// .btn:active {
//   background-color: var(--color-blue-700);
// }
```

## 与 Tailwind 的对比

| 功能            | Tailwind | jstw                          |
| --------------- | -------- | ----------------------------- |
| @import         | CSS 导入 | ES 模块导入                   |
| @theme          | CSS 指令 | TypeScript 配置对象           |
| @utility        | CSS 指令 | `createStyle()` 函数          |
| @variant        | CSS 指令 | `createVariantStyleFn()` 函数 |
| @custom-variant | CSS 指令 | 自定义函数                    |
| @apply          | CSS 指令 | `merge()` 函数                |
| @source         | CSS 指令 | 不需要                        |
| --alpha()       | CSS 函数 | `alpha()` TypeScript 函数     |
| --spacing()     | CSS 函数 | `spacing()` TypeScript 函数   |
| 类型安全        | ❌ 无    | ✅ 原生 TypeScript            |

## 实现细节

### 核心类型

```typescript
export type StyleRule = { property: string; value: string };
export type MultiStyleRule = StyleRule[];
export type StyleFn = () => StyleRule | MultiStyleRule;

export type VariantInfo = {
  type: VariantType;
  value: string;
  selector?: string;
  containerName?: string;
  groupName?: string;
  peerName?: string;
};

export type VariantStyleFn = () => {
  styles: StyleRule | MultiStyleRule;
  variant?: VariantInfo;
};

export type StyleCollection = StyleFn[];
```

### merge 实现

```typescript
export function merge(...styles: AnyStyle[]): StyleCollection {
  return styles.filter(Boolean) as StyleFn[];
}
```

### toCSS 实现

```typescript
export function toCSS(collection: StyleCollection, selector?: string): string {
  const baseStyles: StyleRule[] = [];
  const variantStyles: Map<string, StyleRule[]> = new Map();

  // 执行所有样式函数
  collection.forEach((styleFn) => {
    const result = (styleFn as VariantStyleFn)();

    if ("variant" in result && result.variant) {
      // 处理变体样式
      const variantKey = result.variant.selector || "";
      if (!variantStyles.has(variantKey)) {
        variantStyles.set(variantKey, []);
      }
      const styles = Array.isArray(result.styles)
        ? result.styles
        : [result.styles];
      variantStyles.get(variantKey)!.push(...styles);
    } else {
      // 处理基础样式
      const styles = Array.isArray(result) ? result : [result as StyleRule];
      baseStyles.push(...styles);
    }
  });

  // 生成 CSS
  let css = "";

  if (selector && baseStyles.length > 0) {
    css += `${selector} {\n`;
    baseStyles.forEach(({ property, value }) => {
      css += `  ${property}: ${value};\n`;
    });
    css += "}\n";
  }

  // 生成变体 CSS
  variantStyles.forEach((rules, variantKey) => {
    if (selector) {
      css += `${variantKey.replace("&", selector)} {\n`;
    } else {
      css += `${variantKey} {\n`;
    }
    rules.forEach(({ property, value }) => {
      css += `  ${property}: ${value};\n`;
    });
    css += "}\n";
  });

  return css;
}
```
