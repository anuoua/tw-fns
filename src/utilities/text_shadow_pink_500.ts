/**
 * --tw-text-shadow-color: oklch(65.6% 0.241 354.308);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_pink_500 = () => `
    --tw-text-shadow-color: oklch(65.6% 0.241 354.308);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-500) var(--tw-text-shadow-alpha), transparent);
    `;
