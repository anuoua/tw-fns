/**
 * --tw-shadow-color: oklch(71.2% 0.194 13.428);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-rose-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_400 = () => `
    --tw-shadow-color: oklch(71.2% 0.194 13.428);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-rose-400) var(--tw-shadow-alpha), transparent);
    `;
