import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Transition timing function utilities
export const ease_linear = createStyle("transition-timing-function", "linear");
export const ease_in = createStyle("transition-timing-function", defaultTheme.ease.in);
export const ease_out = createStyle("transition-timing-function", defaultTheme.ease.out);
export const ease_in_out = createStyle("transition-timing-function", defaultTheme.ease["in-out"]);

// Create transition timing function with custom value
export const createTransitionTimingFunction = (value: string) => {
  return createStyle("transition-timing-function", value);
};