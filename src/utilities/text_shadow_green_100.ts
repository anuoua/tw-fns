/**
 * --tw-text-shadow-color: oklch(96.2% 0.044 156.743);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-green-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_green_100 = () => `
    --tw-text-shadow-color: oklch(96.2% 0.044 156.743);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-green-100) var(--tw-text-shadow-alpha), transparent);
    `;
