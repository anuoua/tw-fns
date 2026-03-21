/**
 * --tw-shadow-color: oklch(95.3% 0.051 180.801);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-teal-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_teal_100 = () => `
    --tw-shadow-color: oklch(95.3% 0.051 180.801);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-teal-100) var(--tw-shadow-alpha), transparent);
    `;
