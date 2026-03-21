/**
 * --tw-text-shadow-color: oklch(64.5% 0.246 16.439);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_rose_500 = () => `
    --tw-text-shadow-color: oklch(64.5% 0.246 16.439);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-500) var(--tw-text-shadow-alpha), transparent);
    `;
