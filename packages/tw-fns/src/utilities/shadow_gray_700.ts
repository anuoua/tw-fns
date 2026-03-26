/**
 * --tw-shadow-color: oklch(37.3% 0.034 259.733);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-gray-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_700 = () => `
    --tw-shadow-color: oklch(37.3% 0.034 259.733);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-gray-700) var(--tw-shadow-alpha), transparent);
    `;
