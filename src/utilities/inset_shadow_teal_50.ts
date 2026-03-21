/**
 * --tw-inset-shadow-color: oklch(98.4% 0.014 180.72);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_teal_50 = () => `
    --tw-inset-shadow-color: oklch(98.4% 0.014 180.72);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-50) var(--tw-inset-shadow-alpha), transparent);
    `;
