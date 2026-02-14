import { createStyle, createStyleWithValue } from "../../core/style";

// object-position utilities
export const object_top_left = createStyle("object-position", "top left");
export const object_top = createStyle("object-position", "top");
export const object_top_right = createStyle("object-position", "top right");
export const object_left = createStyle("object-position", "left");
export const object_center = createStyle("object-position", "center");
export const object_right = createStyle("object-position", "right");
export const object_bottom_left = createStyle("object-position", "bottom left");
export const object_bottom = createStyle("object-position", "bottom");
export const object_bottom_right = createStyle("object-position", "bottom right");

// Custom value function
export const object = createStyleWithValue("object-position");
