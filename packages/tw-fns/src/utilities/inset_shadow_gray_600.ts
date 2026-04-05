/**
 * - --tw-inset-shadow-color: oklch(44.6% 0.03 256.802);
 * - @supports (color: color-mix(in lab, red, red)) {
 * - --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_gray_600 = () => `  --tw-inset-shadow-color: oklch(44.6% 0.03 256.802);
  @supports (color: color-mix(in lab, red, red)) {
  --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-600) var(--tw-inset-shadow-alpha), transparent);`;
