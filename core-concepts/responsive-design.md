# Responsive Design

## Overview

jstw 采用移动优先（mobile-first）的响应式设计方法，使用断点变体函数在不同屏幕尺寸下应用样式。

## 核心设计

### 移动优先方法

未使用断点前缀的样式应用于所有屏幕尺寸：

```typescript
import { p_4, text_center, sm, md, lg } from "jstw";
import { text_left } from "jstw";

const styles = merge(p_4, text_center, sm(text_left));

// 输出:
// .container { padding: var(--spacing-4); text-align: center; }
// @media (min-width: 640px) { .container { text-align: left; } }
```

### 断点变体

```typescript
import { sm, md, lg, xl, xl2 } from "jstw";
import { p_4, p_8, p_12, w_full, w_1_2, w_1_3 } from "jstw";

const styles = merge(p_4, sm(p_8), md(p_12), lg(w_1_2), xl(w_1_3));
```

### 默认断点

| 断点  | 最小宽度 | CSS                          |
| ----- | -------- | ---------------------------- |
| `sm`  | 640px    | `@media (min-width: 640px)`  |
| `md`  | 768px    | `@media (min-width: 768px)`  |
| `lg`  | 1024px   | `@media (min-width: 1024px)` |
| `xl`  | 1280px   | `@media (min-width: 1280px)` |
| `xl2` | 1536px   | `@media (min-width: 1536px)` |

## 容器查询

### 基础容器查询

```typescript
import { at_container, at_sm, at_md } from 'jstw';
import { flex_col, flex_row } from 'jstw';

const parentStyles = at_container();

const childStyles = merge(
  flex_col,
  at_sm(flex_row)
);

// 在 JSX 中使用
<div className={parentStyles}>
  <div className={childStyles}>Content</div>
</div>
```

### 命名容器

```typescript
import { at_container } from "jstw";
import { flex_col, flex_row } from "jstw";

// 定义容器
const parentStyles = at_container("main");

// 使用命名容器查询
const childStyles = merge(flex_col, at_sm("main", flex_row));
```

### 容器查询单位

```typescript
import { w } from "jstw";

const styles = w("50cqw");
```

## 断点范围

### Max 变体

限制样式在特定范围内：

```typescript
import { max_md, max_xl } from "jstw";
import { flex } from "jstw";

// 仅在 md 和 xl 之间显示 flex
const styles = max_md(max_xl(flex));
```

## 完整示例

### 响应式网格

```typescript
import { grid, grid_cols_1, grid_cols_2, grid_cols_3 } from "jstw";
import { sm, md, lg } from "jstw";
import { gap_4 } from "jstw";

const styles = merge(
  grid,
  grid_cols_1,
  sm(grid_cols_2),
  md(grid_cols_3),
  gap_4,
);

// 输出:
// .grid { display: grid; gap: var(--spacing-4); }
// .grid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
// @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
// @media (min-width: 768px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
```

### 响应式卡片

```typescript
import {
  merge,
  p_8,
  py_4,
  flex_col,
  flex_row,
  items_center,
  gap_2,
  gap_6,
  text_center,
  text_left,
} from "jstw";
import { sm } from "jstw";
import { h_24, mx_auto, mx_0 } from "jstw";
import { rounded_full, shrink_0 } from "jstw";

const styles = merge(
  flex_col,
  gap_2,
  p_8,
  sm(flex_row),
  sm(items_center),
  sm(gap_6),
  sm(py_4),
);

const imageStyles = merge(h_24, rounded_full, mx_auto, sm(mx_0), sm(shrink_0));

const textStyles = merge(text_center, sm(text_left));
```

## 自定义断点

通过主题配置自定义断点：

```typescript
// 在配置中定义自定义断点
const breakpoints = {
  xl3: "120rem",
};

// 使用自定义断点
import { at_xl3 } from "jstw";
import { p_4 } from "jstw";

const styles = at_xl3(p_4);
```

## 设计模式

### 移动优先反模式

```typescript
// ❌ 错误 - 不符合移动优先
const styles = merge(sm(text_center));

// ✅ 正确 - 移动优先
const styles = merge(text_center, sm(text_left));
```

### 渐进增强

从小屏幕开始，逐步增强：

```typescript
const styles = merge(
  p_2, // 移动设备
  sm(p_4), // 小屏幕
  md(p_6), // 中等屏幕
  lg(p_8), // 大屏幕
  xl(p_12), // 超大屏幕
);
```

## 与 Tailwind 的对比

| 功能     | Tailwind                        | jstw                                            |
| -------- | ------------------------------- | ----------------------------------------------- |
| 断点前缀 | `sm:p-8`                        | `sm(p_8)`                                       |
| 媒体查询 | `@media (min-width: 640px)`     | 自动生成                                        |
| 容器查询 | `@container` + `@md:`           | `at_container()` + `at_md()`                    |
| 命名容器 | `@container/main` + `@sm/main:` | `at_container('main')` + `at_sm('main', style)` |
| 断点范围 | `md:max-xl:flex`                | `max_md(max_xl(flex))`                          |

## 实现细节

### 断点变体函数

```typescript
// 响应式变体
function sm(style: StyleFn): VariantStyleFn;
function md(style: StyleFn): VariantStyleFn;
function lg(style: StyleFn): VariantStyleFn;
function xl(style: StyleFn): VariantStyleFn;
function xl2(style: StyleFn): VariantStyleFn;

// 容器查询变体
function at_container(containerName?: string): string;
function at_sm(style: StyleFn): VariantStyleFn;
function at_sm(containerName: string, style: StyleFn): VariantStyleFn;
function at_md(style: StyleFn): VariantStyleFn;
function at_md(containerName: string, style: StyleFn): VariantStyleFn;

// 断点范围
function max_sm(style: StyleFn): VariantStyleFn;
function max_md(style: StyleFn): VariantStyleFn;
function max_lg(style: StyleFn): VariantStyleFn;
function max_xl(style: StyleFn): VariantStyleFn;
```

### VariantInfo 类型

```typescript
type VariantInfo = {
  type: "media" | "container";
  value: string;
  operator?: "min" | "max"; // min 是默认值
  containerName?: string;
};
```
