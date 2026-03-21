/**
 * --tw-shadow-color: oklch(45.9% 0.187 3.815);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-pink-800) var(--tw-shadow-alpha), transparent);
 */
export const shadow_pink_800 = () => `
    --tw-shadow-color: oklch(45.9% 0.187 3.815);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-pink-800) var(--tw-shadow-alpha), transparent);
    `;
