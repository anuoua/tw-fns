import { createStyle } from "../../core/style";

// Fill
export const fill_none = createStyle("fill", "none");
export const fill_current = createStyle("fill", "currentColor");
export const createFill = (value: string) => createStyle("fill", value);

// Stroke
export const stroke_none = createStyle("stroke", "none");
export const stroke_current = createStyle("stroke", "currentColor");
export const createStroke = (value: string) => createStyle("stroke", value);

// Stroke width
export const stroke_0 = createStyle("stroke-width", "0");
export const stroke_1 = createStyle("stroke-width", "1");
export const stroke_2 = createStyle("stroke-width", "2");
export const stroke_3 = createStyle("stroke-width", "3");
export const stroke_4 = createStyle("stroke-width", "4");
export const createStrokeWidth = (value: string) => createStyle("stroke-width", value);