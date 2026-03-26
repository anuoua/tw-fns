/**
 * --tw-shadow-color: oklch(41% 0.159 10.272);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-rose-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_900 = () => `
    --tw-shadow-color: oklch(41% 0.159 10.272);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-rose-900) var(--tw-shadow-alpha), transparent);
    `;
