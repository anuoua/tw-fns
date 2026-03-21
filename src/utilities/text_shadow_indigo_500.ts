/**
 * --tw-text-shadow-color: oklch(58.5% 0.233 277.117);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-indigo-500) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_indigo_500 = () => `
    --tw-text-shadow-color: oklch(58.5% 0.233 277.117);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-indigo-500) var(--tw-text-shadow-alpha), transparent);
    `;
