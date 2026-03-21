/**
 * --tw-shadow-color: oklch(76.8% 0.233 130.85);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-lime-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_lime_500 = () => `
    --tw-shadow-color: oklch(76.8% 0.233 130.85);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-lime-500) var(--tw-shadow-alpha), transparent);
    `;
