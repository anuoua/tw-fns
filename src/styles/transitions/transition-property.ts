import { createStyle } from "../../core/style";

// Transition property utilities
export const transition_none = createStyle("transition-property", "none");
export const transition_all = createStyle("transition-property", "all");
export const transition = createStyle("transition-property", "all");
export const transition_colors = createStyle("transition-property", "color, background-color, border-color, text-decoration-color, fill, stroke");
export const transition_opacity = createStyle("transition-property", "opacity");
export const transition_shadow = createStyle("transition-property", "box-shadow");
export const transition_transform = createStyle("transition-property", "transform");

// Create transition property with custom value
export const createTransitionProperty = (value: string) => {
  return createStyle("transition-property", value);
};