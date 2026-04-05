/**
 * - --tw-shadow-color: oklch(88.5% 0.062 18.334);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-red-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_200 = () => `  --tw-shadow-color: oklch(88.5% 0.062 18.334);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-red-200) var(--tw-shadow-alpha), transparent);`;
