import { createStyle } from "../../core/style";

// Transform utilities
export const transform_none = createStyle("transform", "none");

// GPU acceleration utilities
export const transform_gpu = createStyle(
  "transform",
  "translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)"
);

export const transform_cpu = createStyle(
  "transform",
  "var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)"
);

// Custom value utilities
export const createTransform = (value: string) => createStyle("transform", value);