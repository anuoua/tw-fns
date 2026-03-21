/**
 * --tw-shadow-color: oklch(68.1% 0.162 75.834);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-yellow-600) var(--tw-shadow-alpha), transparent);
 */
export const shadow_yellow_600 = () => `
    --tw-shadow-color: oklch(68.1% 0.162 75.834);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-yellow-600) var(--tw-shadow-alpha), transparent);
    `;
