/**
 * --tw-inset-shadow-color: oklch(42.1% 0.095 57.708);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_yellow_900 = () => `
    --tw-inset-shadow-color: oklch(42.1% 0.095 57.708);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-900) var(--tw-inset-shadow-alpha), transparent);
    `;
