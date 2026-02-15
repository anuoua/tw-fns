import { createStyle, createMappedStyle } from "../../core/style";
import { letterSpacingMap } from "../../../mappings/typography";

// Letter spacing utilities
export const tracking_tighter = createStyle("letter-spacing", "-0.05em");
export const tracking_tight = createStyle("letter-spacing", "-0.025em");
export const tracking_normal = createStyle("letter-spacing", "0em");
export const tracking_wide = createStyle("letter-spacing", "0.025em");
export const tracking_wider = createStyle("letter-spacing", "0.05em");
export const tracking_widest = createStyle("letter-spacing", "0.1em");

// Create letter spacing with custom value
export const createLetterSpacing = (value: string) => {
  return createStyle("letter-spacing", value);
};