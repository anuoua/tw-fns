import { createStyle, createStyleWithValue } from "../../core/style";

// overscroll-behavior utilities
export const overscroll_auto = createStyle("overscroll-behavior", "auto");
export const overscroll_contain = createStyle("overscroll-behavior", "contain");
export const overscroll_none = createStyle("overscroll-behavior", "none");

// overscroll-behavior-x utilities
export const overscroll_x_auto = createStyle("overscroll-behavior-x", "auto");
export const overscroll_x_contain = createStyle("overscroll-behavior-x", "contain");
export const overscroll_x_none = createStyle("overscroll-behavior-x", "none");

// overscroll-behavior-y utilities
export const overscroll_y_auto = createStyle("overscroll-behavior-y", "auto");
export const overscroll_y_contain = createStyle("overscroll-behavior-y", "contain");
export const overscroll_y_none = createStyle("overscroll-behavior-y", "none");

// Custom value functions
export const overscroll = createStyleWithValue("overscroll-behavior");
export const overscroll_x = createStyleWithValue("overscroll-behavior-x");
export const overscroll_y = createStyleWithValue("overscroll-behavior-y");
