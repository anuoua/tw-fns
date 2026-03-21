/**
 * --tw-inset-shadow-color: oklch(90.2% 0.063 306.703);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-200) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_purple_200 = () => `
    --tw-inset-shadow-color: oklch(90.2% 0.063 306.703);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-200) var(--tw-inset-shadow-alpha), transparent);
    `;
