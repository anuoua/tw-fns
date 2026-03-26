/**
 * --tw-inset-shadow-color: oklch(25.7% 0.09 281.288);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-950) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_indigo_950 = () => `
    --tw-inset-shadow-color: oklch(25.7% 0.09 281.288);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-950) var(--tw-inset-shadow-alpha), transparent);
    `;
