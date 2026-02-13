# Hover, Focus, and Other States

## Overview

jstw 使用变体高阶函数（variant HOFs）来处理伪类、伪元素和其他状态，这些变体包装样式函数，使其在特定条件下生效。

## 核心设计

### 伪类变体

```typescript
import { hover, focus, active, focus_visible, focus_within } from "jstw";
import { bg_blue_500, bg_blue_700, text_white } from "jstw";
import { merge } from "jstw";

// 单一状态
const styles = merge(bg_blue_500, hover(bg_blue_700));

// 多状态
const styles = merge(
  bg_blue_500,
  hover(bg_blue_700),
  focus(bg_blue_600),
  active(bg_blue_800),
);

// 焦点相关状态
const styles = merge(focus_visible(text_white), focus_within(p_2));
```

### 结构选择器

```typescript
import { first, last, odd, even, only_child, empty } from "jstw";

const styles = merge(
  first(p_0),
  last(p_0),
  odd(bg_white),
  even(bg_gray_50),
  only_child(p_4),
  empty(hidden),
);
```

### 表单状态

```typescript
import {
  required,
  invalid,
  disabled,
  read_only,
  checked,
  indeterminate,
} from "jstw";

const styles = merge(
  required(border_red_500),
  invalid(border_red_500),
  disabled(opacity_50),
  read_only(bg_gray_100),
  checked(border_blue_500),
  indeterminate(border_gray_300),
);
```

## 伪元素变体

```typescript
import {
  before,
  after,
  placeholder,
  file,
  marker,
  selection,
  first_line,
  first_letter,
  backdrop,
} from "jstw";
import {
  content,
  mr_2,
  ml_2,
  text_gray_400,
  border_2,
  text_blue_500,
  bg_fuchsia_300,
  tracking_widest,
  float_left,
} from "jstw";

const styles = merge(
  before(content(""), after(mr_2)),
  after(content(""), after(ml_2)),
  placeholder(text_gray_400),
  file(border_2),
  marker(text_blue_500),
  selection(bg_fuchsia_300),
  first_line(tracking_widest),
  first_letter(float_left),
  backdrop(bg_gray_50),
);
```

## Group/Peer 变体

### 基于父元素状态（Group）

```typescript
import { group, group_hover, group_focus, group_has_checked } from 'jstw';

// 在 JSX 中使用
<div className={group()}>
  <div className={group_hover(text_white)}>Hover me</div>
</div>

// 命名组
<div className={group('item')}>
  <div className={group_hover('item', text_blue_500)}>
    Group hover item
  </div>
</div>

// 基于 has() 后代
<div className={group()}>
  <div className={group_has_checked(bg_green_500)}>
    When checkbox is checked
  </div>
  <input type="checkbox" />
</div>
```

### 基于兄弟元素状态（Peer）

```typescript
import { peer_invalid, peer_checked, peer_focus } from 'jstw';

// 在表单中使用
<form>
  <input className={peer()} type="text" />
  <div className={peer_invalid(text_red_500)}>
    Error message
  </div>
</form>

// 命名兄弟
<input className={peer('email')} type="email" />
<div className={peer_checked('email', text_green_500)}>
  Email is valid
</div>
```

## 属性选择器变体

### ARIA 状态

```typescript
import { aria_checked, aria_expanded, aria_disabled, aria_hidden } from "jstw";

const styles = merge(
  aria_checked(bg_blue_500),
  aria_expanded(block),
  aria_disabled(opacity_50),
  aria_hidden(hidden),
);
```

### Data 属性

```typescript
import { data_active, data_ } from "jstw";

const styles = merge(data_active(border_blue_500), data_("[size=large]", p_8));
```

### 方向性

```typescript
import { rtl, ltr } from "jstw";

const styles = merge(rtl(mr_0), ltr(ml_0));
```

### 状态

```typescript
import { open, inert } from "jstw";

const styles = merge(open(block), inert(opacity_50));
```

## 特性查询变体

### 媒体查询

```typescript
import {
  dark,
  motion_reduce,
  motion_safe,
  contrast_more,
  print,
  portrait,
} from "jstw";

const styles = merge(
  dark(bg_gray_900),
  motion_reduce(hidden),
  motion_safe(transition),
  contrast_more(border_black),
  print(hidden),
  portrait(hidden),
);
```

### 特性检测

```typescript
import { supports_, starting } from "jstw";

const styles = merge(supports_("display:grid", grid), starting(opacity_0));
```

## 变体堆叠

变体可以堆叠组合，当多个条件匹配时应用样式：

```typescript
import { dark, sm, hover } from "jstw";

const styles = merge(
  // 仅在深色模式和中等屏幕以上悬停时应用
  dark(sm(hover(bg_fuchsia_600))),

  // 禁用状态的悬停样式
  disabled(hover(bg_blue_500)),
);
```

## 与 Tailwind 的对比

| 功能     | Tailwind                       | jstw                              |
| -------- | ------------------------------ | --------------------------------- |
| 伪类     | `hover:bg-sky-700`             | `hover(bg_sky_700)`               |
| 伪元素   | `placeholder:text-gray-500`    | `placeholder(text_gray_500)`      |
| Group    | `group-hover:underline`        | `group_hover(underline)`          |
| Peer     | `peer-invalid:visible`         | `peer_invalid(visible)`           |
| ARIA     | `aria-checked:bg-blue-500`     | `aria_checked(bg_blue_500)`       |
| 变体堆叠 | `dark:md:hover:bg-fuchsia-600` | `dark(sm(hover(bg_fuchsia_600)))` |

## 实现细节

### 变体高阶函数签名

```typescript
type VariantFn = (style: StyleFn) => VariantStyleFn;

// 伪类变体
function hover(style: StyleFn): VariantStyleFn;
function focus(style: StyleFn): VariantStyleFn;
function active(style: StyleFn): VariantStyleFn;

// Group 变体
function group(): string; // 返回类名用于 HTML
function group_hover(style: StyleFn): VariantStyleFn;
function group(groupName?: string): string;
function group_hover(groupName: string, style: StyleFn): VariantStyleFn;

// Peer 变体
function peer(): string;
function peer_invalid(style: StyleFn): VariantStyleFn;
function peer(peerName?: string): string;
function peer_checked(peerName: string, style: StyleFn): VariantStyleFn;
```

### CSS 输出示例

```typescript
const styles = merge(bg_blue_500, hover(bg_blue_700));

toCSS(styles, ".btn");

// 输出:
// .btn {
//   background-color: var(--color-blue-500);
// }
// .btn:hover {
//   background-color: var(--color-blue-700);
// }
```
