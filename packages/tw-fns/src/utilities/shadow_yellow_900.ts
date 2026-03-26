/**
 * --tw-shadow-color: oklch(42.1% 0.095 57.708);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-yellow-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_yellow_900 = () => `
    --tw-shadow-color: oklch(42.1% 0.095 57.708);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-yellow-900) var(--tw-shadow-alpha), transparent);
    `;
