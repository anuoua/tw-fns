/**
 * --tw-shadow-color: oklch(93.6% 0.032 17.717);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-red-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_100 = () => `
    --tw-shadow-color: oklch(93.6% 0.032 17.717);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-red-100) var(--tw-shadow-alpha), transparent);
    `;
