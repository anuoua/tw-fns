import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Shadow (using CSS variables)
export const shadow_sm = createStyle(
  "box-shadow",
  `var(--box-shadow-sm, ${defaultTheme.shadow.sm})`,
);
export const shadow = createStyle(
  "box-shadow",
  `var(--box-shadow, ${defaultTheme.shadow.DEFAULT})`,
);
export const shadow_md = createStyle(
  "box-shadow",
  `var(--box-shadow-md, ${defaultTheme.shadow.md})`,
);
export const shadow_lg = createStyle(
  "box-shadow",
  `var(--box-shadow-lg, ${defaultTheme.shadow.lg})`,
);
export const shadow_xl = createStyle(
  "box-shadow",
  `var(--box-shadow-xl, ${defaultTheme.shadow.xl})`,
);
export const shadow_xl2 = createStyle(
  "box-shadow",
  `var(--box-shadow-xl2, ${defaultTheme.shadow.xl2})`,
);
export const shadow_inner = createStyle(
  "box-shadow",
  `var(--box-shadow-inner, ${defaultTheme.shadow.inner})`,
);
export const shadow_none = createStyle(
  "box-shadow",
  `var(--box-shadow-none, ${defaultTheme.shadow.none})`,
);

// Opacity (direct values, no theme)
export const opacity_0 = createStyle("opacity", "0");
export const opacity_5 = createStyle("opacity", "0.05");
export const opacity_10 = createStyle("opacity", "0.1");
export const opacity_20 = createStyle("opacity", "0.2");
export const opacity_25 = createStyle("opacity", "0.25");
export const opacity_30 = createStyle("opacity", "0.3");
export const opacity_40 = createStyle("opacity", "0.4");
export const opacity_50 = createStyle("opacity", "0.5");
export const opacity_60 = createStyle("opacity", "0.6");
export const opacity_70 = createStyle("opacity", "0.7");
export const opacity_75 = createStyle("opacity", "0.75");
export const opacity_80 = createStyle("opacity", "0.8");
export const opacity_90 = createStyle("opacity", "0.9");
export const opacity_95 = createStyle("opacity", "0.95");
export const opacity_100 = createStyle("opacity", "1");

// Mix blend mode
export const mix_blend_normal = createStyle("mix-blend-mode", "normal");
export const mix_blend_multiply = createStyle("mix-blend-mode", "multiply");
export const mix_blend_screen = createStyle("mix-blend-mode", "screen");
export const mix_blend_overlay = createStyle("mix-blend-mode", "overlay");
export const mix_blend_darken = createStyle("mix-blend-mode", "darken");
export const createMixBlendMode = (value: string) => {
  return createStyle("mix-blend-mode", value);
};
