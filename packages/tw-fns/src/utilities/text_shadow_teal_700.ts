/**
 * --tw-text-shadow-color: oklch(51.1% 0.096 186.391);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_teal_700 = () => `
    --tw-text-shadow-color: oklch(51.1% 0.096 186.391);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-700) var(--tw-text-shadow-alpha), transparent);
    `;
