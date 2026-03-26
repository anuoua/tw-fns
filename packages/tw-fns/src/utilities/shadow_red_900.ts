/**
 * --tw-shadow-color: oklch(39.6% 0.141 25.723);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-red-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_red_900 = () => `
    --tw-shadow-color: oklch(39.6% 0.141 25.723);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-red-900) var(--tw-shadow-alpha), transparent);
    `;
