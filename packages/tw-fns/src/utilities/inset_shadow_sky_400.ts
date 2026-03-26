/**
 * --tw-inset-shadow-color: oklch(74.6% 0.16 232.661);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_sky_400 = () => `
    --tw-inset-shadow-color: oklch(74.6% 0.16 232.661);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-sky-400) var(--tw-inset-shadow-alpha), transparent);
    `;
