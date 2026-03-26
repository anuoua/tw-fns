/**
 * --tw-text-shadow-color: oklch(88.5% 0.062 18.334);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-red-200) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_red_200 = () => `
    --tw-text-shadow-color: oklch(88.5% 0.062 18.334);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-red-200) var(--tw-text-shadow-alpha), transparent);
    `;
