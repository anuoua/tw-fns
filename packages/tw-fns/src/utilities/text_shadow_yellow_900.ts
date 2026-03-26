/**
 * --tw-text-shadow-color: oklch(42.1% 0.095 57.708);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-yellow-900) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_yellow_900 = () => `
    --tw-text-shadow-color: oklch(42.1% 0.095 57.708);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-yellow-900) var(--tw-text-shadow-alpha), transparent);
    `;
