/**
 * --tw-text-shadow-color: oklch(74.6% 0.16 232.661);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_sky_400 = () => `
    --tw-text-shadow-color: oklch(74.6% 0.16 232.661);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-400) var(--tw-text-shadow-alpha), transparent);
    `;
