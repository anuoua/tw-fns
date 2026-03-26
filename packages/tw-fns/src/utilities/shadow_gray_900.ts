/**
 * --tw-shadow-color: oklch(21% 0.034 264.665);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-gray-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_900 = () => `
    --tw-shadow-color: oklch(21% 0.034 264.665);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-gray-900) var(--tw-shadow-alpha), transparent);
    `;
