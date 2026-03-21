/**
 * --tw-text-shadow-color: oklch(45.9% 0.187 3.815);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_pink_800 = () => `
    --tw-text-shadow-color: oklch(45.9% 0.187 3.815);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-800) var(--tw-text-shadow-alpha), transparent);
    `;
