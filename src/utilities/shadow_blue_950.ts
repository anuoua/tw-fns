/**
 * --tw-shadow-color: oklch(28.2% 0.091 267.935);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-blue-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_blue_950 = () => `
    --tw-shadow-color: oklch(28.2% 0.091 267.935);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-blue-950) var(--tw-shadow-alpha), transparent);
    `;
