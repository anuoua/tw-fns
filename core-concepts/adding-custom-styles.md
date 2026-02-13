# Adding Custom Styles

## Overview

jstw 支持通过多种方式扩展框架能力：任意值、自定义 CSS、组件类、自定义工具类和自定义变体。

## 任意值

### 任意值工具类

直接使用原始 CSS 值创建一次性的样式：

```typescript
import { p, w, h, bg, top, grid_cols, bg_gradient } from "jstw";
import { merge } from "jstw";

const styles = merge(
  p("12px 24px"),
  w("calc(100% - 2rem)"),
  h("50vh"),
  top("117px"),
  bg("#bada55"),
  grid_cols("1fr 500px 2fr"),
  bg_gradient("linear-gradient(to right, #ff0000, #0000ff)"),
);
```

### 任意值属性

对于任何 CSS 属性，直接使用属性名和值：

```typescript
import { style } from "jstw";

const styles = merge(
  style("mask-type", "luminance"),
  style("scrollbar-width", "thin"),
  style("aspect-ratio", "16/9"),
);
```

### 自定义变体

创建自定义选择器变体：

```typescript
import { createVariantStyleFn } from "jstw";
import { underline } from "jstw";

const styles = merge(
  createVariantStyleFn(underline, {
    type: "custom",
    value: "nth-child-hover",
    selector: "&:nth-child(-n+3):hover",
  }),
);
```

### 任意值中的空格

直接使用空格：

```typescript
import { grid_cols } from "jstw";

// 输出: grid-template-columns: 1fr 500px 2fr
const styles = grid_cols("1fr 500px 2fr");
```

## 自定义工具类

### 创建自定义工具类

```typescript
import { createStyle, createStyleWithValue } from "jstw";

// 简单自定义工具类
export const content_auto = createStyle("contentVisibility", "auto");

// 带值的自定义工具类
export const content_visibility = createStyleWithValue("contentVisibility");

// 使用
const styles = merge(content_auto, content_visibility("hidden"));
```

### 自定义间距

```typescript
import { createMappedStyle, spacingMap } from "jstw";

export const px_safe = createMultiStyle([
  { property: "padding-left", value: "env(safe-area-inset-left)" },
  { property: "padding-right", value: "env(safe-area-inset-right)" },
]);

export const pt_safe = createStyle("padding-top", "env(safe-area-inset-top)");
export const pb_safe = createStyle(
  "padding-bottom",
  "env(safe-area-inset-bottom)",
);
```

### 自定义动画

```typescript
export const animate_fade_in_scale = createStyle(
  "animation",
  "fade-in-scale 0.3s ease-out",
);

export const transition_all_fast = createStyle(
  "transition",
  "all 0.15s ease-in-out",
);
```

## 自定义变体

### 创建自定义变体

```typescript
import { createVariantStyleFn } from "jstw";

// 主题变体
export const theme_midnight = (style: StyleFn): VariantStyleFn => {
  return createVariantStyleFn(style, {
    type: "attribute",
    value: "data-theme=midnight",
    selector: '[data-theme="midnight"] *',
  });
};

// 使用
import { bg_white, bg_midnight } from "jstw";

const styles = merge(bg_white, theme_midnight(bg_midnight));

// 输出:
// .element { background-color: white; }
// [data-theme="midnight"] .element { background-color: #121063; }
```

### 复杂变体组合

```typescript
// 组合多个条件
export const hover_and_focus = (style: StyleFn): VariantStyleFn => {
  return createVariantStyleFn(style, {
    type: "pseudo",
    value: "hover, focus",
    selector: "&:hover, &:focus",
  });
};

// 使用
const styles = merge(bg_blue_500, hover_and_focus(bg_blue_700));
```

## 组件类

虽然 jstw 是运行时库，但可以创建可复用的样式组合：

```typescript
// components/card.ts
import { merge, rounded_xl, p_6, shadow_lg } from "jstw";
import { bg_white, border_black, outline_black } from "jstw";
import { outline } from "jstw";

export function card(customStyles?: StyleFn) {
  return merge(
    bg_white,
    rounded_xl,
    p_6,
    shadow_lg,
    outline,
    outline_black,
    customStyles,
  );
}

// 使用
const basicCard = card();
const customCard = card(merge(bg_blue_50, p_8));
```

## 基础样式

```typescript
// base/index.ts
import { createStyle, createMultiStyle } from "jstw";

export const h1 = createMultiStyle([
  { property: "font-size", value: "2.25rem" },
  { property: "font-weight", value: "700" },
  { property: "line-height", value: "2.5rem" },
]);

export const h2 = createMultiStyle([
  { property: "font-size", value: "1.875rem" },
  { property: "font-weight", value: "600" },
  { property: "line-height", value: "2.25rem" },
]);

export const h3 = createMultiStyle([
  { property: "font-size", value: "var(--text-h3)" },
  { property: "font-weight", value: "600" },
  { property: "line-height", value: "2rem" },
]);

export const body = createMultiStyle([
  { property: "font-size", value: "var(--text-base)" },
  { property: "line-height", value: "1.5rem" },
]);

export const small = createMultiStyle([
  { property: "font-size", value: "var(--text-sm)" },
  { property: "line-height", value: "1.25rem" },
]);
```

## 函数式工具类

支持带函数的工具类：

```typescript
// 支持主题匹配的值
export function spacing(value: string | number): StyleFn {
  const spacingValue = typeof value === "number" ? theme.spacing[value] : value;
  return createStyle("margin", spacingValue);
}

// 使用
const styles = merge(
  spacing(4), // 使用主题中的 spacing-4
  spacing("1rem"), // 使用任意值
);
```

## 组合模式

### 使用 merge 组合

```typescript
import { merge } from "jstw";

const baseStyles = merge(p_4, rounded_md);

const hoverStyles = merge(baseStyles, hover(bg_gray_100));

const activeStyles = merge(baseStyles, active(bg_gray_200));
```

### 条件样式

```typescript
function buttonStyles(isPrimary: boolean, size: "sm" | "md" | "lg") {
  return merge(
    isPrimary ? bg_blue_500 : bg_white,
    isPrimary ? text_white : text_gray_900,
    isPrimary ? border_transparent : border_gray_300,
    size === "sm" ? p_2 : size === "md" ? p_3 : p_4,
    size === "sm" ? text_sm : size === "md" ? text_base : text_lg,
  );
}
```

## 使用示例

### 自定义卡片组件

```typescript
import { merge, rounded_xl, p_6, shadow_lg, flex, flex_col, gap_4 } from "jstw";
import { bg_white, border_black, outline_black, bg_gray_50 } from "jstw";
import { outline } from "jstw";
import { text_gray_900, text_lg, font_semibold } from "jstw";
import { text_gray_600, text_sm } from "jstw";

export function card(
  title: string,
  description: string,
  variant: "default" | "elevated" = "default",
) {
  const baseStyles = merge(bg_white, rounded_xl, p_6, outline, outline_black);

  const variantStyles = variant === "elevated" ? shadow_lg : merge(bg_gray_50);

  return merge(baseStyles, variantStyles, flex, flex_col, gap_4);
}

// 使用
const cardStyles = card("Title", "Description", "elevated");
```

### 自定义按钮

```typescript
import {
  merge,
  p_3,
  rounded_md,
  cursor_pointer,
  transition,
  border,
  border_transparent,
} from "jstw";
import { bg_blue_500, bg_blue_600, bg_blue_700, text_white } from "jstw";
import { hover, active, disabled } from "jstw";

export function button(
  size: "sm" | "md" | "lg" = "md",
  variant: "primary" | "secondary" | "outline" = "primary",
) {
  const sizeStyles = {
    sm: merge(p_2, text_sm),
    md: merge(p_3, text_base),
    lg: merge(p_4, text_lg),
  };

  const variantStyles = {
    primary: merge(
      bg_blue_500,
      hover(bg_blue_600),
      active(bg_blue_700),
      text_white,
      border_transparent,
    ),
    secondary: merge(
      bg_white,
      hover(bg_gray_100),
      active(bg_gray_200),
      text_gray_900,
      border_gray_300,
    ),
    outline: merge(
      bg_transparent,
      hover(bg_blue_50),
      active(bg_blue_100),
      text_blue_500,
      border_blue_500,
    ),
  };

  return merge(
    sizeStyles[size],
    variantStyles[variant],
    rounded_md,
    cursor_pointer,
    transition,
    border,
    disabled(opacity_50),
    disabled(cursor_not_allowed),
  );
}
```

## 与 Tailwind 的对比

| 功能       | Tailwind             | jstw                          |
| ---------- | -------------------- | ----------------------------- |
| 任意值     | `[value]`            | `'value'`                     |
| 任意属性   | `[property:value]`   | `style(property, value)`      |
| 任意变体   | `[selector]:utility` | `createVariantStyleFn()` 函数 |
| 自定义工具 | `@utility`           | `createStyle()` 函数          |
| 自定义变体 | `@custom-variant`    | `createVariantStyleFn()` 函数 |
| 组件类     | `@layer components`  | 可复用函数                    |
| 基础样式   | `@layer base`        | 可复用函数                    |

## 实现细节

### createStyleWithValue 高阶函数

```typescript
export function createStyleWithValue(
  property: string,
): (value: string) => StyleFn {
  return (value: string) => {
    return createStyle(property, value);
  };
}
```

### createVariantStyleFn 函数

```typescript
export function createVariantStyleFn(
  style: StyleFn,
  variantInfo: VariantInfo,
): VariantStyleFn {
  return () => {
    const result = style();
    return {
      styles: result,
      variant: variantInfo,
    };
  };
}
```
