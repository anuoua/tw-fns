/**
 * --tw-shadow-color: oklch(94.1% 0.03 12.58);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-rose-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_100 = () => `
    --tw-shadow-color: oklch(94.1% 0.03 12.58);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-rose-100) var(--tw-shadow-alpha), transparent);
    `;
