/**
 * --tw-shadow-color: oklch(39.1% 0.09 240.876);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-sky-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_sky_900 = () => `
    --tw-shadow-color: oklch(39.1% 0.09 240.876);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-sky-900) var(--tw-shadow-alpha), transparent);
    `;
