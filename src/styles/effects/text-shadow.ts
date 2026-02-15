import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Text shadow utilities
export const text_shadow_sm = createStyle(
  "text-shadow",
  `var(--text-shadow-sm, ${defaultTheme.textShadow.xs})`,
);
export const text_shadow = createStyle(
  "text-shadow",
  `var(--text-shadow, ${defaultTheme.textShadow.sm})`,
);
export const text_shadow_md = createStyle(
  "text-shadow",
  `var(--text-shadow-md, ${defaultTheme.textShadow.md})`,
);
export const text_shadow_none = createStyle("text-shadow", "none");

// Create text shadow with custom value
export const createTextShadow = (value: string) => {
  return createStyle("text-shadow", value);
};