import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Backdrop filter blur utilities
export const backdrop_blur_none = createStyle("backdrop-filter", "blur(0)");
export const backdrop_blur_sm = createStyle("backdrop-filter", `blur(${defaultTheme.blur.xs})`);
export const backdrop_blur = createStyle("backdrop-filter", `blur(${defaultTheme.blur.sm})`);
export const backdrop_blur_md = createStyle("backdrop-filter", `blur(${defaultTheme.blur.md})`);
export const backdrop_blur_lg = createStyle("backdrop-filter", `blur(${defaultTheme.blur.lg})`);
export const backdrop_blur_xl = createStyle("backdrop-filter", `blur(${defaultTheme.blur.xl})`);
export const backdrop_blur_2xl = createStyle("backdrop-filter", `blur(${defaultTheme.blur.xl2})`);
export const backdrop_blur_3xl = createStyle("backdrop-filter", `blur(${defaultTheme.blur.xl3})`);

// Create backdrop blur with custom value
export const createBackdropBlur = (value: string) => {
  return createStyle("backdrop-filter", `blur(${value})`);
};