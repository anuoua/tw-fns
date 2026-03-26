/**
 * --tw-text-shadow-color: oklch(96.9% 0.016 293.756);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-50) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_violet_50 = () => `
    --tw-text-shadow-color: oklch(96.9% 0.016 293.756);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-50) var(--tw-text-shadow-alpha), transparent);
    `;
