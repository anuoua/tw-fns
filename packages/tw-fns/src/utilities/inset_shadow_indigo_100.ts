/**
 * --tw-inset-shadow-color: oklch(93% 0.034 272.788);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_indigo_100 = () => `
    --tw-inset-shadow-color: oklch(93% 0.034 272.788);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-indigo-100) var(--tw-inset-shadow-alpha), transparent);
    `;
