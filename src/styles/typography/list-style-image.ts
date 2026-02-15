import { createStyle } from "../../core/style";

// List style image utilities
export const list_image_none = createStyle("list-style-image", "none");

// Create list style image with custom value
export const createListStyleImage = (value: string) => {
  return createStyle("list-style-image", value);
};