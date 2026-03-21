/**
 * --tw-shadow-color: oklch(27.1% 0.105 12.094);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-rose-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_950 = () => `
    --tw-shadow-color: oklch(27.1% 0.105 12.094);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-rose-950) var(--tw-shadow-alpha), transparent);
    `;
