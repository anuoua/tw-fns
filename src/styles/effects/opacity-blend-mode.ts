import {
  createStyle,
  createMultiStyle,
  createStyleWithValue,
} from "../../core/style";
import { defaultTheme } from "../../theme";

// Shadow
export const shadow_sm = createStyle("boxShadow", defaultTheme.boxShadow.sm);
export const shadow = createStyle("boxShadow", defaultTheme.boxShadow.DEFAULT);
export const shadow_md = createStyle("boxShadow", defaultTheme.boxShadow.md);
export const shadow_lg = createStyle("boxShadow", defaultTheme.boxShadow.lg);
export const shadow_xl = createStyle("boxShadow", defaultTheme.boxShadow.xl);
export const shadow_xl2 = createStyle("boxShadow", defaultTheme.boxShadow.xl2);
export const shadow_inner = createStyle(
  "boxShadow",
  defaultTheme.boxShadow.inner,
);
export const shadow_none = createStyle(
  "boxShadow",
  defaultTheme.boxShadow.none,
);

// Opacity
export const opacity_0 = createStyle("opacity", "0");
export const opacity_50 = createStyle("opacity", "0.5");
export const opacity_100 = createStyle("opacity", "1");
export const opacity_25 = createStyle("opacity", "0.25");
export const opacity_75 = createStyle("opacity", "0.75");

// Mix blend mode
export const mix_blend_normal = createStyle("mixBlendMode", "normal");
export const mix_blend_multiply = createStyle("mixBlendMode", "multiply");
export const mix_blend_screen = createStyle("mixBlendMode", "screen");
export const mix_blend_overlay = createStyle("mixBlendMode", "overflow");
export const mix_blend_darken = createStyle("mixBlendMode", "darken");
export const createMixBlendMode = (value: string) => {
  return createStyle("mixBlendMode", value);
};
