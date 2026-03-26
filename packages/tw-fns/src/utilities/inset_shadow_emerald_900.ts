/**
 * --tw-inset-shadow-color: oklch(37.8% 0.077 168.94);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-900) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_emerald_900 = () => `
    --tw-inset-shadow-color: oklch(37.8% 0.077 168.94);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-900) var(--tw-inset-shadow-alpha), transparent);
    `;
