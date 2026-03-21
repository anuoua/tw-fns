/**
 * --tw-shadow-color: oklch(81% 0.117 11.638);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-rose-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_rose_300 = () => `
    --tw-shadow-color: oklch(81% 0.117 11.638);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-rose-300) var(--tw-shadow-alpha), transparent);
    `;
