/**
 * - --tw-text-shadow-color: #000;
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-text-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_black = () => `  --tw-text-shadow-color: #000;
  @supports (color: color-mix(in lab, red, red)) {
  --tw-text-shadow-color: color-mix(in oklab, var(--color-black) var(--tw-text-shadow-alpha), transparent);`;
