import type { Theme } from "../core/types";
import { defaultTheme } from "./default";

let currentTheme: Theme = defaultTheme;

export function generateThemeCSS(
  selector: string = ":root",
  theme: Theme = currentTheme,
): string {
  let css = "";

  // Generate CSS variables for colors
  Object.entries(theme.colors).forEach(([colorName, shades]) => {
    if (typeof shades === "string") {
      css += `  --color-${colorName}: ${shades};\n`;
    } else {
      Object.entries(shades).forEach(([shade, value]) => {
        const suffix = shade === "DEFAULT" ? "" : `-${shade}`;
        css += `  --color-${colorName}${suffix}: ${value};\n`;
      });
    }
  });

  // Generate CSS variables for spacing
  css += `  --spacing: ${theme.spacing};\n`;

  // Generate CSS variables for breakpoints
  Object.entries(theme.breakpoints).forEach(([key, value]) => {
    css += `  --breakpoint-${key}: ${value};\n`;
  });

  // Generate CSS variables for border radius
  Object.entries(theme.radius).forEach(([key, value]) => {
    css += `  --radius-${key === "DEFAULT" ? "md" : key}: ${value};\n`;
  });

  // Generate CSS variables for box shadow
  Object.entries(theme.shadow).forEach(([key, value]) => {
    const name = key === "DEFAULT" ? "md" : key;
    css += `  --shadow-${name}: ${value};\n`;
  });

  // Generate CSS variables for aspect ratio
  Object.entries(theme.aspect).forEach(([key, value]) => {
    css += `  --aspect-${key}: ${value};\n`;
  });

  // Generate CSS variables for container
  Object.entries(theme.container).forEach(([key, value]) => {
    css += `  --container-${key}: ${value};\n`;
  });

  // Generate CSS variables for animation
  Object.entries(theme.animate).forEach(([key, value]) => {
    css += `  --animation-${key}: ${value};\n`;
  });

  // Generate @keyframes
  Object.entries(theme.keyframes).forEach(([name, keyframes]) => {
    css += `\n@keyframes ${name} {\n`;
    Object.entries(keyframes).forEach(([selector, styles]) => {
      const stylesStr = Object.entries(styles)
        .map(([prop, val]) => `${camelToKebab(prop)}: ${val}`)
        .join("; ");
      css += `  ${selector} { ${stylesStr}; }\n`;
    });
    css += "}\n";
  });

  // Wrap in selector
  if (css.startsWith("\n")) {
    css = css.slice(1);
  }

  return `${selector} {\n${css}}`;
}

function camelToKebab(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export { defaultTheme };
export type { Theme };
