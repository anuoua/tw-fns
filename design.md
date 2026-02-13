# jstw - 原生 CSS 运行时库设计文档

## 设计思路

### 核心概念

1. **函数式 API**：每个样式属性都是独立的函数，支持 tree-shaking
2. **Lazy 执行**：样式定义时不执行，只有在输出时才计算
3. **类型安全**：完整的 TypeScript 支持
4. **按需导入**：只导入使用的功能，最小化打包体积
5. **API 兼容 Tailwind**：使用类似 Tailwind 的 API 设计，但输出原生 CSS

## API 设计

### 设计原则

- **预定义样式 = 函数字面量**：`p_4` 直接是函数，不需要 `()` 调用
- **带参数样式 = 高阶函数**：`p('14px')` 返回函数
- **变体作为高阶函数**：`sm(flex)` 包装样式函数
- **Lazy 执行**：只有在 `toCSS()`、`toInline()` 等输出时才执行所有函数

```typescript
// 预定义样式（函数字面量）
flex; // () => { display: 'flex' }
p_4; // () => { padding: '1rem' }
bg_blue_500; // () => { backgroundColor: '#3b82f6' }

// 带参数样式（高阶函数）
p("14px"); // () => { padding: '14px' }
text("#f00"); // () => { color: '#f00' }

// 变体包装
sm(flex); // 响应式
hover(text_blue_500); // 伪类
at_sm(p_4); // 容器查询
at_lg("sidebar", p_8); // 指定容器名

// 组合与输出
merge(flex, p_4, bg_blue_500);
toCSS(styles, ".btn"); // ".btn { display: flex; padding: 1rem; ... }"
toInline(styles); // "display: flex; padding: 1rem; ..."
```

### 变体分类

#### 1. 伪类变体

```typescript
// 交互状态
hover(text_blue_500);
focus(bg_gray_100);
active(bg_blue_700);
focus_visible(text_white);
focus_within(p_2);

// 结构选择器
first(p_0);
last(p_0);
odd(bg_white);
even(bg_gray_50);
only_child(p_4);

// 表单状态
required(border_red_500);
invalid(border_red_500);
disabled(opacity_50);
read_only(bg_gray_100);
checked(border_blue_500);
```

#### 2. 伪元素变体

```typescript
before(content('') after:mr_2);
after(content('') after:ml_2);
placeholder(text_gray_400);
file(border_2);
marker(text_blue_500);
selection(bg_fuchsia_300);
first_line(tracking_widest);
first_letter(float_left);
backdrop(bg_gray_50);
```

#### 3. group/peer 变体

```typescript
// 基于父元素状态
<div class="group">
  <div>{group_hover(text_white)}</div>
</div>

// 命名组
<div class="group/item">
  <div>{group_hover(item(text_blue_500))}</div>
</div>

// 基于 has() 后代
<div class="group">
  <div>{group_has_checked(bg_green_500)}</div>
</div>

// 基于兄弟元素状态
<input class="peer" />
<div>{peer_invalid(text_red_500)}</div>

// 命名兄弟
<input class="peer/email" />
<div>{peer_checked(email(text_green_500))}</div>
```

#### 4. 属性选择器变体

```typescript
// ARIA 状态
aria_checked(bg_blue_500);
aria_expanded(block);
aria_hidden(hidden);

// Data 属性
data_active(border_blue_500);
data_((size = "large"), p_8); // data-[size=large]

// 方向
rtl(mr_0);
ltr(ml_0);

// 状态
open(bg_gray_100);
inert(opacity_50);
```

#### 5. 特性查询变体

```typescript
// 媒体查询
dark(bg_gray_900);
motion_reduce(hidden);
motion_safe(transition);
contrast_more(border_black);
print(hidden);
portrait(hidden);

// 特性检测
supports_("display:grid", grid);
starting(opacity_0);
```

## 架构设计

```
jstw/
├── src/
│   ├── core/
│   │   ├── types.ts      # 内部数据类型定义
│   │   ├── style.ts      # 样式函数创建工具
│   │   └── variants.ts   # 变体高阶函数 (sm, hover, at_sm 等)
│   ├── styles/           # 按功能分类的样式函数（支持 tree-shaking）
│   │   ├── layout/       # flex, grid, hidden 等
│   │   ├── spacing/      # p_4, px_2, m_auto 等
│   │   ├── sizing/       # w_64, h_screen 等
│   │   ├── typography/   # text_xl, font_bold 等
│   │   ├── colors/       # text_red_500, bg_blue_500 等
│   │   └── ...
│   ├── mappings/         # 值映射表
│   ├── converters/       # toCSS, toInline 转换器
│   ├── utils/            # merge 等
│   └── index.ts          # 统一导出
```

## 核心数据结构

### 类型定义

```typescript
/** 单个样式规则 */
type StyleRule = { property: string; value: string };

/** 多值样式规则（如 px, py） */
type MultiStyleRule = StyleRule[];

/** 基础样式函数（无参数） */
type StyleFn = () => StyleRule | MultiStyleRule;

/** 带变体的样式函数 */
type VariantStyleFn = () => {
  styles: StyleRule | MultiStyleRule;
  variant?: VariantInfo;
};

/** 变体类型 */
type VariantType =
  | "media" // 响应式: sm, md, lg
  | "container" // 容器查询: at_sm, at_lg
  | "pseudo" // 伪类: hover, focus, first, odd
  | "pseudo-element" // 伪元素: before, after, placeholder
  | "group" // 基于父元素: group-hover
  | "peer" // 基于兄弟元素: peer-checked
  | "attribute" // 属性选择器: aria-checked, data-active
  | "feature"; // 特性查询: dark, motion-reduce, supports

/** 变体信息 */
type VariantInfo = {
  type: VariantType;
  value: string; // 变体值: 'hover', 'sm', 'aria-checked'
  containerName?: string; // 容器查询的容器名
  groupName?: string; // group 变体的组名
  peerName?: string; // peer 变体的兄弟名
  selector?: string; // 任意选择器
};

/** 样式集合（merge 的返回值） */
type StyleCollection = StyleFn[];
```

### 样式函数创建

```typescript
function createStyle(property: string, value: string): StyleFn {
  return () => ({ property, value });
}

function createMultiStyle(rules: StyleRule[]): StyleFn {
  return () => rules;
}

function createStyleWithValue(property: string): (value: string) => StyleFn {
  return (value) => createStyle(property, value);
}

function createMappedStyle(
  property: string,
  key: string,
  mapping: Record<string, string>,
): StyleFn {
  return () => ({ property, value: mapping[key] || key });
}
```

### 变体高阶函数

```typescript
// 响应式变体：sm(flex), lg(p_8)
function createResponsiveVariant(
  breakpoint: string,
): (style: StyleFn) => VariantStyleFn;

// 伪类变体：hover(text_blue_500), focus(bg_gray_100)
function createPseudoVariant(
  pseudo: string,
): (style: StyleFn) => VariantStyleFn;

// 容器查询变体：at_sm(p_4), at_lg("sidebar", p_8)
function createContainerVariant(
  breakpoint: string,
): (containerName: string | StyleFn, style?: StyleFn) => VariantStyleFn;
```

### merge

```typescript
function merge(...styles: AnyStyle[]): StyleCollection {
  return styles.filter(Boolean) as StyleFn[];
}
```

### 样式函数创建

```typescript
// core/style.ts

/**
 * 创建简单样式函数
 * @example const flex = createStyle('display', 'flex')
 *          flex() => { property: 'display', value: 'flex' }
 */
export function createStyle(property: string, value: string): StyleFn {
  return () => ({ property, value });
}

/**
 * 创建多值样式函数
 * @example const px_2 = createMultiStyle([
 *            { property: 'padding-left', value: '0.5rem' },
 *            { property: 'padding-right', value: '0.5rem' }
 *          ])
 */
export function createMultiStyle(rules: StyleRule[]): StyleFn {
  return () => rules;
}

/**
 * 创建带任意值的样式高阶函数
 * @example const p = createStyleWithValue('padding')
 *          p('14px') => StyleFn
 */
export function createStyleWithValue(property: string): ValueHOF {
  return (value: string) => createStyle(property, value);
}

/**
 * 创建带映射值的样式函数
 * @example const p_4 = createMappedStyle('padding', '4', spacingMap)
 *          p_4() => { property: 'padding', value: '1rem' }
 */
export function createMappedStyle(
  property: string,
  key: string,
  mapping: Record<string, string>,
): StyleFn {
  return () => ({ property, value: mapping[key] || key });
}
```

### 变体高阶函数

```typescript
// 1. 响应式变体：sm(flex), lg(p_8)
function createResponsiveVariant(
  breakpoint: string,
): (style: StyleFn) => VariantStyleFn;

// 2. 伪类变体
// 交互状态：hover, focus, active, visited, focus_within, focus_visible
// 结构选择器：first, last, odd, even, only_child, empty
// 表单状态：required, invalid, disabled, read_only, checked, indeterminate
function createPseudoVariant(
  pseudo: string,
): (style: StyleFn) => VariantStyleFn;

// 3. 伪元素变体：before, after, placeholder, file, marker, selection, first_line, first_letter, backdrop
function createPseudoElementVariant(
  element: string,
): (style: StyleFn) => VariantStyleFn;

// 4. 容器查询变体：at_sm(p_4), at_lg("sidebar", p_8)
function createContainerVariant(
  breakpoint: string,
): (containerName: string | StyleFn, style?: StyleFn) => VariantStyleFn;

// 5. group 变体（基于父元素状态）：group_hover, group_focus, group_has_checked
function createGroupVariant(
  pseudo: string,
  groupName?: string,
): (style: StyleFn) => VariantStyleFn;

// 6. peer 变体（基于兄弟元素状态）：peer_checked, peer_invalid, peer_focus
function createPeerVariant(
  pseudo: string,
  peerName?: string,
): (style: StyleFn) => VariantStyleFn;

// 7. 属性选择器变体
// ARIA：aria_checked, aria_expanded, aria_hidden
// Data：data_active, data_[size=large]
// 方向：rtl, ltr
// 状态：open, inert
function createAttributeVariant(
  attribute: string,
): (style: StyleFn) => VariantStyleFn;

// 8. 特性查询变体
// 媒体查询：dark, motion_reduce, motion_safe, contrast_more, print, portrait
// 特性检测：supports_[display:grid], starting
function createFeatureVariant(
  feature: string,
): (style: StyleFn) => VariantStyleFn;
```

````

### merge

```typescript
// utils/merge.ts

/**
 * 合并多个样式函数，支持条件逻辑（lazy，不执行）
 */
export function merge(...styles: AnyStyle[]): StyleCollection {
  const validStyles = styles.filter(Boolean) as StyleFn[];
  return validStyles;
}
````

## 样式文件示例

```typescript
// styles/spacing/padding.ts
import {
  createStyle,
  createMultiStyle,
  createMappedStyle,
  createStyleWithValue,
} from "../../core/style";
import { spacingMap } from "../../mappings/spacing";

export const p_4 = createMappedStyle("padding", "4", spacingMap);
export const px_4 = createMultiStyle([
  { property: "padding-left", value: spacingMap["4"] },
  { property: "padding-right", value: spacingMap["4"] },
]);
export const p = createStyleWithValue("padding");
```

## 转换器实现

```typescript
function toCSS(collection: StyleCollection, selector?: string): string {
  // 1. 执行所有样式函数并按变体类型分组
  // 2. 生成基础样式、媒体查询、伪类、容器查询规则
  // 3. 输出 CSS 字符串
}

function toInline(collection: StyleCollection): string {
  // 转换为内联样式字符串
}
```

## 使用示例

### 组合与条件样式

```typescript
const isActive = true;
const styles = merge(
  flex,
  p_4,
  isActive ? bg_blue_500 : bg_gray_200,
  hover(bg_blue_600),
);

toInline(styles);
// "display: flex; padding: 1rem; background-color: #3b82f6;"
```

### 响应式

```typescript
const styles = merge(p_4, sm(p_8), lg(p_12));

toCSS(styles, ".container");
// .container { padding: 1rem; }
// @media (min-width: 640px) { .container { padding: 2rem; } }
```

## TypeScript 类型定义

```typescript
// 核心类型
export type {
  StyleFn,
  VariantStyleFn,
  StyleCollection,
  VariantType,
  VariantInfo,
} from "./core/types";

// 样式函数工厂
export function createStyle(property: string, value: string): StyleFn;
export function createMultiStyle(rules: StyleRule[]): StyleFn;
export function createStyleWithValue(
  property: string,
): (value: string) => StyleFn;
export function createMappedStyle(
  property: string,
  key: string,
  mapping: Record<string, string>,
): StyleFn;

// 变体高阶函数
export function createResponsiveVariant(
  breakpoint: string,
): (style: StyleFn) => VariantStyleFn;
export function createPseudoVariant(
  pseudo: string,
): (style: StyleFn) => VariantStyleFn;
export function createPseudoElementVariant(
  element: string,
): (style: StyleFn) => VariantStyleFn;
export function createContainerVariant(
  breakpoint: string,
): (containerName: string | StyleFn, style?: StyleFn) => VariantStyleFn;
export function createGroupVariant(
  pseudo: string,
  groupName?: string,
): (style: StyleFn) => VariantStyleFn;
export function createPeerVariant(
  pseudo: string,
  peerName?: string,
): (style: StyleFn) => VariantStyleFn;
export function createAttributeVariant(
  attribute: string,
): (style: StyleFn) => VariantStyleFn;
export function createFeatureVariant(
  feature: string,
): (style: StyleFn) => VariantStyleFn;

// 组合与转换
export function merge(...styles: AnyStyle[]): StyleCollection;
export function toCSS(collection: StyleCollection, selector?: string): string;
export function toInline(collection: StyleCollection): string;
```

## 优势

- **极致轻量**：按需导入，tree-shaking 友好
- **Lazy 执行**：样式定义时不计算，输出时才执行
- **类型安全**：完整 TypeScript 支持
