/**
 * --tw-shadow-color: oklch(98% 0.016 73.684);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-orange-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_orange_50 = () => `
    --tw-shadow-color: oklch(98% 0.016 73.684);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-orange-50) var(--tw-shadow-alpha), transparent);
    `;
