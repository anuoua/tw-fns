import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Perspective utilities
export const perspective_none = createStyle("perspective", "none");
export const perspective_dramatic = createStyle("perspective", defaultTheme.perspective.dramatic);
export const perspective_near = createStyle("perspective", defaultTheme.perspective.near);
export const perspective_normal = createStyle("perspective", defaultTheme.perspective.normal);
export const perspective_midrange = createStyle("perspective", defaultTheme.perspective.midrange);
export const perspective_distant = createStyle("perspective", defaultTheme.perspective.distant);

// Create perspective with custom value
export const createPerspective = (value: string) => {
  return createStyle("perspective", value);
};