/**
 * - --tw-shadow-color: #000;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-shadow-alpha), transparent);
 */
export const shadow_black = () => `  --tw-shadow-color: #000;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-shadow-alpha), transparent);`;
