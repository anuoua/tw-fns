/**
 * --tw-text-shadow-color: oklch(62.3% 0.214 259.815);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_blue_500 = () => `
    --tw-text-shadow-color: oklch(62.3% 0.214 259.815);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-500) var(--tw-text-shadow-alpha), transparent);
    `;
