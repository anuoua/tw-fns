import { createStyle } from "../../core/style";

// Mask composite utilities
export const mask_composite_add = createStyle("-webkit-mask-composite", "add");
export const mask_composite_subtract = createStyle("-webkit-mask-composite", "subtract");
export const mask_composite_intersect = createStyle("-webkit-mask-composite", "intersect");
export const mask_composite_exclude = createStyle("-webkit-mask-composite", "exclude");