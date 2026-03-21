/**
 * --tw-shadow-color: oklch(96.2% 0.059 95.617);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-amber-100) var(--tw-shadow-alpha), transparent);
 */
export const shadow_amber_100 = () => `
    --tw-shadow-color: oklch(96.2% 0.059 95.617);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-amber-100) var(--tw-shadow-alpha), transparent);
    `;
