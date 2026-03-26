/**
 * --tw-text-shadow-color: oklch(89.9% 0.061 343.231);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_pink_200 = () => `
    --tw-text-shadow-color: oklch(89.9% 0.061 343.231);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-200) var(--tw-text-shadow-alpha), transparent);
    `;
