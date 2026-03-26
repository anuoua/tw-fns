/**
 * --tw-text-shadow-color: oklch(97.1% 0.014 343.198);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_pink_50 = () => `
    --tw-text-shadow-color: oklch(97.1% 0.014 343.198);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-50) var(--tw-text-shadow-alpha), transparent);
    `;
