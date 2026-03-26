/**
 * --tw-inset-shadow-color: oklch(81% 0.117 11.638);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-rose-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_rose_300 = () => `
    --tw-inset-shadow-color: oklch(81% 0.117 11.638);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-rose-300) var(--tw-inset-shadow-alpha), transparent);
    `;
