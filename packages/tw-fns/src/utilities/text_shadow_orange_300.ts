/**
 * --tw-text-shadow-color: oklch(83.7% 0.128 66.29);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_orange_300 = () => `
    --tw-text-shadow-color: oklch(83.7% 0.128 66.29);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-orange-300) var(--tw-text-shadow-alpha), transparent);
    `;
