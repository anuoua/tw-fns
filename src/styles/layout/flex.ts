import { createStyle } from "../../core/style";

export const block = createStyle("display", "block");
export const inline_block = createStyle("display", "inline-block");
export const flex = createStyle("display", "flex");
export const inline_flex = createStyle("display", "inline-flex");
export const grid = createStyle("display", "grid");
export const hidden = createStyle("display", "none");

export const flex_row = createStyle("flex-direction", "row");
export const flex_col = createStyle("flex-direction", "column");

export const items_start = createStyle("align-items", "flex-start");
export const items_center = createStyle("align-items", "center");
export const items_end = createStyle("align-items", "flex-end");
export const items_stretch = createStyle("align-items", "stretch");

export const justify_start = createStyle("justify-content", "flex-start");
export const justify_center = createStyle("justify-content", "center");
export const justify_end = createStyle("justify-content", "flex-end");
export const justify_between = createStyle("justify-content", "space-between");
export const justify_around = createStyle("justify-content", "space-around");
export const justify_evenly = createStyle("justify-content", "space-evenly");
