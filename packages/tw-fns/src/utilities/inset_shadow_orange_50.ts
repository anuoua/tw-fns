/**
 * --tw-inset-shadow-color: oklch(98% 0.016 73.684);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_orange_50 = () => `
    --tw-inset-shadow-color: oklch(98% 0.016 73.684);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-50) var(--tw-inset-shadow-alpha), transparent);
    `;
