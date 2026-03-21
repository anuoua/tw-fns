/**
 * --tw-inset-shadow-color: oklch(62.3% 0.214 259.815);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-blue-500) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_blue_500 = () => `
    --tw-inset-shadow-color: oklch(62.3% 0.214 259.815);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-blue-500) var(--tw-inset-shadow-alpha), transparent);
    `;
