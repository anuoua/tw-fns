import { createStyle } from "../../core/style";

// List style type utilities
export const list_none = createStyle("list-style-type", "none");
export const list_disc = createStyle("list-style-type", "disc");
export const list_decimal = createStyle("list-style-type", "decimal");
export const list_square = createStyle("list-style-type", "square");
export const list_circle = createStyle("list-style-type", "circle");
export const list_lower_alpha = createStyle("list-style-type", "lower-alpha");
export const list_upper_alpha = createStyle("list-style-type", "upper-alpha");
export const list_lower_roman = createStyle("list-style-type", "lower-roman");
export const list_upper_roman = createStyle("list-style-type", "upper-roman");

// Create list style type with custom value
export const createListStyleType = (value: string) => {
  return createStyle("list-style-type", value);
};