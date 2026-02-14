import { createStyle, createMappedStyle } from "../../core/style";
import { spacingMap, fractionMap, specialSizeMap } from "../../../mappings/spacing";

// Basic values
export const w_0 = createStyle("width", "0");
export const w_px = createStyle("width", "1px");
export const w_auto = createStyle("width", "auto");

// Spacing scale values
export const w_0_5 = createMappedStyle("width", "0_5", spacingMap);
export const w_1 = createMappedStyle("width", "1", spacingMap);
export const w_2 = createMappedStyle("width", "2", spacingMap);
export const w_3 = createMappedStyle("width", "3", spacingMap);
export const w_4 = createMappedStyle("width", "4", spacingMap);
export const w_5 = createMappedStyle("width", "5", spacingMap);
export const w_6 = createMappedStyle("width", "6", spacingMap);
export const w_7 = createMappedStyle("width", "7", spacingMap);
export const w_8 = createMappedStyle("width", "8", spacingMap);
export const w_9 = createMappedStyle("width", "9", spacingMap);
export const w_10 = createMappedStyle("width", "10", spacingMap);
export const w_11 = createMappedStyle("width", "11", spacingMap);
export const w_12 = createMappedStyle("width", "12", spacingMap);
export const w_14 = createMappedStyle("width", "14", spacingMap);
export const w_16 = createMappedStyle("width", "16", spacingMap);
export const w_20 = createMappedStyle("width", "20", spacingMap);
export const w_24 = createMappedStyle("width", "24", spacingMap);
export const w_28 = createMappedStyle("width", "28", spacingMap);
export const w_32 = createMappedStyle("width", "32", spacingMap);
export const w_36 = createMappedStyle("width", "36", spacingMap);
export const w_40 = createMappedStyle("width", "40", spacingMap);
export const w_44 = createMappedStyle("width", "44", spacingMap);
export const w_48 = createMappedStyle("width", "48", spacingMap);
export const w_52 = createMappedStyle("width", "52", spacingMap);
export const w_56 = createMappedStyle("width", "56", spacingMap);
export const w_60 = createMappedStyle("width", "60", spacingMap);
export const w_64 = createMappedStyle("width", "64", spacingMap);
export const w_72 = createMappedStyle("width", "72", spacingMap);
export const w_80 = createMappedStyle("width", "80", spacingMap);
export const w_96 = createMappedStyle("width", "96", spacingMap);
export const w_128 = createMappedStyle("width", "128", spacingMap);
export const w_144 = createMappedStyle("width", "144", spacingMap);
export const w_160 = createMappedStyle("width", "160", spacingMap);
export const w_192 = createMappedStyle("width", "192", spacingMap);
export const w_224 = createMappedStyle("width", "224", spacingMap);
export const w_256 = createMappedStyle("width", "256", spacingMap);
export const w_288 = createMappedStyle("width", "288", spacingMap);
export const w_320 = createMappedStyle("width", "320", spacingMap);
export const w_384 = createMappedStyle("width", "384", spacingMap);
export const w_448 = createMappedStyle("width", "448", spacingMap);
export const w_512 = createMappedStyle("width", "512", spacingMap);
export const w_576 = createMappedStyle("width", "576", spacingMap);
export const w_640 = createMappedStyle("width", "640", spacingMap);
export const w_704 = createMappedStyle("width", "704", spacingMap);
export const w_768 = createMappedStyle("width", "768", spacingMap);
export const w_832 = createMappedStyle("width", "832", spacingMap);
export const w_896 = createMappedStyle("width", "896", spacingMap);
export const w_960 = createMappedStyle("width", "960", spacingMap);

// Special values
export const w_full = createStyle("width", "100%");
export const w_screen = createStyle("width", "100vw");
export const w_min = createStyle("width", "min-content");
export const w_max = createStyle("width", "max-content");
export const w_fit = createStyle("width", "fit-content");

// Fraction values
export const w_1_2 = createMappedStyle("width", "1_2", fractionMap);
export const w_1_3 = createMappedStyle("width", "1_3", fractionMap);
export const w_2_3 = createMappedStyle("width", "2_3", fractionMap);
export const w_1_4 = createMappedStyle("width", "1_4", fractionMap);
export const w_2_4 = createMappedStyle("width", "2_4", fractionMap);
export const w_3_4 = createMappedStyle("width", "3_4", fractionMap);
export const w_1_5 = createMappedStyle("width", "1_5", fractionMap);
export const w_2_5 = createMappedStyle("width", "2_5", fractionMap);
export const w_3_5 = createMappedStyle("width", "3_5", fractionMap);
export const w_4_5 = createMappedStyle("width", "4_5", fractionMap);
export const w_1_6 = createMappedStyle("width", "1_6", fractionMap);
export const w_2_6 = createMappedStyle("width", "2_6", fractionMap);
export const w_3_6 = createMappedStyle("width", "3_6", fractionMap);
export const w_4_6 = createMappedStyle("width", "4_6", fractionMap);
export const w_5_6 = createMappedStyle("width", "5_6", fractionMap);
export const w_1_12 = createMappedStyle("width", "1_12", fractionMap);
export const w_2_12 = createMappedStyle("width", "2_12", fractionMap);
export const w_3_12 = createMappedStyle("width", "3_12", fractionMap);
export const w_4_12 = createMappedStyle("width", "4_12", fractionMap);
export const w_5_12 = createMappedStyle("width", "5_12", fractionMap);
export const w_6_12 = createMappedStyle("width", "6_12", fractionMap);
export const w_7_12 = createMappedStyle("width", "7_12", fractionMap);
export const w_8_12 = createMappedStyle("width", "8_12", fractionMap);
export const w_9_12 = createMappedStyle("width", "9_12", fractionMap);
export const w_10_12 = createMappedStyle("width", "10_12", fractionMap);
export const w_11_12 = createMappedStyle("width", "11_12", fractionMap);

// Logical properties (inline/block)
export const w_inline = createStyle("width", "min-content");
export const w_block = createStyle("width", "100%");