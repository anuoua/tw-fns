/**
 * --tw-shadow-color: oklch(62.7% 0.265 303.9);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-purple-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_purple_500 = () => `
    --tw-shadow-color: oklch(62.7% 0.265 303.9);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-purple-500) var(--tw-shadow-alpha), transparent);
    `;
