/**
 * --tw-inset-shadow-color: oklch(95.4% 0.038 75.164);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_orange_100 = () => `
    --tw-inset-shadow-color: oklch(95.4% 0.038 75.164);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-100) var(--tw-inset-shadow-alpha), transparent);
    `;
