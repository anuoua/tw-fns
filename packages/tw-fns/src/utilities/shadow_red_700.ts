/**
 * - --tw-shadow-color: oklch(50.5% 0.213 27.518);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-red-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_700 = () => `  --tw-shadow-color: oklch(50.5% 0.213 27.518);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-red-700) var(--tw-shadow-alpha), transparent);`;
