import { createStyle } from "../../core/style";

// Transition duration utilities
export const duration_0 = createStyle("transition-duration", "0s");
export const duration_75 = createStyle("transition-duration", "75ms");
export const duration_100 = createStyle("transition-duration", "100ms");
export const duration_150 = createStyle("transition-duration", "150ms");
export const duration_200 = createStyle("transition-duration", "200ms");
export const duration_300 = createStyle("transition-duration", "300ms");
export const duration_500 = createStyle("transition-duration", "500ms");
export const duration_700 = createStyle("transition-duration", "700ms");
export const duration_1000 = createStyle("transition-duration", "1000ms");

// Create transition duration with custom value
export const createTransitionDuration = (value: string) => {
  return createStyle("transition-duration", value);
};