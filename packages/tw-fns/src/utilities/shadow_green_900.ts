/**
 * --tw-shadow-color: oklch(39.3% 0.095 152.535);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-green-900) var(--tw-shadow-alpha), transparent);
 */
export const shadow_green_900 = () => `
    --tw-shadow-color: oklch(39.3% 0.095 152.535);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-green-900) var(--tw-shadow-alpha), transparent);
    `;
