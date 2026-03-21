/**
 * --tw-inset-shadow-color: oklch(51.1% 0.262 276.966);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_indigo_600 = () => `
    --tw-inset-shadow-color: oklch(51.1% 0.262 276.966);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-600) var(--tw-inset-shadow-alpha), transparent);
    `;
