/**
 * --tw-shadow-color: oklch(57.7% 0.245 27.325);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-red-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_600 = () => `
    --tw-shadow-color: oklch(57.7% 0.245 27.325);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-red-600) var(--tw-shadow-alpha), transparent);
    `;
