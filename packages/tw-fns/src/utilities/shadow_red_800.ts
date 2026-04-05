/**
 * - --tw-shadow-color: oklch(44.4% 0.177 26.899);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-red-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_800 = () => `  --tw-shadow-color: oklch(44.4% 0.177 26.899);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-red-800) var(--tw-shadow-alpha), transparent);`;
