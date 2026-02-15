import { createStyle } from "../../core/style";
import { defaultTheme } from "../../theme";

// Animation utilities
export const animate_none = createStyle("animation", "none");
export const animate_spin = createStyle("animation", defaultTheme.animate.spin);
export const animate_ping = createStyle("animation", defaultTheme.animate.ping);
export const animate_pulse = createStyle("animation", defaultTheme.animate.pulse);
export const animate_bounce = createStyle("animation", defaultTheme.animate.bounce);

// Create animation with custom value
export const createAnimation = (value: string) => {
  return createStyle("animation", value);
};