/**
 * - --tw-shadow-color: #fff;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-white) var(--tw-shadow-alpha), transparent);
 */
export const shadow_white = () => `  --tw-shadow-color: #fff;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-white) var(--tw-shadow-alpha), transparent);`;
