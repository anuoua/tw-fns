import { createFeatureVariant } from "../core/variants";

// Media queries
const dark = createFeatureVariant("(prefers-color-scheme: dark)");
const motion_reduce = createFeatureVariant("(prefers-reduced-motion: reduce)");
const motion_safe = createFeatureVariant(
  "(prefers-reduced-motion: no-preference)",
);
const contrast_more = createFeatureVariant("(prefers-contrast: more)");
const contrast_less = createFeatureVariant("(prefers-contrast: less)");
const print = createFeatureVariant("print");
const landscape = createFeatureVariant("(orientation: landscape)");
const portrait = createFeatureVariant("(orientation: portrait)");

// Feature queries
const supports_grid = createFeatureVariant("(display: grid)");

export {
  dark,
  motion_reduce,
  motion_safe,
  contrast_more,
  contrast_less,
  print,
  landscape,
  portrait,
  supports_grid,
};
