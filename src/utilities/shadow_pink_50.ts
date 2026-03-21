/**
 * --tw-shadow-color: oklch(97.1% 0.014 343.198);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-pink-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_pink_50 = () => `
    --tw-shadow-color: oklch(97.1% 0.014 343.198);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-pink-50) var(--tw-shadow-alpha), transparent);
    `;
