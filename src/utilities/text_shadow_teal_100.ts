/**
 * --tw-text-shadow-color: oklch(95.3% 0.051 180.801);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_teal_100 = () => `
    --tw-text-shadow-color: oklch(95.3% 0.051 180.801);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-100) var(--tw-text-shadow-alpha), transparent);
    `;
