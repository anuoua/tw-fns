/**
 * --tw-inset-shadow-color: oklch(55.4% 0.135 66.442);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_yellow_700 = () => `
    --tw-inset-shadow-color: oklch(55.4% 0.135 66.442);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-yellow-700) var(--tw-inset-shadow-alpha), transparent);
    `;
