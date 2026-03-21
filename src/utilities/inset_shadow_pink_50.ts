/**
 * --tw-inset-shadow-color: oklch(97.1% 0.014 343.198);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_pink_50 = () => `
    --tw-inset-shadow-color: oklch(97.1% 0.014 343.198);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-50) var(--tw-inset-shadow-alpha), transparent);
    `;
