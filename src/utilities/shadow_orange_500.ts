/**
 * --tw-shadow-color: oklch(70.5% 0.213 47.604);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-orange-500) var(--tw-shadow-alpha), transparent);
 */
export const shadow_orange_500 = () => `
    --tw-shadow-color: oklch(70.5% 0.213 47.604);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-orange-500) var(--tw-shadow-alpha), transparent);
    `;
