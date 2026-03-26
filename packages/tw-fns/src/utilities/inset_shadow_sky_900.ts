/**
 * --tw-inset-shadow-color: oklch(39.1% 0.09 240.876);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_sky_900 = () => `
    --tw-inset-shadow-color: oklch(39.1% 0.09 240.876);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-900) var(--tw-inset-shadow-alpha), transparent);
    `;
