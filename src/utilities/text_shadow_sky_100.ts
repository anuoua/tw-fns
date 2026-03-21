/**
 * --tw-text-shadow-color: oklch(95.1% 0.026 236.824);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_sky_100 = () => `
    --tw-text-shadow-color: oklch(95.1% 0.026 236.824);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-100) var(--tw-text-shadow-alpha), transparent);
    `;
