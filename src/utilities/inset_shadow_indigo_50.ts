/**
 * --tw-inset-shadow-color: oklch(96.2% 0.018 272.314);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_indigo_50 = () => `
    --tw-inset-shadow-color: oklch(96.2% 0.018 272.314);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-50) var(--tw-inset-shadow-alpha), transparent);
    `;
