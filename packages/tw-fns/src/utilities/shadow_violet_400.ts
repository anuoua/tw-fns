/**
 * --tw-shadow-color: oklch(70.2% 0.183 293.541);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-400) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_400 = () => `
    --tw-shadow-color: oklch(70.2% 0.183 293.541);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-400) var(--tw-shadow-alpha), transparent);
    `;
