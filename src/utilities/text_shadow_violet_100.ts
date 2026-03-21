/**
 * --tw-text-shadow-color: oklch(94.3% 0.029 294.588);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-100) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_violet_100 = () => `
    --tw-text-shadow-color: oklch(94.3% 0.029 294.588);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-100) var(--tw-text-shadow-alpha), transparent);
    `;
