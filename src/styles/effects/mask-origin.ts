import { createStyle } from "../../core/style";

// Mask origin utilities
export const mask_origin_border = createStyle("-webkit-mask-origin", "border-box");
export const mask_origin_padding = createStyle("-webkit-mask-origin", "padding-box");
export const mask_origin_content = createStyle("-webkit-mask-origin", "content-box");
export const mask_origin_fill = createStyle("-webkit-mask-origin", "fill-box");
export const mask_origin_stroke = createStyle("-webkit-mask-origin", "stroke-box");
export const mask_origin_view = createStyle("-webkit-mask-origin", "view-box");