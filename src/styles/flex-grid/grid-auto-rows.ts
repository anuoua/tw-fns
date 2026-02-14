import { createStyle } from "../../core/style";

export const auto_rows_auto = createStyle("grid-auto-rows", "auto");
export const auto_rows_min = createStyle("grid-auto-rows", "min-content");
export const auto_rows_max = createStyle("grid-auto-rows", "max-content");
export const auto_rows_fr = createStyle("grid-auto-rows", "minmax(0, 1fr)");