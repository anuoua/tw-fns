/**
 * --tw-inset-shadow-color: oklch(40.8% 0.123 38.172);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_orange_900 = () => `
    --tw-inset-shadow-color: oklch(40.8% 0.123 38.172);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-900) var(--tw-inset-shadow-alpha), transparent);
    `;
