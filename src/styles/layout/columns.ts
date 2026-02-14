import { createStyle, createStyleWithValue } from "../../core/style";
import { defaultTheme } from "../../theme";

// By number
export const columns_1 = createStyle("columns", "1");
export const columns_2 = createStyle("columns", "2");
export const columns_3 = createStyle("columns", "3");
export const columns_4 = createStyle("columns", "4");
export const columns_5 = createStyle("columns", "5");
export const columns_6 = createStyle("columns", "6");
export const columns_7 = createStyle("columns", "7");
export const columns_8 = createStyle("columns", "8");
export const columns_9 = createStyle("columns", "9");
export const columns_10 = createStyle("columns", "10");
export const columns_11 = createStyle("columns", "11");
export const columns_12 = createStyle("columns", "12");

// By width (using container theme variables)
export const columns_xs3 = createStyle(
  "columns",
  "var(--container-xs3, 16rem)",
);
export const columns_xs2 = createStyle(
  "columns",
  "var(--container-xs2, 18rem)",
);
export const columns_xs = createStyle("columns", "var(--container-xs, 20rem)");
export const columns_sm = createStyle("columns", "var(--container-sm, 24rem)");
export const columns_md = createStyle("columns", "var(--container-md, 28rem)");
export const columns_lg = createStyle("columns", "var(--container-lg, 32rem)");
export const columns_xl = createStyle("columns", "var(--container-xl, 36rem)");
export const columns_xl2 = createStyle(
  "columns",
  "var(--container-xl2, 42rem)",
);
export const columns_xl3 = createStyle(
  "columns",
  "var(--container-xl3, 48rem)",
);
export const columns_xl4 = createStyle(
  "columns",
  "var(--container-xl4, 56rem)",
);
export const columns_xl5 = createStyle(
  "columns",
  "var(--container-xl5, 64rem)",
);
export const columns_xl6 = createStyle(
  "columns",
  "var(--container-xl6, 72rem)",
);
export const columns_xl7 = createStyle(
  "columns",
  "var(--container-xl7, 80rem)",
);

// Auto
export const columns_auto = createStyle("columns", "auto");

// Custom value function
export const columns = createStyleWithValue("columns");
