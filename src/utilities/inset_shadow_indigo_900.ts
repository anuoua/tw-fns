/**
 * --tw-inset-shadow-color: oklch(35.9% 0.144 278.697);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_indigo_900 = () => `
    --tw-inset-shadow-color: oklch(35.9% 0.144 278.697);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-900) var(--tw-inset-shadow-alpha), transparent);
    `;
