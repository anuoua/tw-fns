/**
 * - --tw-inset-shadow-color: #fff;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-inset-shadow-color: color-mix(in oklab, var(--color-white) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_white = () => `  --tw-inset-shadow-color: #fff;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-inset-shadow-color: color-mix(in oklab, var(--color-white) var(--tw-inset-shadow-alpha), transparent);`;
