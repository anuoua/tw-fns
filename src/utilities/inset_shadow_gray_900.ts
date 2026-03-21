/**
 * --tw-inset-shadow-color: oklch(21% 0.034 264.665);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_gray_900 = () => `
    --tw-inset-shadow-color: oklch(21% 0.034 264.665);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-gray-900) var(--tw-inset-shadow-alpha), transparent);
    `;
