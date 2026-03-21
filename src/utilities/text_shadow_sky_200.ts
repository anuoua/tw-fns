/**
 * --tw-text-shadow-color: oklch(90.1% 0.058 230.902);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_sky_200 = () => `
    --tw-text-shadow-color: oklch(90.1% 0.058 230.902);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-200) var(--tw-text-shadow-alpha), transparent);
    `;
