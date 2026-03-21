/**
 * --tw-inset-shadow-color: oklch(50% 0.134 242.749);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_sky_700 = () => `
    --tw-inset-shadow-color: oklch(50% 0.134 242.749);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-700) var(--tw-inset-shadow-alpha), transparent);
    `;
