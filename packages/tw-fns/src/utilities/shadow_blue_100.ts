/**
 * --tw-shadow-color: oklch(93.2% 0.032 255.585);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-blue-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_blue_100 = () => `
    --tw-shadow-color: oklch(93.2% 0.032 255.585);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-blue-100) var(--tw-shadow-alpha), transparent);
    `;
