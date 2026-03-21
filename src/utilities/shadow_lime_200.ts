/**
 * --tw-shadow-color: oklch(93.8% 0.127 124.321);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-lime-200) var(--tw-shadow-alpha), transparent);
 */
export const shadow_lime_200 = () => `
    --tw-shadow-color: oklch(93.8% 0.127 124.321);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-lime-200) var(--tw-shadow-alpha), transparent);
    `;
