/**
 * --tw-inset-shadow-color: oklch(70.4% 0.14 182.503);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-500) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_teal_500 = () => `
    --tw-inset-shadow-color: oklch(70.4% 0.14 182.503);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-500) var(--tw-inset-shadow-alpha), transparent);
    `;
