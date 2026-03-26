/**
 * --tw-shadow-color: oklch(55.3% 0.195 38.402);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-orange-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_orange_700 = () => `
    --tw-shadow-color: oklch(55.3% 0.195 38.402);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-orange-700) var(--tw-shadow-alpha), transparent);
    `;
