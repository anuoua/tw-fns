/**
 * --tw-inset-shadow-color: oklch(64.8% 0.2 131.684);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_lime_600 = () => `
    --tw-inset-shadow-color: oklch(64.8% 0.2 131.684);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-lime-600) var(--tw-inset-shadow-alpha), transparent);
    `;
