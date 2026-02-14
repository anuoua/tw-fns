import { createStyle, createStyleWithValue } from "../../core/style";

// overflow utilities
export const overflow_auto = createStyle("overflow", "auto");
export const overflow_hidden = createStyle("overflow", "hidden");
export const overflow_clip = createStyle("overflow", "clip");
export const overflow_visible = createStyle("overflow", "visible");
export const overflow_scroll = createStyle("overflow", "scroll");

// overflow-x utilities
export const overflow_x_auto = createStyle("overflow-x", "auto");
export const overflow_x_hidden = createStyle("overflow-x", "hidden");
export const overflow_x_clip = createStyle("overflow-x", "clip");
export const overflow_x_visible = createStyle("overflow-x", "visible");
export const overflow_x_scroll = createStyle("overflow-x", "scroll");

// overflow-y utilities
export const overflow_y_auto = createStyle("overflow-y", "auto");
export const overflow_y_hidden = createStyle("overflow-y", "hidden");
export const overflow_y_clip = createStyle("overflow-y", "clip");
export const overflow_y_visible = createStyle("overflow-y", "visible");
export const overflow_y_scroll = createStyle("overflow-y", "scroll");

// Custom value functions
export const overflow = createStyleWithValue("overflow");
export const overflow_x = createStyleWithValue("overflow-x");
export const overflow_y = createStyleWithValue("overflow-y");
