/**
 * --tw-shadow-color: oklch(95.1% 0.026 236.824);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-sky-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_sky_100 = () => `
    --tw-shadow-color: oklch(95.1% 0.026 236.824);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-sky-100) var(--tw-shadow-alpha), transparent);
    `;
