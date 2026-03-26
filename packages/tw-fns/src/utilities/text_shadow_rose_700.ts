/**
 * --tw-text-shadow-color: oklch(51.4% 0.222 16.935);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_rose_700 = () => `
    --tw-text-shadow-color: oklch(51.4% 0.222 16.935);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-700) var(--tw-text-shadow-alpha), transparent);
    `;
