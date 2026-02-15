import { createStyle } from "../../core/style";

// Mix blend mode
export const mix_blend_normal = createStyle("mix-blend-mode", "normal");
export const mix_blend_multiply = createStyle("mix-blend-mode", "multiply");
export const mix_blend_screen = createStyle("mix-blend-mode", "screen");
export const mix_blend_overlay = createStyle("mix-blend-mode", "overlay");
export const mix_blend_darken = createStyle("mix-blend-mode", "darken");
export const createMixBlendMode = (value: string) => {
  return createStyle("mix-blend-mode", value);
};
