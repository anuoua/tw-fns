/**
 * --tw-inset-shadow-color: oklch(54.1% 0.281 293.009);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-600) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_violet_600 = () => `
    --tw-inset-shadow-color: oklch(54.1% 0.281 293.009);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-600) var(--tw-inset-shadow-alpha), transparent);
    `;
