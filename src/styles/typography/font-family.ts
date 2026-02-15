import { createStyle, createMultiStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Font family utilities
export const font_sans = createStyle(
  "font-family",
  `var(--font-sans, ${defaultTheme.fontFamily.sans.join(", ")})`,
);
export const font_serif = createStyle(
  "font-family",
  `var(--font-serif, ${defaultTheme.fontFamily.serif.join(", ")})`,
);
export const font_mono = createStyle(
  "font-family",
  `var(--font-mono, ${defaultTheme.fontFamily.mono.join(", ")})`,
);

// Create font family with custom value
export const createFontFamily = (value: string) => {
  return createStyle("font-family", value);
};