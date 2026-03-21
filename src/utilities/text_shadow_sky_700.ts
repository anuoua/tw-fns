/**
 * --tw-text-shadow-color: oklch(50% 0.134 242.749);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_sky_700 = () => `
    --tw-text-shadow-color: oklch(50% 0.134 242.749);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-700) var(--tw-text-shadow-alpha), transparent);
    `;
