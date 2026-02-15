import { createStyle } from "../../core/style";

// Content utilities
export const content_none = createStyle("content", "none");
export const content_normal = createStyle("content", "normal");

// Create content with custom value
export const createContent = (value: string) => {
  return createStyle("content", value);
};