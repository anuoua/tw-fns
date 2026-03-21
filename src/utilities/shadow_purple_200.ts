/**
 * --tw-shadow-color: oklch(90.2% 0.063 306.703);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-purple-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_purple_200 = () => `
    --tw-shadow-color: oklch(90.2% 0.063 306.703);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-purple-200) var(--tw-shadow-alpha), transparent);
    `;
