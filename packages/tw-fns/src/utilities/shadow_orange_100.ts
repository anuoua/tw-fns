/**
 * --tw-shadow-color: oklch(95.4% 0.038 75.164);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-orange-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_orange_100 = () => `
    --tw-shadow-color: oklch(95.4% 0.038 75.164);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-orange-100) var(--tw-shadow-alpha), transparent);
    `;
