import { createStyle } from "../../core/style";

// Text decoration thickness utilities
export const decoration_auto = createStyle("text-decoration-thickness", "auto");
export const decoration_from_font = createStyle("text-decoration-thickness", "from-font");
export const decoration_0 = createStyle("text-decoration-thickness", "0px");
export const decoration_1 = createStyle("text-decoration-thickness", "1px");
export const decoration_2 = createStyle("text-decoration-thickness", "2px");
export const decoration_4 = createStyle("text-decoration-thickness", "4px");
export const decoration_8 = createStyle("text-decoration-thickness", "8px");

// Create text decoration thickness with custom value
export const createDecorationThickness = (value: string) => {
  return createStyle("text-decoration-thickness", value);
};