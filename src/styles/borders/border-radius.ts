import { createStyle, createMultiStyle } from "../../core/style";
import { roundedSizeMap } from "../../../mappings/spacing";

// Border radius utilities - all corners
export const rounded_none = createStyle("border-radius", "0");
export const rounded_sm = createStyle("border-radius", "0.125rem");
export const rounded = createStyle("border-radius", "0.25rem");
export const rounded_md = createStyle("border-radius", "0.375rem");
export const rounded_lg = createStyle("border-radius", "0.5rem");
export const rounded_xl = createStyle("border-radius", "0.75rem");
export const rounded_2xl = createStyle("border-radius", "1rem");
export const rounded_3xl = createStyle("border-radius", "1.5rem");
export const rounded_full = createStyle("border-radius", "9999px");

// Top corners
export const rounded_t_none = createMultiStyle([
  { property: "border-top-left-radius", value: "0" },
  { property: "border-top-right-radius", value: "0" },
]);
export const rounded_t_sm = createMultiStyle([
  { property: "border-top-left-radius", value: "0.125rem" },
  { property: "border-top-right-radius", value: "0.125rem" },
]);
export const rounded_t = createMultiStyle([
  { property: "border-top-left-radius", value: "0.25rem" },
  { property: "border-top-right-radius", value: "0.25rem" },
]);
export const rounded_t_md = createMultiStyle([
  { property: "border-top-left-radius", value: "0.375rem" },
  { property: "border-top-right-radius", value: "0.375rem" },
]);
export const rounded_t_lg = createMultiStyle([
  { property: "border-top-left-radius", value: "0.5rem" },
  { property: "border-top-right-radius", value: "0.5rem" },
]);
export const rounded_t_xl = createMultiStyle([
  { property: "border-top-left-radius", value: "0.75rem" },
  { property: "border-top-right-radius", value: "0.75rem" },
]);
export const rounded_t_2xl = createMultiStyle([
  { property: "border-top-left-radius", value: "1rem" },
  { property: "border-top-right-radius", value: "1rem" },
]);
export const rounded_t_3xl = createMultiStyle([
  { property: "border-top-left-radius", value: "1.5rem" },
  { property: "border-top-right-radius", value: "1.5rem" },
]);
export const rounded_t_full = createMultiStyle([
  { property: "border-top-left-radius", value: "9999px" },
  { property: "border-top-right-radius", value: "9999px" },
]);

// Right corners
export const rounded_r_none = createMultiStyle([
  { property: "border-top-right-radius", value: "0" },
  { property: "border-bottom-right-radius", value: "0" },
]);
export const rounded_r_sm = createMultiStyle([
  { property: "border-top-right-radius", value: "0.125rem" },
  { property: "border-bottom-right-radius", value: "0.125rem" },
]);
export const rounded_r = createMultiStyle([
  { property: "border-top-right-radius", value: "0.25rem" },
  { property: "border-bottom-right-radius", value: "0.25rem" },
]);
export const rounded_r_md = createMultiStyle([
  { property: "border-top-right-radius", value: "0.375rem" },
  { property: "border-bottom-right-radius", value: "0.375rem" },
]);
export const rounded_r_lg = createMultiStyle([
  { property: "border-top-right-radius", value: "0.5rem" },
  { property: "border-bottom-right-radius", value: "0.5rem" },
]);
export const rounded_r_xl = createMultiStyle([
  { property: "border-top-right-radius", value: "0.75rem" },
  { property: "border-bottom-right-radius", value: "0.75rem" },
]);
export const rounded_r_2xl = createMultiStyle([
  { property: "border-top-right-radius", value: "1rem" },
  { property: "border-bottom-right-radius", value: "1rem" },
]);
export const rounded_r_3xl = createMultiStyle([
  { property: "border-top-right-radius", value: "1.5rem" },
  { property: "border-bottom-right-radius", value: "1.5rem" },
]);
export const rounded_r_full = createMultiStyle([
  { property: "border-top-right-radius", value: "9999px" },
  { property: "border-bottom-right-radius", value: "9999px" },
]);

// Bottom corners
export const rounded_b_none = createMultiStyle([
  { property: "border-bottom-left-radius", value: "0" },
  { property: "border-bottom-right-radius", value: "0" },
]);
export const rounded_b_sm = createMultiStyle([
  { property: "border-bottom-left-radius", value: "0.125rem" },
  { property: "border-bottom-right-radius", value: "0.125rem" },
]);
export const rounded_b = createMultiStyle([
  { property: "border-bottom-left-radius", value: "0.25rem" },
  { property: "border-bottom-right-radius", value: "0.25rem" },
]);
export const rounded_b_md = createMultiStyle([
  { property: "border-bottom-left-radius", value: "0.375rem" },
  { property: "border-bottom-right-radius", value: "0.375rem" },
]);
export const rounded_b_lg = createMultiStyle([
  { property: "border-bottom-left-radius", value: "0.5rem" },
  { property: "border-bottom-right-radius", value: "0.5rem" },
]);
export const rounded_b_xl = createMultiStyle([
  { property: "border-bottom-left-radius", value: "0.75rem" },
  { property: "border-bottom-right-radius", value: "0.75rem" },
]);
export const rounded_b_2xl = createMultiStyle([
  { property: "border-bottom-left-radius", value: "1rem" },
  { property: "border-bottom-right-radius", value: "1rem" },
]);
export const rounded_b_3xl = createMultiStyle([
  { property: "border-bottom-left-radius", value: "1.5rem" },
  { property: "border-bottom-right-radius", value: "1.5rem" },
]);
export const rounded_b_full = createMultiStyle([
  { property: "border-bottom-left-radius", value: "9999px" },
  { property: "border-bottom-right-radius", value: "9999px" },
]);

// Left corners
export const rounded_l_none = createMultiStyle([
  { property: "border-top-left-radius", value: "0" },
  { property: "border-bottom-left-radius", value: "0" },
]);
export const rounded_l_sm = createMultiStyle([
  { property: "border-top-left-radius", value: "0.125rem" },
  { property: "border-bottom-left-radius", value: "0.125rem" },
]);
export const rounded_l = createMultiStyle([
  { property: "border-top-left-radius", value: "0.25rem" },
  { property: "border-bottom-left-radius", value: "0.25rem" },
]);
export const rounded_l_md = createMultiStyle([
  { property: "border-top-left-radius", value: "0.375rem" },
  { property: "border-bottom-left-radius", value: "0.375rem" },
]);
export const rounded_l_lg = createMultiStyle([
  { property: "border-top-left-radius", value: "0.5rem" },
  { property: "border-bottom-left-radius", value: "0.5rem" },
]);
export const rounded_l_xl = createMultiStyle([
  { property: "border-top-left-radius", value: "0.75rem" },
  { property: "border-bottom-left-radius", value: "0.75rem" },
]);
export const rounded_l_2xl = createMultiStyle([
  { property: "border-top-left-radius", value: "1rem" },
  { property: "border-bottom-left-radius", value: "1rem" },
]);
export const rounded_l_3xl = createMultiStyle([
  { property: "border-top-left-radius", value: "1.5rem" },
  { property: "border-bottom-left-radius", value: "1.5rem" },
]);
export const rounded_l_full = createMultiStyle([
  { property: "border-top-left-radius", value: "9999px" },
  { property: "border-bottom-left-radius", value: "9999px" },
]);

// Top left corner
export const rounded_tl_none = createStyle("border-top-left-radius", "0");
export const rounded_tl_sm = createStyle("border-top-left-radius", "0.125rem");
export const rounded_tl = createStyle("border-top-left-radius", "0.25rem");
export const rounded_tl_md = createStyle("border-top-left-radius", "0.375rem");
export const rounded_tl_lg = createStyle("border-top-left-radius", "0.5rem");
export const rounded_tl_xl = createStyle("border-top-left-radius", "0.75rem");
export const rounded_tl_2xl = createStyle("border-top-left-radius", "1rem");
export const rounded_tl_3xl = createStyle("border-top-left-radius", "1.5rem");
export const rounded_tl_full = createStyle("border-top-left-radius", "9999px");

// Top right corner
export const rounded_tr_none = createStyle("border-top-right-radius", "0");
export const rounded_tr_sm = createStyle("border-top-right-radius", "0.125rem");
export const rounded_tr = createStyle("border-top-right-radius", "0.25rem");
export const rounded_tr_md = createStyle("border-top-right-radius", "0.375rem");
export const rounded_tr_lg = createStyle("border-top-right-radius", "0.5rem");
export const rounded_tr_xl = createStyle("border-top-right-radius", "0.75rem");
export const rounded_tr_2xl = createStyle("border-top-right-radius", "1rem");
export const rounded_tr_3xl = createStyle("border-top-right-radius", "1.5rem");
export const rounded_tr_full = createStyle("border-top-right-radius", "9999px");

// Bottom right corner
export const rounded_br_none = createStyle("border-bottom-right-radius", "0");
export const rounded_br_sm = createStyle("border-bottom-right-radius", "0.125rem");
export const rounded_br = createStyle("border-bottom-right-radius", "0.25rem");
export const rounded_br_md = createStyle("border-bottom-right-radius", "0.375rem");
export const rounded_br_lg = createStyle("border-bottom-right-radius", "0.5rem");
export const rounded_br_xl = createStyle("border-bottom-right-radius", "0.75rem");
export const rounded_br_2xl = createStyle("border-bottom-right-radius", "1rem");
export const rounded_br_3xl = createStyle("border-bottom-right-radius", "1.5rem");
export const rounded_br_full = createStyle("border-bottom-right-radius", "9999px");

// Bottom left corner
export const rounded_bl_none = createStyle("border-bottom-left-radius", "0");
export const rounded_bl_sm = createStyle("border-bottom-left-radius", "0.125rem");
export const rounded_bl = createStyle("border-bottom-left-radius", "0.25rem");
export const rounded_bl_md = createStyle("border-bottom-left-radius", "0.375rem");
export const rounded_bl_lg = createStyle("border-bottom-left-radius", "0.5rem");
export const rounded_bl_xl = createStyle("border-bottom-left-radius", "0.75rem");
export const rounded_bl_2xl = createStyle("border-bottom-left-radius", "1rem");
export const rounded_bl_3xl = createStyle("border-bottom-left-radius", "1.5rem");
export const rounded_bl_full = createStyle("border-bottom-left-radius", "9999px");

// Create border radius with custom value
export const createBorderRadius = (value: string) => {
  return createStyle("border-radius", value);
};