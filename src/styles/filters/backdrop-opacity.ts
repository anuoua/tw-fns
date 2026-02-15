import { createStyle } from "../../core/style";

// Backdrop opacity utilities
export const backdrop_opacity_0 = createStyle("backdrop-filter", "opacity(0)");
export const backdrop_opacity_5 = createStyle("backdrop-filter", "opacity(0.05)");
export const backdrop_opacity_10 = createStyle("backdrop-filter", "opacity(0.1)");
export const backdrop_opacity_20 = createStyle("backdrop-filter", "opacity(0.2)");
export const backdrop_opacity_25 = createStyle("backdrop-filter", "opacity(0.25)");
export const backdrop_opacity_30 = createStyle("backdrop-filter", "opacity(0.3)");
export const backdrop_opacity_40 = createStyle("backdrop-filter", "opacity(0.4)");
export const backdrop_opacity_50 = createStyle("backdrop-filter", "opacity(0.5)");
export const backdrop_opacity_60 = createStyle("backdrop-filter", "opacity(0.6)");
export const backdrop_opacity_70 = createStyle("backdrop-filter", "opacity(0.7)");
export const backdrop_opacity_75 = createStyle("backdrop-filter", "opacity(0.75)");
export const backdrop_opacity_80 = createStyle("backdrop-filter", "opacity(0.8)");
export const backdrop_opacity_90 = createStyle("backdrop-filter", "opacity(0.9)");
export const backdrop_opacity_95 = createStyle("backdrop-filter", "opacity(0.95)");
export const backdrop_opacity_100 = createStyle("backdrop-filter", "opacity(1)");

// Create backdrop opacity with custom value
export const createBackdropOpacity = (value: string) => {
  return createStyle("backdrop-filter", `opacity(${value})`);
};