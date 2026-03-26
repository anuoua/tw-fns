/**
 * --tw-shadow-color: oklch(98.2% 0.018 155.826);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-green-50) var(--tw-shadow-alpha), transparent);
 */
export const shadow_green_50 = () => `
    --tw-shadow-color: oklch(98.2% 0.018 155.826);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-green-50) var(--tw-shadow-alpha), transparent);
    `;
