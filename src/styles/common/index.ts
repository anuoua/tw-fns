import {
  createStyle,
  createMultiStyle,
  createStyleWithValue,
  createMappedStyle,
} from "../../core/style";
import { defaultTheme } from "../../theme";

// Layout
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

// Typography
export const text_sm = createStyle("font-size", "0.875rem");
export const text_base = createStyle("font-size", "1rem");
export const text_lg = createStyle("font-size", "1.125rem");
export const text_xl = createStyle("font-size", "1.25rem");
export const text_xl2 = createStyle("font-size", "1.5rem");
export const text_xl3 = createStyle("font-size", "1.875rem");
export const text_xl4 = createStyle("font-size", "2.25rem");

export const font_normal = createStyle("font-weight", "400");
export const font_medium = createStyle("font-weight", "500");
export const font_semibold = createStyle("font-weight", "600");
export const font_bold = createStyle("font-weight", "700");
export const font_extrabold = createStyle("font-weight", "800");

export const text_left = createStyle("text-align", "left");
export const text_center = createStyle("text-align", "center");
export const text_right = createStyle("text-align", "right");
export const text_justify = createStyle("text-align", "justify");

// Border
export const border = createStyleWithValue("border");
export const border_transparent = createStyle("border-color", "transparent");

export const border_0 = createStyle("border-width", "0px");
export const border_1 = createStyle("border-width", "1px");
export const border_2 = createStyle("border-width", "2px");
export const border_4 = createStyle("border-width", "4px");
export const border_8 = createStyle("border-width", "8px");

export const rounded_sm = createStyle(
  "border-radius",
  defaultTheme.borderRadius.sm,
);
export const rounded = createStyle(
  "border-radius",
  defaultTheme.borderRadius.md,
);
export const rounded_md = createStyle(
  "border-radius",
  defaultTheme.borderRadius.md,
);
export const rounded_lg = createStyle(
  "border-radius",
  defaultTheme.borderRadius.lg,
);
export const rounded_xl = createStyle(
  "border-radius",
  defaultTheme.borderRadius.xl,
);
export const rounded_xl2 = createStyle(
  "border-radius",
  defaultTheme.borderRadius["xl2"],
);
export const rounded_full = createStyle(
  "border-radius",
  defaultTheme.borderRadius.full,
);

// Cursor
export const cursor_pointer = createStyle("cursor", "pointer");
export const cursor_not_allowed = createStyle("cursor", "not-allowed");
export const cursor_default = createStyle("cursor", "default");
export const cursor_wait = createStyle("cursor", "wait");

// Position
export const relative = createStyle("position", "relative");
export const absolute = createStyle("position", "absolute");
export const fixed = createStyle("position", "fixed");
export const sticky = createStyle("position", "sticky");
export const pos_static = createStyle("position", "static");

// Display
export const visible = createStyle("visibility", "visible");
export const invisible = createStyle("visibility", "hidden");

// Overflow
export const overflow_x_auto = createStyle("overflow-x", "auto");
export const overflow_y_auto = createStyle("overflow-y", "auto");
export const overflow_x_hidden = createStyle("overflow-x", "hidden");
export const overflow_y_hidden = createStyle("overflow-y", "hidden");
export const overflow_scroll = createStyle("overflow", "scroll");
export const overflow_x_scroll = createStyle("overflow-x", "scroll");
export const overflow_y_scroll = createStyle("overflow-y", "scroll");
export const overflow_auto = createStyle("overflow", "auto");
export const overflow_hidden = createStyle("overflow", "hidden");

// Z-index
export const z_0 = createStyle("z-index", "0");
export const z_10 = createStyle("z-index", "10");
export const z_20 = createStyle("z-index", "20");
export const z_30 = createStyle("z-index", "30");
export const z_40 = createStyle("z-index", "40");
export const z_50 = createStyle("z-index", "50");
export const auto_z = createStyle("z-index", "auto");

// Width
export const w_auto = createStyle("width", "auto");
export const w_full = createStyle("width", "100%");
export const w_screen = createStyle("width", "100vw");
export const w_min_0 = createStyle("min-width", "0px");
export const w_min_full = createStyle("min-width", "100%");
export const w_max_w_full = createStyle("max-width", "100%");
export const w_max_w_screen = createStyle("max-width", "100vw");

export const w_1 = createStyle("width", "0.25rem");
export const w_2 = createStyle("width", "0.5rem");
export const w_3 = createStyle("width", "0.75rem");
export const w_4 = createStyle("width", "1rem");
export const w_5 = createStyle("width", "1.25rem");
export const w_6 = createStyle("width", "1.5rem");
export const w_8 = createStyle("width", "2rem");
export const w_10 = createStyle("width", "2.5rem");
export const w_12 = createStyle("width", "3rem");
export const w_16 = createStyle("width", "4rem");
export const w_20 = createStyle("width", "5rem");
export const w_24 = createStyle("width", "6rem");
export const w_32 = createStyle("width", "8rem");
export const w_40 = createStyle("width", "10rem");
export const w_48 = createStyle("width", "12rem");
export const w_56 = createStyle("width", "14rem");
export const w_64 = createStyle("width", "16rem");
export const w_72 = createStyle("width", "18rem");
export const w_80 = createStyle("width", "20rem");
export const w_96 = createStyle("width", "24rem");

export const max_w_xs = createStyle("max-width", "20rem");
export const max_w_sm = createStyle("max-width", "24rem");
export const max_w_md = createStyle("max-width", "28rem");
export const max_w_lg = createStyle("max-width", "32rem");
export const max_w_xl = createStyle("max-width", "36rem");
export const max_w_xl2 = createStyle("max-width", "42rem");
export const max_w_screen = createStyle("max-width", "100vw");

// Height
export const h_auto = createStyle("height", "auto");
export const h_full = createStyle("height", "100%");
export const h_screen = createStyle("height", "100vh");
export const h_min_0 = createStyle("min-height", "0px");
export const h_min_full = createStyle("min-height", "100%");
export const h_max_w_full = createStyle("max-height", "100vh");

export const h_1 = createStyle("height", "0.25rem");
export const h_2 = createStyle("height", "0.5rem");
export const h_3 = createStyle("height", "0.75rem");
export const h_4 = createStyle("height", "1rem");
export const h_5 = createStyle("height", "1.25rem");
export const h_6 = createStyle("height", "1.5rem");
export const h_8 = createStyle("height", "2rem");
export const h_10 = createStyle("height", "2.5rem");
export const h_12 = createStyle("height", "3rem");
export const h_16 = createStyle("height", "4rem");
export const h_20 = createStyle("height", "5rem");
export const h_24 = createStyle("height", "6rem");
export const h_32 = createStyle("height", "8rem");
export const h_40 = createStyle("height", "10rem");
export const h_48 = createStyle("height", "12rem");
export const h_56 = createStyle("height", "14rem");
export const h_64 = createStyle("height", "16rem");
export const h_72 = createStyle("height", "18rem");
export const h_80 = createStyle("height", "20rem");
export const h_96 = createStyle("height", "24rem");

// Min-height
export const min_h_0 = createStyle("min-height", "0px");
export const min_h_full = createStyle("min-height", "100vh");
export const min_h_screen = createStyle("min-height", "100vw");

// Max-height
export const max_h_screen = createStyle("max-height", "100vh");

export const min_w_0 = createStyle("min-width", "0px");
export const min_w_full = createStyle("min-width", "100%");

// Max-width
export const max_w_0 = createStyle("max-width", "0px");
export const max_w_full = createStyle("max-width", "100%");
