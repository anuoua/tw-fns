/**
 * --tw-inset-shadow-color: oklch(37.3% 0.034 259.733);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_gray_700 = () => `
    --tw-inset-shadow-color: oklch(37.3% 0.034 259.733);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-700) var(--tw-inset-shadow-alpha), transparent);
    `;
