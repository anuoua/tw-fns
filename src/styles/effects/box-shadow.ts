import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Box shadow utilities
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
export const shadow_2xl = createStyle(
  "box-shadow",
  `var(--box-shadow-2xl, ${defaultTheme.shadow.xl2})`,
);
export const shadow_inner = createStyle(
  "box-shadow",
  `var(--box-shadow-inner, ${defaultTheme.shadow.inner})`,
);
export const shadow_none = createStyle("box-shadow", "none");

// Create box shadow with custom value
export const createBoxShadow = (value: string) => {
  return createStyle("box-shadow", value);
};