import { createStyle, createMultiStyle } from "../../core/style";

// Border width utilities - all sides
export const border_0 = createStyle("border-width", "0");
export const border = createStyle("border-width", "1px");
export const border_2 = createStyle("border-width", "2px");
export const border_4 = createStyle("border-width", "4px");
export const border_8 = createStyle("border-width", "8px");

// Top border
export const border_t_0 = createStyle("border-top-width", "0");
export const border_t = createStyle("border-top-width", "1px");
export const border_t_2 = createStyle("border-top-width", "2px");
export const border_t_4 = createStyle("border-top-width", "4px");
export const border_t_8 = createStyle("border-top-width", "8px");

// Right border
export const border_r_0 = createStyle("border-right-width", "0");
export const border_r = createStyle("border-right-width", "1px");
export const border_r_2 = createStyle("border-right-width", "2px");
export const border_r_4 = createStyle("border-right-width", "4px");
export const border_r_8 = createStyle("border-right-width", "8px");

// Bottom border
export const border_b_0 = createStyle("border-bottom-width", "0");
export const border_b = createStyle("border-bottom-width", "1px");
export const border_b_2 = createStyle("border-bottom-width", "2px");
export const border_b_4 = createStyle("border-bottom-width", "4px");
export const border_b_8 = createStyle("border-bottom-width", "8px");

// Left border
export const border_l_0 = createStyle("border-left-width", "0");
export const border_l = createStyle("border-left-width", "1px");
export const border_l_2 = createStyle("border-left-width", "2px");
export const border_l_4 = createStyle("border-left-width", "4px");
export const border_l_8 = createStyle("border-left-width", "8px");

// X axis (left and right)
export const border_x_0 = createMultiStyle([
  { property: "border-left-width", value: "0" },
  { property: "border-right-width", value: "0" },
]);
export const border_x = createMultiStyle([
  { property: "border-left-width", value: "1px" },
  { property: "border-right-width", value: "1px" },
]);
export const border_x_2 = createMultiStyle([
  { property: "border-left-width", value: "2px" },
  { property: "border-right-width", value: "2px" },
]);
export const border_x_4 = createMultiStyle([
  { property: "border-left-width", value: "4px" },
  { property: "border-right-width", value: "4px" },
]);
export const border_x_8 = createMultiStyle([
  { property: "border-left-width", value: "8px" },
  { property: "border-right-width", value: "8px" },
]);

// Y axis (top and bottom)
export const border_y_0 = createMultiStyle([
  { property: "border-top-width", value: "0" },
  { property: "border-bottom-width", value: "0" },
]);
export const border_y = createMultiStyle([
  { property: "border-top-width", value: "1px" },
  { property: "border-bottom-width", value: "1px" },
]);
export const border_y_2 = createMultiStyle([
  { property: "border-top-width", value: "2px" },
  { property: "border-bottom-width", value: "2px" },
]);
export const border_y_4 = createMultiStyle([
  { property: "border-top-width", value: "4px" },
  { property: "border-bottom-width", value: "4px" },
]);
export const border_y_8 = createMultiStyle([
  { property: "border-top-width", value: "8px" },
  { property: "border-bottom-width", value: "8px" },
]);

// Create border width with custom value
export const createBorderWidth = (value: string) => {
  return createStyle("border-width", value);
};