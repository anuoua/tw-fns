/**
 * --tw-inset-shadow-color: oklch(70.2% 0.183 293.541);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-400) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_violet_400 = () => `
    --tw-inset-shadow-color: oklch(70.2% 0.183 293.541);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-violet-400) var(--tw-inset-shadow-alpha), transparent);
    `;
