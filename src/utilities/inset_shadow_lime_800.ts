/**
 * --tw-inset-shadow-color: oklch(45.3% 0.124 130.933);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-800) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_lime_800 = () => `
    --tw-inset-shadow-color: oklch(45.3% 0.124 130.933);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-800) var(--tw-inset-shadow-alpha), transparent);
    `;
