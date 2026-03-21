/**
 * --tw-inset-shadow-color: oklch(52.7% 0.154 150.069);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-green-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_green_700 = () => `
    --tw-inset-shadow-color: oklch(52.7% 0.154 150.069);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-green-700) var(--tw-inset-shadow-alpha), transparent);
    `;
