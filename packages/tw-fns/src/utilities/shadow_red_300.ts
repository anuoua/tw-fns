/**
 * - --tw-shadow-color: oklch(80.8% 0.114 19.571);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-red-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_300 = () => `  --tw-shadow-color: oklch(80.8% 0.114 19.571);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-red-300) var(--tw-shadow-alpha), transparent);`;
