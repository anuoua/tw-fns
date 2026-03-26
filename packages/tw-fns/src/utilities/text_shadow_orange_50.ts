/**
 * --tw-text-shadow-color: oklch(98% 0.016 73.684);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_orange_50 = () => `
    --tw-text-shadow-color: oklch(98% 0.016 73.684);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-50) var(--tw-text-shadow-alpha), transparent);
    `;
