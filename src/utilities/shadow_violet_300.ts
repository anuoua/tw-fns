/**
 * --tw-shadow-color: oklch(81.1% 0.111 293.571);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-300) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_300 = () => `
    --tw-shadow-color: oklch(81.1% 0.111 293.571);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-300) var(--tw-shadow-alpha), transparent);
    `;
