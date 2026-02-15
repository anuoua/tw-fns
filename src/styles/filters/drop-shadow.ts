import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Drop shadow utilities
export const drop_shadow_sm = createStyle(
  "filter",
  `drop-shadow(${defaultTheme.dropShadow.xs})`,
);
export const drop_shadow = createStyle(
  "filter",
  `drop-shadow(${defaultTheme.dropShadow.sm})`,
);
export const drop_shadow_md = createStyle(
  "filter",
  `drop-shadow(${defaultTheme.dropShadow.md})`,
);
export const drop_shadow_lg = createStyle(
  "filter",
  `drop-shadow(${defaultTheme.dropShadow.lg})`,
);
export const drop_shadow_xl = createStyle(
  "filter",
  `drop-shadow(${defaultTheme.dropShadow.xl})`,
);
export const drop_shadow_2xl = createStyle(
  "filter",
  `drop-shadow(${defaultTheme.dropShadow.xl2})`,
);
export const drop_shadow_none = createStyle("filter", "drop-shadow(none)");

// Create drop shadow with custom value
export const createDropShadow = (value: string) => {
  return createStyle("filter", `drop-shadow(${value})`);
};