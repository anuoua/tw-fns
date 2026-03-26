/**
 * --tw-inset-shadow-color: oklch(75% 0.183 55.934);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_orange_400 = () => `
    --tw-inset-shadow-color: oklch(75% 0.183 55.934);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-400) var(--tw-inset-shadow-alpha), transparent);
    `;
