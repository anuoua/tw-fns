/**
 * --tw-shadow-color: oklch(97.7% 0.014 308.299);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-purple-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_purple_50 = () => `
    --tw-shadow-color: oklch(97.7% 0.014 308.299);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-purple-50) var(--tw-shadow-alpha), transparent);
    `;
