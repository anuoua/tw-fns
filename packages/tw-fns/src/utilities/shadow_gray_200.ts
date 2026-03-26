/**
 * --tw-shadow-color: oklch(92.8% 0.006 264.531);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-gray-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_200 = () => `
    --tw-shadow-color: oklch(92.8% 0.006 264.531);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-gray-200) var(--tw-shadow-alpha), transparent);
    `;
