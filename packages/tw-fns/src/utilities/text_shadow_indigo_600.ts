/**
 * --tw-text-shadow-color: oklch(51.1% 0.262 276.966);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-indigo-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_indigo_600 = () => `
    --tw-text-shadow-color: oklch(51.1% 0.262 276.966);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-indigo-600) var(--tw-text-shadow-alpha), transparent);
    `;
