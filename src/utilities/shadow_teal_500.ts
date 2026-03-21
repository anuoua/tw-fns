/**
 * --tw-shadow-color: oklch(70.4% 0.14 182.503);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-teal-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_teal_500 = () => `
    --tw-shadow-color: oklch(70.4% 0.14 182.503);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-teal-500) var(--tw-shadow-alpha), transparent);
    `;
