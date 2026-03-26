/**
 * --tw-inset-shadow-color: oklch(96.7% 0.003 264.542);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_gray_100 = () => `
    --tw-inset-shadow-color: oklch(96.7% 0.003 264.542);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-100) var(--tw-inset-shadow-alpha), transparent);
    `;
