/**
 * --tw-shadow-color: oklch(58.8% 0.158 241.966);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-sky-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_sky_600 = () => `
    --tw-shadow-color: oklch(58.8% 0.158 241.966);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-sky-600) var(--tw-shadow-alpha), transparent);
    `;
