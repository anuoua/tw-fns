/**
 * --tw-shadow-color: oklch(74.6% 0.16 232.661);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-sky-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_sky_400 = () => `
    --tw-shadow-color: oklch(74.6% 0.16 232.661);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-sky-400) var(--tw-shadow-alpha), transparent);
    `;
