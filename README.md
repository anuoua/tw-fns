# tw-fns

A js/ts pure functions tailwindcss library.

## Supported Frameworks

- [React](packages/react/README.md)

## Install

```bash
npm install tw-fns
yarn add tw-fns
pnpm add tw-fns
bun install tw-fns
```

## Usage

```ts
// base styles
import "tw-fns/base.css";
import { compose, build, getStyles, getClasses } from "tw-fns/builder";
import { flex } from "tw-fns/flex";
import { flex_col } from "tw-fns/flex_col";
import { items_center } from "tw-fns/items_center";
import { justify_center } from "tw-fns/justify_center";

const css = compose(flex, flex_col, items_center, justify_center);
console.log(css);

const styleFn = (visible) =>
  build(flex, flex_col).when(visible, items_center).else(justify_center);

/* getStyles will generate all written styles even if `visible` is false.
 * it is used to create style sheet
 */
const styles = getStyles("prefix_classname", styleFn(true /* or false */));

console.log(styles);

/* getClasses only generate classNames for condition usage,
 * it generates different classNames when visible changes.
 * it is used to bind with class attribute.
 */
const classNames = getClasses("prefix_classname", styleFn(true /* or false */));

consonle.log(classNames);
```

## API

All api is designed from tailwindcss, about ~20000 api.

### Utilities with some naming rules

- utilities: use underscore-connected property access
  - `ml-1` is `ml_1`
  - `ml-1.5` is `ml_1_dot_5`
  - `ml-1/5` is `ml_1_slash_5`
  - `@container` is `at_container`
  - ..
- size: put number in the end
  - `w-2xl` is `w_xl2`
  - `2xl:text-2xl` is `xl2(text_2xl)`

### Hover, focus, and other states

- use function to wrap
  - `hover:ml-1` is `hover(ml_1)`
  - `hover:active:ml-1` is `hover(active(ml_1))`
  - `hover:active:ml-1 hover:active:bg-gray-100` is `hover(active(ml_1, bg_gray_100))`
  - ..

### Arbitrary value

- utilities: use function to wrap arbitrary value
  - `ml-[20px]` is `ml_("20px")`
  - `w-[500px]` is `ml_("500px")`
  - ..
- states: use function to wrap arbitrary value
  - `aria-[role=user]:text-blue-500` is `aria('role="user"', text_blue_500)`
  - `has-[:active]:bg-amber-50` is `has(':active', bg_amber_50)`
  - ..
- named group
  - `group-hover/some:text-blue-500` is `group_by("some", hover(text_blue_500))` or `group_hover_by("some", text_blue_500)`
  - `peer-hover/some:text-blue-500` is `peer_by("some", hover(text_blue_500))` or `peer_hover_by("some", text_blue_500)`
  - ..

### There are some special api

Use aria-[...] to match combined styles

- `<div aria-group>`
  - below element use `group(text_2xl, ...)`
- `<div aria-group="some">`
  - below element use `group_by("some", text_2xl, ...)`
- `<div aria-peer>`
  - sibling element use `peer(text_2xl, ...)`
- `<div aria-peer="some">`
  - sibling element use `peer_by("some", text_2xl, ...)`

Container api

- `<div class={at_container}>`
  - `<div class={at_sm(text_2xl, ...)}>`

named container

- `<div class={at_container_by("some")}>`
  - `<div class={at_sm_by("some", text_2xl, ...)}>`

## License

MIT
