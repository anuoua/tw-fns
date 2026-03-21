/**
 * --tw-text-shadow-color: oklch(55.3% 0.195 38.402);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_orange_700 = () => `
    --tw-text-shadow-color: oklch(55.3% 0.195 38.402);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-700) var(--tw-text-shadow-alpha), transparent);
    `;
