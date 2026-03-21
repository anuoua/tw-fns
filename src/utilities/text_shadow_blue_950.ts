/**
 * --tw-text-shadow-color: oklch(28.2% 0.091 267.935);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-950) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_blue_950 = () => `
    --tw-text-shadow-color: oklch(28.2% 0.091 267.935);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-blue-950) var(--tw-text-shadow-alpha), transparent);
    `;
