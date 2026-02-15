import { createStyle } from "../../core/style";

// Transition delay utilities
export const delay_0 = createStyle("transition-delay", "0s");
export const delay_75 = createStyle("transition-delay", "75ms");
export const delay_100 = createStyle("transition-delay", "100ms");
export const delay_150 = createStyle("transition-delay", "150ms");
export const delay_200 = createStyle("transition-delay", "200ms");
export const delay_300 = createStyle("transition-delay", "300ms");
export const delay_500 = createStyle("transition-delay", "500ms");
export const delay_700 = createStyle("transition-delay", "700ms");
export const delay_1000 = createStyle("transition-delay", "1000ms");

// Create transition delay with custom value
export const createTransitionDelay = (value: string) => {
  return createStyle("transition-delay", value);
};