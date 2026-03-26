/**
 * --tw-shadow-color: oklch(82.7% 0.119 306.383);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-purple-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_purple_300 = () => `
    --tw-shadow-color: oklch(82.7% 0.119 306.383);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-purple-300) var(--tw-shadow-alpha), transparent);
    `;
