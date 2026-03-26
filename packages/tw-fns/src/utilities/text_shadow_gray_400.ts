/**
 * --tw-text-shadow-color: oklch(70.7% 0.022 261.325);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-gray-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_gray_400 = () => `
    --tw-text-shadow-color: oklch(70.7% 0.022 261.325);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-gray-400) var(--tw-text-shadow-alpha), transparent);
    `;
