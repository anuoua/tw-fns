/**
 * --tw-inset-shadow-color: oklch(50.5% 0.213 27.518);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-red-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_red_700 = () => `
    --tw-inset-shadow-color: oklch(50.5% 0.213 27.518);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-red-700) var(--tw-inset-shadow-alpha), transparent);
    `;
