/**
 * --tw-inset-shadow-color: oklch(45.5% 0.188 13.697);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-rose-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_rose_800 = () => `
    --tw-inset-shadow-color: oklch(45.5% 0.188 13.697);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-rose-800) var(--tw-inset-shadow-alpha), transparent);
    `;
