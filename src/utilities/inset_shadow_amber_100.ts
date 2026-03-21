/**
 * --tw-inset-shadow-color: oklch(96.2% 0.059 95.617);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-amber-100) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_amber_100 = () => `
    --tw-inset-shadow-color: oklch(96.2% 0.059 95.617);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-amber-100) var(--tw-inset-shadow-alpha), transparent);
    `;
