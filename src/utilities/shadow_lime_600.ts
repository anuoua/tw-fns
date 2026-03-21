/**
 * --tw-shadow-color: oklch(64.8% 0.2 131.684);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-lime-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_lime_600 = () => `
    --tw-shadow-color: oklch(64.8% 0.2 131.684);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-lime-600) var(--tw-shadow-alpha), transparent);
    `;
