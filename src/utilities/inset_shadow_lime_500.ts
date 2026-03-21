/**
 * --tw-inset-shadow-color: oklch(76.8% 0.233 130.85);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-500) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_lime_500 = () => `
    --tw-inset-shadow-color: oklch(76.8% 0.233 130.85);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-500) var(--tw-inset-shadow-alpha), transparent);
    `;
