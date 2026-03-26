/**
 * --tw-shadow-color: oklch(27.8% 0.033 256.848);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-gray-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_800 = () => `
    --tw-shadow-color: oklch(27.8% 0.033 256.848);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-gray-800) var(--tw-shadow-alpha), transparent);
    `;
