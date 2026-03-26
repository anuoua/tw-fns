/**
 * --tw-inset-shadow-color: oklch(58.6% 0.253 17.585);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-rose-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_rose_600 = () => `
    --tw-inset-shadow-color: oklch(58.6% 0.253 17.585);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-rose-600) var(--tw-inset-shadow-alpha), transparent);
    `;
