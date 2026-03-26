/**
 * --tw-shadow-color: oklch(49.1% 0.27 292.581);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-violet-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_violet_700 = () => `
    --tw-shadow-color: oklch(49.1% 0.27 292.581);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-violet-700) var(--tw-shadow-alpha), transparent);
    `;
