/**
 * --tw-text-shadow-color: oklch(55.1% 0.027 264.364);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-gray-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_gray_500 = () => `
    --tw-text-shadow-color: oklch(55.1% 0.027 264.364);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-gray-500) var(--tw-text-shadow-alpha), transparent);
    `;
