/**
 * --tw-shadow-color: oklch(50.8% 0.118 165.612);
 *
 * @supports (color: color-mix(in lab, red, red)) {
 *
 * --tw-shadow-color: color-mix(in oklab, var(--color-emerald-700) var(--tw-shadow-alpha), transparent);
 */
export const shadow_emerald_700 = () => `
    --tw-shadow-color: oklch(50.8% 0.118 165.612);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, var(--color-emerald-700) var(--tw-shadow-alpha), transparent);
    `;
