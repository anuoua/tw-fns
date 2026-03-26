/**
 * --tw-text-shadow-color: oklch(45.5% 0.188 13.697);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-800) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_rose_800 = () => `
    --tw-text-shadow-color: oklch(45.5% 0.188 13.697);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-800) var(--tw-text-shadow-alpha), transparent);
    `;
