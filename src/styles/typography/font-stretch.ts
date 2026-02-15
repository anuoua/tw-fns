import { createStyle } from "../../core/style";

// Font stretch utilities
export const font_ultra_condensed = createStyle("font-stretch", "ultra-condensed");
export const font_extra_condensed = createStyle("font-stretch", "extra-condensed");
export const font_condensed = createStyle("font-stretch", "condensed");
export const font_semi_condensed = createStyle("font-stretch", "semi-condensed");
export const font_normal_stretch = createStyle("font-stretch", "normal");
export const font_semi_expanded = createStyle("font-stretch", "semi-expanded");
export const font_expanded = createStyle("font-stretch", "expanded");
export const font_extra_expanded = createStyle("font-stretch", "extra-expanded");
export const font_ultra_expanded = createStyle("font-stretch", "ultra-expanded");

// Create font stretch with custom value
export const createFontStretch = (value: string) => {
  return createStyle("font-stretch", value);
};