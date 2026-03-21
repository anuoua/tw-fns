/**
 * --tw-shadow-color: oklch(90.1% 0.058 230.902);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-sky-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_sky_200 = () => `
    --tw-shadow-color: oklch(90.1% 0.058 230.902);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-sky-200) var(--tw-shadow-alpha), transparent);
    `;
