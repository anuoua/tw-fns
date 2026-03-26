/**
 * --tw-text-shadow-color: oklch(52.5% 0.223 3.958);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-700) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_pink_700 = () => `
    --tw-text-shadow-color: oklch(52.5% 0.223 3.958);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-pink-700) var(--tw-text-shadow-alpha), transparent);
    `;
