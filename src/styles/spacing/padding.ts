import {
  createStyle,
  createMultiStyle,
  createStyleWithValue,
  createMappedStyle,
} from "../../core/style";
import { defaultTheme } from "../../theme";

export const p = createStyleWithValue("padding");
export const m = createStyleWithValue("margin");
export const gap = createStyleWithValue("gap");

export const p_0 = createStyle("padding", "0px");
export const p_1 = createMappedStyle("padding", "1", defaultTheme.spacing);
export const p_2 = createMappedStyle("padding", "2", defaultTheme.spacing);
export const p_3 = createMappedStyle("padding", "3", defaultTheme.spacing);
export const p_4 = createMappedStyle("padding", "4", defaultTheme.spacing);
export const p_6 = createMappedStyle("padding", "6", defaultTheme.spacing);
export const p_8 = createMappedStyle("padding", "8", defaultTheme.spacing);
export const p_12 = createMappedStyle("padding", "12", defaultTheme.spacing);
export const p_16 = createMappedStyle("padding", "16", defaultTheme.spacing);
export const px_2 = createMultiStyle([
  { property: "padding-left", value: defaultTheme.spacing[2] },
  { property: "padding-right", value: defaultTheme.spacing[2] },
]);
export const px_4 = createMultiStyle([
  { property: "padding-left", value: defaultTheme.spacing[4] },
  { property: "padding-right", value: defaultTheme.spacing[4] },
]);
export const py_2 = createMultiStyle([
  { property: "padding-top", value: defaultTheme.spacing[2] },
  { property: "padding-bottom", value: defaultTheme.spacing[2] },
]);
export const py_4 = createMultiStyle([
  { property: "padding-top", value: defaultTheme.spacing[4] },
  { property: "padding-bottom", value: defaultTheme.spacing[4] },
]);

export const m_0 = createStyle("margin", "0px");
export const m_auto = createStyle("margin", "auto");
export const mx_0 = createMultiStyle([
  { property: "margin-left", value: "0px" },
  { property: "margin-right", value: "0px" },
]);
export const mx_auto = createMultiStyle([
  { property: "margin-left", value: "auto" },
  { property: "margin-right", value: "auto" },
]);
export const my_auto = createStyle("margin-top", "auto");
