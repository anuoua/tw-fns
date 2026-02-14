import {
  createStyle,
  createStyleWithValue,
  createMappedStyle,
} from "../../core/style";
import { defaultTheme } from "../../theme";

export const aspect_auto = createStyle("aspect-ratio", "auto");

export const aspect_square = createStyle("aspect-ratio", "1 / 1");

export const aspect_video = createStyle(
  "aspect-ratio",
  "var(--aspect-video, 16 / 9)",
);

export const aspect_1_1 = createStyle("aspect-ratio", "1 / 1");
export const aspect_3_2 = createStyle("aspect-ratio", "3 / 2");
export const aspect_4_3 = createStyle("aspect-ratio", "4 / 3");
export const aspect_5_4 = createStyle("aspect-ratio", "5 / 4");
export const aspect_16_9 = createStyle("aspect-ratio", "16 / 9");
export const aspect_2_1 = createStyle("aspect-ratio", "2 / 1");
export const aspect_21_9 = createStyle("aspect-ratio", "21 / 9");
export const aspect_9_16 = createStyle("aspect-ratio", "9 / 16");
export const aspect_3_4 = createStyle("aspect-ratio", "3 / 4");
export const aspect_4_5 = createStyle("aspect-ratio", "4 / 5");
export const aspect_9_20 = createStyle("aspect-ratio", "9 / 20");
export const aspect_2_3 = createStyle("aspect-ratio", "2 / 3");

export const aspect = createStyleWithValue("aspect-ratio");
