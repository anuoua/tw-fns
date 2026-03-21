/**
 * --tw-inset-shadow-color: oklch(69.6% 0.17 162.48);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-500) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_emerald_500 = () => `
    --tw-inset-shadow-color: oklch(69.6% 0.17 162.48);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-500) var(--tw-inset-shadow-alpha), transparent);
    `;
