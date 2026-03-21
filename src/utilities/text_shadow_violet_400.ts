/**
 * --tw-text-shadow-color: oklch(70.2% 0.183 293.541);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-400) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_violet_400 = () => `
    --tw-text-shadow-color: oklch(70.2% 0.183 293.541);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-violet-400) var(--tw-text-shadow-alpha), transparent);
    `;
