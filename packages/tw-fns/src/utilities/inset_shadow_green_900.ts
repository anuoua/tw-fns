/**
 * --tw-inset-shadow-color: oklch(39.3% 0.095 152.535);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-green-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_green_900 = () => `
    --tw-inset-shadow-color: oklch(39.3% 0.095 152.535);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-green-900) var(--tw-inset-shadow-alpha), transparent);
    `;
