/**
 * --tw-inset-shadow-color: oklch(90.1% 0.076 70.697);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-200) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_orange_200 = () => `
    --tw-inset-shadow-color: oklch(90.1% 0.076 70.697);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-orange-200) var(--tw-inset-shadow-alpha), transparent);
    `;
