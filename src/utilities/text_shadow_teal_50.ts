/**
 * --tw-text-shadow-color: oklch(98.4% 0.014 180.72);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_teal_50 = () => `
    --tw-text-shadow-color: oklch(98.4% 0.014 180.72);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-50) var(--tw-text-shadow-alpha), transparent);
    `;
