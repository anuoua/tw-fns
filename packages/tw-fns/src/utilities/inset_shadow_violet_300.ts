/**
 * --tw-inset-shadow-color: oklch(81.1% 0.111 293.571);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_violet_300 = () => `
    --tw-inset-shadow-color: oklch(81.1% 0.111 293.571);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-300) var(--tw-inset-shadow-alpha), transparent);
    `;
