/**
 * --tw-inset-shadow-color: oklch(50.8% 0.118 165.612);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-700) var(--tw-inset-shadow-alpha), transparent);
 */
export const inset_shadow_emerald_700 = () => `
    --tw-inset-shadow-color: oklch(50.8% 0.118 165.612);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-inset-shadow-color: color-mix(in oklab, var(--color-emerald-700) var(--tw-inset-shadow-alpha), transparent);
    `;
