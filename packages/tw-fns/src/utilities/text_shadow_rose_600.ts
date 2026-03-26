/**
 * --tw-text-shadow-color: oklch(58.6% 0.253 17.585);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_rose_600 = () => `
    --tw-text-shadow-color: oklch(58.6% 0.253 17.585);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-600) var(--tw-text-shadow-alpha), transparent);
    `;
