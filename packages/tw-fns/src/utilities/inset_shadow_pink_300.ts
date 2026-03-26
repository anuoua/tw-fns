/**
 * --tw-inset-shadow-color: oklch(82.3% 0.12 346.018);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_pink_300 = () => `
    --tw-inset-shadow-color: oklch(82.3% 0.12 346.018);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-pink-300) var(--tw-inset-shadow-alpha), transparent);
    `;
