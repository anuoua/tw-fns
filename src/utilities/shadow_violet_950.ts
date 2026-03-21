/**
 * --tw-shadow-color: oklch(28.3% 0.141 291.089);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-950) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_950 = () => `
    --tw-shadow-color: oklch(28.3% 0.141 291.089);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-950) var(--tw-shadow-alpha), transparent);
    `;
