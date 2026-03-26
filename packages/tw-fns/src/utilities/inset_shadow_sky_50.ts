/**
 * --tw-inset-shadow-color: oklch(97.7% 0.013 236.62);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_sky_50 = () => `
    --tw-inset-shadow-color: oklch(97.7% 0.013 236.62);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-50) var(--tw-inset-shadow-alpha), transparent);
    `;
