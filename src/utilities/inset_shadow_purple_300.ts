/**
 * --tw-inset-shadow-color: oklch(82.7% 0.119 306.383);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_purple_300 = () => `
    --tw-inset-shadow-color: oklch(82.7% 0.119 306.383);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-purple-300) var(--tw-inset-shadow-alpha), transparent);
    `;
