/**
 * --tw-inset-shadow-color: oklch(45.9% 0.187 3.815);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_pink_800 = () => `
    --tw-inset-shadow-color: oklch(45.9% 0.187 3.815);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-800) var(--tw-inset-shadow-alpha), transparent);
    `;
