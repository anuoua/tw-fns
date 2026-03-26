/**
 * --tw-inset-shadow-color: oklch(97.9% 0.021 166.113);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-50) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_emerald_50 = () => `
    --tw-inset-shadow-color: oklch(97.9% 0.021 166.113);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-50) var(--tw-inset-shadow-alpha), transparent);
    `;
