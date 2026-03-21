/**
 * --tw-inset-shadow-color: oklch(88.2% 0.059 254.128);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-blue-200) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_blue_200 = () => `
    --tw-inset-shadow-color: oklch(88.2% 0.059 254.128);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-blue-200) var(--tw-inset-shadow-alpha), transparent);
    `;
