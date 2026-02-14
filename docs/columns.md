# Columns Usage

The `columns` utilities allow you to create multi-column layouts similar to newspaper columns.

## Basic Usage

Setting by number:

```ts
import { columns_2, columns_3, toCSS, merge } from "jstw";

// 2 columns
const twoColumns = merge(columns_2);
console.log(toCSS(twoColumns, ".gallery"));
// Output: .gallery {
//   columns: 2;
// }

// 3 columns
const threeColumns = merge(columns_3);
console.log(toCSS(threeColumns, ".article"));
// Output: .article {
//   columns: 3;
// }
```

Setting by width:

```ts
import {
  columns_xs,
  columns_sm,
  columns_md,
  columns_lg,
  toCSS,
  merge,
} from "jstw";

// Extra small width (20rem)
const xsColumns = merge(columns_xs);
console.log(toCSS(xsColumns, ".gallery"));
// Output: .gallery {
//   columns: var(--container-xs, 20rem);
// }

// Small width (24rem)
const smColumns = merge(columns_sm);
console.log(toCSS(smColumns, ".gallery"));
// Output: .gallery {
//   columns: var(--container-sm, 24rem);
// }

// Medium width (28rem)
const mdColumns = merge(columns_md);
console.log(toCSS(mdColumns, ".gallery"));
// Output: .gallery {
//   columns: var(--container-md, 28rem);
// }

// Large width (32rem)
const lgColumns = merge(columns_lg);
console.log(toCSS(lgColumns, ".gallery"));
// Output: .gallery {
//   columns: var(--container-lg, 32rem);
// }
```

Auto columns:

```ts
import { columns_auto, toCSS, merge } from "jstw";

const autoColumns = merge(columns_auto);
console.log(toCSS(autoColumns, ".container"));
// Output: .container {
//   columns: auto;
// }
```

## Custom Values

Custom column number:

```ts
import { columns, toCSS, merge } from "jstw";

const customColumns = merge(columns("8"));
console.log(toCSS(customColumns, ".custom"));
// Output: .custom {
//   columns: 8;
// }
```

Custom column width with viewport unit:

```ts
import { columns, toCSS, merge } from "jstw";

const viewportColumns = merge(columns("30vw"));
console.log(toCSS(viewportColumns, ".responsive"));
// Output: .responsive {
//   columns: 30vw;
// }
```

Custom column width with rem unit:

```ts
import { columns, toCSS, merge } from "jstw";

const remColumns = merge(columns("25rem"));
console.log(toCSS(remColumns, ".custom-width"));
// Output: .custom-width {
//   columns: 25rem;
// }
```

Using CSS variables:

```ts
import { columns, toCSS, merge } from "jstw";

const variableColumns = merge(columns("var(--my-columns)"));
console.log(toCSS(variableColumns, ".themed"));
// Output: .themed {
//   columns: var(--my-columns);
// }
```

## Available Presets

By number:

- `columns_1` - columns: 1
- `columns_2` - columns: 2
- `columns_3` - columns: 3
- `columns_4` - columns: 4
- `columns_5` - columns: 5
- `columns_6` - columns: 6
- `columns_7` - columns: 7
- `columns_8` - columns: 8
- `columns_9` - columns: 9
- `columns_10` - columns: 10
- `columns_11` - columns: 11
- `columns_12` - columns: 12

By width (using theme variables):

- `columns_xs3` - columns: var(--container-xs3, 16rem) /_ 256px _/
- `columns_xs2` - columns: var(--container-xs2, 18rem) /_ 288px _/
- `columns_xs` - columns: var(--container-xs, 20rem) /_ 320px _/
- `columns_sm` - columns: var(--container-sm, 24rem) /_ 384px _/
- `columns_md` - columns: var(--container-md, 28rem) /_ 448px _/
- `columns_lg` - columns: var(--container-lg, 32rem) /_ 512px _/
- `columns_xl` - columns: var(--container-xl, 36rem) /_ 576px _/
- `columns_xl2` - columns: var(--container-xl2, 42rem) /_ 672px _/
- `columns_xl3` - columns: var(--container-xl3, 48rem) /_ 768px _/
- `columns_xl4` - columns: var(--container-xl4, 56rem) /_ 896px _/
- `columns_xl5` - columns: var(--container-xl5, 64rem) /_ 1024px _/
- `columns_xl6` - columns: var(--container-xl6, 72rem) /_ 1152px _/
- `columns_xl7` - columns: var(--container-xl7, 80rem) /_ 1280px _/

Special:

- `columns_auto` - columns: auto

Custom:

- `columns(value)` - Create custom columns value

## Responsive Example

```ts
import { columns_2, columns_3, sm, toCSS, merge } from "jstw";

// 2 columns on mobile, 3 on small screens
const responsiveColumns = merge(columns_2, sm(columns_3));
console.log(toCSS(responsiveColumns, ".gallery"));
// Output:
// @media (min-width: 640px) .gallery {
//   columns: 3;
// }
// .gallery {
//   columns: 2;
// }
```

## Theme Integration

```ts
import { generateThemeCSS } from "jstw";

// Generate theme CSS with container variables
const themeCSS = generateThemeCSS();
console.log(themeCSS);
// Output includes:
//   --container-xs3: 16rem;
//   --container-xs2: 18rem;
//   --container-xs: 20rem;
//   --container-sm: 24rem;
//   --container-md: 28rem;
//   --container-lg: 32rem;
//   --container-xl: 36rem;
//   --container-xl2: 42rem;
//   --container-xl3: 48rem;
//   --container-xl4: 56rem;
//   --container-xl5: 64rem;
//   --container-xl6: 72rem;
//   --container-xl7: 80rem;
```

## Complete Example

Creating a photo gallery with columns:

```ts
import {
  columns_3,
  columns_lg,
  lg,
  gap_4,
  gap_6,
  rounded_lg,
  overflow_hidden,
} from "jstw";

// Responsive photo gallery
const photoGallery = merge(
  columns_3,
  lg(columns_lg),
  gap_4,
  lg(gap_6),
  rounded_lg,
  overflow_hidden,
);

console.log(toCSS(photoGallery, ".photo-gallery"));
```

This creates a responsive gallery that:

- Has 3 columns on mobile
- Changes to column width of 32rem on large screens
- Has gap between columns
- Has rounded corners
- Hides overflow
