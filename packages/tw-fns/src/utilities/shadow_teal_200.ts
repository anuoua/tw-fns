/**
 * - --tw-shadow-color: oklch(91% 0.096 180.426);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-teal-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_teal_200 = () => `  --tw-shadow-color: oklch(91% 0.096 180.426);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-teal-200) var(--tw-shadow-alpha), transparent);`;
