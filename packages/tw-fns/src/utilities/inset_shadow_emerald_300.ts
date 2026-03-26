/**
 * --tw-inset-shadow-color: oklch(84.5% 0.143 164.978);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-300) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_emerald_300 = () => `
    --tw-inset-shadow-color: oklch(84.5% 0.143 164.978);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-300) var(--tw-inset-shadow-alpha), transparent);
    `;
