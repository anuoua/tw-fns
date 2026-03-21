/**
 * --tw-shadow-color: oklch(96.9% 0.016 293.756);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_50 = () => `
    --tw-shadow-color: oklch(96.9% 0.016 293.756);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-50) var(--tw-shadow-alpha), transparent);
    `;
