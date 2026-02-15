import { createStyle } from "../../core/style";

// Skew utilities
export const skew_0 = createStyle("transform", "skew(0deg)");
export const skew_1 = createStyle("transform", "skew(1deg)");
export const skew_2 = createStyle("transform", "skew(2deg)");
export const skew_3 = createStyle("transform", "skew(3deg)");
export const skew_6 = createStyle("transform", "skew(6deg)");
export const skew_12 = createStyle("transform", "skew(12deg)");

// X axis skew
export const skew_x_0 = createStyle("transform", "skewX(0deg)");
export const skew_x_1 = createStyle("transform", "skewX(1deg)");
export const skew_x_2 = createStyle("transform", "skewX(2deg)");
export const skew_x_3 = createStyle("transform", "skewX(3deg)");
export const skew_x_6 = createStyle("transform", "skewX(6deg)");
export const skew_x_12 = createStyle("transform", "skewX(12deg)");

// Y axis skew
export const skew_y_0 = createStyle("transform", "skewY(0deg)");
export const skew_y_1 = createStyle("transform", "skewY(1deg)");
export const skew_y_2 = createStyle("transform", "skewY(2deg)");
export const skew_y_3 = createStyle("transform", "skewY(3deg)");
export const skew_y_6 = createStyle("transform", "skewY(6deg)");
export const skew_y_12 = createStyle("transform", "skewY(12deg)");

// Create skew with custom value
export const createSkew = (value: string) => {
  return createStyle("transform", `skew(${value})`);
};