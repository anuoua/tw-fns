/**
 * - --tw-text-shadow-color: #fff;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-text-shadow-color: color-mix(in oklab, var(--color-white) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_white = () => `  --tw-text-shadow-color: #fff;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-text-shadow-color: color-mix(in oklab, var(--color-white) var(--tw-text-shadow-alpha), transparent);`;
