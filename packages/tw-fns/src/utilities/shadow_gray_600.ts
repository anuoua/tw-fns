/**
 * - --tw-shadow-color: oklch(44.6% 0.03 256.802);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-shadow-color: color-mix(in oklab, var(--color-gray-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_600 = () => `  --tw-shadow-color: oklch(44.6% 0.03 256.802);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-shadow-color: color-mix(in oklab, var(--color-gray-600) var(--tw-shadow-alpha), transparent);`;
