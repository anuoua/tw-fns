/**
 * --tw-shadow-color: oklch(94.3% 0.029 294.588);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_100 = () => `
    --tw-shadow-color: oklch(94.3% 0.029 294.588);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-100) var(--tw-shadow-alpha), transparent);
    `;
