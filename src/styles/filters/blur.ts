import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Blur utilities
export const blur_none = createStyle("filter", "blur(0)");
export const blur_sm = createStyle("filter", `blur(${defaultTheme.blur.xs})`);
export const blur = createStyle("filter", `blur(${defaultTheme.blur.sm})`);
export const blur_md = createStyle("filter", `blur(${defaultTheme.blur.md})`);
export const blur_lg = createStyle("filter", `blur(${defaultTheme.blur.lg})`);
export const blur_xl = createStyle("filter", `blur(${defaultTheme.blur.xl})`);
export const blur_2xl = createStyle("filter", `blur(${defaultTheme.blur.xl2})`);
export const blur_3xl = createStyle("filter", `blur(${defaultTheme.blur.xl3})`);

// Create blur with custom value
export const createBlur = (value: string) => {
  return createStyle("filter", `blur(${value})`);
};