/**
 * --tw-shadow-color: oklch(89.9% 0.061 343.231);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-pink-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_pink_200 = () => `
    --tw-shadow-color: oklch(89.9% 0.061 343.231);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-pink-200) var(--tw-shadow-alpha), transparent);
    `;
