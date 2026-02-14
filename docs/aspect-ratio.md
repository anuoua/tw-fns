# Aspect Ratio Usage

Basic usage:

```ts
import {
  aspect_square,
  aspect_16_9,
  aspect_4_3,
  aspect_auto,
  toCSS,
  merge,
} from "jstw";

// Square aspect ratio (1:1)
const squareStyles = merge(aspect_square);
console.log(toCSS(squareStyles, ".image-1-1"));
// Output: .image-1-1 {
//   aspect-ratio: 1 / 1;
// }

// 16:9 aspect ratio (video)
const videoStyles = merge(aspect_16_9);
console.log(toCSS(videoStyles, ".video"));
// Output: .video {
//   aspect-ratio: 16 / 9;
// }

// 4:3 aspect ratio
const classicStyles = merge(aspect_4_3);
console.log(toCSS(classicStyles, ".image-4-3"));
// Output: .image-4-3 {
//   aspect-ratio: 4 / 3;
// }

// Auto aspect ratio
const autoStyles = merge(aspect_auto);
console.log(toCSS(autoStyles, ".container"));
// Output: .container {
//   aspect-ratio: auto;
// }
```

Custom aspect ratio:

```ts
import { aspect, toCSS, merge } from "jstw";

// Custom aspect ratio using the aspect() function
const customStyles = merge(aspect("5 / 2"));
console.log(toCSS(customStyles, ".image-custom"));
// Output: .image-custom {
//   aspect-ratio: 5 / 2;
// }

// Using calc() for dynamic aspect ratio
const calcStyles = merge(aspect("calc(4*3+1)/3"));
console.log(toCSS(calcStyles, ".image-calc"));
// Output: .image-calc {
//   aspect-ratio: calc(4*3+1)/3;
// }

// Using CSS variables
const variableStyles = merge(aspect("var(--my-aspect-ratio)"));
console.log(toCSS(variableStyles, ".image-var"));
// Output: .image-var {
//   aspect-ratio: var(--my-aspect-ratio);
// }
```

Using with theme:

```ts
import { generateThemeCSS } from "jstw";

// Generate theme CSS with aspect ratio variables
const themeCSS = generateThemeCSS();
console.log(themeCSS);
// Output includes:
//   --aspect-auto: auto;
//   --aspect-square: 1 / 1;
//   --aspect-video: 16 / 9;
//   --aspect-3-2: 3 / 2;
//   --aspect-4-3: 4 / 3;
//   --aspect-5-4: 5 / 4;
//   --aspect-16-9: 16 / 9;
//   --aspect-2-1: 2 / 1;
//   --aspect-21-9: 21 / 9;
//   --aspect-9-16: 9 / 16;
//   --aspect-3-4: 3 / 4;
//   --aspect-4-5: 4 / 5;
//   --aspect-9-20: 9 / 20;
//   --aspect-2-3: 2 / 3;
```

Responsive aspect ratio:

```ts
import { aspect_16_9, aspect_square, sm, toCSS, merge } from "jstw";

// Responsive aspect ratio: 16:9 on mobile, square on small screens
const responsiveStyles = merge(aspect_16_9, sm(aspect_square));
console.log(toCSS(responsiveStyles, ".video"));
// Output:
// @media (min-width: 640px) .video {
//   aspect-ratio: 1 / 1;
// }
// .video {
//   aspect-ratio: 16 / 9;
// }
```

Available preset aspect ratios:

- `aspect_auto` - Auto aspect ratio
- `aspect_square` - 1:1 (same as `aspect_1_1`)
- `aspect_video` - 16:9 (uses `var(--aspect-video)`)
- `aspect_1_1` - 1:1
- `aspect_3_2` - 3:2
- `aspect_4_3` - 4:3
- `aspect_5_4` - 5:4
- `aspect_16_9` - 16:9
- `aspect_2_1` - 2:1
- `aspect_21_9` - 21:9
- `aspect_9_16` - 9:16
- `aspect_3_4` - 3:4
- `aspect_4_5` - 4:5
- `aspect_9_20` - 9:20
- `aspect_2_3` - 2:3

Custom aspect ratios:

Use the `aspect()` function to create custom aspect ratios:

```ts
const customRatio = aspect("7 / 4");
```
