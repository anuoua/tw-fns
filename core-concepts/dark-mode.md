# Dark Mode

## Overview

jstw 使用 `dark` 变体函数为元素在深色模式下应用不同的样式，支持系统偏好和手动切换两种模式。

## 核心设计

### 基础用法

```typescript
import { dark } from "jstw";
import { bg_white, bg_gray_800, text_gray_900, text_white } from "jstw";
import { merge } from "jstw";

const styles = merge(
  bg_white,
  dark(bg_gray_800),
  text_gray_900,
  dark(text_white),
);

toCSS(styles, ".card");

// 输出:
// .card {
//   background-color: var(--color-white);
//   color: var(--color-gray-900);
// }
// @media (prefers-color-scheme: dark) {
//   .card {
//     background-color: var(--color-gray-800);
//     color: var(--color-white);
//   }
// }
```

## 深色模式策略

### 系统偏好（默认）

使用 `prefers-color-scheme` 媒体查询：

```typescript
const styles = merge(
  bg_white,
  dark(bg_gray_900),
  text_gray_900,
  dark(text_white),
);
```

### 手动切换（类名模式）

需要在根元素上添加 `dark` 类：

```typescript
// 在应用启动时
document.documentElement.classList.add("dark");

// 移除深色模式
document.documentElement.classList.remove("dark");
```

配合自定义变体实现：

```typescript
// 定义自定义 dark 变体
function customDark(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "feature",
    value: "dark",
    selector: ".dark",
  });
}

const styles = merge(bg_white, customDark(bg_black));
```

### 手动切换（Data 属性模式）

使用 `data-theme` 属性：

```typescript
// 设置主题
document.documentElement.setAttribute("data-theme", "dark");

// 定义自定义变体
function themeDark(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "attribute",
    value: "data-theme=dark",
  });
}

const styles = merge(bg_white, themeDark(bg_black));
```

## 三向切换

支持浅色、深色和系统偏好：

```typescript
type Theme = "light" | "dark" | "system";

function getTheme(): Theme {
  const saved = localStorage.getItem("theme") as Theme;
  if (saved) return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function setTheme(theme: Theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
}

function applyTheme(theme: Theme) {
  if (theme === "system") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  } else {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
}

// 初始化
applyTheme(getTheme());

// 监听系统偏好变化
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (getTheme() === "system") {
      document.documentElement.classList.toggle("dark", e.matches);
    }
  });
```

## 完整示例

### 卡片组件

```typescript
import { merge, dark } from "jstw";
import { bg_white, bg_gray_800, rounded_lg, px_6, py_8 } from "jstw";
import { ring, shadow_xl } from "jstw";
import { ring_gray_900, ring_white, text_white } from "jstw";
import {
  inline_flex,
  items_center,
  justify_center,
  rounded_md,
  shadow_lg,
} from "jstw";
import { bg_indigo_500, p_2 } from "jstw";
import {
  text_gray_900,
  mt_5,
  text_base,
  font_medium,
  tracking_tight,
} from "jstw";
import { text_gray_500, text_gray_400, mt_2, text_sm } from "jstw";

const cardStyles = merge(
  bg_white,
  dark(bg_gray_800),
  rounded_lg,
  px_6,
  py_8,
  ring,
  shadow_xl,
  dark(shadow_xl),
  dark(ring_white),
  ring_gray_900,
);

const iconWrapperStyles = merge(
  inline_flex,
  items_center,
  justify_center,
  rounded_md,
  bg_indigo_500,
  p_2,
  shadow_lg,
);

const titleStyles = merge(
  text_gray_900,
  dark(text_white),
  mt_5,
  text_base,
  font_medium,
  tracking_tight,
);

const descriptionStyles = merge(
  text_gray_500,
  dark(text_gray_400),
  mt_2,
  text_sm,
);
```

### 导航栏

```typescript
import { merge, dark } from "jstw";
import { border_b, border_white } from "jstw";
import { border_gray_200 } from "jstw";
import { bg_white, bg_gray_900 } from "jstw";
import { px_4, py_3 } from "jstw";

const navStyles = merge(
  border_b,
  border_gray_200,
  dark(border_white),
  bg_white,
  dark(bg_gray_900),
  px_4,
  py_3,
);
```

## 持久化主题

使用 `localStorage` 持久化用户偏好：

```typescript
// 保存主题
function saveTheme(isDark: boolean) {
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// 加载主题
function loadTheme(): boolean {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// 应用主题
function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
}
```

## 设计最佳实践

### 分离浅色和深色样式

不要在单个工具类中包含两种模式：

```typescript
// ❌ 错误
const styles = merge(bg_white_or_black);

// ✅ 正确
const styles = merge(bg_white, dark(bg_black));
```

### 使用语义化颜色

```typescript
import { text_primary, text_secondary, bg_surface, bg_background } from "jstw";
import { dark } from "jstw";

const styles = merge(
  text_primary,
  dark(text_primary),
  bg_surface,
  dark(bg_surface),
);
```

### 考虑可访问性

```typescript
import { merge, dark } from "jstw";
import { text_gray_900, text_gray_100 } from "jstw";
import { bg_white, bg_gray_800 } from "jstw";

// 确保对比度符合 WCAG 标准
const styles = merge(
  bg_white,
  dark(bg_gray_800),
  text_gray_900,
  dark(text_gray_100),
);
```

## 与 Tailwind 的对比

| 功能      | Tailwind           | jstw                |
| --------- | ------------------ | ------------------- |
| 深色变体  | `dark:bg-gray-800` | `dark(bg_gray_800)` |
| 系统偏好  | 默认               | 默认                |
| 手动切换  | 需要配置           | 需要自定义变体      |
| Data 属性 | 需要配置           | 需要自定义变体      |
| 持久化    | 需要实现           | 需要实现            |

## 实现细节

### Dark 变体函数

```typescript
function dark(style: StyleFn): VariantStyleFn;

// 默认实现使用 prefers-color-scheme
const dark = createFeatureVariant("(prefers-color-scheme: dark)");
```

### 自定义 Dark 变体

```typescript
// 类名模式
function darkClass(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "attribute",
    value: "dark",
    selector: ".dark",
  });
}

// Data 属性模式
function darkData(style: StyleFn): VariantStyleFn {
  return createVariantStyleFn(style, {
    type: "attribute",
    value: "data-theme=dark",
  });
}
```
