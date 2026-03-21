/**
 * --tw-shadow-color: oklch(96.2% 0.018 272.314);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-indigo-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_indigo_50 = () => `
    --tw-shadow-color: oklch(96.2% 0.018 272.314);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-indigo-50) var(--tw-shadow-alpha), transparent);
    `;
