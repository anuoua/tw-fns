/**
 * --tw-shadow-color: oklch(55.1% 0.027 264.364);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-gray-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_500 = () => `
    --tw-shadow-color: oklch(55.1% 0.027 264.364);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-gray-500) var(--tw-shadow-alpha), transparent);
    `;
