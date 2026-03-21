/**
 * --tw-text-shadow-color: oklch(82.8% 0.111 230.318);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_sky_300 = () => `
    --tw-text-shadow-color: oklch(82.8% 0.111 230.318);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-sky-300) var(--tw-text-shadow-alpha), transparent);
    `;
