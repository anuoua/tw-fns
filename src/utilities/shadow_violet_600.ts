/**
 * --tw-shadow-color: oklch(54.1% 0.281 293.009);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_600 = () => `
    --tw-shadow-color: oklch(54.1% 0.281 293.009);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-600) var(--tw-shadow-alpha), transparent);
    `;
