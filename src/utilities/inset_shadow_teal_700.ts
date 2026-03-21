/**
 * --tw-inset-shadow-color: oklch(51.1% 0.096 186.391);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_teal_700 = () => `
    --tw-inset-shadow-color: oklch(51.1% 0.096 186.391);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-teal-700) var(--tw-inset-shadow-alpha), transparent);
    `;
