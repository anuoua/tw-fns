/**
 * --tw-text-shadow-color: oklch(91% 0.096 180.426);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_teal_200 = () => `
    --tw-text-shadow-color: oklch(91% 0.096 180.426);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-teal-200) var(--tw-text-shadow-alpha), transparent);
    `;
