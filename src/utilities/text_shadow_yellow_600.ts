/**
 * --tw-text-shadow-color: oklch(68.1% 0.162 75.834);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-text-shadow-color: color-mix(in oklab, var(--color-yellow-600) var(--tw-text-shadow-alpha), transparent);
 */
export const text_shadow_yellow_600 = () => `
    --tw-text-shadow-color: oklch(68.1% 0.162 75.834);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-text-shadow-color: color-mix(in oklab, var(--color-yellow-600) var(--tw-text-shadow-alpha), transparent);
    `;
