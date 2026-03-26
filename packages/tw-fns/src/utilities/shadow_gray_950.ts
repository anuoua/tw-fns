/**
 * --tw-shadow-color: oklch(13% 0.028 261.692);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-gray-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_gray_950 = () => `
    --tw-shadow-color: oklch(13% 0.028 261.692);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-gray-950) var(--tw-shadow-alpha), transparent);
    `;
