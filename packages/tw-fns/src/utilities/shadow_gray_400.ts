/**
 * - --tw-shadow-color: oklch(70.7% 0.022 261.325);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-gray-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_400 = () => `  --tw-shadow-color: oklch(70.7% 0.022 261.325);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-gray-400) var(--tw-shadow-alpha), transparent);`;
