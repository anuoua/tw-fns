/**
 * --tw-inset-shadow-color: oklch(55.3% 0.195 38.402);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_orange_700 = () => `
    --tw-inset-shadow-color: oklch(55.3% 0.195 38.402);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-700) var(--tw-inset-shadow-alpha), transparent);
    `;
