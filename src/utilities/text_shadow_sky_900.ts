/**
 * --tw-text-shadow-color: oklch(39.1% 0.09 240.876);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_sky_900 = () => `
    --tw-text-shadow-color: oklch(39.1% 0.09 240.876);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-900) var(--tw-text-shadow-alpha), transparent);
    `;
