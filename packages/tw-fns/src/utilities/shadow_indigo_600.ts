/**
 * --tw-shadow-color: oklch(51.1% 0.262 276.966);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-indigo-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_indigo_600 = () => `
    --tw-shadow-color: oklch(51.1% 0.262 276.966);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-indigo-600) var(--tw-shadow-alpha), transparent);
    `;
