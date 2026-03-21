/**
 * --tw-text-shadow-color: oklch(81% 0.117 11.638);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_rose_300 = () => `
    --tw-text-shadow-color: oklch(81% 0.117 11.638);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-rose-300) var(--tw-text-shadow-alpha), transparent);
    `;
