/**
 * --tw-shadow-color: oklch(45.7% 0.24 277.023);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-indigo-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_indigo_700 = () => `
    --tw-shadow-color: oklch(45.7% 0.24 277.023);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-indigo-700) var(--tw-shadow-alpha), transparent);
    `;
