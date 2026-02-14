import { createStyle, createStyleWithValue, createMappedStyle } from "../../core/style";
import { spacingMap } from "../../../mappings/spacing";

// top utilities
export const top_0 = createStyle("top", "0");
export const top_px = createStyle("top", "1px");
export const top_auto = createStyle("top", "auto");
export const top_full = createStyle("top", "100%");
export const top = createStyleWithValue("top");

// right utilities
export const right_0 = createStyle("right", "0");
export const right_px = createStyle("right", "1px");
export const right_auto = createStyle("right", "auto");
export const right_full = createStyle("right", "100%");
export const right = createStyleWithValue("right");

// bottom utilities
export const bottom_0 = createStyle("bottom", "0");
export const bottom_px = createStyle("bottom", "1px");
export const bottom_auto = createStyle("bottom", "auto");
export const bottom_full = createStyle("bottom", "100%");
export const bottom = createStyleWithValue("bottom");

// left utilities
export const left_0 = createStyle("left", "0");
export const left_px = createStyle("left", "1px");
export const left_auto = createStyle("left", "auto");
export const left_full = createStyle("left", "100%");
export const left = createStyleWithValue("left");

// inset utilities (all sides)
export const inset_0 = createStyle("inset", "0");
export const inset_px = createStyle("inset", "1px");
export const inset_auto = createStyle("inset", "auto");
export const inset_full = createStyle("inset", "100%");
export const inset = createStyleWithValue("inset");

// inset-x utilities (left and right)
export const inset_x_0 = createStyle("inset-inline", "0");
export const inset_x_px = createStyle("inset-inline", "1px");
export const inset_x_auto = createStyle("inset-inline", "auto");
export const inset_x_full = createStyle("inset-inline", "100%");
export const inset_x = createStyleWithValue("inset-inline");

// inset-y utilities (top and bottom)
export const inset_y_0 = createStyle("inset-block", "0");
export const inset_y_px = createStyle("inset-block", "1px");
export const inset_y_auto = createStyle("inset-block", "auto");
export const inset_y_full = createStyle("inset-block", "100%");
export const inset_y = createStyleWithValue("inset-block");

// start/end utilities (logical properties)
export const start_0 = createStyle("inset-inline-start", "0");
export const start_auto = createStyle("inset-inline-start", "auto");
export const start_full = createStyle("inset-inline-start", "100%");
export const start = createStyleWithValue("inset-inline-start");

export const end_0 = createStyle("inset-inline-end", "0");
export const end_auto = createStyle("inset-inline-end", "auto");
export const end_full = createStyle("inset-inline-end", "100%");
export const end = createStyleWithValue("inset-inline-end");
