import { createStyle, createMultiStyle } from "../../core/style";
import { colorMap, specialColorMap } from "../../../mappings/colors";

// Border color utilities - all sides
export const border_inherit = createStyle("border-color", "inherit");
export const border_current = createStyle("border-color", "currentColor");
export const border_transparent = createStyle("border-color", "transparent");

// Top border color
export const border_t_inherit = createStyle("border-top-color", "inherit");
export const border_t_current = createStyle("border-top-color", "currentColor");
export const border_t_transparent = createStyle("border-top-color", "transparent");

// Right border color
export const border_r_inherit = createStyle("border-right-color", "inherit");
export const border_r_current = createStyle("border-right-color", "currentColor");
export const border_r_transparent = createStyle("border-right-color", "transparent");

// Bottom border color
export const border_b_inherit = createStyle("border-bottom-color", "inherit");
export const border_b_current = createStyle("border-bottom-color", "currentColor");
export const border_b_transparent = createStyle("border-bottom-color", "transparent");

// Left border color
export const border_l_inherit = createStyle("border-left-color", "inherit");
export const border_l_current = createStyle("border-left-color", "currentColor");
export const border_l_transparent = createStyle("border-left-color", "transparent");

// X axis border color (left and right)
export const border_x_inherit = createMultiStyle([
  { property: "border-left-color", value: "inherit" },
  { property: "border-right-color", value: "inherit" },
]);
export const border_x_current = createMultiStyle([
  { property: "border-left-color", value: "currentColor" },
  { property: "border-right-color", value: "currentColor" },
]);
export const border_x_transparent = createMultiStyle([
  { property: "border-left-color", value: "transparent" },
  { property: "border-right-color", value: "transparent" },
]);

// Y axis border color (top and bottom)
export const border_y_inherit = createMultiStyle([
  { property: "border-top-color", value: "inherit" },
  { property: "border-bottom-color", value: "inherit" },
]);
export const border_y_current = createMultiStyle([
  { property: "border-top-color", value: "currentColor" },
  { property: "border-bottom-color", value: "currentColor" },
]);
export const border_y_transparent = createMultiStyle([
  { property: "border-top-color", value: "transparent" },
  { property: "border-bottom-color", value: "transparent" },
]);

// Create border color with custom value
export const createBorderColor = (value: string) => {
  return createStyle("border-color", value);
};