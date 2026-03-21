/**
 * --tw-inset-shadow-color: oklch(89.9% 0.061 343.231);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-200) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_pink_200 = () => `
    --tw-inset-shadow-color: oklch(89.9% 0.061 343.231);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-200) var(--tw-inset-shadow-alpha), transparent);
    `;
