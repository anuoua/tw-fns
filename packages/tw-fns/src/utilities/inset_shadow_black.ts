/**
 * - --tw-inset-shadow-color: #000;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-inset-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_black = () => `  --tw-inset-shadow-color: #000;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-inset-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-inset-shadow-alpha), transparent);`;
