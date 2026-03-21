/**
 * --tw-text-shadow-color: oklch(48.8% 0.243 264.376);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_blue_700 = () => `
    --tw-text-shadow-color: oklch(48.8% 0.243 264.376);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-700) var(--tw-text-shadow-alpha), transparent);
    `;
