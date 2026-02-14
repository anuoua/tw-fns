import { createStyle } from "../../core/style";

export const auto_cols_auto = createStyle("grid-auto-columns", "auto");
export const auto_cols_min = createStyle("grid-auto-columns", "min-content");
export const auto_cols_max = createStyle("grid-auto-columns", "max-content");
export const auto_cols_fr = createStyle("grid-auto-columns", "minmax(0, 1fr)");