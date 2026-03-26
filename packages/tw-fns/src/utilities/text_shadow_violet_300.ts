/**
 * --tw-text-shadow-color: oklch(81.1% 0.111 293.571);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-300) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_violet_300 = () => `
    --tw-text-shadow-color: oklch(81.1% 0.111 293.571);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-300) var(--tw-text-shadow-alpha), transparent);
    `;
