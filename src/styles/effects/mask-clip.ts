import { createStyle } from "../../core/style";

// Mask clip utilities
export const mask_clip_border = createStyle("-webkit-mask-clip", "border-box");
export const mask_clip_padding = createStyle("-webkit-mask-clip", "padding-box");
export const mask_clip_content = createStyle("-webkit-mask-clip", "content-box");
export const mask_clip_fill = createStyle("-webkit-mask-clip", "fill-box");
export const mask_clip_stroke = createStyle("-webkit-mask-clip", "stroke-box");
export const mask_clip_view = createStyle("-webkit-mask-clip", "view-box");
export const mask_clip_no_clip = createStyle("-webkit-mask-clip", "no-clip");