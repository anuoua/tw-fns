/**
 * --tw-text-shadow-color: oklch(13% 0.028 261.692);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-gray-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_gray_950 = () => `
    --tw-text-shadow-color: oklch(13% 0.028 261.692);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-gray-950) var(--tw-text-shadow-alpha), transparent);
    `;
