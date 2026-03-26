/**
 * --tw-text-shadow-color: oklch(52.7% 0.154 150.069);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-green-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_green_700 = () => `
    --tw-text-shadow-color: oklch(52.7% 0.154 150.069);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-green-700) var(--tw-text-shadow-alpha), transparent);
    `;
