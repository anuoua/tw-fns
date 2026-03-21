/**
 * --tw-shadow-color: oklch(58.5% 0.233 277.117);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-indigo-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_indigo_500 = () => `
    --tw-shadow-color: oklch(58.5% 0.233 277.117);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-indigo-500) var(--tw-shadow-alpha), transparent);
    `;
