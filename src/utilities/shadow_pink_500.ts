/**
 * --tw-shadow-color: oklch(65.6% 0.241 354.308);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-pink-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_pink_500 = () => `
    --tw-shadow-color: oklch(65.6% 0.241 354.308);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-pink-500) var(--tw-shadow-alpha), transparent);
    `;
