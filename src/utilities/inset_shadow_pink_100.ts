/**
 * --tw-inset-shadow-color: oklch(94.8% 0.028 342.258);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_pink_100 = () => `
    --tw-inset-shadow-color: oklch(94.8% 0.028 342.258);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-100) var(--tw-inset-shadow-alpha), transparent);
    `;
