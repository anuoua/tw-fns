/**
 * --tw-inset-shadow-color: oklch(58.8% 0.158 241.966);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_sky_600 = () => `
    --tw-inset-shadow-color: oklch(58.8% 0.158 241.966);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-600) var(--tw-inset-shadow-alpha), transparent);
    `;
