import { createStyle } from "../../core/style";

// Accent color
export const accent_auto = createStyle("accent-color", "auto");
export const createAccentColor = (value: string) => createStyle("accent-color", value);

// Appearance
export const appearance_none = createStyle("appearance", "none");
export const appearance_auto = createStyle("appearance", "auto");

// Caret color
export const caret_auto = createStyle("caret-color", "auto");
export const createCaretColor = (value: string) => createStyle("caret-color", value);

// Color scheme
export const dark = createStyle("color-scheme", "dark");
export const light = createStyle("color-scheme", "light");
export const color_scheme_normal = createStyle("color-scheme", "normal");

// Cursor
export const cursor_auto = createStyle("cursor", "auto");
export const cursor_default = createStyle("cursor", "default");
export const cursor_pointer = createStyle("cursor", "pointer");
export const cursor_wait = createStyle("cursor", "wait");
export const cursor_text = createStyle("cursor", "text");
export const cursor_move = createStyle("cursor", "move");
export const cursor_help = createStyle("cursor", "help");
export const cursor_not_allowed = createStyle("cursor", "not-allowed");
export const cursor_grab = createStyle("cursor", "grab");
export const cursor_grabbing = createStyle("cursor", "grabbing");
export const createCursor = (value: string) => createStyle("cursor", value);

// Field sizing
export const field_sizing_fixed = createStyle("field-sizing", "fixed");
export const field_sizing_content = createStyle("field-sizing", "content");

// Pointer events
export const pointer_events_none = createStyle("pointer-events", "none");
export const pointer_events_auto = createStyle("pointer-events", "auto");

// Resize
export const resize_none = createStyle("resize", "none");
export const resize = createStyle("resize", "both");
export const resize_x = createStyle("resize", "horizontal");
export const resize_y = createStyle("resize", "vertical");

// Scroll behavior
export const scroll_auto = createStyle("scroll-behavior", "auto");
export const scroll_smooth = createStyle("scroll-behavior", "smooth");

// Scroll margin
export const scroll_m_0 = createStyle("scroll-margin", "0");
export const scroll_m_1 = createStyle("scroll-margin", "0.25rem");
export const scroll_m_2 = createStyle("scroll-margin", "0.5rem");
export const scroll_m_4 = createStyle("scroll-margin", "1rem");
export const scroll_m_8 = createStyle("scroll-margin", "2rem");

// Scroll padding
export const scroll_p_0 = createStyle("scroll-padding", "0");
export const scroll_p_1 = createStyle("scroll-padding", "0.25rem");
export const scroll_p_2 = createStyle("scroll-padding", "0.5rem");
export const scroll_p_4 = createStyle("scroll-padding", "1rem");
export const scroll_p_8 = createStyle("scroll-padding", "2rem");

// Scroll snap align
export const snap_start = createStyle("scroll-snap-align", "start");
export const snap_end = createStyle("scroll-snap-align", "end");
export const snap_center = createStyle("scroll-snap-align", "center");
export const snap_align_none = createStyle("scroll-snap-align", "none");

// Scroll snap stop
export const snap_normal = createStyle("scroll-snap-stop", "normal");
export const snap_always = createStyle("scroll-snap-stop", "always");

// Scroll snap type
export const snap_none = createStyle("scroll-snap-type", "none");
export const snap_x = createStyle("scroll-snap-type", "x mandatory");
export const snap_y = createStyle("scroll-snap-type", "y mandatory");
export const snap_both = createStyle("scroll-snap-type", "both mandatory");

// Touch action
export const touch_auto = createStyle("touch-action", "auto");
export const touch_none = createStyle("touch-action", "none");
export const touch_pan_x = createStyle("touch-action", "pan-x");
export const touch_pan_y = createStyle("touch-action", "pan-y");
export const touch_pan_left = createStyle("touch-action", "pan-left");
export const touch_pan_right = createStyle("touch-action", "pan-right");
export const touch_pinch_zoom = createStyle("touch-action", "pinch-zoom");
export const touch_manipulation = createStyle("touch-action", "manipulation");

// User select
export const select_none = createStyle("user-select", "none");
export const select_text = createStyle("user-select", "text");
export const select_all = createStyle("user-select", "all");
export const select_auto = createStyle("user-select", "auto");

// Will change
export const will_change_auto = createStyle("will-change", "auto");
export const will_change_scroll = createStyle("will-change", "scroll-position");
export const will_change_contents = createStyle("will-change", "contents");
export const will_change_transform = createStyle("will-change", "transform");
export const will_change_opacity = createStyle("will-change", "opacity");
export const createWillChange = (value: string) => createStyle("will-change", value);