/**
 * --tw-text-shadow-color: oklch(49.6% 0.265 301.924);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-purple-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_purple_700 = () => `
    --tw-text-shadow-color: oklch(49.6% 0.265 301.924);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-purple-700) var(--tw-text-shadow-alpha), transparent);
    `;
